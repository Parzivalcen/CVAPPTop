import { Component } from "react"
import './Experience.css'

class Experience extends Component {

render(){

  return(
    <div>
      <form onSubmit={(e) => 
        this.props.handleSubmit(e, "experience")} className="experience-form">
        <h2>Job Experience</h2>
        {/* Company name */}
        <div>
          <label htmlFor="companyName">Company Name: </label>
          <input type="text" name="companyName"
          onChange={(e)=>this.props.handleChange(e, 'experience')} />
        </div>
        {/* City */}
        <div>
          <label htmlFor="city">city: </label>
          <input type="text" name="city" onChange={(e)=>this.props.handleChange(e, 'experience')}/>
        </div>
        {/* Country */}
        <div>
          <label htmlFor="country">country: </label>
          <input type="text" name="country" onChange={(e)=>this.props.handleChange(e, 'experience')}/>
        </div>
        {/* Job Description */}
        <div>
          <p>Job description: </p>
          <textarea
            name="jobDescription"
            className="textarea"
            onChange={(e) => this.props.handleChange(e, "experience")}
          ></textarea>
        </div>
        {/* add tree points where you can delete the exp. */}
        <button type="submit">add</button>
      </form>
    </div>
  )
}
}

export default Experience