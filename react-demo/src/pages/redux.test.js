import React,{Component} from 'react';
import {connect} from 'react-redux';
import { getData} from '../fetchdata'
class mytest extends Component{
    componentWillMount(){
        this.props.getTest() //发送get请求，然后数据 自动写到state里
    }
    render(){
        console.log("进入")
        const {card,data,onChangeText} =this.props;
        return(
            <div>
                <h1 onClick={onChangeText}> {card.name} </h1>
                <button>click me</button>
                {data.map((item,index)=>
                    (<div key={item.id}>{index}:{item.label}</div>)
                )}
            </div>
        )
    }
}
const saveReducer = (data) => ({
    type: 'SAVE_REDUCER',
    data
})
function getTest() {
    return (dispatch,getState) => {
        console.log(getState())
        try {
            getData(`/my.json`,{id:1}).then(response=>{
             //axios返回的数据是用response.data包括的，和jquery不一样
              console.log(response.data);
              dispatch(saveReducer(response.data.list));
           })
            // let response = await getData(`/facebook/react-native/master/docs/MoviesExample.json?id=${id}`)
            // await dispatch(saveReducer(response.data))
        } catch (error) {
            console.log('error: ', error)
        }
      
    }
}
function mapStateToProps(state){
    return {card:state.card,data:state.data}
}
function mapDispatchToProps(dispatch){
    return {
        onChangeText:()=>dispatch({type:'CHANGE_NAME',name:"罗大的"}),
        getTest:()=> dispatch(getTest())

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(mytest);