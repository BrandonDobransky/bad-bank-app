function Home(){
    return (
       <Card 
        bgcolor="info"
        txtcolor="white"
        header="Bad Bank Landing Page"
        title="Welcome to Bad Bank"
        text="Fee Free Banking!"
        body={(<img src="bank.png" className="img-fluid" alt="Responsive image"/>)}
       />
    );
}