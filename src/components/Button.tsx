import styled from "styled-components";

type ButtonType = {
    name: string
    // indicatorValue: number
    disabled: boolean
    callback: () => void
}

export const Button = (props: ButtonType) => {
    const onClickHandler = () => {
        props.callback();
    }
    return (
        <BlueButton
            disabled={props.disabled}
            onClick={onClickHandler}>{props.name}</BlueButton>
    )
}


const BlueButton = styled.button`
  color: #212121;
  font-size: 2em;
  outline: none;
  border: none;
  background-color: ${props => props.disabled ? "#505c5e" : "#8ecccc"};
  border-radius: 10px;
  font-weight: bold;
  height: 40px;
  padding-left: 10px;
  padding-right: 10px;
  //box-shadow: 2px 2px #212121;
  box-shadow: ${props => !props.disabled ? "rgba(44, 187, 99, .35) 0 -25px 18px -14px inset, rgba(44, 187, 99, .25) 0 1px 2px, rgba(44, 187, 99, .25) 0 2px 4px, rgba(44, 187, 99, .25) 0 4px 8px, rgba(44, 187, 99, .25) 0 8px 16px, rgba(44, 187, 99, .25) 0 16px 32px" : "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"};


  &:hover {
    background-color: ${props => !props.disabled ? "#50717b" : ""};
  }

  &:active {
    background-color: #50717b;
    box-shadow: 0 0 #666;
    transform: translate(3px, 3px);
  }

`
const GlimmeringButton = styled.button`

  background-color: #c2fbd7;
  border-radius: 100px;
  box-shadow: rgba(44, 187, 99, .2) 0 -25px 18px -14px inset, rgba(44, 187, 99, .15) 0 1px 2px, rgba(44, 187, 99, .15) 0 2px 4px, rgba(44, 187, 99, .15) 0 4px 8px, rgba(44, 187, 99, .15) 0 8px 16px, rgba(44, 187, 99, .15) 0 16px 32px;
  color: green;
  cursor: pointer;
  display: inline-block;
  font-family: CerebriSans-Regular, -apple-system, system-ui, Roboto, sans-serif;
  padding: 7px 20px;
  text-align: center;
  text-decoration: none;
  transition: all 250ms;
  border: 0;
  font-size: 16px;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  &:hover {
    box-shadow: rgba(44, 187, 99, .35) 0 -25px 18px -14px inset, rgba(44, 187, 99, .25) 0 1px 2px, rgba(44, 187, 99, .25) 0 2px 4px, rgba(44, 187, 99, .25) 0 4px 8px, rgba(44, 187, 99, .25) 0 8px 16px, rgba(44, 187, 99, .25) 0 16px 32px;
    transform: scale(1.05) rotate(-1deg);
  }
`