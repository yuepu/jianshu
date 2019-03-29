import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { actionCreators } from './store';
import {
	HeaderWrapper,
	Logo,
	Nav,
	NavItem,
	SearchWrapper,
	NavSearch,
	Addition,
	SearchInfo,
	SearchInfoTitle,
	SearchInfoSWitch,
	SearchInfoItem,
	SearchInfoList,
	Button
} from './style';

class Header extends Component {
	getListArea() {
		const {focused,list,page,mouseIn,totalPage,handleMouseEnter,handleMouseLeave,handleChangePage}  = this.props;
		const newList = list.toJS();
		const pageList = [];
		if(newList.length){
			for(let i = (page-1)*10; i < page * 10  ;i++){
				if(newList[i]){
					pageList.push(
						<SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
					)
				}
			}
		}
		if (focused || mouseIn) {
			return (
				< SearchInfo 
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave} >
					<SearchInfoTitle>
						热门搜索
					<SearchInfoSWitch 
						onClick={()=>handleChangePage(page,totalPage,this.spinIcon)}>
						<i ref={(icon)=>{ this.spinIcon = icon}} className="iconfont spin">&#xe606;</i>
						换一批
					</SearchInfoSWitch>

					</SearchInfoTitle>
					<SearchInfoList>
						{ pageList  }
					</SearchInfoList>
				</SearchInfo >
			)
		} else {
			return null;
		}
	}
	render() {
		const {focused,handleInputFocus,handleInputBlur,list}  = this.props;
		return (
			<HeaderWrapper>
				<Logo />
				<Nav>
					<NavItem className='left active'>首页</NavItem>
					<NavItem className='left'>下载App</NavItem>
					<NavItem className='right'>登陆</NavItem>
					<NavItem className='right'>
						<i className="iconfont">&#xe636;</i>
					</NavItem>
					<SearchWrapper>
						<CSSTransition
							in={focused}
							timeout={200}
							classNames="slide"
						>
							<NavSearch
								className={focused ? 'focused' : ''}
								onFocus={()=>handleInputFocus(list)}
								onBlur={handleInputBlur}
							></NavSearch>
						</CSSTransition>
						<i className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}>
						  &#xe623;
						</i>
						{this.getListArea()}
					</SearchWrapper>
				</Nav>
				<Addition>
					<Button className='writting'>
						<i className="iconfont">&#xe615;</i>
						写文章
			</Button>
					<Button className='reg'>注册</Button>
				</Addition>
			</HeaderWrapper>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		focused: state.getIn(['header', 'focused']),
		list:state.getIn(['header','list'],),
		page:state.getIn(['header','page']),
		totalPage:state.getIn(['header','totalPage']),
		mouseIn:state.getIn(['header','mouseIn'])
	}
}

const mapDispathToProps = (dispatch) => {
	return {
		handleInputFocus(list) {
			(list.size === 0) && dispatch(actionCreators.getList());//避免多次无意义的请求的发送
			dispatch(actionCreators.searchFocus());
		},
		handleInputBlur() {
			dispatch(actionCreators.searchBlur());
		},
		handleMouseEnter(){
			dispatch(actionCreators.mouseEnter());
		},
		handleMouseLeave(){
			dispatch(actionCreators.mouseLeave());
		},
		handleChangePage(page,totalPage,spin){
			let originAngle =  spin.style.transform.replace(/[^0-9]/g,'');
			if(originAngle){
				originAngle = parseInt(originAngle,10);
			}else{
				originAngle = 0;
			}
			spin.style.transform = 'rotate('+(originAngle+360)+'deg)';
			if(page < totalPage ){
				dispatch(actionCreators.changePage(page+1));
			}else{
				dispatch(actionCreators.changePage(1));
			}
		}
	}
}

export default connect(mapStateToProps, mapDispathToProps)(Header);