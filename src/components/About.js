import React from "react";
import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/userContext";
class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor....");
  }
  componentDidMount() {
    console.log("Parent component did mount");
  }

  componentWillUnmount() {
    console.log("Component Unmount");
  }
  render() {
    console.log("Parent Render...");
    return (
      <div>
        <h1>About</h1>
        <div>
          LoggedIn User
          <UserContext.Consumer>
            {({ loggedInUser }) => (
              <h1 className="text-xl font-bold">{loggedInUser}</h1>
            )}
          </UserContext.Consumer>
        </div>
        <h2>This is Namaste React Web Series</h2>
        <User name={"Mohini - (function component)"} location={"Virar"} />
        <UserClass name={"Mohini - in Class Component"} />
      </div>
    );
  }
}

export default About;
