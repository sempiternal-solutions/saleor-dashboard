import FormControl from "@material-ui/core/FormControl";
import { InputProps } from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import React from "react";

import { FormSpacer } from "../FormSpacer";

const useStyles = makeStyles(
  theme => ({
    currencySymbol: {
      fontSize: "0.875rem"
    },
    inputContainer: {
      display: "grid",
      gridTemplateColumns: "1fr 2rem 1fr"
    },
    pullDown: {
      marginTop: theme.spacing(2)
    },
    separator: {
      marginTop: theme.spacing(3),
      textAlign: "center",
      width: "100%"
    },
    widgetContainer: {
      marginTop: theme.spacing(2)
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120
    },
    selectEmpty: {
      marginTop: theme.spacing(1)
    }
  }),
  { name: "PriceField" }
);

interface PriceFieldProps {
  className?: string;
  currencySymbol?: string;
  disabled?: boolean;
  error?: boolean;
  hint?: string;
  label?: string;
  name?: string;
  value?: string | number;
  InputProps?: InputProps;
  availableCurrencies: string[];
  onChange(event: any);
  updateCurrency(string);
}

export const PriceField: React.FC<PriceFieldProps> = props => {
  const {
    className,
    disabled,
    error,
    label,
    hint,
    currencySymbol,
    name,
    onChange,
    value,
    InputProps,
    updateCurrency,
    availableCurrencies
  } = props;

  const classes = useStyles(props);
  const [currency, setCurrency] = React.useState("");

  React.useEffect(() => {
    setCurrency(currencySymbol);
  }, [currencySymbol]);

  const handleChange = event => {
    setCurrency(event.target.value);
    updateCurrency(event.target.value);
  };
  return (
    <FormControl>
      <TextField
        className={className}
        error={error}
        helperText={hint}
        label={label}
        fullWidth
        value={value}
        InputProps={{
          ...InputProps,
          endAdornment: currency ? (
            <InputAdornment position="end" className={classes.currencySymbol}>
              {currency}
            </InputAdornment>
          ) : (
            <span />
          ),
          type: "number"
        }}
        name={name}
        disabled={disabled}
        onChange={onChange}
      />
      <FormSpacer />
      <label>Currency</label>
      <Select
        name="selectedCurrency"
        value={currency}
        onChange={handleChange}
        displayEmpty
        className={classes.selectEmpty}
      >
        <MenuItem value="" disabled>
          Select Currency
        </MenuItem>
        {/* <MenuItem value="INR">INR</MenuItem>
          <MenuItem value="CAD">CAD</MenuItem>
          <MenuItem value="USD">USD</MenuItem> */}
        {availableCurrencies.map((el, index) => (
          <MenuItem value={el} key={index}>
            {el}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
PriceField.defaultProps = {
  name: "price"
};

PriceField.displayName = "PriceField";
export default PriceField;
