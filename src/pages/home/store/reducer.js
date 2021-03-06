import { fromJS } from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
    topicList:[{
        id:1,
        title:'社会热点',
        imgUrl:'//upload-images.jianshu.io/upload_images/12738531-4f5a2629dc17d99a.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
    },{
        id:2,
        title:'手绘',
        imgUrl:'//upload-images.jianshu.io/upload_images/7220649-3c7c44227f57a94a.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
    }],
    articalLists:[],
    recommendLists:[],
    writerList:[],
    articalPage:1,
    showScroll:true
});
const changeHomeData = (state , action) => {
    return  state.merge({
        topicList:fromJS(action.topicList),
        articalLists:fromJS(action.articalLists),
        recommendLists:fromJS(action.recommendLists),
        writerList:fromJS(action.writerList)
    });
}

const addArticalList = (state , action) => {
    return  state.merge({
        articalPage:action.nextPage,
        articalLists:state.get('articalLists').concat(action.list)
    });
}

export default (state = defaultState, action) => {
	switch(action.type){
       case  constants.CHANGE_HOME_DATA:
            return  changeHomeData(state,action);
        case constants.ADD_ARTICAL_LIST:
            return  addArticalList(state,action);
        case constants.TOGGLE_TOP_SHOW:
            return  state.set('showScroll',action.showScroll);
        default:
			return state;
	}
	return state;
}