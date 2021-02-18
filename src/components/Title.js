import React from 'react'

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'red',
    color: 'white',
    alignItem: 'center',
    width: '100%',
    height: '10vh',

  },
  title: {
    fontFamily: 'Merriweather',
    fontSize: '2rem'

  }
};

function Title(props) {
    return (
        <div style={styles.header}>
          <h1 style={styles.title}>{props.title}</h1>

        </div>
    )
}
export default Title
