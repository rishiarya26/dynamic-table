import React from "react";
import { useState } from "react";
import Navbar from "../navbar";
import UploadFile from "./uploadFile";
import FilterTab from "./filterTab";
import Table from "./table";

export default function Dashboard(props) {
  const [info, setInfo] = useState({ value: "", filename: "" });
  const [result, setResult] = useState([]);
  const [delimiter, setDelimiter] = useState(",");
  const [lines, setLines] = useState(2);

    /* handles change value for delimiter  */
  const handleDelimiter = e => {
    setDelimiter(e.currentTarget.value);
  };

  /* handles change value for lines  */
  const handleLines = e => {
    setLines(e.currentTarget.value);
  };

  /* reads uploaded file and splits it into array of strings on basis of every newline */
  const handleChange = e => {
    let files = e.target.files;
    setInfo({ value: files[0], filename: files[0].name });
    if (files && files[0]) {
      var myFile = files[0];
      var reader = new FileReader();

      reader.addEventListener("load", e => {
        let result = reader.result;
        let arr = result.length ? result.split("\n") : []; //splitting based on newline
        setResult(arr);
      });
      reader.readAsText(myFile);
      setInfo({ value: "", filename: "" }); 
    }
  };

  return (
    <>
      <Navbar />
      <div>
        <UploadFile handleChange={handleChange} />
        <div>
          <h4 className="marg-table">Dynamic Table for Uploaded File</h4>
          <span className="marg-table-inside">
            <FilterTab
              handleDelimiter={handleDelimiter}
              handleLines={handleLines}
              delimiter={delimiter}
              lines={lines}
            />
            <Table lines={lines} delimiter={delimiter} result={result} />
          </span>
        </div>
      </div>
    </>
  );
}
