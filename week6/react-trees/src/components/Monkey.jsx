import { useState } from "react";

export default function Monkey() {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <button
        onClick={() => {
          setVisible(!visible);
        }}
      >
        Show monkey
      </button>
      {visible && <img src="https://cdn.britannica.com/88/143588-050-E4C19B79/monkey.jpg" />}
    </>
  );
}
