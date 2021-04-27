import React from "react";
import PropTypes from "prop-types";
import "./User.css";

function User(props) {
  return (
    <div className="user">
      <span>{props.name}</span>
    </div>
  );
}

User.propTypes = {
  name: PropTypes.string.isRequired
};

export default User;
