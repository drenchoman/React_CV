import React, { Component } from 'react'
import ShowHideGeneral from './ShowHideGeneral'

const style = {
  title:{
    fontFamily: 'Lora, serif',
    color: 'white',
  },
  div:{
    paddingLeft: '5%'
  },

}

class Edu extends Component {
  constructor(props) {
      super(props)
      this.state = {
        genHidden : true,
      }

    }

  changeField = () => {
    this.setState({
      genHidden: !this.state.genHidden,
    },() => console.log(this.state.genHidden)
  )
  }

    render() {
        return (
            <div style={style.div}>
              <h2 style={style.title}>{this.props.title}</h2>
              <button style={style.buttonSize} onClick={this.changeField}>➕</button>
              <ShowHideGeneral hidden={this.state.genHidden} />
            </div>
        )
    }
}

export default Edu
