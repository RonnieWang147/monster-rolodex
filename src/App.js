import React, {Component} from 'react';
import './App.css'
import { CardList } from './components/card-list/card-list.component';
import { SearchBar } from './components/search-bar/search-bar.component';
class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      monsters: [],
      searchField: '',
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({monsters: users}))
      .catch(err=>console.err(err));
  }
  handlesearchField = (e)=>{
    let value = e.target.value;
    this.setState({searchField: value});
  }

  render(){
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter( monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));
    return (
      <div className='App'>
        <h1 className='title'>Monsters Rolodex</h1>
        <SearchBar placeholder='search monsters' handleChange={this.handlesearchField} />
        <CardList monsters={filteredMonsters}/>
      </div>
    )
  }
}
export default App;
