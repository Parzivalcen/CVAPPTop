import { Component } from 'react'

class GeneralInfo extends Component {
  render (){
    
    const {generalInfo} = this.props
    const Component = 
  <form className='basicInfoForm'>
      <h2>Enter your Basic Information</h2>
      {/* name */}
      <div className='name-input-container input-container'>
        <div className='name-container info-container'>

          <label style={generalInfo.name !== '' ? {display:'none'}:{display:''}} className='name-label label' htmlFor="name">Full Name: </label>
          <input value={generalInfo.name} onChange={this.props.handleChange} type="text" name="name"  required
          className='name input'
          />
        </div>
          {generalInfo.errors.name && <p className='error'>Please enter your name</p>}
        </div>
      {/* age */}
      <div className='age-input-container input-container'>
        <div className='age-container info-container'>
          <label 
          style={generalInfo.age === 0 || generalInfo.age === '' ? {display:''}:{display:'none'}}
          htmlFor="age" 
          className='age-label label'>Age </label>

          <input 
          value={generalInfo.age === 0 ? '':generalInfo.age} 
          onChange={this.props.handleChange} 
          type="number" name="age" className='age input'  
          required/>
        </div>
        {generalInfo.errors.age && <p className='error'>Please enter your age</p>}
      </div>
      {/* city */}
      <div>
        <div className="city-input-container input-container">
          <div className="city-container info-container">
            <label 
            htmlFor="city"
            style={generalInfo.city === ''?{display:''}:{display:'none'}}
            className='label'>City </label>
            <input 
            className='input'
            value={generalInfo.city} 
            onChange={this.props.handleChange} 
            type="text" name="city"  required/>
          </div>
        {generalInfo.errors.city && <p className='error'>Please enter your city</p>}
        </div>
      </div>
      {/* country */}
      <div>
        <label htmlFor="country">Country  </label>
        <input value={generalInfo.country} onChange={this.props.handleChange} type="text" name="country"  required/>
        {generalInfo.errors.country && <p className='error'>Please enter your country of residence</p>}
      </div>
      {/* phone */}
      <div>
        <label htmlFor="Phone">Phone </label>
        <input value={generalInfo.phone} onChange={this.props.handleChange} type="text" name="phone" required />
        {generalInfo.errors.phone && <p className='error'>Please enter your phone number</p>}
      </div>
  </form> 

    return(
      <div>
        {Component}
      </div>
    )
  }
}

export default GeneralInfo