//validation is  not working
function Deposit(){
  const [show, setShow]     = React.useState(true);
  const [status, setStatus] = React.useState('');  

  return (
    <Card
      bgcolor="success"
      txtcolor="white"
      header="Deposit"
      status={status}
      body={show ? 
        <DepositForm setShow={setShow} setStatus={setStatus}/> :
        <DepositMsg setShow={setShow}/>}
    />
  )
}

function DepositMsg(props){
  return (<>
    <h5>Thank you for your Deposit!</h5>
    <button type="submit" 
      className="btn btn-dark" 
      onClick={() => props.setShow(true) /* cant clear message after successful deposit */ && props.setStatus('')}>
        Make another deposit
    </button>
  </>);
} 

function DepositForm(props){
  const [email, setEmail]   = React.useState('');
  const [amount, setAmount] = React.useState(''); 

  function handle(){
    fetch(`/account/update/${email}/${amount}`)
    .then(response => response.text())
    .then(text => {
        try {
            const data = JSON.parse(text);
            props.setStatus(`$${amount} has been deposited into your account!`);
            props.setShow(false);
            console.log('JSON:', data);
        } catch(err) {
          if (isNaN(Number) === true) {
            props.setStatus('Please enter a numeric value');
            setTimeout(() => setAmount(''),3000)
            return false;
          };
          /*not working
          if (Number<0) {
            props.setStatus('Please enter a positive deposit amount')
            setTimeout(() => setAmount(''),3000);
            return false;
          } */
          return true;
        }
    });
  }

  return(<>

    Email<br/>
    <input type="input" 
      className="form-control" 
      placeholder="Enter email" 
      value={email} onChange={e => setEmail(e.currentTarget.value)}/><br/>
      
    Amount<br/>
    <input type="number" 
      className="form-control" 
      placeholder="Enter amount" 
      value={amount} onChange={e => setAmount(e.currentTarget.value)}/><br/>

    <button type="submit" 
      className="btn btn-dark" 
      onClick={handle}>Deposit</button>

  </>);
}