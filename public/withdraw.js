function Withdraw(){
    const [show, setShow]     = React.useState(true);
    const [status, setStatus] = React.useState('');  
  
    return (
      <Card
        bgcolor="danger"
        txtcolor="white"
        header="Withdraw"
        status={status}
        body={show ? 
          <WithdrawForm setShow={setShow} setStatus={setStatus}/> :
          <WithdrawMsg setShow={setShow} setStatus={setStatus}/>}
      />
    )
  }
  
  function WithdrawMsg(props){
    return(<>
      <h5>Your withdrawl was successful!</h5>
      <button type="submit" 
        className="btn btn-dark" 
        onClick={function(event){props.setShow(true); props.setStatus('');}}>
          Make another Withdrawl
      </button>
    </>);
  }
  
  function WithdrawForm(props){
    const [email, setEmail]   = React.useState('');
    const [amount, setAmount] = React.useState(''); 
  
    function handle(Number){
      fetch(`/account/update/${email}/-${amount}`)
      .then(response => response.text())
      .then(text => {
          try {
              const data = JSON.parse(text);
              props.setStatus(`$${amount} has been withdrawn from your account!`);
              props.setShow(false);
              console.log('JSON:', data);
          } catch(err) {
             //none of these are working//
            if (!Number) {  //if (isNan(Number)) also does not work
              props.setStatus('Please enter a numeric value');
              setTimeout(() => setAmount(''),3000);
              return false;
            }
            return true;
          }
      });
    }
  
    return(<>
  
      Email<br/>
      <input type="input" 
        className="form-control" 
        placeholder="Enter email" 
        value={email} 
        onChange={e => setEmail(e.currentTarget.value)}/><br/>
  
      Amount<br/>
      <input type="number" 
        className="form-control" 
        placeholder="Enter amount" 
        value={amount} 
        onChange={e => setAmount(e.currentTarget.value)}/><br/>
  
      <button type="submit" 
        className="btn btn-dark" 
        onClick={handle}>Withdraw</button>
  
    </>);
  }
  