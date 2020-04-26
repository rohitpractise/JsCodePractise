import React, { Component } from 'react';
import CardArray from '../CardArray';
import robots from '../robots';
import SearchBox from '../SearchBox'
import ErrorBoundary from '../ErrorBoundary';
import Scroll from "../Scroll";
import { setSearchField } from '../actions'
import {connect} from "react-redux";


const mapStateToProps = state => {
    return{
        searchField: state.searchField
    }
}
const mapDispatchToProps = (dispatch) => {
    return {onSearchChange: (event) => dispatch(setSearchField(event.target.value))
}}


class App extends Component {
    constructor(){
        super()
        this.state={
            robots: []
            //,            searchfield: ''
        }    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(user => this.setState({robots: user}))
          }

//     onSearchChange= (event) => {
//     this.setState({ searchfield : event.target.value });
//      console.log(this.state.searchfield);
// }

render(){
    const {searchField , onSearchChange} = this.props;
    const filteredRobots = this.state.robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchField.toLowerCase())
    })

if (this.state.robots === []){
    this.setState({robots: robots})
}

    return (
    
    <div className='tc'>
        <h1 className='tc orange fw9'>ROBO FRIENDS</h1>
        <ErrorBoundary>
        <SearchBox searchChange={onSearchChange}/>
        <Scroll>
        <CardArray robots={ filteredRobots }/>  }
        </Scroll>
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
export default connect(mapStateToProps,mapDispatchToProps )(App);