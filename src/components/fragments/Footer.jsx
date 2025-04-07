import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="flex items-center text-center justify-center py-5">
      <h1 className="text-gray-500 font-semibold text-sm">
        Copyright© {currentYear}.{" "}
        <Link to="https://github.com/saburlimbur">saburlimbur</Link>
      </h1>
    </footer>
  );
}

export default Footer;
