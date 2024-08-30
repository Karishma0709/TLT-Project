import React, { useState, useEffect, useRef } from "react";

// import { notificationsData } from "../data/notificationsData";
import axios from "axios";

const NotificationBox = () => {
  const marqueeRef = useRef(null);

  const handleMouseOver = () => {
    if (marqueeRef.current) {
      marqueeRef.current.stop();
    }
  };

  const handleMouseOut = () => {
    if (marqueeRef.current) {
      marqueeRef.current.start();
    }
  };

  const [notifay, setNotifay] = useState(null);
  useEffect(() => {
    getPdf();
  }, []);

  const getPdf = async () => {
    const result = await axios.get("http://localhost:5174/api/notifies");
    console.log(result.data.data);
    setNotifay(result.data.data);
  };

  return (
    <div className="h-[400px] text-black p-4 overflow-hidden">
      <h2 className="text-3xl font-bold mb-4 text-center">
        Latest <span className="text-primary">Notifications</span>
      </h2>
      <marquee
        ref={marqueeRef}
        height="100%"
        behavior="scroll"
        direction="up"
        scrollamount="3"
        loop="true"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <ul>
          {notifay == null
            ? ""
            : notifay.map((notification, index) => (
                <li key={index} className="mb-6 text-primary font-bold">
                  <span>
                    {notification.title}
                    <a
                      href={notification.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="latest text-black"> Click Here!</span>
                    </a>
                  </span>
                </li>
              ))}
        </ul>
      </marquee>
    </div>
  );
};

export default NotificationBox;
