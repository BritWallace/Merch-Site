import React from "react";
import PropTypes from "prop-types";


function Merch(props){
  return (
    <React.Fragment>
      <div onClick = {() => props.whenMerchClicked(props.id)}>
        <h3>{props.name}</h3>
        <p>{props.details}</p>
        <h5>{props.quantity} left</h5>
        <hr/>
      </div>
    </React.Fragment>
  );
}

Merch.propType = {
  name: PropTypes.string,
  details: PropTypes.string,
  quantity: PropTypes.number,
  id: PropTypes.string,
  whenMerchClicked: PropTypes.func
};

export default Merch;