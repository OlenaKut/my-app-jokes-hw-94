import React from "react";

function EmojiList() {
  const emojis = [
    {
      id: "1",
      name: "😁",
    },
    {
      id: "2",
      name: "😂",
    },
    {
      id: "3",
      name: "🤣",
    },
    {
      id: "4",
      name: "😅",
    },
    {
      id: "5",
      name: "😆",
    },
    {
      id: "6",
      name: "😊",
    },
    {
      id: "7",
      name: "😎",
    },
    {
      id: "8",
      name: "😀",
    },

    {
      id: "9",
      name: "😃",
    },

    {
      id: "10",
      name: "😄",
    },
  ];

  return (
    <div className="">
      <h5>
        {emojis.map((emoji) => {
          return <p key={emoji.id}>{emoji.name}</p>;
        })}
      </h5>
    </div>
  );
}

export default EmojiList;
