const InputPac = ({ id, title, onChange, value }) => {
  var tipo;

  if (id === "fecha") {
    tipo = "datetime-local";
  } else {
    tipo = "text";
  }

  return (
    <div className="m-1 p-0.5 space-x-2">
      <label htmlFor={id} className="text-lg">
        {title}:
      </label>
      <input
        type={tipo}
        id={id}
        name={id}
        value={value}
        className="text-lg text-center bg-gray-200 rounded-xl"
        onChange={onChange}
      ></input>
    </div>
  );
};

export default InputPac;
