/** @format */

import PropTypes from "prop-types";

function UserGreeting(props) {
  // if(props.isLoggedIn)
  // {
  //     return <h2>Welcome {props.username}</h2>
  // }
  // else
  // {
  //     return <h2>Please log in to continue</h2>
  // }
  //? -->  or ternuary operator
  // return(props.isLoggedIn ? <h2 className="Welcome-mess">Welcome {props.username}</h2> :
  //                         <h2 className="login-prompt">Please log in to continue</h2>)

  //? --> or using variable name;
  const WelcomeMessage = (
    <h2 className="Welcome-mess">Welcome {props.username}</h2>
  );
  const loginPrompt = (
    <h2 className="login-prompt">Please log in to continue</h2>
  );

  return props.isLoggedIn ? WelcomeMessage : loginPrompt;
}

UserGreeting.propTypes = {
  isLoggedIn: PropTypes.bool,
  username: PropTypes.string,
};

UserGreeting.defaultProps = {
  isLoggedIn: false,
  username: "Guest",
};
export default UserGreeting;
