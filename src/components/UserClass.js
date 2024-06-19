import React from "react";
import UserContext from "../utils/UserContext";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      x: 1,
      user: {
        name: "",
        location: "",
        company: "",
      },
    };
  }
  async componentDidMount() {
    console.log("component did mount 111");

    let data = await fetch("https://api.github.com/users/akshaymarch7");
    let json = await data.json();
    this.setState({
      user: json,
    });
  }
  componentDidUpdate() {
    console.log("component did update 222");
  }
  componentWillUnmount() {
    console.log("component will unmount 333");
    console.log("clear while removing component from dom");

    clearInterval(this.timer);
  }
  render() {
    const { name, location, contact } = this.state.user || {};
    const { count } = this.state;
    return (
      <div className="user-card">
        {this.state.asd}
        <h2> Count : {count}</h2>
        <h2> Name : {name}</h2>
        <h3>Location : {location}</h3>
        <h4>Contact : {contact}</h4>
        <UserContext.Consumer>
          {(data) => {
            return data.loggedInUser;
          }}
        </UserContext.Consumer>
        {this.state.x}
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          Update counter 
        </button>
        
      </div>
    );
  }
}

export default UserClass;
