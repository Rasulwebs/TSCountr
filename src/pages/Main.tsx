import React from "react";
import { useEffect, useState } from "react";
import { CountriesTS } from "../types/Countries";
import CountrItem from "../components/CountryItem/CountrItem";
import "./styleMainPage.css";


const Main = () => {
  // =========================== states for datas
  const [country, setCountry] = useState<CountriesTS[]>([]);
  const [searchCountry, setSearchCountry] = useState<CountriesTS[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  let api = "https://countries.trevorblades.com/graphql";

  useEffect(() => {
    getAllData();
    getSearchData("UZ");
  }, []);
  //=================================  all countries infoo data
  async function getAllData() {
    setLoading(true);
    let response = await fetch(api, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: ` {
            countries {
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
  // console.log(country);

  //  ===================== Search data
  // const upperSearch = search.toLowerCase();
  // const filterCounter = searchCountry.filter((countt) =>
  //   countt.code.toLowerCase().includes(upperSearch)
  // );
  function handle(){
  
  }

  async function getSearchData(countCode: string) {
    setLoading(true);
    let response = await fetch(api, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: ` {
          countries (filter: {code: {in: "${countCode}"}}) {
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
    setSearchCountry(country);
    setLoading(false);
  }
  console.log(searchCountry);

  // Rendering
  return (
    <>
      <main>
        <section>
          <div className="container">
            <h2>Countries</h2>

            <div className="searchInputWrapp">
            <input
          type="text"
          value={search}
          onChange={(e) => {setSearch(e.target.value);
          console.log(e.target.value)}}
          className="form-control w-100 mt-3 mb-5 searchInput"
          placeholder="Search by country code"
        />
              {/* <button className="btn btn-primary searchBtn w-100 mt-3 mb-5">
                Search
              </button> */}
            </div>

            <div className="countryDataWrapp">
              {loading && <h3>Loading...</h3>}
              {!loading &&
                country.map((item, index) => {
                  return (
                    <CountrItem
                      code={item.code}
                      name={item.name}
                      capital={item.capital}
                      language={item.langiage}
                      phone={item.phone}
                      currency={item.currency}
                      continent={item.continent}
                      emoji={item.emoji}
                      key={index}
                    />
                  );
                })}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Main;
