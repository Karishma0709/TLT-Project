import React from "react";
import "./Telegram.css";
import telegram from "../../assets/telegram.png";

function Telegram() {
  return (
    <div className="">
      {" "}
      <a target="_blank" href="https://wa.me/+919238176156">
        <img src={telegram} className="telegram-img" alt="" />{" "}
      </a>
    </div>
  );
}

export default Telegram;
