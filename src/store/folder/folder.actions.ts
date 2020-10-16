import actionTypes from "./folder.action.types";
export const createFile = (parentFolder: string, fileName: string) => {
  console.log(fileName);
  const action: IFileFolderAction = {
    type: actionTypes.CREATE_FILE,
    payload: {
      name: fileName,
      parent: parentFolder,
    },
  };
  return (dispatch: DispatchType) => dispatch(action);
};
