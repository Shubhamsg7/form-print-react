import React, { useState } from "react";

const App = () => {
  const [fullName, setFullName] = useState({
    fname: "",
    lname: "",
    email: "",
    mobile: "",
  });

  const inputEvent = (event) =>{
    console.log(event.target.value);
    console.log(event.target.name);

    const value = event.target.value;
    const name = event.target.name;

    setFullName((preValue) => {

      return{
        ...preValue,
        [name] : value,

      };

     /* if(name==="fname"){
        return{
          fname: value,
          lname: preValue.lname,
          email: preValue.email,
          mobile: preValue.mobile,
      };      
    }else if(name==="lname"){
      return{
        fname: preValue.fname,
        lname: value,
        email: preValue.email,
        mobile: preValue.mobile,
    };      
  } else if(name==="email"){
    return{
      fname: preValue.fname,
      lname: preValue.lname,
      email: value,
      mobile: preValue.mobile,
    };      
  }else if(name==="mobile"){
    return{
      fname: preValue.fname,
      lname: preValue.lname,
      email: preValue.email,
      mobile: value,
    };      
  }*/

  });

}


  const onSubmits = (event) => {
    event.preventDefault();
  };

  return (
    <>
    <div className="container">
    <form onSubmit={onSubmits}>
      <h1> Welcome {fullName.fname} {fullName.lname}</h1>
      <p>{fullName.email} - {fullName.mobile}</p>
      <div className="card">
      <input 
        type="text" 
        placeholder="Enter Your First Name"
        name="fname" 
        onChange={inputEvent}
        value={fullName.fname} 
      />
      <br/>
      <input 
        type="text" 
        placeholder="Enter Your Last Name"
        name="lname" 
        onChange={inputEvent} 
        value={fullName.lname} 
      /><br/>
      <input 
        type="text" 
        placeholder="Enter Your Email Address"
        name="email" 
        onChange={inputEvent} 
        value={fullName.email}
        autoComplete="off" 
      /><br/>
      <input 
        type="text" 
        placeholder="Enter Your Mobile Number"
        name="mobile" 
        onChange={inputEvent} 
        value={fullName.mobile} 
        autoComplete="off"
      />
      <br/>
      
      </div>
      </form>
    </div>
    </>
  );
};

export default App;
