import * as constants from './constants';
import axios from 'axios';

const changeLogin = (login)=>({
    type:constants.CHANGE_LOGIN,
    login
})
export const login = (account,password) => {
    return (dispatch)=>{
        axios.get('./api/login.json?account=' + account + '&password=' + password).then((res)=>{
           const result = res.data.data;
           dispatch(changeLogin(result))
		}).catch(()=>{
			console.log('error');
		})
    }
}

export const logOut = () => ({
    type:constants.CHANGE_LOGOUT,
    login:false
})


