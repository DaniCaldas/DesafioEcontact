
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ButtonType{
    left: number;
    width: number;
}

const Container = styled.div`
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: 'arial';
`;

const ContainerList = styled.div`
    display: flex;
    flex-direction: row;
    margin: 0 auto;
`;

const Titulo = styled.h1`
    font-size: 50px;
`;

const Input = styled.input`
    width: 40vw;
    height: 10vh;
    font-size: 25px;
    border: none;
    box-shadow:  -1px -1px 11px #bebebe,
             -1px -1px 11px #bebebe;
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

const Icon = styled(FontAwesomeIcon)`

`;

const LabelCheckbox = styled.label`
    width:100%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    height:100%;
    cursor:pointer;
    border:${props => props.id != "checked" ? '2px solid #0d0df1' : '2px solid #ddd'};
    background:#fff;
    box-shadow:0px 5px 20px 2px rgba(0,0,0,0.1);
    text-align:center;
    transition:all 200ms ease-in-out;
    border-radius:1px;
`;

const CheckBoxContainer = styled.div`
   width: 60px;
   height: 60px;
`;

const CheckAllButton = styled.input.attrs({type:'checkbox'})`
    display: none;
`;


const Ul = styled.ul`
margin-top: 1px;
margin-left: -100px;
`;

const Li = styled.li`
    width: 40vw;
    height: 7vh;
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
position: relative;
    width: 30vw;
    height: 7vh;
    display: flex;
    margin-left: -50px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    column-gap: 20px;
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

const AnimationButton = styled.div<ButtonType>`
    position: absolute;
    height: 100%;
    top: 0;
    z-index: 0;
    background-color: transparent;
    border: 1px solid #DB7676;
    width: ${(props) => props.width}%;
    left: ${(props) => props.left}px;
    border-radius: 3px;
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
    ButtonsMehotds,
    AnimationButton
}
