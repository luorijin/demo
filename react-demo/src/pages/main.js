import React,{Component} from 'react';
import {Link} from "react-router-dom";
import ReduxTest from './redux.test';
import Welcome from '../components/welcome';
class main extends Component{
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};
     
        // 这边绑定是必要的，这样 `this` 才能在回调函数中使用
        // this.handleClick = this.handleClick.bind(this);
      }
      handleClick() {
        this.props.history.push('/user/add');
      }
    render(){
        return (
            <div>
                <header onClick={(e) => this.handleClick(e)}><Welcome username="我是罗大"/></header>
                <button onClick={(e) => this.handleClick(e)}>
                    {this.state.isToggleOn ? 'ON' : 'OFF'}
                </button>
                <div>
                    <ReduxTest></ReduxTest>
                </div>
                <div>
                <Link to="/user/add">添加用户</Link>
                </div>
            </div>
        )
    }
}
export default main;