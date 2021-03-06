import React, { Component } from "react";
import Input from "./common/input";
import Joi from "joi-browser";
import Form from "./common/form";

class LoginForm extends Form {
  state = {
    data: {
      username: "",
      password: "",
    },
    errors: {},
  };

  schema = {
    username: Joi
    .string()
    .required()
    .label("Username"),
    password: Joi
    .string()
    .required()
    .label("Password"),
  };

  doSubmit = () => {
    console.log("Submitted");
  }

  render() {
    const { data, errors } = this.state;
    return (
      <div>
        <h1>Login Form</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            value={data.username}
            name="username"
            label="Username"
            onChange={this.handleChange}
            error={errors.username}
          />
          <Input
            value={data.password}
            name="password"
            label="Password"
            onChange={this.handleChange}
            error={errors.password}
          />
          <button 
            disabled={this.validate()}
            className="btn btn-primary"> Login </button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
