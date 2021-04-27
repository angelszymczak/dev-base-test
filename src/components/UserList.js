import React from "react";
import PropTypes from "prop-types";

// import the User component
import User from "./User";

function UserList(props) {
  return (
    <div>{props.users.map(c => <User key={c.id} name={c.name} />)}</div>
  );
}

UserList.propTypes = {
  users: PropTypes.array.isRequired
};

export default UserList;
