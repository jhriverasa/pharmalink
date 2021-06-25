const FormInput = ({ value, name, title, type, onChange }) => {
  return (
    <div className="m-1 p-0.5 space-x-2">
      <label htmlFor={name} className="text-lg">
        {title}:
      </label>
      <input
        value={value}
        name={name}
        type={type}
        className="text-lg text-center bg-gray-200 rounded-xl"
        onChange={onChange}
      ></input>
    </div>
  );
};

export default FormInput;
