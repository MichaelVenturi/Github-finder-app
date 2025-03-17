// maybe unnecessary, but I don't like manually writing the action object for every dispatch
// likely very unnecessary in TypeScript
export const dispatchSetLoading = () => ({ type: "SET_LOADING" });

export const dispatchSearchUsers = (payload) => ({ type: "GET_USERS", payload });

export const dispatchGetUserData = (payload) => ({ type: "GET_USER_AND_REPOS", payload });
