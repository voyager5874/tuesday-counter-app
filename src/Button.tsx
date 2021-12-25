import styled from "styled-components";

type ButtonType = {
    name: string
    indicatorValue: number
    disabled: boolean
    callback: () => void
}

export const Button = (props: ButtonType) => {
    const onClickHandler = () => {
        props.callback();
    }
    return (
        // <button className={styles.deepskyblueButton} onClick={onClickHandler}>{props.name}</button>
        <BlueButton
            disabled={props.disabled}
            // className={`${props.disabled ? styles.disabled : ""}`}
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
  box-shadow: 3px 3px #212121;


  &:hover {
    background-color: ${props => !props.disabled ? "#50717b" : ""};
  }

  &:active {
    background-color: #50717b;
    box-shadow: 0 0 #666;
    transform: translate(4px, 4px);
  }

`