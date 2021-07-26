const Separator = ({ color, size }) => {
  return (
    <div
      style={{
        background: color,
        width: "100%",
        height: size,
      }}
    ></div>
  );
};

export default Separator;
