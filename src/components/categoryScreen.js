import React from 'react'
import Axios from 'axios'


export default class Category extends React.Component{
state= {
    categoryFromServer:[]
}

componentWillMount () {
    Axios.get("http://192.168.2.20:9090/category/all")
    .then(res => {
        console.log(res.data)
        this.setState({categoryFromServer:res.data})
    })
}

    renderCategories = () => {

        return(
        this.state.categoryFromServer.map(element =>
           <div 
           key={element.id}
           onClick={() => {
               this.props.history.push({
                   pathname:"/recipe",
                   state:{
                       categoryId:element.id
                   }
               })
           }}
           style={{flexWrap:'wrap',display:'inline-block',margin:15}}>
            <div style={{boxShadow:"17px 17px 5px #9E9E9E",marginBottom:20,border:"2px solid orange"}}>
            <img  style={{width:250,height:200,padding:10,alignSelf:'center'}} src={element.url} />
        </div>
            <span style={{color:'orange',}}>{element.category_name}</span>
         </div>  
            )
            )

  

}
    render(){

        return(
            <div style={{alignItems:'center',justifyContent:'center',alignSelf:'center'}}>
                <h1 style={{color:'orange'}}>Categories</h1>
            {this.renderCategories()}
             </div>

        )
    }
}