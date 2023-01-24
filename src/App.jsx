import { Component, useState } from 'react'
import { nanoid } from 'nanoid'
import CVpage from './Components/CvPage'
import GeneralInfo from './Components/GeneralInfo'
import Skills from './Components/Skills'

class App extends Component{
  constructor(props){
    super(props);
    this.state = {generalInfo:{
      editing: true,
      name: 'eg: Jon Doe', age: 0, country: 'eg: Paraguay', phone: 0,
      errors: {},
    },
    Skills: {
      skill: {
      text: '',
      skillNumber: 0,
      id: nanoid(),
      editing: false
    }, 
    skills: []}
  }
}

handleChange = (e) => {
  const {name, value} = e.target;
  this.setState((prevState)=>{

    return {
      generalInfo:{
      ...prevState.generalInfo,
      [name]:value,
      errors: {
        ...prevState.errors,
        [name]:value.length === 0,
      }
    }
    }
  })
}
  render(){

    return(
      <main>
        <h1>Create your awesome CV</h1>
        <div className='cv-components'>
          <GeneralInfo 
          generalInfo={this.state.generalInfo}
          handleChange={this.handleChange}/>
          <Skills/>
          <CVpage GeneralInfo={''}/>
        </div>
      </main>
    )
  }
}

export default App
