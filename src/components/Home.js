import React, { useEffect, useState } from "react";
import { key, cx } from "../API";
import axios from "axios";
import Show from "./Show";
const Home = (props) => {
  const [state, setState] = useState("");
  const [results, setResults] = useState([]);
  const [info, setInfo] = useState("");
  const searchGoogle = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `https://www.googleapis.com/customsearch/v1?key=${key}&cx=${cx}&q=${state}`
      );
      if (response) {
        setResults(response.data.items);
        setInfo(response.data.searchInformation);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    async function getResult() {
      if (state) {
        try {
          const response = await axios.get(
            `https://www.googleapis.com/customsearch/v1?key=${key}&cx=${cx}&q=${state}`
          );
          if (response) {
            setResults(response.data.items);
            setInfo(response.data.searchInformation);
          }
        } catch (error) {
          console.log(error);
        }
      }
    }
  }, []);
  return (
    <div>
      <div className="App">
        <h1>Search</h1>
        <form onSubmit={searchGoogle}>
          <input
            type="text"
            style={{ margin: "10px", padding: "1px 4px 1px 4px" }}
            onChange={(e) => {
              setState(e.target.value);
            }}
            value={state}
          />
          <input type="submit" value="Search" />
        </form>
      </div>
      <Show results={results} info={info} />
    </div>
  );
};

export default Home;
