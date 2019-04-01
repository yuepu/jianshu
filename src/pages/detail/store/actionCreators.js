import axios from 'axios'
import * as constants from './constants';

const changeDetail = (detail)=>({
    type:constants.GET_DETAIL,
    detail
});

export const getDetail = (id)=>{
    return (dispatch) =>{
        axios.get('/api/detail.json?id='+id).then((res)=>{
            const result = res.data.data;
            dispatch(changeDetail(result));
        }).catch((res) =>{
            console.log('请求失败');
        });
    }
}