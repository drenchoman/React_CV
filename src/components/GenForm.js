import React, {Component} from 'react'

const styles = {
  formDiv: {
    display: 'flex',
    flexDirection: 'column',
    width: '50%',
    paddingLeft: '5%',
    paddingTop: '2.5%',

  },
  labelPretty: {
    fontFamily: 'Merriweather',
    fontWeight: '700',
  },
  inputPadding: {
    margin: '1% 0',
  }

};

class GenForm extends Component {
  constructor(props) {
      super(props)

      this.state = {
           firstName: "Nacho",
           lastName: "Libre",
           email: "RamsesLover@gmail.com",
           phone: "0123456",
      }
  }
handleChange = (e) =>{
  this.setState({
    [e.target.name]: e.target.value,
  })
}

clearFocus = (e) => {
  this.setState({
    [e.target.name]: "",
  })
}

render(){
    return (
    <form>
      <div style={styles.formDiv}>
        <label style={styles.labelPretty} htmlFor="firstName">First Name</label>
        <input  style={styles.inputPadding} onFocus={this.clearFocus} type="text" name="firstName" onChange={this.handleChange} value={this.state.firstName}></input>
        <label style={styles.labelPretty} htmlFor="lastName">Last Name</label>
            <input style={styles.inputPadding} onFocus={this.clearFocus} type="text" name="lastName" onChange={this.handleChange} value={this.state.lastName}></input>
        <label style={styles.labelPretty} htmlFor="email">Email Address</label>
            <input  style={styles.inputPadding} onFocus={this.clearFocus} type="email" name="email" onChange={this.handleChange} value={this.state.email}></input>
        <label style={styles.labelPretty} htmlFor="phone">Phone Number</label>
        <input  style={styles.inputPadding} onFocus={this.clearFocus} type="number" name="phone" onChange={this.handleChange} value={this.state.phone}></input>
      </div>
    </form>

    )
}
};

export default GenForm
