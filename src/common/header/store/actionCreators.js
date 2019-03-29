import * as constants from './constants';
import { fromJS } from 'immutable';
import axios from 'axios';

const changeList = (data)=>({
	type:constants.CHANGE_LIST,
	data:fromJS(data),//变成immutable类型的数据
	totalPage:Math.ceil(data.length / 10)
});
export const searchFocus = () => ({
	type: constants.SEARCH_FOCUS
});

export const searchBlur = () => ({
	type: constants.SEARCH_BLUR
});

export const mouseEnter = ()=>({
	type:constants.MOUSE_ENTER
});
export const mouseLeave = ()=>({
	type:constants.MOUSE_LEAVE
});
export const changePage = (page)=>({
	type:constants.CHANGE_PAGE,
	page
});

export const getList = ()=>{
	//由于用了redux-thunk所以这里可以返回一个函数
	return (dispatch)=>{
		axios.get('./api/headerList.json').then((res)=>{
			const data =  res.data;
			dispatch(changeList(data.data));
		}).catch(()=>{
			console.log('error');
		})
	}
}


