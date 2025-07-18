import React, {useEffect, useRef, useState} from "react";
import {sendMessageToBot} from "../utils/api-chat.jsx";
import Header from "../components/Header.jsx";

const ChatScreen = () => {

    const [messages, setMessages] = useState([
        { from: "bot", text: "Hi! I can help you find a specialist." },
    ]);
    const [input, setInput] = useState("");

    const senderIdRef = useRef("null");

    useEffect(() => {
        senderIdRef.current = crypto.randomUUID?.() || "sender-" + Math.random().toString(36).substring(2, 10);
        console.log("Generated senderId:", senderIdRef.current);
    }, []);

    const sendMessage = async () => {
        if (!input.trim()) return;

        const newMessages = [...messages, { from: "user", text: input }];
        setMessages(newMessages);
        const userInput = input;
        setInput("");

        const botResponses = await sendMessageToBot(userInput, senderIdRef.current);


        if (Array.isArray(botResponses)) {
            botResponses.forEach((msg) => {
                if (msg.text) {
                    newMessages.push({ from: "bot", text: msg.text });
                }
            });
        } else {
            newMessages.push({ from: "bot", text: "Invalid response format from bot." });
        }


        setMessages([...newMessages]);
    };

    return (
        <div style={styles.container}>
            <Header />
            <div>title text</div>
            <div style={styles.chatBox}>
                {messages.map((m, i) => (
                    <div
                        key={i}
                        style={{
                            ...styles.message,
                            alignSelf: m.from === "user" ? "flex-end" : "flex-start",
                            backgroundColor: m.from === "user" ? "#DCF8C6" : "#EEE",
                        }}
                    >
                        {m.text}
                    </div>
                ))}
            </div>

            <div style={styles.inputRow}>
                <input
                    style={styles.input}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                    placeholder="Type a message..."
                />
                <button style={styles.button} onClick={sendMessage}>
                    Send
                </button>
            </div>
        </div>
    );
};

const styles = {
    container: {
        maxWidth: 500,
        margin: "0 auto",
        padding: 16,
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        boxSizing: "border-box",
    },
    chatBox: {
        flex: 1,
        overflowY: "auto",
        display: "flex",
        flexDirection: "column",
        gap: 8,
        paddingBottom: 8,
    },
    message: {
        padding: "8px 12px",
        borderRadius: 16,
        maxWidth: "80%",
        fontSize: 14,
    },
    inputRow: {
        display: "flex",
        gap: 8,
    },
    input: {
        flex: 1,
        padding: 8,
        borderRadius: 8,
        border: "1px solid #ccc",
    },
    button: {
        padding: "8px 16px",
        borderRadius: 8,
        border: "none",
        backgroundColor: "#007bff",
        color: "#fff",
        cursor: "pointer",
    },
};

export default ChatScreen;
