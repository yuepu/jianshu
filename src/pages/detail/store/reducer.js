import { fromJS } from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
    title:'',
    authorInfo:{
        name:'',
        srcUrl:'//upload.jianshu.io/users/upload_avatars/13917412/c77345e7-843b-4433-b8c5-a4f42254e65c?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96',
        writeDate:'',
        wordCount:'',
        readCount:'',
        comment:'',
        like:''
    },
    content:'<p>初心在最开始的时候往往简单朴素，但是它会慢慢长大，就像一颗种子能够长成一棵参天大树，又仿佛站在零的起点慢慢绵延成很长很长的道路。到最后我们会发现，所谓初心，就是在所有的愿望、誓言和梦想当中，离自己的本心最近的那颗心。</p>',
});

const getDetail = (state,action) => {
    return  state.merge({
        title:action.detail.title,
        authorInfo:action.detail.authorInfo,
        content:action.detail.content
    });
}
export default (state = defaultState, action) => {
	switch(action.type){
        case constants.GET_DETAIL:
        return getDetail(state,action)
        default:
			return state;
	}
	return state;
}