import React from 'react'

const styles = {
  container:{
    display: 'flex',
    position: 'absolute',
    top: '25%', 
    width: '50%',
    height: '60%',
    border: '1px solid white'

  }
}

function Preview(props) {
    return (
        <div style={styles.container}>

        </div>
    )
};

export default Preview
