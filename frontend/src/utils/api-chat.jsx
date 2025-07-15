import {BOT_API_URL} from "../config";

export const sendMessageToBot = async (message, sender ) => {
    try {

        console.log("Отправка запроса:", { sender, message });

        const response = await fetch(`${BOT_API_URL}/webhooks/rest/webhook`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ sender, message }),
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error("Bot responded with error:", response.status, errorText);
            return [{ text: `Bot error: ${response.status}` }];
        }

        const text = await response.text();
        console.log("Raw response from bot:", text);

        try {
            const json = JSON.parse(text);
            return json;
        } catch (e) {
            console.error("Ошибка парсинга JSON от бота:", e);
            return [{ text: "Invalid response from bot." } ];
        }

    } catch (error) {
        console.error("Failed to send message to bot:", error);
        return [{ text: "An error occurred while connecting to the bot." }];
    }
};

