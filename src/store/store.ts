import { Store, createStore } from "redux";

import folderReducer from "./folder/folder.reducer";

const store: Store<IFolderState, IFileFolderAction> & {
  dispatch: DispatchType;
} = createStore(folderReducer);

export default store;
