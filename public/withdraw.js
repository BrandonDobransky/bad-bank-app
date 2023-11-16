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
          <WithdrawMsg setShow={setShow}/>}
      />
    )
  }
  
  function WithdrawMsg(props){
    return(<>
      <h5>Your withdrawl was successful!</h5>
      <button type="submit" 
        className="btn btn-dark" 
        onClick={() => props.setShow(true)}>
          Make another Withdrawl
      </button>
    </>);
  }
  
  function WithdrawForm(props){
    const [email, setEmail]   = React.useState('');
    const [amount, setAmount] = React.useState(''); 
  
    function handle(){
      fetch(`/account/update/${email}/-${amount}`)
      .then(response => response.text())
      .then(text => {
          try {
              const data = JSON.parse(text);
              props.setStatus(JSON.stringify(data.value));
              props.setShow(false);
              console.log('JSON:', data);
          } catch(err) {
              props.setStatus('Deposit failed')
              console.log('err:', text);
          }
      });
    }
  
  //not working 
  
    function validate(field, label) {
      if (!field) {
        setStatus('Error:' + label);
        setTimeout(() => setStatus(''),3000);
        return false;
      }
      if (balance - amount < 0) {
        setStatus('Error: Cannot withdraw more than is in the account')
        return false;
      }
      if (amount =!Number) {
        setStatus('Error: Please enter a valid number');
        return false;
      }
      return true;
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
        onClick={handle}>
          Withdraw
      </button>
  
    </>);
  }
  