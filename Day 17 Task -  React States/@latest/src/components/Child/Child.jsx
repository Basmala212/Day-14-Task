import React from "react";

const Child = ({ parentMessage, onMessageSend }) => {
  return (
    <div style={{ border: "1px solid gray", padding: "10px" }}>
      <h3>Child Component</h3>
      <p>{parentMessage}</p>
      <button onClick={() => onMessageSend("Hello from Child")}>
        Send to Parent
      </button>
    </div>
  );
};

export default Child;
