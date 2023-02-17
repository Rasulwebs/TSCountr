import React, { useState } from "react";
import { CountryItemTS } from "../../types/CountryItemTS";
import "./styleCards.css";
const CountrItem = ({
  code,
  name,
  capital,
  languages,
  emoji,
  phone,
  currency,
  continent,
}: CountryItemTS) => {
  return (
    <>
      <div className="card">
        <div
          className="bg-image hover-overlay ripple"
          data-mdb-ripple-color="light"
        >
          <img src={emoji} alt={emoji} className="img-fluid" />
          <a href="#!">
            <div className="mask"></div>
          </a>
        </div>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p className="card-text">
            <strong>Capital:</strong>
            {capital}
          </p>
          <p className="card-text">
            <strong>Region:</strong>
            {continent.name}
          </p>
          <p className="card-text">
            <strong>Code:</strong>
            {code}
          </p>
          <div className="countryBottonInfo">
            <span className="bottonInfoWrapp">
              <i className="bi bi-telephone-outbound-fill"></i>
              {phone}
            </span>
            <span className="bottonInfoWrapp">
              {currency ? (
                <span>
                  <i className="bi bi-currency-exchange"></i>
                  <span>currency</span>
                </span>
              ) : (
                ""
              )}
            </span>

            <span className="bottonInfoWrapp">
              {languages.length ? <i className="bi bi-translate"></i> : ""}
              {languages.map((item) => {
                return (
                  <span className="langItem mx-1 d-flex flex-wrapp">
                    {item.name}
                  </span>
                );
              })}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default CountrItem;
