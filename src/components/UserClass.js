import React from "react";
import { render } from "react-dom";
class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count:0,  
      userInfo:{
        name:"Dummy",
        location:"Default",
        avatar_url:"htp://dummy-photo.com",
      }
    };
    // console.log("Child Constructor is called..");
  }
  async componentDidMount() {
    // this.timer=setInterval(()=>{
    //   console.log("Namaste React OP")
    // },1000);
    // console.log("Child Component Did Mount   ");
    const data=await fetch('https://api.github.com/users/mohinimraut');
    const json=await data.json(); 

    this.setState({
      userInfo:json
    })
  }

  componentDidUpdate(){
    console.log("Component Did Update....")
  }

  componentWillUnmount(){
    // clearInterval(this.timer);
    console.log("COmponentWillUnmount");
    //This function call just before component unmounting
  }
  render() {
    // const { name, location } = this.props;
    const { count } = this.state;
    // console.log("Child render is called...");
    const {name,location,login,id,avatar_url}=this.state.userInfo;
    // debugger;
    console.log("userinfo is",this.state.userInfo)
    return (
      <div className="user-card">
        <img src={avatar_url}/>
        <h1>Count :{count}</h1>
        <button
          onClick={() => {
            this.setState({ count: count + 1 });
          }}
        >
          Count Increase
        </button>
        <h2>User Name-----: {login}</h2>
        <h2>Id :{id}</h2>
        <h3>Location------: {location}</h3>
        <h4>Contact----: @mohiniraut75</h4>
      </div>
    );
  }
}

export default UserClass;
 