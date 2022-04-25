import React, { useState } from "react";
import Form from "./components/Form/Form";
import Menu from "./components/Menu";
import About from "./components/About";
import Results from "./components/Results/Results";
import Login from "./components/Login";
import useToken from './components/useToken'
import { BrowserRouter as Router, Route, Routes, Redirect, useLocation } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const App = () => {
  const [activeJob, setActiveJob] = useState(null);
  const { token, removeToken, setToken } = useToken();

  const onFormSubmit = (formData, authToken) => {
    if (formData) {
      const jobId = uuidv4();
      formData.append("id", jobId);
      setActiveJob(jobId);
      fetch("/api/model", {
        method: "POST",
        body: formData,
        headers: {
        Authorization: 'Bearer ' + authToken
        }
      });
    }
  };

  return (
    <Router>
      {activeJob && <Redirect to={`/${activeJob}`} />}
      <div className="ui container">
        <Menu />
        <h1 className="ui center aligned header">PlasmoCount</h1>
        <div className="ui hidden divider"></div>
        <Route
          path="/"
          exact component={About}
        />
        <Route path="/pages/login" exact><Login setToken={setToken} /></Route>
        <Route path="/pages/tool" exact>
          {token || token=="" ?
            <Form onSubmit={onFormSubmit} token={token} setToken={setToken}/>
            // only keep what is in the render prop?
          :
            <Login setToken={setToken} />
          }
        </Route>
        <div className="ui hidden divider"></div>
        <Route path="/:id" exact component={Results} />
      </div>
    </Router>
  );
};

export default App;
