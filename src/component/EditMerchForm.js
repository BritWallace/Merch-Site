import React from "react";
import ReusableForm from "./ReusableForm";

function EditMerchForm(props){
    const { merch } = props;

    function handleEditMerchFormSubmission(event){
        event.preventDefault();
        props.onEditMerch({name: event.target.name.value, details: event.target.details.value, id: merch.id});
    }

    return(
        <React.Fragment>
            <ReusableForm
            formSubmissionHandler={handleEditMerchFormSubmission}
            buttonText="Update Merch" />
        </React.Fragment>
    );
}

export default EditMerchForm;