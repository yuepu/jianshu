import React,{ Component } from 'react';
import {connect } from 'react-redux';
import List from './components/List';
import Recommend from './components/Recommend';
import Topics from './components/Topics';
import Writer from './components/Writer';
import { actionCreators } from './store';

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
        this.props.changeHomeData();
    }
}
const mapDispatch = (dispatch)=>({
    changeHomeData(){
        const action = actionCreators.getHomeInfo();
        dispatch(action);

    }
});
export default connect(null,mapDispatch)(Home);