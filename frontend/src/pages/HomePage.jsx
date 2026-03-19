import { useChatStore } from "../store/useChatStore";
import Sidebar from "../components/Sidebar"; // Assuming path
import NoChatSelected from "../components/NoChatSelected"; 
import ChatContainer from "../components/ChatContainer";
import "./HomePage.css"; // CSS file import kari hai

const HomePage = () => {
  const { selectedUser } = useChatStore();

  return (
    <div className="home-container">
      <div className="home-wrapper">
        <div className="home-card">
          <div className="home-layout">
            {/* Sidebar hamesha dikhega */}
            <Sidebar />

            {/* Conditional Rendering: User select hai ya nahi */}
            { !selectedUser ? <NoChatSelected /> : <ChatContainer /> }
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;