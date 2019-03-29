import styled from 'styled-components';

export const HomeWapper = styled.div`
    overflow:hidden;
    width:960px;
    margin:0 auto;
`
export const HomeLeft = styled.div`
    width:625px;
    margin-left:15px;
    padding-top:30px;
    float:left;
    .banner-img{
        width:625px;
        height:270px
    }
`
export const HomeRight = styled.div`
    width:280px;
    float:right;
`
export const TopicWapper = styled.div`
    overflow:hidden;
    padding:20px 0px 10px 0px;
    border-bottom:1px solid #dcdcdc
`
export const TopicItem = styled.div`
    float:left;
    height:32px;
    line-height:32px;
    font-size:14px;
    color:#000;
    border:1px solid #dcdcdc;
    background:#f7f7f7;
    border-radius:4px;
    padding-right:10px;
    margin-left:18px;
    margin-bottom:18px;
    &:first-child{
        margin-left:0px;
    }
    .topic-pic{
        display:block;
        float:left;
        width:32px;
        height:32px;
        margin-right:20px;
        border-radius:0 0 0 4px;
    }
`
export const ListItem = styled.div`
    overflow:hidden;
    padding:20px 0;
    border-bottom:1px solid #cdcdcd;
    .pic{
        display:block;
        width:125px;
        height:100px;
        float:right;
        border-radius:4px;
        box-sizing: border-box;
        border:1px solid #dcdcdc;
    }

`
export const ListInfo = styled.div`
    width:500px;
    float:left;
    .title{
        line-height:27px;
        font-size:18px;
        font-weight:bold;
        color:#333;
    }
    .desc{
        line-height:24px;
        font-size:13px;
        color:#999;
        margin-right:20px;
    }
`
export const RecomendWraper = styled.div`
    margin:30px 0;
    width:280px
`
export const RecommendItem = styled.div`
    width:280px;
    height:50px;
    background:url(${(props) => props.imgUrl});
    background-size:contain

`

export const WriterWrapper = styled.div`
    width:278px;
    border-radius:3px;
`
export const WriterTop = styled.div`
    overflow:hidden;
    font-size: 14px;
    color: #969696;
`
export const WriterItem  = styled.div`
    overflow:hidden;
    margin-top:15px;
    .item-pic{
        width:48px;
        height:48px;
        border-radius:50%;
        border:1px solid #ddd;
        float:left;
        cursor:pointer;
        margin-right:10px;
    }
    .follow{
        float: right;
        margin-top: 5px;
        padding: 0;
        font-size: 13px;
        color: #42c02e;
        cursor:pointer;
    }
    .item-name{
        padding-top: 5px;
        margin-right: 60px;
        font-size: 14px;
        line-height:20px;
        cursor:pointer
    }
    .item-dec{
        margin-top: 2px;
        font-size: 12px;
        color: #969696;
    }
`
export const WriterSwitch = styled.div`
    float:right;
    cursor:pointer;
    .spin{
        font-size:13px;
        transition:all .2s ease-in;
		transform-origin:center center;
    }
`
export const WriterMore = styled.a`
    display:block;
    padding: 7px 7px 7px 12px;
    left: 0;     
    font-size: 13px;
    color: #787878;
    background-color: #f7f7f7;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    text-align:center;
    cursor:pointer;
    margin-top:20px;
`;
export  const LoadMore = styled.div`
    width:100%;
    height:40px;
    line-height:40px;
    margin:30px 0;
    background:#a5a5a5;
    text-align:center;
    border-radius:20px;
    color:#fff;
    cursor:pointer;
`;