import React from 'react'


export default class Home extends React.Component{

    render(){

        return(
            <div style={{alignItems:'center',width:280,justifyContent:'center',alignSelf:'center'}}>

                    <div style={{boxShadow:"17px 17px 5px #9E9E9E",marginBottom:40,border:"2px solid orange"}}>
                        <img  style={{width:250,height:200,padding:10,alignSelf:'center'}} src={require('../assets/homebg.jpg')} />
                    </div>
                        <span style={{color:'orange',}}>What's Cooking?</span>
                    <div
                    style={{marginTop:30,marginLeft:40,justifyContent:'center',width:200,alignContent:'center',boxShadow:"7px 7px 15px #9E9E9E",alignSelf:'center',height:40,backgroundColor:'orange',borderRadius:25}}
                    onClick={() => {
                        this.props.history.push("/category")
                    }}
                    >
                       <span>  Proceed > </span>
                    </div>    
            </div>

        )
    }
}