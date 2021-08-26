import React from "react";
import "../styles.css";
import { Link } from "react-router-dom";
const Show = (props) => {
  const { results, info } = props;
  return (
    <div className="searchresult">
      <div style={{ color: "silver", fontWeight: "normal", fontSize: "14px" }}>
        {info ? `Total results: ${info.totalResults}` : ""}
      </div>

      {results.length > 0
        ? results.map((result) => (
            <div className="showdetails" key={result.title}>
              <div className="showlink">{result.displayLink}</div>
              <Link to="./static">{result.title}</Link>
              <div>{result.snippet}</div>
            </div>
          ))
        : ""}
    </div>
  );
};

export default Show;
