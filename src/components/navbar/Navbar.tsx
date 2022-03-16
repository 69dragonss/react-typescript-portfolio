import React from "react";

const Navbar = () => {
  return (
    <nav className="h-24 text-white bg-[#1f203a]">
      <section className="px-10 max-w-6xl flex h-full items-center justify-between mx-auto">
        <div>
          <img src="/logo.png" alt="logo" className="cursor-pointer h-14 w-16" />
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
