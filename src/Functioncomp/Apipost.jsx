import React, { useState, useEffect } from "react";

const Apipost = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState([]);

  function savedata() {
    // console.log(name, email, password);
    let data = { name, email, password };

    if ((name = " ")) {
      alert("enter your name");
    }
     else if ((email = " ")) {
      alert("enter your email");
    } 
    else if ((password = " ")) {
      alert("enter your password");
    }
     else if ((user = " ")) {
      alert("enter your user");
    }

    fetch("http://localhost:5000/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((result) => {
      console.log(result);
      result.json().then((resp) => {
        console.log(resp);
      });
    });
  }
  useEffect(() => {
    fetch("http://localhost:5000/user").then((data) => {
      data.json().then((resp) => {
        console.log(resp);
        setUser(resp);
      });
    });
  }, []);

  return (
    <>
      <h1>api post</h1>
      <form>
        <table width="50%" align="center" border="1">
          <tr>
            <td>
              <label htmlFor="">Username</label>
            </td>
            <td>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="enter your name"
              />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="">email</label>
            </td>
            <td>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="enter your email"
              />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="">password</label>
            </td>
            <td>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="enter your password"
              />
            </td>
          </tr>
          <tr>
            <td>
              <button onClick={savedata}>submit</button>
            </td>
          </tr>
        </table>
        <br />
        <br />
        <table border="1" width="70%" align="center">
          <tr>
            <td>name</td>
            <td>email</td>
            <td>password</td>
          </tr>
          {user.map((item) => (
            <tr>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.password}</td>
            </tr>
          ))}
        </table>
      </form>
    </>
  );
};

export default Apipost;
