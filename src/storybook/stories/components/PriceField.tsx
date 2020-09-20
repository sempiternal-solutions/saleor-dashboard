import PriceField from "@saleor/components/PriceField";
import { storiesOf } from "@storybook/react";
import React from "react";

import CardDecorator from "../../CardDecorator";
import Decorator from "../../Decorator";

storiesOf("Generics / Price input", module)
  .addDecorator(CardDecorator)
  .addDecorator(Decorator)
  .add("with no value", () => (
    <PriceField
      onChange={undefined}
      updateCurrency={undefined}
      availableCurrencies={[]}
    />
  ))
  .add("with value", () => (
    <PriceField
      value={"30"}
      onChange={undefined}
      updateCurrency={undefined}
      availableCurrencies={[]}
    />
  ))
  .add("with label", () => (
    <PriceField
      label="Lorem ipsum"
      onChange={undefined}
      updateCurrency={undefined}
      availableCurrencies={[]}
    />
  ))
  .add("with hint", () => (
    <PriceField
      hint="Lorem ipsum"
      onChange={undefined}
      updateCurrency={undefined}
      availableCurrencies={[]}
    />
  ))
  .add("with currency symbol", () => (
    <PriceField
      currencySymbol="$"
      onChange={undefined}
      updateCurrency={undefined}
      availableCurrencies={[]}
    />
  ))
  .add("disabled", () => (
    <PriceField
      disabled
      onChange={undefined}
      updateCurrency={undefined}
      availableCurrencies={[]}
    />
  ))
  .add("with label and hint", () => (
    <PriceField
      label="Lorem"
      hint="Ipsum"
      onChange={undefined}
      updateCurrency={undefined}
      availableCurrencies={[]}
    />
  ))
  .add("with value, label, currency symbol and hint", () => (
    <PriceField
      availableCurrencies={[]}
      value={"30"}
      label="Lorem"
      hint="Ipsum"
      onChange={undefined}
      currencySymbol="$"
      updateCurrency={undefined}
    />
  ))
  .add("with value, label, currency symbol and error", () => (
    <PriceField
      availableCurrencies={[]}
      value={"30"}
      label="Lorem"
      hint="Ipsum"
      error={true}
      onChange={undefined}
      currencySymbol="$"
      updateCurrency={undefined}
    />
  ));
