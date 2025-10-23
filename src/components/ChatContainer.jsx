import React, { useEffect } from "react";
import assets, { messagesDummyData } from "../assets/assets";
import { useRef } from "react";
import { formatMessageTime } from "../lib/utils";
const ChatContainer = ({ selectedUser, setSelectedUser }) => {
  const scrollEnd = useRef(null);

  useEffect(() => {
    if (scrollEnd.current) {
      scrollEnd.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return selectedUser ? (
    <div className="h-full overflow-scroll relative backdrop-blur-xl border-b border-stone-600">
      {/* header... */}
      <div className="flex items-center gap-3 py-4 mx-4 border-b border-stone-500">
        <img src={assets.profile_martin} alt="" className="w-8 rounded-full" />
        <p className="flex-1 text-lg text-white flex items-center gap-2">
          Martin Smith
          {/* --------online------- dot */}
          <span className="rounded-full w-2 h-2 bg-green-400 animate-pulse"></span>
        </p>
        <img
          onClick={() => setSelectedUser(null)}
          src={assets.arrow_icon}
          alt=""
          className="md:hidden max-w-7"
        />
        <img src={assets.help_icon} alt="" className="max-md:hidden max-w-5" />
      </div>
      {/* chat area... */}
      <div className="flex flex-col h-[calc(100%-120px)] overflow-y-scroll p-3 pb-6">
        {messagesDummyData.map((msg, index) => {
          const isSender = msg.senderId === "680f50e4f10f3cd28382ecf9";
          return (
            <div
              key={index}
              className={`flex items-end gap-2 mb-4 ${
                isSender ? "justify-end" : "justify-start"
              }`}
            >
              {/*  Receiver side avatar (left) */}
              {!isSender && (
                <div className="flex flex-col items-center text-xs text-gray-300">
                  <img
                    src={assets.profile_martin}
                    alt="Receiver"
                    className="w-7 h-7 rounded-full mb-1"
                  />
                  <p>{formatMessageTime(msg.createdAt)}</p>
                </div>
              )}

              {/*  Message content */}
              {msg.image ? (
                <img
                  src={msg.image}
                  alt=""
                  className="max-w-[230px] border border-stone-600 rounded-lg overflow-hidden mb-1"
                />
              ) : (
                <p
                  className={`p-2 max-w-[230px] md:text-sm font-light break-all text-white rounded-lg mb-1 ${
                    isSender
                      ? "bg-green-700 rounded-br-none"
                      : "bg-gray-700 rounded-bl-none"
                  }`}
                >
                  {msg.text}
                </p>
              )}
              {/* Sender side avatar (right) */}
              {isSender && (
                <div className="flex flex-col items-center text-xs text-gray-300">
                  <img
                    src={assets.avatar_icon}
                    alt="Sender"
                    className="w-7 h-7 rounded-full mb-1"
                  />
                  <p>{formatMessageTime(msg.createdAt)}</p>
                </div>
              )}
            </div>
          );
        })}
        <div ref={scrollEnd}></div>
      </div>

      {/* bottom input area... */}
      <div className="absolute bottom-0 left-0 right-0 p-5 flex items-center gap-3  backdrop-blur-md border-t border-stone-600">
        <div className="flex-1 flex items-center bg-gray-100/12 px-3 rounded-full">
          <input
            type="text"
            placeholder="send a message"
            className="flex-1 text-sm p-3  border-none rounded-lg outline-none text-white placeholder-gray-400"
          />
          <input type="file" id="image" accept="image/png,image/jpeg" hidden />
          <label htmlFor="image">
            <img
              src={assets.gallery_icon}
              alt="gallery"
              className="w-5 mr-2 cursor-pointer"
            />
          </label>
        </div>
        <img src={assets.send_button} alt="" className="w-7 cursor-pointer" />
      </div>
    </div>
  ) : (
    <div className="h-full flex flex-col justify-center items-center gap-4 text-gray-400">
      <img
        src={assets.logo_icon}
        alt="chat"
        className="max-w-[150px] opacity-30"
      />
      <p className="text-lg font-medium text-white">Chat anytime, anywhere</p>
    </div>
  );
};

export default ChatContainer;
