import React from "react";
import TextField from "../textField";

export default function FilterTab(props) {
  const { handleLines, handleDelimiter, delimiter, lines } = props;
  return (
    <>
      Delimiter: <TextField handleChange={handleDelimiter} value={delimiter} />
      <span className="internalSpace">Lines:</span>
      <TextField handleChange={handleLines} value={lines} />
    </>
  );
}
