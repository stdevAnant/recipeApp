import React from 'react'
import Axios from 'axios'


export default class Procedure extends React.Component{
state={
    recipeToShow:{}
}
    componentWillMount(){
        this.setState({recipeToShow:this.props.history.location.state.recipe})
   console.log(this.state.recipeToShow)
}
    render(){
      const eleme = this.state.recipeToShow
        return(
            <div style={{alignItems:'center',Minwidth:280,padding:30,justifyContent:'center',alignSelf:'center'}}>

                        <img  style={{boxShadow:"27px 27px 25px #9E9E9E",marginBottom:20,border:"2px solid orange",width:350,height:300,padding:10,alignSelf:'center'}} src={eleme.photo} />
                        <div>
                        <span style={{color:'orange',}}>{eleme.recipe_name}</span>
                        </div>
                        <div>
                         <h3 style={{color:'black',}}> Ingredients: </h3>
                         <div style={{maxWidth:600}}>
                                <span style={{color:'black'}}>{eleme.ingredients}</span>     
                        </div>   
                        </div>

                        <div>
                         <h3 style={{color:'black',}}> Directions: </h3>
                         <div style={{maxWidth:600}}>
                                <span style={{color:'black'}}>{eleme.process}</span>     
                        </div>   
                        </div>
                        
            </div>

        )
    }
}