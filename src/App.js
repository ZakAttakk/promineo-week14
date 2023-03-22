import React from "react";
import MyForm from "./components/MyForm";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { words: [] };
  }

  componentDidMount = () => {};

  addWord = (word) => {
    // console.log(word)
    this.setState({ words: [...this.state.words, word] });
  };

  render = () => {
    // console.log(this.state);
    var words = this.state.words
    var dataToRender = words.map((w, index) => 
      <div key={w + index}>{w}</div>
    );
    console.log(dataToRender);

    return (
      <div>
        <h1>My App</h1>
        <br />
        <MyForm addWord={this.addWord} />

        {dataToRender}
      </div>
    );
  };
}

export default App;
