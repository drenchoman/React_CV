import React from 'react';
import EduForm from './EduForm';

function ShowHideEducation(props) {

const { hidden } = props
        let message
        if (hidden){
          message = ""
        } else {
          message = <EduForm />
        }
        return message
    }


export default ShowHideEducation
