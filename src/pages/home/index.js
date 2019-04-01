import React,{ PureComponent } from 'react';
import {connect } from 'react-redux';
import List from './components/List';
import Recommend from './components/Recommend';
import Topics from './components/Topics';
import Writer from './components/Writer';
import { actionCreators } from './store';

import {
    HomeWapper,
    HomeLeft,
    HomeRight,
    BackTop
} from './style';
//PureComponent和Component的区别是 前者内部底层实现了一个shouldComponentUpdate,不需要我们手写，更好的性能优化
//PureComponent 和 immutable 一起使用效果更好
class Home extends PureComponent{
    handleScrollTop(){
        window.scrollTo(0,0);
    }
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
                    {
                        this.props.showScroll?
                        <BackTop onClick={this.handleScrollTop}>回到顶部</BackTop>:null
                    }
                </HomeWapper>
            </div>
        )
    }
    componentDidMount(){
        this.props.changeHomeData();
        this.bindEvent()
    }
    componentWillUnmount(){
        //组件销毁的时候，移除事件监听
        window.removeEventListener('scroll',this.props.changeScrollTopShow)
    }
    bindEvent(){
        window.addEventListener('scroll',this.props.changeScrollTopShow)
    }
}
const mapState = (state)=>({
    showScroll:state.getIn(['home','showScroll'])
})
const mapDispatch = (dispatch)=>({
    changeHomeData(){
        dispatch(actionCreators.getHomeInfo());

    },
    changeScrollTopShow(){
        if(document.documentElement.scrollTop > 400){
            dispatch(actionCreators.toggleTopShow(true));
        }else{
            dispatch(actionCreators.toggleTopShow(false));
        }
    }
});
export default connect(mapState,mapDispatch)(Home);