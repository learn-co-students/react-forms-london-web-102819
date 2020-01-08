import React from "react";
import Form from "./Form.js";
import DisplayData from "./DisplayData.js";

class ParentComponent extends React.Component {
  state = {
    firstName: "John",
    lastName: "Henry",
    submittedData: []
  };

  handleFirstNameChange = event => {
    this.setState({
      firstName: event.target.value
    });
  };

  handleLastNameChange = event => {
    this.setState({
      lastName: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    let formData = {
      firstName: this.state.firstName,
      lastName: this.state.lastName
    };
    let dataArray = this.state.submittedData.concat(formData);
    this.setState({ submittedData: dataArray });
  };

  render() {
    return (
      <div>
        <Form
          formData={this.state}
          handleFirstNameChange={this.handleFirstNameChange}
          handleLastNameChange={this.handleLastNameChange}
        />
        <DisplayData formData={this.state} />
      </div>
    );
  }
}

export default ParentComponent;
