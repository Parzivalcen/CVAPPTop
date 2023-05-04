import { Component, useState } from 'react'
import { nanoid } from 'nanoid'
import CVpage from './Components/CvPage'
import GeneralInfo from './Components/GeneralInfo'
import Skills from './Components/Skills'
import Experience from './Components/Experience'

class App extends Component{
  constructor(props){
    super(props);
    this.state = {generalInfo:{
      editing: true,
      name: '', age: 0, city: 'Laconia', country: 'USA', phone: 6038006525,
      errors: {},
      skills: []
    },
    Skills: {
      skill: {
      text: '',
      skillNumber: 0,
      id: nanoid(),
      editing: false
    }, 
    skills: [{
      text: 'good conversation',
      skillNumber: 0,
      id: nanoid(),
      editing: false
    }]},
    JobExperiences:{
      JobExperience:{
        companyName: '',
        city:'',
        country:'',
        jobDescription:'',
        id: nanoid(),
      },
      experiences: [],
      
    }
  }
  this.handleClick = this.handleClick.bind(this)
  this.handleChange = this.handleChange.bind(this)
}

handleChange = (e, component) => {
  const {name, value} = e.target;
  const {skill} = this.state.Skills
  this.setState((prevState)=>{
    if(name === 'skills'){
      return {
        Skills:{
          ...prevState.Skills,
          skill: {...skill, text: value}
        }
      }
    }
    else if(component==='experience'){
      return{
        JobExperiences:{
          ...prevState.JobExperiences,
          JobExperience:{
            ...prevState.JobExperiences.JobExperience,
            [name]:value,
          }
        }
      }
    }else{
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
    }
    })
}
handleClick = (event, componentName) => {
  event.preventDefault();
  if(componentName === 'skills'){
    console.log('skills');
    const {skills} = this.state.Skills
    const {skill} = this.state.Skills
    this.setState((prevState)=>{
      return{
        Skills:{
          ...prevState.Skills,
          skills: [...skills, skill],
          skill: {...skill, id:nanoid(), text: ''}
        }
      }
    })

    }else{
      const {experiences} = this.state.JobExperiences
      const {JobExperience} = this.state.JobExperiences
      console.log(this.state.JobExperiences)
      this.setState((prevState)=>{
        return{
          JobExperiences:{
            ...prevState.JobExperiences,
            experiences: [...experiences, JobExperience],
            JobExperience:{...JobExperience, id:nanoid(),}
          }
        }
      })
    }
  }
  remove=(id)=>{
    const{skills} = this.state.Skills
    const newArray = skills.filter(skill=>skill.id!==id)
        this.setState((prevState)=>{
          return{
            Skills:{
              ...prevState.Skills,
              skills:newArray
            }
          }
        })
  }
  showOptions =(e)=>{
    e.target.classList
  }
  render(){

    return(
      <main>
        <h1>Create your awesome CV</h1>
        <div className='cv-components'>
          <GeneralInfo 
          generalInfo={this.state.generalInfo}
          handleChange={this.handleChange}
          handleSubmit={this.handleClick}/>
          <Skills 
          Skills={this.state.Skills} 
          handleChange={this.handleChange}
          handleSubmit={this.handleClick}
          delete={this.remove}/>
          <Experience
          handleSubmit={this.handleClick}
          handleChange={this.handleChange}
          />
          <CVpage 
          generalInfo={this.state.generalInfo}
          Skills = {this.state.Skills}
          JobExperiences = {this.state.JobExperiences}
          showOptions = {this.showOptions}
          remove={this.remove}
          />

        </div>
      </main>
    )
  }
}

export default App
