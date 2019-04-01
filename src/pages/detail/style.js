import styled from 'styled-components';

export const DetailWapper = styled.div`
    overflow:hidden;
    width:620px;
    margin:20px auto;
    padding-bottom:100px;
`
export const Header = styled.div`
    width:620px;
    margin:0 auto;
    font-size: 34px;
    font-weight: 700;
    line-height: 1.3;
    color:#333;
`   
export const Content = styled.div`
    color:#2f2f2f;
    line-height:1.7;
    font-size:16px;
`
export const Author = styled.div`
    margin: 30px auto;
    img.img-header{
        display: inline-block;
        border: 1px solid #ddd;
        border-radius: 50%;
        width: 48px;
        height: 48px;
        vertical-align: middle;
    }
`
export const AuthorInfo = styled.div`
    display:inline-block;
    vertical-align:middle;
    margin-left:10px;
    img.img-edit{
        margin-right: 5px;
        width: 20px;
        height: 20px;
        border-radius: 0;
        border: 0;
        vertical-align: middle;
    }
    span.name{
        padding-right: 6px;
    }
    span.follow{
        padding: 0 7px 0 8px;
        font-size: 12px;
        border-color: #42c02e;
        border-radius: 40px;
        color: #fff;
        background-color: #42c02e;
        i{
            vertical-align: 1px;
            padding-right: 4px;
        }
    }
    div.meta{
        margin-top: 5px;
        font-size: 12px;
        color: #969696;
        span{
            padding-right:5px;
        }    
    }

`