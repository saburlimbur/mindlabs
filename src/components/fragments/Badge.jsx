import React from "react";

function Badge({ title, className = "", active = false, onClick }) {
  return (
    <>
      <button
        onClick={onClick}
        className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
          active
            ? "bg-gray-800 text-white"
            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
        } ${className}`}
      >
        {title}
      </button>
    </>
  );
}

export default Badge;
