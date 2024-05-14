import React from 'react';
import Child from './Child.jsx';

class App1 extends React.Component{
  constructor(props)
  {
    super(props);
    this.state = {
      'name1': 'LTH',
      'show': true,
      'name1': props.name,
      'address1': props.address,
        'mobile1': props.mobile
      
      ,
     }
      this.hideData=this.hideData.bind(this);
      this.showData=this.showData.bind(this);
  }
  static getDerivedStatesFromProps(props,state)
  {
    return null;
  }
  componentDidMount() {
   

}
hideData(){
  this.setState({show:false});
  
}
showData(){
  this.setState({show:true});
}
  render(){
    return(
     <div style={{marginLeft:'550px', textAlign:'center'}}>
     {
      (this.state.show)? <><Child/><h1> Name : {this.state.name1}<br></br>  <br></br>  Address :  {this.state.address1} <br></br> <br></br>  Mobile : {this.state.mobile1}</h1><br></br></> : ""
     }
     <button style={{margin:'20px'}} onClick={this.hideData} className=' text-white ml-2'>Hide</button>
     <button   style={{margin:'20px'}}   onClick={this.showData} className=' ml-2 text-white'>Show</button>
     </div>
    )
  }
}

export default App1;