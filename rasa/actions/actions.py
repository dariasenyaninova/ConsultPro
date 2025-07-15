from typing import Any, Text, Dict, List
from rasa_sdk import Action, Tracker
from rasa_sdk.executor import CollectingDispatcher
import requests

class ActionSubmitStaffSearch(Action):
    def name(self) -> Text:
        return "action_submit_staff_search"

    def run(self, dispatcher: CollectingDispatcher,
            tracker: Tracker,
            domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:

        department = tracker.get_slot("department")
        wage = tracker.get_slot("wage")
        experience = tracker.get_slot("experience")

        try:
            response = requests.post(
                "http://backend:8080/specialists/search",
                json={
                    "department": department,
                    "wage": wage,
                    "experience": experience,
                    "testRequest": True
                },
                timeout=5
            )

            if response.ok:
                try:
                    candidates = response.json()  # <- теперь правильно ожидается список
                    if isinstance(candidates, list) and candidates:
                        message = "Here are some candidates:\n"
                        for c in candidates:
                            name = c.get("name", "Unknown")
                            dept = c.get("department", "Unknown")
                            phone = c.get("phone", "N/A")
                            message += f"- {name} ({dept}) — 📞 {phone}\n"
                    else:
                        message = "No candidates found matching your criteria."
                except Exception as parse_error:
                    message = f"Failed to parse response from backend: {parse_error}"
            else:
                message = f"Sorry, there was an error from backend: {response.status_code}"

        except Exception as e:
            message = f"Error connecting to backend: {e}"

        dispatcher.utter_message(text=message)
        return []
