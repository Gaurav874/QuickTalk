import { Users } from "lucide-react";
import "./SidebarSkeleton.css"; // CSS file import

const SidebarSkeleton = () => {
  // 8 loading items banaye hain
  const skeletonContacts = Array(8).fill(null);

  return (
    <aside className="skeleton-sidebar">
      {/* Header Skeleton */}
      <div className="skeleton-header">
        <div className="header-flex">
          <Users size={24} className="skeleton-icon" />
          <span className="skeleton-header-text">Contacts</span>
        </div>
      </div>

      {/* Skeleton Contacts List */}
      <div className="skeleton-list">
        {skeletonContacts.map((_, idx) => (
          <div key={idx} className="skeleton-item">
            
            {/* Avatar Skeleton */}
            <div className="skeleton-avatar-container">
              <div className="skeleton-circle pulse"></div>
            </div>

            {/* User Info Skeleton - Badi screen par dikhega */}
            <div className="skeleton-info">
              <div className="skeleton-line-long pulse"></div>
              <div className="skeleton-line-short pulse"></div>
            </div>

          </div>
        ))}
      </div>
    </aside>
  );
};

export default SidebarSkeleton;