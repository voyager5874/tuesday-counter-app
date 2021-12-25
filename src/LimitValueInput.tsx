import React, {useRef, useState} from 'react';
import styled from "styled-components";


type LimitValueInput = {
    label: string
    currentValue: number
    // compareWithValue: number
    callback: (newValue: number) => void
}


export const LimitValueInput = (props: LimitValueInput) => {

    const plusClickHandler = () => {
        props.callback(props.currentValue + 1)
    }

    const minusClickHandler = () => {
        props.callback(props.currentValue - 1)
    }

    // const directInputHandler = (e: React.FormEvent<HTMLDivElement>) => {
    //     debugger
    //     props.callback(Number(e.currentTarget.innerText))
    // }
    //use contentEditable to allow direct input in div, with tabIndex={-1} you can listen keyDown event
    //how to make flux cycle using div as input field?
    //I could keep value to set to Counter here with useState hook and save it to upper localState by pressing "Set" button
    //would it be more logical than crating temporal local state in above component?


    return (
        <LimitValueSetContainer>
            <label style={{paddingRight: "40px", marginRight: "10px"}}>{props.label}</label>
            {/*<Input value={props.currentValue} type="number" min={"0"} onChange={newValueHandler}/>*/}
            <LimitInputField><span
                style={{
                    // border: "1px solid black",
                    display: "inline-block",
                    height: "100%",
                    paddingTop: "10%",
                    paddingBottom: 0
                }}>{props.currentValue}</span></LimitInputField>
            <LimitValueControlsWrapper>
                <LimitValueControlButtons
                    onClick={plusClickHandler}>+</LimitValueControlButtons>
                <LimitValueControlButtons onClick={minusClickHandler}>-</LimitValueControlButtons>
            </LimitValueControlsWrapper>
        </LimitValueSetContainer>
    );
};


const LimitValueSetContainer = styled.div`
  width: 85%;
  color: #8ecccc;
  font-weight: bold;
  display: flex;
  padding: 10px;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  //border: 1px solid #8ecccc;
  margin-bottom: 5px;
  margin-top: 5px;
  //flex-direction: column;
`

const LimitValueControlsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 3px;
`

const LimitValueControlButtons = styled.button`
  cursor: pointer;
  background-color: #8ecccc;
  outline: none;
  border: none;
  margin: 1px;
  width: 15px;
  height: 15px;
  border-radius: 3px;
  box-shadow: 2px 2px #212121;
  font-weight: bold;
  padding: 0;

  &:hover {
    background-color: #50717b;
  }

  &:active {
    background-color: #50717b;
    box-shadow: 0 0 #666;
    transform: translate(1px, 1px);
  }
`

const Input = styled.input`
  width: 60px;
  height: 35px;
  font-size: 16px;
  display: inline-block;
  background-color: #50717b; /*for compatibility with older browsers*/
  background-image: linear-gradient(#50717b, #8ecccc);
  outline: none;
  border-radius: 5px;
  border: 2px solid #8ecccc;
  //border: none;
  font-weight: bold;
  text-align: center;
  appearance: none;
  //no pseudo-elements for input and other non-container things
`

const LimitInputField = styled.div`
  width: 60px;
  height: 35px;
  color: black;
  font-size: 16px;
  display: flex;
  background-color: #50717b; /*for compatibility with older browsers*/
  background-image: linear-gradient(#50717b, #8ecccc);
  border-radius: 5px;
  border-top: 1px solid #50717b;
  border-left: 1px solid #50717b;
  border-right: 1px solid #50717b;
  //border: none;
  font-weight: bold;
  justify-content: center;
  //align-items: center; //couldn't position pseudo-element in the right place so I went with some workarounds
  outline: none;

  &::after { //"::" - pseudo element, ":" - pseudo-class
    content: '';
    position: absolute;
    //top: 1px;
    //left: 1px;
    width: 60px;
    height: 18px;
    background: linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.2));
    border-radius: 5px 5px 0 0;
  }
`

