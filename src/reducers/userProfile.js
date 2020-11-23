const userProfileReducerDefaultState = {};

const userProfileReducer = (state = userProfileReducerDefaultState, action) => {
  switch (action.type) {
    case "POPULATE_USER_PROFILE":
      return action.userProfile;
    case "EDIT_USER_PROFILE":
    // return [...state, action.userProfile];
    default:
      return state;
  }
};

export { userProfileReducer as default };
