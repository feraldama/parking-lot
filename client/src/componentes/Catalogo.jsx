import React from "react";
import { useSelector } from "react-redux";
import StarRating from "../starRating/index";
import "./Catalogo.css";

function Catalogo() {
  const park = useSelector((state) => state.reducerPark.park);

  if (park.businesses) {
    return (
      <div>
        <table class="table table-striped">
          <thead>
            <tr>
              <th>Adress</th>
              <th>Image</th>
              <th>Star Rating</th>
              <th>Review Count</th>
              <th>Score</th>
              <th>Link</th>
            </tr>
          </thead>
          <tbody>
            {park.businesses.map((p) => (
              <tr>
                <td>{p.location.address1}</td>
                <img
                  src={p.image_url}
                  alt="if available"
                  width="300"
                  height="225"
                />
                <td style={{ width: "250px" }}>
                  <div className="App">
                    <StarRating stars={p.rating} />
                  </div>
                  {p.rating}
                  <span> - {(p.rating * 100) / 5}%</span>
                </td>
                <td>{p.review_count}</td>
                <td>
                  {parseFloat(
                    (p.review_count * p.rating) / (p.review_count + 1)
                  ).toFixed(4)}
                </td>
                <td>{p.url}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  } else {
    return (
      <div className="container">
        <h1>Enter the desired region</h1>
      </div>
    );
  }
}

export default Catalogo;
