import React from "react";

function SectionTitle({ className = "", children }) {
  return (
    <div
      className={`w-full bg-gray-50 rounded-2xl  border-y border-gray-100 ${className}`}
    >
      <div className="relative overflow-hidden rounded-2xl">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gray-200 opacity-50 rounded-full -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-gray-200 opacity-50 rounded-full -ml-24 -mb-24"></div>

        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fillOpacity='1' fillRule='evenodd'%3E%3Ccircle cx='3' cy='3' r='2'/%3E%3C/g%3E%3C/svg%3E\")",
            backgroundSize: "20px 20px",
          }}
        ></div>

        <div className="container mx-auto px-4 py-0 relative z-10">
          {children}
        </div>
      </div>
    </div>
  );
}

export default SectionTitle;
