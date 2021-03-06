import React,{ PureComponent } from 'react';
import {connect} from 'react-redux';
import {actionCreators} from '../store';
import { Link } from 'react-router-dom';
import {
    ListItem,
    ListInfo,
    LoadMore
} from '../style'
class List extends PureComponent{
    render(){
        const {list , getMoreList , page}  = this.props;
        return(
            <div>
                {
                    list.map((item,index)=>(
                        <Link key={index} to={'./detail/'+item.get('id')}>
                            <ListItem >
                                <img className='pic' src={item.get('imgUrl')} alt=''/>
                                <ListInfo>
                                    <h3 className='title'>{item.get('title')}</h3>  
                                    <p className='desc'>{item.get('desc')}</p>   
                                </ListInfo>
                            </ListItem>
                        </Link>
                       
                    ))
                }
                <LoadMore onClick={()=>{getMoreList(page)}}>更多文字</LoadMore>
            </div>
        )
    }
}
const mapStateToProps = (state)=>({
    list:state.getIn(['home','articalLists']),//state.get('home').get('articalLists')
    page:state.getIn(['home','articalPage'])
});
const mapDispatch = (dispatch)=>({
    getMoreList(page){
        dispatch(actionCreators.getMoreList(page))
    }
});
export default connect(mapStateToProps,mapDispatch)(List);