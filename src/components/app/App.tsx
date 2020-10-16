import "./App.scss";

import AddFileFolderButton from "../addFileFolderButton/AddFileFolderButton";
import FileIcon from "../fileComponent/FileIcon";
import FolderIcon from "../folderComponent/FolderIcon";
import React from "react";
import { connect } from "react-redux";
import { isFile } from "../../store/folder/utils";

function App({ root: { children } }: any) {
  return (
    <div className="App">
      {children.map((child: IFile | IFolder) =>
        isFile(child) ? (
          <FileIcon key={child.name} fileName={child.name} />
        ) : (
          <FolderIcon key={child.name} folderName={child.name} />
        )
      )}
      <AddFileFolderButton />
    </div>
  );
}
const mapStateToProps = (state: IFileFolderAction) => state;

export default connect(mapStateToProps)(App);
