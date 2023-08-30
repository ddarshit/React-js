import React, { useEffect, useState } from "react";

const Apichild = () => {
  const [user, setUser] = useState([]);
  // fetch("url")
  // we take any name instead of data and res
  // api get then after stored in data. after stored in data convert it into json formate (html view) 
  // convert in to jason we use it 
  // view api calle or not : inspect in chrome > network > name 

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos").then((data) => {
      data.json().then((resp) => {
        console.log(resp);
        setUser(resp);
      });
    });
  },[]);

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
            <td>{item.completed == true ? "True" : "False"}</td>
          </tr>
        ))}
      </table>
    </>
  );
};

export default Apichild;
