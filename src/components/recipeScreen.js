import React from 'react'
import Axios from 'axios'


export default class Recipes extends React.Component{
state= {
    recipeFromServer:[]
}

componentWillMount () {
    Axios.get("http://192.168.2.20:9090/recipe/all/"+this.props.history.location.state.categoryId)
    .then(res => {
        this.setState({recipeFromServer:res.data})
    })
}
noRecipe = () => {
    if(this.state.recipeFromServer.length == 0){
        return(
            <h3 style={{color:'orange'}}>This world is running out of Food! :(</h3>
        )
    }
}
renderRecipies = () => {
        return(
        this.state.recipeFromServer.map(element =>
           <div 
           key={element.id}
           onClick={() => {
                console.log(this.props.history)
                this.props.history.push({
                   pathname:"/procedure",
                   state:{
                       recipe:element
                   }
               })
           }}
           style={{flexWrap:'wrap',width:270,display:'inline-block',margin:15}}>
            <div style={{boxShadow:"17px 17px 5px #9E9E9E",marginBottom:20,border:"2px solid orange"}}>
            <img  style={{width:250,height:200,padding:10}} src={element.photo} />
        </div>
            <span style={{color:'orange',fontSize:17}}>{element.recipe_name}</span>
         </div>  
            )
            )

  

}
    render(){

        return(
            <div style={{alignItems:'center',justifyContent:'center',alignSelf:'center'}}>
                <h1 style={{color:'orange'}}>Recipes</h1>
            {this.renderRecipies()}
            {this.noRecipe()}
            </div>

        )
    }
}