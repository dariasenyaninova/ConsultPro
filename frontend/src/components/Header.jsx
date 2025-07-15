import { useEffect, useState } from 'react';
import '../styles/header.css';

export default function Header() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const auth = localStorage.getItem('auth');
        setIsAuthenticated(!!auth);
    }, []);

    return (
        <header className="header">
            <div className="header-container">
                <div className="header-left">
                    <a href="/" className="logo">
                        <img
                            src="/content/images/logo.png"
                            alt="ConsultPRO Logo"
                            className="logo-image"
                        />
                        <span className="logo-text">ConsultPRO</span>
                    </a>
                    <nav className="nav">
                        <a href="/">Home</a>
                        <a href="/specialists">Specialists</a>
                        <a href="/about">About us </a>
                        <a href="/contacts">Contacts</a>
                    </nav>
                </div>
                {isAuthenticated ? (
                    <a href="/profile/me" className="profile-icon">
                        <img
                            src="/content/images/profile.png"
                            alt="Profile"
                        />
                    </a>
                ) : (
                    <a href="/auth" className="login-link">LogIn</a>
                )}
            </div>
        </header>
    );
}
