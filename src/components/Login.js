import React, { useState } from 'react';
import axios from "axios";

function Login(props) {

    const [loginForm, setloginForm] = useState({
      username: "",
      password: ""
    })

    function logMeIn(event) {
      axios({
        method: "POST",
        url:"/token",
        data:{
          username: loginForm.username,
          password: loginForm.password
         }
      })
      .then((response) => {
        props.setToken(response.data.access_token);
      }).catch((error) => {
        if (error.response) {
          console.log(error.response)
          console.log(error.response.status)
          console.log(error.response.headers)
          }
      })

      setloginForm(({
        username: "",
        password: ""}))

      event.preventDefault()
    }

    function handleChange(event) {
      const {value, name} = event.target
      setloginForm(prevNote => ({
          ...prevNote, [name]: value})
      )}

    return (
    <div className="ui styled accordion" style={{margin: 'auto'}}>
      <div className={"active content"}>
        <form className="ui form">
          <div className="field">
            <label>Username</label>
            <input onChange={handleChange}
                  type="text"
                  text={loginForm.username}
                  name="username"
                  placeholder="Username"
                  value={loginForm.username} />
          </div>
          <div className="field">
            <label>Password</label>
            <input onChange={handleChange}
                  type="password"
                  text={loginForm.password}
                  name="password"
                  placeholder="Password"
                  value={loginForm.password} />
          </div>
          <button className="ui button" type="submit" onClick={logMeIn}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );

}

export default Login;