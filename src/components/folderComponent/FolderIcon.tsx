import "./FolderIcon.scss";

import React, { useState } from "react";

import folderIcon from "../../assets/images/folder.png";
import { useHistory } from "react-router-dom";

export default function FolderIcon({ folderName }: { folderName: string }) {
  const history = useHistory();
  const [isSelected, setIsSelected] = useState(false);
  const handleDoubleClick = () => {
    history.push(`/${folderName}`);
  };
  return (
    <div
      id="container-div"
      className={`${isSelected ? "shadow" : ""}`}
      onClick={() => setIsSelected(!isSelected)}
      onDoubleClick={handleDoubleClick}
    >
      <div id="folder-icon-container">
        <img src={folderIcon} alt="folder icon" />
      </div>
      <p id="foldername-text" className="text-center">
        {folderName}
      </p>
    </div>
  );
}
