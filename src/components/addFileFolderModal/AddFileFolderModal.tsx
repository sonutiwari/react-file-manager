import "./AddFileFolderModal.scss";

import { Button, ButtonGroup, FormControl, Modal } from "react-bootstrap";
import React, { useState } from "react";

export default function AddFileFolderModal({
  showModal,
  handleModalHide,
  addFile,
}: {
  showModal: boolean;
  handleModalHide: (showModal: boolean) => void;
  addFile: addFile;
}) {
  const [selectedItem, setSelectedItem] = useState("file");
  const [fileName, setFileName] = useState("");
  const createFileOrFolder = () => {
    selectedItem === "file" ? createFile(fileName) : createFolder(fileName);
    addFile(fileName, "");
  };
  const createFile = (fileName: string) => {
    console.log("file", fileName);
  };

  const createFolder = (folderName: string) => {
    console.log("folder", folderName);
  };
  return (
    <Modal
      size="sm"
      show={showModal}
      onHide={() => handleModalHide(false)}
      backdrop="static"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title className="mx-auto">Create New</Modal.Title>
      </Modal.Header>
      <Modal.Body className="text-center">
        <ButtonGroup>
          <Button
            variant={`${selectedItem === "file" ? "primary" : "light"}`}
            onClick={() => setSelectedItem("file")}
            id="btn-left"
          >
            File
          </Button>
          <Button
            variant={`${selectedItem !== "file" ? "primary" : "light"}`}
            onClick={() => setSelectedItem("folder")}
            id="btn-right"
          >
            Folder
          </Button>
        </ButtonGroup>
        <FormControl
          type="text"
          placeholder="filename or foldername"
          autoComplete="text"
          id="filename-input"
          value={fileName}
          onChange={(e) => setFileName(e.target.value)}
        />
        <Button variant="primary" size="lg" block onClick={createFileOrFolder}>
          Create
        </Button>
      </Modal.Body>
    </Modal>
  );
}
