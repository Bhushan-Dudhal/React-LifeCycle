import React from 'react'

class App extends React.Component{

  constructor(props) {
    super(props)
    this.state = {
      img1:props.img
    }
    console.log(' constructor call');
    this.updateData = this.updateData.bind(this);
  
  }
  
  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps call');
    return null;
  }

  componentDidMount() {
    console.log('componentDidMount call');
  }

  shouldComponentUpdate(nextProps, nextState)
  {
    console.log(' shouldComponentUpdate call');
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log(' getSnapshotBeforeUpdate call');
    return true;

  }

  componentDidUpdate(prevProps, prevState,snapshot) {
    console.log(' componentDidUpdate call');
    return true;

  }

  updateData() {
    this.setState({img1:'https://i0.wp.com/picjumbo.com/wp-content/uploads/magical-spring-forest-scenery-during-morning-breeze-free-photo.jpg?w=600&quality=80'})
  }
  render()
  {

    console.log('render call');
    return (
      <>
        <img src={this.state.img1} alt="" />
        <button onClick={this.updateData}>Click me</button>
      </>
    )
  }
}

export default App