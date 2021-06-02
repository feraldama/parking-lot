import axios from "axios";

const url = "http://localhost:3001";

export const postPark = (park) => (dispatch) => {
  axios
    .post(`/parking/lot`, {
      token:
        "Bearer mi5qSSqdhmrNXBjLq5MBMwuqcS0q8aE4u52fwqrG8CkrBjjksgdV8ZblHdh4ThtDqQVFapfOwrCqadcTH4sJIMhQgEcWpc0bK_9ms_rJ1H-xMT1Amp4tmH_PhAg3X3Yx",
      url: `https://api.yelp.com/v3/businesses/search?term=parking&sort_by=rating&location=${encodeURI(
        park
      )}`,
      method: "get",
    })
    .then((data) => {
      dispatch({
        type: "POST_PARK",
        payload: data.data,
      });
    });
};
