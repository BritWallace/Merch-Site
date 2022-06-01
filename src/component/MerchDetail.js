import React from "react";
import PropTypes from "prop-types";

function MerchDetail(props) {
    const {merch, onClickingDelete}
 = props;
    return (
        <React.Fragment>
            <div onClick = {() => props.whenMerchLicked(props.id)}>
            <h1>Merch Detail</h1>
            <h3>{merch.name}</h3>
            <p><em>{props.details}</em></p>
            <h5>{props.quantity}</h5>
            <button onClick={() => onClickingDelete(merch.id)}>Close Ticket</button>
            <hr/>
            </div>
          </React.Fragment>
    );
}

MerchDetail.propTypes = {
    merch: PropTypes.object,
    onClickingDelete: PropTypes.func,
    onClickingEdit: PropTypes.func
}

export default MerchDetail;
