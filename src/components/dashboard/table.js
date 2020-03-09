import React from "react";

export default function Table(props) {
  const { result, delimiter, lines } = props;
  return (
    <>
      <table className="table tableSpace">
        {result && delimiter
          ? result.slice(0, lines).map((data, id) => {
              let resultArray = data.split(delimiter);
              return (
                <tbody key={id}>
                  <tr className="tr" key={id}>
                    {resultArray.map((data, i) => {
                      return (
                        <td className="td" key={i}>
                          {data}
                        </td>
                      );
                    })}
                  </tr>
                </tbody>
              );
            })
          : "No data found.. Please insert Delimiter"}
      </table>
    </>
  );
}
