import React from 'react';
class Join extends React.Component{
  constructor(){
    super();
    this.state= {name:"",mail:"",phno:null,add:"",errmsg:""};
  }
  uservalue=(event)=> {
    let n=event.target.name;
    let v=event.target.value;
    let err=" ";
    if(n==="phno"){
      if(v!==" "&&!Number(v)){
        err=<strong>invalid,This must be number</strong>
      }
      this.setState({errmsg1:err});
    }
  }
  formSubmit=(event)=> {  
    event.preventDefault();
    alert("Registration is Success"); 
  }                                                                                          
  render(){
    return(
      <div>
        <h1>Join Us</h1>
      <form onSubmit={this.formSubmit}>
        <br /><br />

        <h2>Name : <input type="text" name="username" onChange={this.uservalue} /> <br /><br /></h2> 

        <h2>Phone : <input type="text" name="phno" onChange={this.uservalue}/></h2>
        {this.state.errmsg1}<br /><br />

        <h2>Mail : <input type="text" id='mail' name="mail" onChange={this.uservalue}/></h2><br /><br />

        <h2>Message : <input type="text" name="add" onChange={this.uservalue}/></h2><br /><br />


        <input type='submit' />
      </form>
      </div>
    );
  }
}
export default Join;