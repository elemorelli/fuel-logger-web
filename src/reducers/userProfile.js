const userProfileReducerDefaultState = {};

const userProfileReducer = (state = userProfileReducerDefaultState, action) => {
  switch (action.type) {
    case "POPULATE_USER_PROFILE":
      return action.user;
    case "EDIT_USER_PROFILE":
    // return [...state, action.user];
    default:
      return state;
  }
};

export { userProfileReducer as default };
