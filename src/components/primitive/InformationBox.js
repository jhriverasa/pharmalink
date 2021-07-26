const InformationBox = ({ value, name, title}) => {
    return (
      <div className="flex w-full">
        {title && <label htmlFor={name} className="mr-2">{title}:</label>}
        <div
          value={value}
          name={name}
          className="flex-auto text-center bg-gray-200 rounded-xl"
        >
            {value}
        </div>
      </div>
    );
  };
  
  export default InformationBox;