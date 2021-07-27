const Convention = ({ color, opacity, text }) => {
  return (
    <div className="flex flex-row w-5/6 mx-auto h-1/4 space-x-3 my-1">
      <div
        style={{
          background: color,
          height: "1.25rem",
          width: "1.25rem",
          opacity: opacity,
        }}
      ></div>
      <div className="text-sm hover: cursor-default">{text}</div>
    </div>
  );
};

export default Convention;
