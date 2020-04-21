import React, { Component } from 'react';
import CardArray from './CardArray';
import robots from './robots';
import SearchBox from './SearchBox'
import ErrorBoundary from './ErrorBoundary';

class App extends Component {
    constructor(){
        super()
        this.state={
            robots: robots,
            searchfield: ''
        }
    }

onSearchChange= (event) => {
    this.setState({ searchfield : event.target.value });
     console.log(this.state.searchfield);
}

render(){
    const filteredrobots = this.state.robots.filter(robot => {
        return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
    })

    return (
    
    <div className='tc'>
        <h1 className='tc dib bg-light-green i dark-red pa1 ba b--black'>Robo Friends</h1>
        <ErrorBoundary>
        <SearchBox searchChange={this.onSearchChange}/>
        <CardArray robots={ filteredrobots }/>  
        </ErrorBoundary> 
    </div>       
  
    )
}

}


// const App = () => {
// return (
//     <div className='tc'>
//         <h1 className='tc dib bg-light-green i dark-red pa1 ba b--black'>Robo Friends</h1>
//         <SearchBox />
// <CardArray robots={robots}/>  
// </div>
// )}
// ;
export default App;