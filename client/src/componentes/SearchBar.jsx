import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { postPark } from "../redux/actions/actionsPark";

function SearchBar() {
  const dispatch = useDispatch();

  const [location, setLocation] = useState("");

  const handleChange = (e) => {
    if (e.keyCode === 13) {
      redirect();
    }
    setLocation(e.target.value);
  };

  const redirect = async () => {
    dispatch(postPark(location));
  };

  return (
    <div className="d-flex">
      <input
        className="form-control me-2"
        type="search"
        placeholder="City...."
        aria-label="Search"
        value={location ? location : ""}
        onChange={handleChange}
        onKeyUp={handleChange}
      />
      <button onClick={redirect} type="button" className="btn btn-success">
        Search
      </button>
    </div>
  );
}

export default SearchBar;
