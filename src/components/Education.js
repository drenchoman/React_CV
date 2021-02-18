import React, { Component } from 'react'
import ShowHideEducation from './ShowHideEducation'

const style = {
  title: {
    fontFamily: 'Lora, serif',
    color:'white'
  },
  div: {
    paddingLeft: '5%'
  },

}

class Education extends Component {
  constructor(props) {
      super(props)
      this.state = {
        eduHidden : true,
      }

    }



  changeField = () => {
    this.setState({
      eduHidden: !this.state.eduHidden,
    },() => console.log(this.state.eduHidden)
  )
  }

    render() {
        return (
            <div style={style.div}>
              <h2 style={style.title}>{this.props.title}</h2>
              <button style={style.buttonSize} onClick={this.changeField}>➕</button>
              <ShowHideEducation hidden={this.state.eduHidden} />
            </div>
        )
    }
}

export default Education
