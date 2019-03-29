import { fromJS } from 'immutable';

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
    writerList:[]
});
export default (state = defaultState, action) => {
	switch(action.type){
       case  "change_home_data":
           return state.merge({
               topicList:fromJS(action.topicList),
               articalLists:fromJS(action.articalLists),
               recommendLists:fromJS(action.recommendLists),
               writerList:fromJS(action.writerList)
           });

		default:
			return state;
	}
	return state;
}