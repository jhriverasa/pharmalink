import { Fragment } from "react";
import { Select as PSelect } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const Select = ({ value, onChange, label, inputProps, options }) => {
  const GlobalCss = withStyles({
    "@global": {
      // You should target [class*="MuiButton-root"] instead if you nest themes.
      ".MuiInput-underline::before": {
        content: "none",
      },
    },
  })(() => null);

  return (
    <Fragment>
      <GlobalCss />
      <PSelect
        className="bg-gray-200 rounded-xl w-full"
        native
        value={value}
        onChange={onChange}
        label={label}
        inputProps={inputProps}
      >
        <Fragment>
          <option aria-label="None" value="" />
          {options.map((option, index) => {
            return (
              <option key={index} value={option.value}>
                {option.label}
              </option>
            );
          })}
        </Fragment>
      </PSelect>
    </Fragment>
  );
};

export default Select;
