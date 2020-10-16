import "./FileIcon.scss";

import React, { useState } from "react";

import fileIcon from "../../assets/images/file.png";

export default function FileIcon({ fileName }: { fileName: string }) {
  const [isSelected, setIsSelected] = useState(false);
  const [, extension] = fileName.split(".");
  return (
    <div
      id="container-div"
      className={`${isSelected ? "shadow" : ""}`}
      onClick={() => setIsSelected(!isSelected)}
    >
      <div id="file-icon-container">
        <img src={fileIcon} alt="file icon" />
        <p id="extension-text">.{extension}</p>
      </div>
      <p id="filename-text" className="text-center">
        {fileName}
      </p>
    </div>
  );
}
