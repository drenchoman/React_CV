import React from 'react'

const styles = {
  shape:{
    color: 'white',
    position: 'absolute',
    top: '15%',
    width: '25%',
    left: '70%',

  }
}
function Span(props) {
    return (
        <div style={styles.shape}>
          <span>{props.title}</span>
        </div>
    )
}

export default Span
