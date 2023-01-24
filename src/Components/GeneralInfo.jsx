import { Component } from 'react'

class GeneralInfo extends Component {
  constructor(){
    super();
    this.state = {
      editing: true,
    }
  }
  render (){
    const {editing} = this.state
    
    const {generalInfo} = this.props
    const Component = editing ? 
    <form onSubmit={this.handleClick} className='basicInfoForm'>
      <h2>Enter your Basic Information</h2>
      {/* name */}
      <div>
        <label  htmlFor="name">Full Name: </label>
        <input value={generalInfo.name} onChange={this.props.handleChange} type="text" name="name"  required
          />
          {generalInfo.errors.name && <p className='error'>Please enter your name</p>}
        </div>
      {/* age */}
      <div>
        <label htmlFor="age">Age </label>
        <input value={generalInfo.age} onChange={this.props.handleChange} type="number" name="age"  required/>
        {generalInfo.errors.age && <p className='error'>Please enter your age</p>}
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
      <button type='submit'>save</button>
  </form> : 
  <div>
    <h3 className='infoData name'>{generalInfo.name}</h3>
    <h3 className='infoData age'>{generalInfo.age}</h3>
    <h3 className='infoData country'>{generalInfo.country}</h3>
    <h3 className='infoData phone'>{generalInfo.phone}</h3>
    <button onClick={this.handleClick}>edit</button>
</div>
    return(
      <div>
        {Component}
      </div>
    )
  }
}

export default GeneralInfo