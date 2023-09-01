import React from "react";

export default function Footer() {
  return (
    <footer className="footer w-screen py-24 ">
      <div className="grid lg:grid-flow-col items-center  lg:gap-20 w-screen mt-20 px-4">
        <h1 className="footer-slogan text-8xl font-black">Nicera</h1>
        
        <p className="  text-sm border-l-2 pl-20 font-extralight text-white">
          Audience-Interactive Artistic Performances
        </p>
        <div className="flex items-center space-x-4">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer">
            <img src="/twitter-icon.svg" className="h-6 w-6" alt="Twitter" />
          </a>
          <a
            href="https://discord.com"
            target="_blank"
            rel="noopener noreferrer">
            <img src="/discord-icon.svg" className="h-6 w-6" alt="Discord" />
          </a>
        </div>
      </div>
    </footer>
  );
}
