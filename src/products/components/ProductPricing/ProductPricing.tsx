import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";
import CardTitle from "@saleor/components/CardTitle";
import ControlledCheckbox from "@saleor/components/ControlledCheckbox";
import PriceField from "@saleor/components/PriceField";
import { ProductErrorFragment } from "@saleor/fragments/types/ProductErrorFragment";
import { getFormErrors, getProductErrorMessage } from "@saleor/utils/errors";
import React from "react";
import { useIntl } from "react-intl";

const useStyles = makeStyles(
  theme => ({
    root: {
      display: "grid",
      gridColumnGap: theme.spacing(2),
      gridTemplateColumns: "1fr 1fr"
    }
  }),
  { name: "ProductPricing" }
);

interface ProductPricingProps {
  currency?: string;
  availableCurrencies: string[];
  data: {
    chargeTaxes: boolean;
    basePrice: number;
  };
  disabled: boolean;
  errors: ProductErrorFragment[];
  onChange: (event: React.ChangeEvent<any>) => void;
  updateCurrency(string);
}

const ProductPricing: React.FC<ProductPricingProps> = props => {
  const {
    currency,
    availableCurrencies,
    data,
    disabled,
    errors,
    onChange,
    updateCurrency
  } = props;

  const classes = useStyles(props);
  const intl = useIntl();

  const formErrors = getFormErrors(["basePrice"], errors);

  return (
    <Card>
      <CardTitle
        title={intl.formatMessage({
          defaultMessage: "Pricing",
          description: "product pricing"
        })}
      >
        <ControlledCheckbox
          name="chargeTaxes"
          label={intl.formatMessage({
            defaultMessage: "Charge taxes for this item"
          })}
          checked={data.chargeTaxes}
          onChange={onChange}
          disabled={disabled}
        />
      </CardTitle>
      <CardContent>
        <div className={classes.root}>
          <PriceField
            disabled={disabled}
            label={intl.formatMessage({
              defaultMessage: "Price",
              description: "product price"
            })}
            error={!!formErrors.basePrice}
            hint={getProductErrorMessage(formErrors.basePrice, intl)}
            name="basePrice"
            value={data.basePrice}
            currencySymbol={currency}
            availableCurrencies={availableCurrencies}
            updateCurrency={updateCurrency}
            onChange={onChange}
            InputProps={{
              inputProps: {
                min: 0
              }
            }}
          />
        </div>
      </CardContent>
    </Card>
  );
};
ProductPricing.displayName = "ProductPricing";
export default ProductPricing;
