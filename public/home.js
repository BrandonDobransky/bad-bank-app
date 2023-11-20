function Home(){
    return (
       <Card 
        bgcolor
        txtcolor="info"
        header="Bad Bank Landing Page"
        title="Welcome to Bad Bank"
        text="Fee Free Banking!"
        body={(<img src="bank.png" className="img-fluid" alt="Responsive image"/>)}
       />
    );
}