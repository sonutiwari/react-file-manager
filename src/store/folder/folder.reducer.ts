import actionTypes from "./folder.action.types";
const defaultState: IFolderState = {
  root: {
    name: "root",
    parent: null,
    children: [
      { name: "abc.png", parent: "root" },
      { name: "abc", parent: "root", children: [] },
    ],
  },
};
const folderReducer = (state = defaultState, action: IFileFolderAction) => {
  switch (action.type) {
    case actionTypes.CREATE_FILE:
      console.log(state, action.payload);
      return {
        ...state,
      };
    //   break;
    // case actionTypes.RENAME_FILE:
    //   break;
    // case actionTypes.DELETE_FILE:
    //   break;
    // case actionTypes.CREATE_FOLDER:
    //   break;
    // case actionTypes.RENAME_FOLDER:
    //   break;
    // case actionTypes.DELETE_FOLDER:
    //   break;
    // default:
    //   break;
  }
  return state;
};

export default folderReducer;
