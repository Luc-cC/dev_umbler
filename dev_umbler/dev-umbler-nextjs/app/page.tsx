"use client";

import { useState } from "react";
import { ChatCompletionMessage } from "./chat-completion-message.interface";
import createChatCompletion from "./createChatCompletion";
import onFileChange from "./processPDF"

export default function Home() {

  const [messages, setMessages] = useState<ChatCompletionMessage[]>([]);
  const [message, setMessage] = useState("");

  const handleMessage = async () => {
      const updatedMessages = [
        ...messages,
        {
          role: "user",
          content: message,
        },
      ];
      setMessages(updatedMessages);
      setMessage("");
      const response = (await createChatCompletion(updatedMessages)).choices[0]
      ?.message;
      setMessages([...updatedMessages, response]);
    };

    

  return (

    
    //justificar
    <div className="h-screen flex items-center justify-center flex-col gap-10 container mx-auto pl-4 pt-6 pr-4">
     <div className="flex flex-col gap-3 h-[75%] overflow-scroll w-full">
      {
        messages.map((msg) => (
          <div key={""}
           className={
            msg.role === "user" ? "chat chat-start" : "chat chat-end"
           }
          >
            <div className="chat-bubble">
              <p>{msg.content}</p>
              </div>
            </div>
        ))}

     </div>

      <input 
      type="text" 
      placeholder="Mensagem" 
      value={message}
      onChange={(event)=>setMessage(event.target.value)}
      onKeyDown={async (event) => {
        if (event.key == 'Enter') {
          await handleMessage();
        }
      }}
      className="input input-bordered w-full m-10"
      />

      <div className="button">
        <h1>Upload PDF</h1>
        <input
        type="file"
        id="file"
        name="file"
        onChange={onFileChange}
        accept=".pdf"
        />
      </div>
    </div>



    ) 
}

