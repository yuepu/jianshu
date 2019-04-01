import React,{ PureComponent } from 'react';
import {connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { actionCreators } from './store'
import { LoginWapper,
    LoginBox,
    LoginInput,
    LoginButton
} from './style';
class Login extends PureComponent{
    render(){
        const { loginState}  = this.props;
        if(!loginState){
            return( <LoginWapper>
                <LoginBox>
                <LoginInput placeholder='账号' innerRef={(input) => { this.account = input }}/>
                <LoginInput placeholder='密码' type='password' innerRef = { (input) => { this.password = input } }/>
                <LoginButton onClick={()=>{ this.props.login(this.account,this.password) }}>登录</LoginButton>
                </LoginBox>
            </LoginWapper>  )
        }else{
            return <Redirect to='/'/>
        }
       
    }
   
}

const mapState = (state)=>({
    loginState:state.getIn(['login','login'])
});

const mapDispatch = (dispatch)=>({
    login(accountElem,passwordElem){
        //console.log(accountElem.value,passwordElem.value);
        dispatch(actionCreators.login(accountElem.value,passwordElem.value))
    }
});
export default connect(mapState,mapDispatch)(Login);