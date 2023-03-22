import React from "react";

class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {textBoxValue: ""}
  }

  componentDidMount = () => {

  };


  handleChange = (e) => {
    // console.log(e.target.value);
    this.setState({textBoxValue: e.target.value})
  }

  render() {
    // console.log(this.props.blah)
    return (
      <div>
        <input id="inputBox" onChange={this.handleChange}></input>
        <br/>
        <button onClick={() => this.props.addWord(this.state.textBoxValue)}>Submit</button>
      </div>
    );
  }
}

export default MyForm;
