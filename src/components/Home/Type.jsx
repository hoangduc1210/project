import React from "react";
import Typewriter from "typewriter-effect";

const Type = () => {
    return (
        <Typewriter
          options={{
            strings: [
              "Kết nối xứ thanh",
              "Gắn kết cộng đồng",
              "chia sẻ yêu thương",
              "Nhiệt huyết năng động"
            ],
            autoStart: true,
            loop: true,
            deleteSpeed: 50,
          }}
        />
      )
}

export default Type