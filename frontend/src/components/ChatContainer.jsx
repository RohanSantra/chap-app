import React, { useEffect, useRef } from 'react'
import { useChatStore } from '../store/useChatStore'
import MessageSkeleton from "./skeletons/MessageSkeleton"
import ChatHeader from './ChatHeader';
import MessageInput from './MessageInput';
import { formatMessageTime } from "../lib/utils"
import { useAuthStore } from '../store/useAuthStore';


function ChatContainer() {
  const { messages, getMessages, isMessagesLoading, selectedUser, subscribeToMessages, unSubscribeFromMessages } = useChatStore();
  const { authUser } = useAuthStore();
  const messageEndRef = useRef(null);


  useEffect(() => {
    getMessages(selectedUser._id);
    subscribeToMessages();

    return () => unSubscribeFromMessages()
  }, [selectedUser._id, getMessages, subscribeToMessages, unSubscribeFromMessages])

  useEffect(() => {
    if (messageEndRef.current) {
      messageEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages])

  if (isMessagesLoading) {
    return (
      <div className="flex-1 flex flex-col overflow-auto">
        <ChatHeader />
        <MessageSkeleton />
        <MessageInput />
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col overflow-auto">
      <ChatHeader />

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message._id}
            className={`chat ${message.senderId === authUser._id ? "chat-end" : "chat-start"}`}
            ref={messageEndRef}
          >
            <div className=" chat-image avatar">
              <div className="size-10 rounded-full border">
                <img
                  src={
                    message.senderId === authUser._id
                      ? authUser.profilePic || "/avatar.png"
                      : selectedUser.profilePic || "/avatar.png"
                  }
                  alt="profile pic"
                />
              </div>
            </div>
            <div className="chat-header mb-1">
              <time className="text-xs opacity-50 ml-1">
                {formatMessageTime(message.createdAt)}
              </time>
            </div>
            <div className={`${message.senderId === authUser._id ? "bg-primary text-primary-content" : "text-base-content/70 bg-base-200"} chat-bubble rounded-xl flex flex-col`}>
              {message.image && (
                <img
                  src={message.image}
                  alt="Attachment"
                  className="sm:max-w-[200px] rounded-md mb-2"
                />
              )}
              {message.message && <p>{message.message}</p>}
            </div>
          </div>
        ))}
      </div>

      <MessageInput />
    </div>
  )
}

export default ChatContainer