import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { CountriesTS } from "../types/Countries";
import "./styleMainPage.css";
import { log } from "console";
const Main = () => {
  const [country, setCountry] = useState<CountriesTS[]>([]);
  const [loading, setLoading] = useState(false);
  let api = "https://countries.trevorblades.com/graphql";
  //  all countries infoo data

  useEffect(() => {
    getAllData();
  }, []);
  async function getAllData() {
    setLoading(true);
    let response = await fetch(api, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: ` {
          countries (filter: {code: {in: "UZ"}}) {
            code
            name
            native
            phone
            capital
            currency
            languages {
              name
              native
              rtl
            }
            continent {
              name
            }
            emoji
            states {
              name
            }
          }
        }`,
      }),
    });
    let countData = await response.json();
    let country = countData.data.countries;
    setCountry(country);
    setLoading(false);
  }
  console.log(country);
  return (
    <>
      <main>
        <section>
          <div className="container">
            <h2>Countries</h2>

            <div className="searchInputWrapp">
              <input
                type="text"
                className="form-control searchInput"
                placeholder="Search by country code"
              />
              <button className="btn btn-primary searchBtn w-100 mt-3 mb-5">
                Search
              </button>
            </div>

            <div className="countryDataWrapp">
              {loading && <h3>Loading...</h3>}
              {!loading &&
                country.map((item, index) => {
                  return <div>{item.name}</div>;
                })}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Main;
