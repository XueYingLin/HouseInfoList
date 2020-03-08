import React, { useState } from "react";
// import { checkPropTypes } from "prop-types";

const LogIn = props => {
  const [memberInfo, setMemeberInfo] = useState({ email: "", password: "" });
  const submitHandler = event => {
    event.preventDefault();
    props.addPerson(memberInfo);
  };

  const handleChange = event => {
    setMemeberInfo({
      ...memberInfo,
      [event.target.name]: event.target.value
    });
  };

  return (
    <div className="logIn">
      <form onSubmit={submitHandler}>
        <div className="email">
          <label htmlFor="email">email</label>
          <input
            id="email"
            type="email"
            onchange={handleChange}
            placeholder="Email"
            required
            s
          />
        </div>

        <div className="password">
          <label htmlFor="password">password</label>
          <input
            id="password"
            type="password"
            onChange={handleChange}
            placeholder="PAssword"
            required
          />
        </div>

        <div className="submit">
          <label htmlFor="submit" />
          <input id="submit" type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
};

export default LogIn;
