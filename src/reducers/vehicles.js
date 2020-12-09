const vehiclesReducerDefaultState = null;

const vehiclesReducer = (state = vehiclesReducerDefaultState, action) => {
  switch (action.type) {
    case "POPULATE_VEHICLES":
      return action.vehicles;
    default:
      return state;
  }
};

export { vehiclesReducer as default };
