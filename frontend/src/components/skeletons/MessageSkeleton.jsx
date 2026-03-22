import "./MessageSkeleton.css";

const MessageSkeleton = () => {
  // 6 baar loading dikhane ke liye ek fake array
  const skeletonMessages = Array(6).fill(null);

  return (
    <div className="skeleton-container">
      {skeletonMessages.map((_, idx) => (
        <div 
          key={idx} 
          className={`skeleton-wrapper ${idx % 2 === 0 ? "skeleton-start" : "skeleton-end"}`}
        >
          {/* Avatar ka gola */}
          <div className="skeleton-avatar circle-animate"></div>

          <div className="skeleton-content-wrapper">
            {/* Naam ki jagah choti line */}
            <div className="skeleton-header line-animate"></div>
            {/* Message ki jagah badi line */}
            <div className="skeleton-bubble line-animate"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MessageSkeleton;