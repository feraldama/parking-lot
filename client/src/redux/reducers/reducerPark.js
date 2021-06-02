const initialState = {
  // estado inicial
  park: [],
};

export default (state = initialState, actions) => {
  switch (actions.type) {
    case "POST_PARK":
      return {
        park: actions.payload,
      };

    default:
      return state;
  }
};
