import React from "react";
import PropTypes from "prop-types";
function ReusableForm(props) {
    return (
        <React.Fragment>
            <form onSubmit = {props.formSubmissionHandler}>
                <input
                type= 'text'
                name = 'name'
                placeholder = 'Band Name' />
                <input 
                type = 'number'
                name = 'quantity'
                placeholder = 'Total merch left'/>
                <textarea
                name='details'
                placeholder='Merch description' />
                <button type ='submit'>{props.buttonText}</button>
            </form>        
        </React.Fragment>
    );
}

ReusableForm.propTypes = {
    formSubmissionHandler: PropTypes.func,
    buttonText: PropTypes.string
};

export default ReusableForm;