//trouble with creating context
//import UserContext from '../userContext.js';
//import {useContext} from 'react';


function Login(){
    const [show, setShow]     = React.useState(true);
    const [status, setStatus] = React.useState('');
    
    return (
      <Card
        bgcolor="info"
        txtcolor="white"
        header="Login"
        status={status}
        body={show ? 
          <LoginForm setShow={setShow} setStatus={setStatus}/> :
          <LoginMsg setShow={setShow} setStatus={setStatus}/>}
      />
    ) 
  }
  
  function LoginMsg(props){
    const ctx = React.useContext(UserContext);
    return(<>
      <h5>Welcome Back {ctx.name}!</h5>
      <button type="submit" 
        className="btn btn-dark" 
        onClick={() => props.setShow(true)}>
          Log out
      </button>
    </>);
  }
  
  function LoginForm(props){
    const [email, setEmail]       = React.useState('');
    const [password, setPassword] = React.useState('');
  
    function handle(){
      fetch(`/account/login/${email}/${password}`)
      .then(response => response.text())
      .then(text => {
          try {
              const data = JSON.parse(text);
              props.setStatus('');
              props.setShow(false);
              console.log('JSON:', data);
          } catch(err) {
              props.setStatus(text)
              console.log('err:', text);
          }
      });
    }
  
    return (<>
  
      Email<br/>
      <input type="input" 
        className="form-control" 
        id="email"
        placeholder="Enter email" 
        value={email} 
        onChange={e => setEmail(e.currentTarget.value)}/><br/>
  
      Password<br/>
      <input type="password" 
        className="form-control" 
        id="password"
        placeholder="Enter password" 
        value={password} 
        onChange={e => setPassword(e.currentTarget.value)}/><br/>
  
      <button type="submit" className="btn btn-dark" onClick={handle}>Log in</button>
     
    </>);
  }  

  //export default Login;