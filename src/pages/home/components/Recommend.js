import React,{ Component } from 'react';
import { connect } from 'react-redux';
import {
    RecomendWraper,
    RecommendItem
} from '../style';
import { Iterable } from 'immutable';
class Recommend extends Component{
    render(){
        const { list }  = this.props;
        return(
            <RecomendWraper>
                {
                    list.map((item)=>(
                        <RecommendItem 
                            key={item.get('id')}
                            imgUrl={item.get('imgUrl')}/>
                    ))
                }
               
            </RecomendWraper>
        )
    }
}
const mapStateToProps = (state)=>({
    list:state.getIn(['home','recommendLists'])
});
export default connect(mapStateToProps,null)(Recommend);