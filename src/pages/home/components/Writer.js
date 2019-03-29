import React,{ Component } from 'react';
import {connect } from 'react-redux';
import {
    WriterWrapper,
    WriterTop,
    WriterSwitch,
    WriterItem,
    WriterMore

} from '../style'
class Writer extends Component{
    render(){
        const { writerList } =  this.props;
        return(
            <div>
                <WriterWrapper>
                    <WriterTop>
                        推荐作者
                        <WriterSwitch >
                            <i ref={(icon)=>{ this.spinIcon = icon}} className="iconfont spin">&#xe606;</i>
                            换一批
                        </WriterSwitch>
                    </WriterTop>
                    {
                        writerList.map((item)=>(
                            <WriterItem key={item.id}>
                                <img className='item-pic' alt='' src={item.get('imgUrl')}/>
                                <a className='follow'>+关注</a>
                                <p className='item-name'>{item.get('name')}</p>
                                <p className='item-dec'>{item.get('dec')}</p>
                            </WriterItem>
                        ))
                    }
                    <WriterMore>
                        查看全部 >
                    </WriterMore>
                </WriterWrapper>
            </div>
        )
    }
}
const mapStateToProps = (state)=> ({
    writerList:state.getIn(['home','writerList'])
});
export default connect(mapStateToProps,null)(Writer) ;