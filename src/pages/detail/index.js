import React,{ PureComponent } from 'react';
import {connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { actionCreators } from './store'
import { DetailWapper, 
    Header ,
    Content,
    Author,
    AuthorInfo
} from './style';
class Detail extends PureComponent{
    render(){
        const { title ,authorInfo, content}  = this.props;
        return(
           <DetailWapper>
               <Header>{title}</Header>
               <Author>
                   <img className='img-header' src={authorInfo.get('srcUrl')}alt='头像' />
                    <AuthorInfo>
                    <span className='name'>{authorInfo.get('name')}</span> 
                        <img className='img-edit' src='//cdn2.jianshu.io/assets/badges/excellent-34cdda4de26ee9910f190239ffecf886c24045136468fa26f041b0156a143cd9.png'  alt='12' />
                        <span className='follow'>
                            <i>+</i>
                            关注
                         </span>
                         <div className='meta'> 
                            <span>{authorInfo.get('writeDate')}</span>
                            <span>字数 {authorInfo.get('wordCount')}</span>
                            <span>阅读 {authorInfo.get('readCount')}</span>
                            <span>评论 {authorInfo.get('comment')}</span>
                            <span>喜欢 {authorInfo.get('like')}</span>
                        </div>        
                    </AuthorInfo>
               </Author>
               <Content dangerouslySetInnerHTML={{__html: content}} />
           </DetailWapper>  
        )
    }

    componentDidMount(){
        this.props.getDetail(this.props.match.params.id);
    }
}
const mapState =  (state)=>({
    title:state.getIn(['detail','title']),
    authorInfo:state.getIn(['detail','authorInfo']),
    content:state.getIn(['detail','content']),
});

const mapDispatch = (dispatch)=>({
    getDetail(id){
        dispatch(actionCreators.getDetail(id));
    }
});
export default connect(mapState,mapDispatch)(withRouter(Detail));