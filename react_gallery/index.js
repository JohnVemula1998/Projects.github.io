class App extends React.Component {
    render(){
        return(
            <div>
                <NavigationBar/> 
                <Gallery/>
            </div>
        )
    }
}


ReactDOM.render(
    <App/>,
    document.getElementById('app')
)