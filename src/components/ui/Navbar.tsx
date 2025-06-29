import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="py-4 px-4 fixed top-0 left-0 w-full bg-amber-100 z-50">
      <div className="container mx-auto">
        <span className="font-monoton text-xl lg:text-2xl">Anucha</span>
      </div>
    </nav>
  );
};

export default Navbar;
