import React, { useState } from "react";
import Child from "../Child/Child";

const Parent = () => {
  const [childMessage, setChildMessage] = useState("");

  const handleMessageFromChild = (msg) => {
    setChildMessage(msg);
  };

  return (
    <div>
      <h2>Parent Component</h2>
      <p>Message from child: {childMessage}</p>
      <Child
        parentMessage="Hi from Parent"
        onMessageSend={handleMessageFromChild}
      />
    </div>
  );
};

export default Parent;
