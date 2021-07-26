const FormInput = ({ value, name, title, type, onChange }) => {
  return (
    <div className="flex w-full">
      {title && <label htmlFor={name} className="mr-2">{title}:</label>}
      <input
        value={value}
        name={name}
        type={type}
        className="flex-auto text-center bg-gray-200 rounded-xl"
        onChange={onChange}
      ></input>
    </div>
  );
};

export default FormInput;
