import React, { useState, useEffect } from "react";
import Data from "../src/Data/StaticData.json";

function StaticData() {
  const [dataOne, setDataOne] = useState([]);
  const [dataMany, setDataMany] = useState([]);
  useEffect(() => {
    setDataOne(Data);
    setDataMany(Data);
  }, []);     
  return (
    <div>
      <h1>Data One</h1>
      {dataOne.map((item, id) => {
        return (
          <div key={id}>
            <li>{item.first_name}</li>
          </div>
        );
      })}
      <h1>Data Many</h1>
      <table style={{ backgroundColor: "green", margin: "5px" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Gender</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {dataOne.map((item, id) => {
            return (
              <div key={id}>
                <td>{item.first_name}</td>
                <td>{item.email}</td>
                <td>{item.gender}</td>
              </div>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default StaticData;
