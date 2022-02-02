import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      mycards:[
      {
      title:"The Alchemist",
      description:"Paulo Coelho's enchanting novel has inspired a devoted following around the world.",
      buttontext:"Ok"
    },
      {
      title:"The Great Gatsby",
      description:"The Great Gatsby is a 2013 historical romantic drama film based on F. Scott Fitzgerald's 1925 novel of the same name.",
      buttontext:"Ok"
    },
      {
      title:"Jane Eyre",
      description:"Jane Eyre is a novel by Charlotte Brontë that was first published in 1847.",
      buttontext:"Ok"
    }
      ]
    }
  }

  render(){
  return (
    <div className="App">
      <div className='card'>
        {/* <div className='cardheader'>{this.state.title}</div>
        <div className='cardbody'>{this.state.description}</div>
        <div className='cardFooter'><butto
        n>{this.state.buttontext}</butto></div> */}
        {this.state.mycards.map(items =>(

          <div className='cards'>
            <div className='cardheader'>{items.title}</div>
          <div className='cardbody'>{items.description}</div>
          <div className='cardFooter'><button>{items.buttontext}</button></div>
          
          </div>
          
        ))}
      </div>
    </div>
  );
}
}

export default App;
