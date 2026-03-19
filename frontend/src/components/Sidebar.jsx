import { useEffect } from "react";
import { useChatStore } from "../store/useChatStore";
import SidebarSkeleton from "./skeletons/SidebarSkeleton";
import { Users } from "lucide-react";
// import "./Sidebar.css"; 
import "../pages/HomePage.css"
import { useAuthStore } from "../store/useAuthStore";

const Sidebar = () => {
  const { getUsers, users, selectedUser, setSelectedUser, isUsersLoading } = useChatStore();

  const {onlineUsers} = useAuthStore();

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  if (isUsersLoading) return <SidebarSkeleton />;

  return (
    <aside className="sidebar-container">
      {/* Header Section */}
      <div className="sidebar-header">
        <div className="header-content">
          <Users size={24} />
          <span className="header-title">Contacts</span>
        </div>
        {/* TODO: Online filter toggle yahan aayega */}
      </div>

      {/* Users List */}
      <div className="users-list">
        {users.map((user) => (
          <button
            key={user._id}
            onClick={() => setSelectedUser(user)}
            className={`user-item ${selectedUser?._id === user._id ? "active-user" : ""}`}
          >
            {/* Avatar Section */}
            <div className="avatar-wrapper">
              <img
                src={user.profilePic || "/dimg.jpg"}
                // alt={user.name}
                className="user-avatar"
              />
              {onlineUsers.includes(user._id) && (
                <span className="online-indicator"></span>
              )}
            </div>

            {/* User Details - Large screens par dikhega */}
            <div className="user-info">
              <div className="user-name">{user.name}</div>
              <div className="user-status">
                {onlineUsers.includes(user._id) ? "Online" : "Offline"}
              </div>
            </div>
          </button>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;