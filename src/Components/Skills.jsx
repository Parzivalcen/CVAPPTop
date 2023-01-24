import { nanoid } from "nanoid";
import { Component } from "react";

class Skills extends Component {
  constructor(){
    super();
    this.state = {
      skill: {
        text: '',
        skillNumber: 0,
        id: nanoid(),
        editing: false
      }, 
      skills: []
    }
  }
  onSubmit = (e) => {
    e.preventDefault();
    const {skill} = this.state
    this.setState((prevState)=>{
      return{
        skills: [...prevState.skills, skill]
      }
    })
  } 
  onChange = (e) =>{
    const {name, value} = e.target;
    const {skill} = this.state
    this.setState({
      skill: {...skill, text: value}
    })
  }
  render (){
    const {skills} = this.state;
    const {skill} = this.state;

    const skillsComonents = 
    <div>
      {skills.map((skill) => <p>{skill.text}</p>)}
    </div>

    return(
      <div>
        <form onSubmit={this.onSubmit}>
          <label  htmlFor="skills">Enter your Skills: </label>
          <input value={skill.text} onChange={this.onChange} type="text" name="skills"  required
            />
          <button>add skill</button>
        </form>
        {skillsComonents}
      </div>
    )
  }
}

export default Skills