import React from 'react'

class Child extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    getDerivedStateFromError(props,state) {
        return null; 
    }


    componentDidMount() {
        
    }

    

    // componentWillUnmount() {

    //     alert('child Component delete')
    // }

    
    


    




    render() {



        return (

            <>
            
            <h1>welcome</h1>
            </>
        )
    }
}

export default Child