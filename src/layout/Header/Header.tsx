import React, { FC } from "react";
import logo from "../../assets/img/icon.png";

const Header: FC = () => {
  return (
    <header className="min-h-[10vh] px-10 font-cursive flex justify-between items-center text-slate-50 bg-primary">
      <div className="flex gap-5 items-center">
        <img src={logo} alt="logo" className="max-w-[40px] object-contain" />
        <h3 className="text-xl">Your little notes</h3>
      </div>
      <p>"Goal setting is the secret to a compelling future"</p>
    </header>
  );
};

export default Header;
