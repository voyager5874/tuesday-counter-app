import React from "react";
import styled from "styled-components";

type IndicatorPropsType = {
    mainValue: number
    error: string
    value1: number
    value2: number
    value1Label: string
    value2Label: string
    finish: boolean

}
export const MainDisplay = (props: IndicatorPropsType) => {
    return (
        <Display error={props.error}>
            <DisplayMainValue error={props.error} limitReached={props.finish}>
                {props.error ? props.error : props.mainValue}
            </DisplayMainValue>
            <DisplayAdditionalInfoWrapper>
                <CurrentLimitValue>{props.value1Label}: {props.value1}</CurrentLimitValue>
                <CurrentLimitValue>{props.value2Label}: {props.value2}</CurrentLimitValue>
            </DisplayAdditionalInfoWrapper>
        </Display>

    )
}


interface DisplayProps {
    error: string
}

const Display = styled.div<DisplayProps>`
  position: relative;
  background-color: #50717b; /*for compatibility with older browsers*/
  background-image: linear-gradient(#50717b, #8ecccc);
  height: 100px;
  border-radius: 10px;
  font-size: 50px;
  text-align: center;
  color: #3a4042;
  font-weight: bold;
  /*border: 1px solid red;*/
  display: flex;
  flex-direction: column;
  box-shadow: rgba(44, 187, 99, .35) 0 -25px 18px -14px inset,
  rgba(44, 187, 99, .25) 0 1px 2px,
  rgba(44, 187, 99, .25) 0 2px 4px,
  rgba(44, 187, 99, .25) 0 4px 8px,
  rgba(44, 187, 99, .25) 0 8px 16px,
  rgba(44, 187, 99, .25) 0 16px 32px;
  justify-content: flex-end;

  &::after {
    content: '';
    position: absolute;
    top: 2px;
    left: 2px;
    width: calc(100% - 4px);
    height: 50%;
    /*width: 300px;*/
    background: linear-gradient(rgba(255, 255, 255, 0.8),
    rgba(255, 255, 255, 0.2));
    border-radius: 10px 10px 0 0;
  }
`

interface DisplayMainValueProps {
    error: string
    limitReached: boolean
}

const DisplayMainValue = styled.div<DisplayMainValueProps>`
  //border: 1px solid yellow;
  height: 100%;
  display: flex;
  justify-content: center;
  //align-items: flex-end;
  align-items: ${props => props.error ? "center" : "flex-end"};
  font-size: ${props => props.error ? "18px" : ""};
  padding-top: ${props => props.error ? "14px" : ""};
  color: ${props => props.limitReached || props.error ? "rgba(180,53,53,0.6)" : ""};
`
const DisplayAdditionalInfoWrapper = styled.div`
  display: flex;
  padding: 0;
  /*flex-direction: column;*/
  align-items: center;
  justify-content: center;
  font-size: 8px;
  /*border: 1px solid #fc0606;*/
  /*width:100px;*/
  /*height: 60px;*/
`

const CurrentLimitValue = styled.div`
  /*height: 20px;*/
  /*border: 1px solid #a722d9;*/
  min-width: 100px;
  padding-bottom: 3px;
`