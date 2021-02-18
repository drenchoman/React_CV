import React from 'react'

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'green',
    color: 'white',
    height: '10vh',
    width: '100%',

  },
  text: {
    fontFamily: 'Merriweather',
    fontSize: '2em',
  }
};

function DisplayTitle(props) {
    return (
        <div style={styles.header}>
          <h2 style={styles.text}>{props.title}</h2>
        </div>
    )
}

export default DisplayTitle
