class WelcomeText extends React.Component {
    render() {
        return (
            <h1>Hello Images</h1>
        )
    }
}
class NavigationBar extends React.Component {
    render(){
        return(
            <div className="navbar">
                <WelcomeText/>
                <input type="text"/>
                <button>Search</button>
                <div className="icons">
                    <span>Home</span>
                    <span>About</span>
                    <span>Services</span>
                    <span>Home</span>
                    <span>Contacts</span>
                </div>
            </div>
        )
    }
}