import { X } from "lucide-react";
import { useAuthStore } from "../store/useAuthStore";
import { useChatStore } from "../store/useChatStore";
import "./ChatContainer.css";

const ChatHeader = () => {
  const { selectedUser, setSelectedUser } = useChatStore();
  const { onlineUsers } = useAuthStore();

  return (
    <div className="chat-header">
      <div className="header-info">
        <div className="header-avatar">
          <img src={selectedUser.profilePic || "/dimg.jpg"} alt={selectedUser.name} />
        </div>
        <div>
          <h3 className="header-name">{selectedUser.name}</h3>
          <p className="header-status">
            {onlineUsers.includes(selectedUser._id) ? "Online" : "Offline"}
          </p>
        </div>
      </div>
      <button onClick={() => setSelectedUser(null)} className="close-btn">
        <X size={20} />
      </button>
    </div>
  );
};

export default ChatHeader;