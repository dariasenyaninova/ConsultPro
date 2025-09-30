import React, { useEffect, useRef, useState } from "react";
import { sendMessageToBot } from "../utils/api-chat.jsx";
import {ButtonSubmit} from "../elements/Button.jsx";

const ChatScreen = () => {
    const [messages, setMessages] = useState([
        { from: "bot", text: "Hi! I can help you find a specialist." },
    ]);
    const [input, setInput] = useState("");
    const senderIdRef = useRef("null");

    useEffect(() => {
        senderIdRef.current =
            crypto.randomUUID?.() || "sender-" + Math.random().toString(36).slice(2, 10);
    }, []);

    const sendMessage = async (e) => {
        e?.preventDefault();
        if (!input.trim()) return;

        const newMessages = [...messages, { from: "user", text: input }];
        setMessages(newMessages);

        const userInput = input;
        setInput("");

        const botResponses = await sendMessageToBot(userInput, senderIdRef.current);

        if (Array.isArray(botResponses)) {
            botResponses.forEach((msg) => {
                if (msg.text) newMessages.push({ from: "bot", text: msg.text });
            });
        } else {
            newMessages.push({ from: "bot", text: "Invalid response format from bot." });
        }
        setMessages([...newMessages]);
    };

    return (
        <div className="chat-page">
            <div className="chat-panel">
                <div className="chat-titlebar">
                    <h2>Chat</h2>
                </div>

                <div className="chat-messages" role="log" aria-live="polite">
                    {messages.map((m, i) => (
                        <div
                            key={i}
                            className={`message ${m.from === "user" ? "message--user" : "message--bot"}`}
                        >
                            {m.text}
                        </div>
                    ))}
                </div>

                <form className="chat-inputbar" onSubmit={sendMessage}>
                    <input
                        className="form-input chat-input"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Type a message…"
                        aria-label="Type a message"
                    />
                    <ButtonSubmit className="chat-send" text="Send" type="submit" />
                </form>
            </div>
        </div>
    );


};

export default ChatScreen;
