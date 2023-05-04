import { nanoid } from "nanoid";
import { Component } from "react";
import Experience from "./Experience";

class CVpage extends Component {
  constructor(props){
    super(props);
    this.state = {
      showOptions: false,
    }
  }
  showOptions = () =>{
    this.setState(prevState=>{
      return{
        showOptions: !prevState.showOptions
      }
    })
  }
  render(){
    const{generalInfo, Skills, JobExperiences,remove} = this.props
    const skillsComponent = 
    <ul>
      {Skills.skills.map(skill=>
      <li key={skill.id}>{skill.text} 
      {/* option menu that pops out the button that is pressed */}
      <div className="menu-container">
        <button onClick={this.showOptions} className="tree-dots"></button>
        <button onClick={e=>remove(skill.id)} className={this.state.showOptions ? 'delete': 'hide delete'}>
        D</button>
        <button className={this.state.showOptions ? 'edit': 'hide edit'}>edit</button>
      </div>
      </li>
      )}
    </ul>
      
      const jobExperienceCoponent = 
        <div>
          {JobExperiences.experiences.map(experience=>
            <div>
              <p>{experience.companyName}</p>
            </div>)}
        </div>
    return(
      <div>
        <h1>Your CV</h1>
        <div className="cv-container">
          <div className="general-info">
            <h2 className="name">{generalInfo.name}</h2>
            <p className="city">{generalInfo.city}</p>
            <p className="country">{generalInfo.country}</p>
            <p className="age">{generalInfo.age} years old</p>
            <p className="phone">{generalInfo.phone}</p>
          </div>
          <div className="skills">
            <h2>Skills</h2>
            {skillsComponent}
          </div>
          <div className="jobExperience">
            <h2>Job Experience</h2>
            {jobExperienceCoponent}
          </div>
        </div>
      </div>
    )
  }
}

export default CVpage;