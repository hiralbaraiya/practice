import React from "react";

export default function MessageBoard({ messages }) {
  return (
    <div className='messages'>
      {messages.map(messageItem => {
        const { id, text, timestamp } = messageItem;
        console.log(messages)
        return (
          <div key={id}>
            <h4>{new Date(timestamp).toLocaleDateString()}</h4>
            <p>{text}</p>
            <hr />
          </div>
        );
      })}
    </div>
  );
}
