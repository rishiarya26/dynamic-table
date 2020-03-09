import React from "react";

export default function UploadFile(props) {
  const { handleChange } = props;
  return (
    <>
      <div className="marg">
        <form className="upload card2">
          <label htmlFor="file-upload ">Upload File</label>
          <div className="filename marg-top">
            {" "}
            <input type="file" id="file-upload " onChange={handleChange} />
          </div>
        </form>
      </div>
    </>
  );
}
