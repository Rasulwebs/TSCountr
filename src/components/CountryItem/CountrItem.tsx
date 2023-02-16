import React from "react";
import { CountryItemTS } from "../../types/CountryItemTS";
const CountrItem = ({
    code,
  name,
  capital,
  language,
  emoji,
  phone,
  currency,
  continent
}: CountryItemTS) => {
  return (
    <>
      <div>
        <h2>{name}</h2>
      </div>
    </>
  );
};

export default CountrItem;
