import { useState } from "react";

const StatefulForm = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [name, setName] = useState(null);
  const [error ,setError]=useState('')
  const handleSubmit = (e) => {
    e.preventDefault();
    if(password.length<6){
      setError('password must be 6 char or longer')
    }else{
      setError('')
      console.log(email);
    console.log(password);
    console.log(name);
    }
    
  };
  const handleEmailChange = (e) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    console.log(e.target.value);
    setPassword(e.target.value);
  };
  const handleNameChange = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={handleNameChange} type="text" name="name" />
        <br />
        <input onChange={handleEmailChange} type="email" name="email" />
        <br />
        <input onChange={handlePasswordChange} type="password" name="password" id="" />
        <br />
        <input type="submit" value="Submit" />
        {
          error&&<p>{error}</p>
        }
      </form>
    </div>
  );
};

export default StatefulForm;
