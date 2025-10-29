import React from "react";

const Footer = () => {
  return (
    <footer className="shrink-0 p-2 hidden md:flex items-center justify-center h-8">
      <p className="text-xs text-neutral-500">
        © {new Date().getFullYear()} Twin Lists — Crafted with ❤️ by{" "}
        <strong className="text-neutral-100">Mehdi Jeyrani</strong>
      </p>
    </footer>
  );
};

export default Footer;
