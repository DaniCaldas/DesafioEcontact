
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ButtonType{
    left: number;
    width: string;
}

interface ButtonDeleteType{
    opacity: number;
}


const Container = styled.div`
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: 'arial';
    width: 81vh;
    box-shadow: 0px 29px 25px 0px rgba(0,0,0,0.1),0px 10px 15px -3px rgba(0,0,0,0.1);
`;

const ContainerList = styled.div`
    display: flex;
    flex-direction: row-reverse;
    margin: 0 auto;
`;

const Titulo = styled.h1`
    font-size: 50px;
`;

const Input = styled.input`
    padding-left: 12px;
    padding-right: 7px;
    width: 33.7vw;
    height: 10vh;
    font-size: 25px;
    border-left: none;
    border-bottom:1px solid #ededed ;
    border-top:1px solid #ededed ;
    border-right:1px solid #ededed ;
    &:active{
        border-color: red;
    }
`;

const IconContainer = styled.div`
     margin-top:10px;
    font-size:30px;
    color:#555;
    transition:all 200ms ease-in-out;
`;

const Icon = styled(FontAwesomeIcon)``;

const LabelCheckbox = styled.label`
    margin-left: -1px;
    width:100%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    height:100%;
    cursor:pointer;
    border:${props => props.id != "checked" ? '2px solid #0d0df1' : '2px solid #ddd'};
    background:#fff;
    text-align:center;
    transition:all 200ms ease-in-out;
    border-radius:1px;
    border: none;
`;

const CheckBoxContainer = styled.div`
   width: 40px;
   height: 74px;
`;

const CheckAllButton = styled.input.attrs({type:'checkbox'})`
    display: none;
`;


const Ul = styled.ul`
margin-top: 1px;
margin-left: -37px;
`;

const Li = styled.li`
    width: 37.8vw;
    height: 9vh;
    display: flex;
    flex-direction: row;
    border:1px solid #ededed;
    list-style: none;
    justify-content: center space-evenly;
    align-items: center;
    background-color: #FFFFFF;
`;
const TextList = styled.p`
    margin-left: 20px;
    font-size: 20px;
`;

const CheckList = styled.input.attrs({type:'checkbox'})`
    display: none;
`;

const LabelCheckList = styled.label`
    width: 20px;
    height: 20px;
    border: 1px solid;
    border-radius: 50%;
    margin-left: 10px;
`;

const SpanCheckList = styled(FontAwesomeIcon)`
    height: 21px;
    width: 21px;
`;

const ListMethods = styled.div`
    flex-direction: row;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #FFFFFF;
    width: 38vw;
    height: 9vh;
    margin-top: -15px;
`;
const Methods = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    column-gap: 30px;
    margin-left: 60px;
`;  

const ButtonsMehotds = styled.button`
    transition: 100ms;
    border: none;
    width: 100%;
    height: 5vh;
    background-color: transparent;
    font-size: 15px;
    &:hover{
        border: 1px solid #DB7676;
        border-radius: 5px;
        transition: 100ms;
    }
    &:checked{
        box-shadow:  -1px -1px 11px #bebebe,
             -1px -1px 11px #bebebe;
        border:1px solid #DB7676;
    }
`;

const ButtonClear = styled.button`
    transition: 100ms;
    border: none;
    width: 100%;
    height: 5vh;
    background-color: transparent;
    font-size: 15px;
    &:hover{
        text-decoration: underline;
    }
`;

const AnimationButton = styled.div<ButtonType>`
    position: absolute;
    height: 28px;
    top: 4px;
    z-index: 0;
    background-color: transparent;
    border: 1px solid #DB7676;
    width: ${(props) => props.width};
    left: ${(props) => props.left}px;
    border-radius: 3px;
    transition: 100ms;
`;

const CountItemsLeft = styled.p`
margin-left: -50px;
`;


const DeleteTarefa = styled(FontAwesomeIcon)<ButtonDeleteType>`
opacity:${(props) => props.opacity};
transition: 100ms;
position: absolute;
right: 500px;
`;
export{
    Input,
    Titulo,
    Container,
    CheckAllButton,
    LabelCheckbox,
    CheckBoxContainer,
    IconContainer,
    Icon,
    Ul,
    Li,
    TextList,
    ContainerList,
    CheckList,
    LabelCheckList,
    SpanCheckList,
    ListMethods,
    Methods,
    ButtonsMehotds,
    AnimationButton,
    ButtonClear,
    CountItemsLeft,
    DeleteTarefa
}
