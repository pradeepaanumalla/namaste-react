import User from "./User";
import UserClass from "./UserClass";
import React, { useEffect } from "react";

class About extends React.Component{
    constructor(props){
        super(props);
        console.log("parent constructor")

    }
    
    render(){
        console.log("parent render")

        return (
            <div className="abouts">
            <h4>This is namaste react app</h4>
            <h4>We are a food delivery company</h4>
            <div>
                {/* <User name="pradeepa function" location="hyderabad" contact="@PradeepaAnumalla" /> */}
                <UserClass />
                <User />
            </div>
            </div>
        );
    }
    componentDidMount(){
        console.log("parent componentDidMount")

    }


}
// const About = () => {
//     useEffect(()=>{
//         console.log("parent use effect");
//     })
//   return (
//     <div className="abouts">
//       <h4>This is namaste react app</h4>
//       <h4>We are a food delivery company</h4>
//       <div>

       
//         {/* <User name="pradeepa function" location="hyderabad" contact="@PradeepaAnumalla" /> */}
//         <UserClass  />
//         <User />
//       </div>
//     </div>
//   );
// };

export default About;
