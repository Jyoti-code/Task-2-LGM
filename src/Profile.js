import React from "react";
class Profile extends React.Component{
    componentWillUnmount()
    {
        alert("componentWillUnmount called")
    }
  render(){
    return(
      <div className='App'>
      <h1>Student Component</h1>
      </div>
      );
  }
}
export default Profile;
