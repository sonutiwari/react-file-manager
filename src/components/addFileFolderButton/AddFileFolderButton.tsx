import "./AddFileFolderButton.scss";

import React, { useState } from "react";

import AddFileFolderModal from "../addFileFolderModal/AddFileFolderModal";
import actionTypes from "../../store/folder/folder.action.types";
import { connect } from "react-redux";

const AddFileFolderButton = ({ addFile }: { addFile: addFile }) => {
  const [showFileAddModal, setShowFileAddModal] = useState(false);
  const handleAddBtnClick = () => {
    setShowFileAddModal((showFileAddModal) => !showFileAddModal);
  };
  return (
    <>
      <div id="add-file-folder-div" onClick={handleAddBtnClick}>
        <p className="mx-auto" id="plus-btn">
          +
        </p>
      </div>
      {showFileAddModal ? (
        <AddFileFolderModal
          showModal={showFileAddModal}
          handleModalHide={handleAddBtnClick}
          addFile={addFile}
        />
      ) : null}
    </>
  );
};

const mapDispatchToProps = (dispatch: DispatchType) => {
  return {
    addFile: (fileName: string, parentPath: string) =>
      dispatch({
        type: actionTypes.CREATE_FILE,
        payload: {
          name: fileName,
          parent: parentPath,
        },
      }),
    addFolder: (folderName: string, parentPath: string) => {},
  };
};

export default connect(null, mapDispatchToProps)(AddFileFolderButton);
