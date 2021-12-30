import React from 'react';
import styled from "styled-components";


type LimitValueInputType = {
    label: string
    currentValue: number
    sendValueCallback: (newValue: number) => void
}

export const LimitValueInput = (props: LimitValueInputType) => {
    // debugger
    const plusClickHandler = () => {
        props.sendValueCallback(props.currentValue + 1)
    }

    const minusClickHandler = () => {
        props.sendValueCallback(props.currentValue - 1)
    }

    return (
        <LimitValueSetContainer>
            <Label>{props.label}</Label>
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
                <LimitValueControlButtons
                    onClick={minusClickHandler}>-</LimitValueControlButtons>
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
  //box-shadow: 2px 2px #212121;
  box-shadow: rgba(44, 187, 99, .35) 0 -25px 18px -14px inset,
  rgba(44, 187, 99, .25) 0 1px 2px,
  rgba(44, 187, 99, .25) 0 2px 4px,
  rgba(44, 187, 99, .25) 0 4px 8px,
  rgba(44, 187, 99, .25) 0 8px 16px,
  rgba(44, 187, 99, .25) 0 16px 32px;

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
  box-shadow: rgba(44, 187, 99, .35) 0 -25px 18px -14px inset,
  rgba(44, 187, 99, .25) 0 1px 2px,
  rgba(44, 187, 99, .25) 0 2px 4px,
  rgba(44, 187, 99, .25) 0 4px 8px,
  rgba(44, 187, 99, .25) 0 8px 16px,
  rgba(44, 187, 99, .25) 0 16px 32px;

  &::after { //"::" - pseudo element, ":" - pseudo-class
    content: '';
    position: absolute;
    //top: 1px;
    //left: 1px;
    width: 60px;
    height: 18px;
    background: linear-gradient(rgba(255, 255, 255, 0.8),
    rgba(255, 255, 255, 0.2));
    border-radius: 5px 5px 0 0;
  }
`

const Label = styled.label`
  text-shadow: 0 0 3px #fff;

  paddingRight: 40px;
  marginRight: 10px;

`

