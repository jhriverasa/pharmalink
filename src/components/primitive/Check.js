import Checkbox from '@material-ui/core/Checkbox';

const Check = ({ value, name, title }) => {
    return (
        <div className="flex w-full">
            {title && <label htmlFor={name} className="mr-2">{title}:</label>}
            <div
                value={value}
                name={name}
                className="flex-auto text-center bg-gray-200 rounded-xl"
            >
                <Checkbox
                    inputProps={{ 'aria-label': 'uncontrolled-checkbox' }}
                />
            </div>
        </div>
    );
};

export default Check;