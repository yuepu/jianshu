import React,{ Component } from 'react';
import {connect} from 'react-redux';
import {actionCreators} from '../store';
import {
    ListItem,
    ListInfo,
    LoadMore
} from '../style'
class List extends Component{
    render(){
        const {list , getMoreList}  = this.props;
        return(
            <div>
                {
                    list.map((item)=>(
                        <ListItem key={item.get('id')}>
                            <img className='pic' src={item.get('imgUrl')} alt=''/>
                            <ListInfo>
                                <h3 className='title'>{item.get('title')}</h3>  
                                <p className='desc'>{item.get('desc')}</p>   
                            </ListInfo>
                        </ListItem>
                    ))
                }
                <LoadMore onClick={getMoreList}>更多文字</LoadMore>
            </div>
        )
    }
}
const mapStateToProps = (state)=>({
    list:state.getIn(['home','articalLists'])//state.get('home').get('articalLists')
});
const mapDispatch = (dispatch)=>({
    getMoreList(){
        dispatch(actionCreators.getMoreList())
    }
});
export default connect(mapStateToProps,mapDispatch)(List);