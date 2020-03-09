import React from "react";

export default function TextField(props) {
  const { handleChange,value } = props;
  return (
    <>
      <input type="text" defaultValue={value} onChange={handleChange}></input>
    </>
  );
}
