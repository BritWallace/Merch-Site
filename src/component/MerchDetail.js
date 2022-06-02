import React from "react";
import PropTypes from "prop-types";

function MerchDetail(props) {
    const {merch, onClickingEdit, onClickingDelete} = props;
    return (
        <React.Fragment>
            <h1>Merch Detail</h1>
            <h3>{merch.name}</h3>
            <p><em>{merch.details}</em></p>
            <h5>{merch.quantity}</h5>
            <button onClick={onClickingEdit}>Update Merch</button>
            <button onClick={()=> onClickingDelete(merch.id) }>Close</button> 
            <hr/>
        </React.Fragment>
    );
}

MerchDetail.propTypes = {
    merch: PropTypes.object,
    onClickingDelete: PropTypes.func,
    onClickingEdit: PropTypes.func
}

export default MerchDetail;
