import { Routes, Route } from "react-router-dom";
import Specialists from "./pages/Specialists";
import SpecialistRequest from "./pages/SpecialistRequest";
import ProfilePage from "./pages/Profile.jsx";
import AuthPage from "./pages/Auth.jsx";
import MainPage from "./pages/MainPage.jsx";
import ProfileSpecialistEditPage from "./pages/ProfileSpecialistEditPage.jsx";
import ProfileCustomerEditPage from "./pages/ProfileCustomerEditPage.jsx";
import SpecialistRequestPage from "./pages/SpecialistRequestPage.jsx";
import SentRequestsPage from "./pages/SentRequestsPage.jsx";
import ClientRequestsPage from "./pages/ClientRequestsPage.jsx";
import ClientRequestViewInfoPage from "./pages/ClientRequestViewInfoPage.jsx";
import AboutUsPage from "./pages/AboutUsPage.jsx";
import ContactsPage from "./pages/ContactsPage.jsx";
import ChatScreen from "./pages/ChatScreen.jsx";


function App() {
    return (
        <Routes>
            <Route path="/specialists" element={<Specialists />} />
            <Route path="/specialist/request/:id" element={<SpecialistRequest />} />
            <Route path="/profile/me" element={<ProfilePage />} />
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/about" element={<AboutUsPage />} />
            <Route path="/contacts" element={<ContactsPage />} />
            <Route path="/" element={<MainPage />} />
            <Route path="/profile/specialist/edit" element={<ProfileSpecialistEditPage />} />
            <Route path="/profile/customer/edit" element={<ProfileCustomerEditPage />} />
            <Route path="/specialist/request" element={<SpecialistRequestPage />} />
            <Route path="/requests/sent" element={<SentRequestsPage />} />
            <Route path="/requests/client" element={<ClientRequestsPage />} />
            <Route path="/requests/client/view" element={<ClientRequestViewInfoPage />} />
            <Route path="/chat-bot" element={<ChatScreen />} />
        </Routes>
    );
}

export default App;