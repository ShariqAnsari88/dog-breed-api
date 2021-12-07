import React, { Component } from 'react'
import Breed from './components/breed';
import BreedList from './components/breed-list';

class App extends Component {

  state = {
    breedList: [],
    breedData: null
  }

  componentDidMount() {
    this.getDogBreedList()
  }

  getDogBreedList = () => {
    fetch(`https://dog.ceo/api/breeds/list/all`)
    .then((success)=> success.json())
    .then((response) => {
        console.log("response:",response);
        this.setState({breedList: Object.keys(response.message)},()=>{
          console.log(this.state.breedList)
        })
    });
  }

  setBreedData = (data) => {
    this.setState({breedData: data},()=>{
      console.log('data', this.state.breedData)
    })
  }

  render() {
    return (
      <div className="App">
        {!this.state.breedData ? 
          <BreedList 
          breedList={this.state.breedList} 
          setBreedData={this.setBreedData} /> 
          :
          <Breed 
            breedData={this.state.breedData}
            setBreedData={this.setBreedData} />
        }
      </div>
    )
  }
}

export default App
