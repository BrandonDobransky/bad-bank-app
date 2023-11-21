function Home(){
    return (
       <Card 
        bgcolor
        txtcolor="info"
        header="Open an account - Get $100!"
        title="Welcome to Bad Bank"
        text="High interest-earning accounts available!"
        body={(<img src="bank.png" className="img-fluid" alt="Responsive image"/>)}
       />
    );
}