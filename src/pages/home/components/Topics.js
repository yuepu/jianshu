import React,{ PureComponent } from 'react';
import { connect } from 'react-redux';
import {
    TopicWapper,
    TopicItem
} from '../style'
class Topics extends PureComponent{
    render(){
        const {list}  = this.props;
        return(
            <div>
                <TopicWapper>
                    {
                         list.map((item)=>(
                            <TopicItem  key={item.get('id')}>
                                <img 
                                    className="topic-pic"
                                    src={item.get('imgUrl')}
                                    alt=''/> 
                                {item.get('title')}
                            </TopicItem>
                         ))
                    }    
                </TopicWapper>
            </div>
        )
    }
}
const mapStateToProps = (state)=>({
    list:state.getIn(['home','topicList'])
});
export default connect(mapStateToProps,null)(Topics);