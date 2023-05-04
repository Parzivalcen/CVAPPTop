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
    const {skills} = this.props.Skills;
    const {skill} = this.props.Skills;
// add a place where you can delete the skill, in case they are wrong
    return(
      <div>
        <form onSubmit={e=>this.props.handleSubmit(e, 'skills')}>
          <label  htmlFor="skills">Enter your Skills: </label>
          <input 
          value={skill.text} onChange={this.props.handleChange} type="text" name="skills"  required
            />
          <button>add skill</button>
        </form>
      </div>
    )
  }
}

export default Skills