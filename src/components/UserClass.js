import React from "react";
class UserClass extends React.Component{
    constructor(props){
        super(props);
        //console.log(this.props.Name+"Child Constructor");

        this.state={
            userInfo:{
                login:"Dummy",
               
            },
        }
        

    }
    async componentDidMount(){
       // console.log(this.props.Name+"child mount");
       const data= await fetch("https://api.github.com/users/talleenkaur17");
       const json= await data.json();
      
       this.setState({
        userInfo:json,
       })
       console.log(json);

    }
   
    render(){
        //console.log(this.props.Name+"Child render ");
        return(
            <div className="user-card">
               
              
                
             
            <h2>Name:{this.state.userInfo.login}</h2>
            <h3>Location:{this.state.userInfo.Location}</h3>
        </div>

        );
    }
}
export default UserClass;