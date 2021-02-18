import React, { Component } from "react";
import General from "./components/General";
import Education from "./components/Education"
import Title from "./components/Title"
import DisplayTitle from "./components/DisplayTitle"
import Preview from "./components/Preview"
import Span from "./components/Span"

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row'
  },
  input: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'red',
    width: '60vw',
    height: '100vh',

  },
  output: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'green',
    width: '40vw',
    height: '100vh',
    position: 'relative'
  }

};


class App extends Component {
  constructor(props){
    super(props)

  };
  render() {
  return (
    <div style ={styles.container}>
      <div style = {styles.input}>
        <Title title= "Create your own CV" />
        <General title= "General Info" />
        <Education title ="Education" />
      </div>
      <div style = {styles.output}>
        <DisplayTitle title= "Preview:" />
        <Span title="Watch as you build your new CV" />
        <Preview />

      </div>
    </div>


  );

  }

}

export default App;
