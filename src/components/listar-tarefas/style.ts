import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Container = styled.div`
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    
`;

const ContainerList = styled.div`
    display: flex;
    flex-direction: row;
`;

const Input = styled.input`
    width: 20vw;
    height: 7vh;
    font-size: 20px;
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
    border:${props => props.id == "checked" ? '2px solid #0d0df1' : '2px solid #ddd'};
    background:#fff;
    box-shadow:0px 5px 20px 2px rgba(0,0,0,0.1);
    text-align:center;
    transition:all 200ms ease-in-out;
    border-radius:5px;
`;

const CheckBoxContainer = styled.div`
   width: 50px;
   height: 50px;
`;

const CheckAllButton = styled.input.attrs({type:'checkbox'})`
    display: none;
`;


const Ul = styled.ul`
    margin-left: -37px;
`;

const Li = styled.li`
    width: 20vw;
    height: 7vh;
    display: flex;
    flex-direction: row;
    border:1px solid #ededed;
    list-style: none;
    justify-content: center space-evenly;
    align-items: center;
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

export{
    Input,
    Container,
    CheckAllButton,
    LabelCheckbox,
    CheckBoxContainer,
    IconContainer,
    Icon,
    Ul,
    Li,
    ContainerList,
    CheckList,
    LabelCheckList,
    SpanCheckList
}