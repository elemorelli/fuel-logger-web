const userReducer = (state, action) => {
  switch (action.type) {
    case "POPULATE_USER":
      return action.user;
    case "EDIT_USER":
    // return [...state, action.note];
    case "REMOVE_NOTE":
    // return state.filter((note) => note.title !== action.title);
    default:
      return state;
  }
};

export { userReducer as default };
