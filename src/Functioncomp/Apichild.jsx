import React, { useEffect, useState } from "react";

const Apichild = () => {
  const [user, setUser] = useState([]);
  // fetch("url")

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos").then((data) => {
      data.json().then((resp) => {
        console.log(resp);
        setUser(resp);
      });
    });
  });

  return (
    <>
      <h1>Apichild</h1>
      <table border="1" width="70%" align="center">
        <tr>
          <td>userId</td>
          <td>id</td>
          <td>title</td>
          <td>completed</td>
        </tr>
        {user.map((item) => (
          <tr>
            <td>{item.userId}</td>
            <td>{item.id}</td>
            <td>{item.title}</td>
            <td>{item.completed}</td>
          </tr>
        ))}
      </table>
    </>
  );
};

export default Apichild;
