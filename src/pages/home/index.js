import React,{ Component } from 'react';
import {connect } from 'react-redux';
import List from './components/List';
import Recommend from './components/Recommend';
import Topics from './components/Topics';
import Writer from './components/Writer';
import axios from 'axios';

import {
    HomeWapper,
    HomeLeft,
    HomeRight
} from './style';
import Detail from '../detail';

class Home extends Component{
    render(){
        return(
            <div>
                <HomeWapper>
                    <HomeLeft>
                        <img alt='' className="banner-img" src="//upload.jianshu.io/admin_banners/web_images/4592/2cbadf9347d69cfc140daf64de887fda0e361bcc.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"/>
                        <Topics />
                        <List />
                    </HomeLeft>
                    <HomeRight>
                        <Recommend />
                        <Writer />

                    </HomeRight>
                </HomeWapper>
            </div>
        )
    }
    componentDidMount(){
        axios.get('/api/home.json').then((res)=>{
            const result = res.data.data;
            const action = {
                type:'change_home_data',
                topicList:result.topicList,
                articalLists:result.articalLists,
                recommendLists:result.recommendLists,
                writerList:result.writerList,
            };
            this.props.changeHomeData(action);
        })
    }
}
const mapDispatch = (dispatch)=>({
    changeHomeData(action){
        dispatch(action);
    }
});
export default connect(null,mapDispatch)(Home);