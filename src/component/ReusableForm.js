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
                type = 'integer'
                name = 'quantity'
                placeholder = 'Total merch left'/>
                <textarea
                name='details'
                placeholder='Merch description' />
                <button type

            </form>        
        </React.Fragment>
    )
}