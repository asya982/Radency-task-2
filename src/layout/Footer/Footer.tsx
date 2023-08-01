import React, { FC } from "react";

const Footer: FC = () => {
  return (
    <footer className="p-5 bg-dark text-slate-50 font-mono flex flex-col items-center">
      <p>
        Created for{" "}
        <u>
          <a href="https://www.radency.com/" target="_blank" rel="noreferrer" className="hover:text-secondary">
            Radency
          </a>
        </u>{" "}
        Internship
      </p>
      <p>by Anastasiia Bahinska</p>
    </footer>
  );
};

export default Footer;
