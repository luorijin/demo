import React,{Component} from "react";
import hocUserName from './hocWrap/hocUserName';
class Welcome extends Component{
    render(){
        console.log("Welcome")
        return (
            <div>welcome {this.props.username}</div>
        )
    }
}
Welcome=hocUserName(Welcome);
export default Welcome;