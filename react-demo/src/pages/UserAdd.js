import React, {Component} from 'react';

class UserAdd extends Component{
    constructor(){
        super();
        this.state={
            name: '',
            age: 0,
            gender: ''
        }
    }
    handleChange(field,value,type="string"){
        if (type === 'number') {
            value = +value;
          }
      
          this.setState({
            [field]: value
          });
    }
    handleSubmit (e) {
        // 阻止表单submit事件自动跳转页面的动作
        e.preventDefault();
        alert(JSON.stringify(this.state));
    }
    render(){
        const {name, age, gender} = this.state;
        return (
                <div>
                    <div>UserAdd page</div>
                    <main>
                    <form onSubmit={(e) => this.handleSubmit(e)}>
                        <label>用户名：</label>
                        <input type="text" value={name} onChange={(e) => this.handleChange('name', e.target.value)}/>
                        <br/>
                        <label>年龄：</label>
                        <input type="number" value={age || ''} onChange={(e) => this.handleChange('age', e.target.value, 'number')}/>
                        <br/>
                        <label>性别：</label>
                        <select value={gender} onChange={(e) => this.handleChange('gender', e.target.value)}>
                        <option value="">请选择</option>
                        <option value="male">男</option>
                        <option value="female">女</option>
                        </select>
                        <br/>
                        <br/>
                        <input type="submit" value="提交"/>
                    </form>
                    </main>
                </div>
            );
    }
}
export default UserAdd;