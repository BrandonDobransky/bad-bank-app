function Spa(){
    return (
        <HashRouter>
            <div>
            <NavBar/>
                <UserContext.Provider value={{users:[{name:'brandon', email:'brandon@gmail.com', password:'golden', balance: 500}]}}>
                 <div className="container" style={{padding: "15px"}}>
                    <Route path="/" exact component={Home} />
                    <Route path="/CreateAccount/" component={CreateAccount} />
                    <Route path="/login/" component={Login} />
                    <Route path="/deposit/" component={Deposit} />
                    <Route path="/withdraw/" component={Withdraw} />
                    <Route path="/alldata/" component={AllData} />
                 </div>
                </UserContext.Provider>
            </div>
        </HashRouter>
    );
}

ReactDOM.render(
    <Spa/>,
    document.getElementById('root')
)