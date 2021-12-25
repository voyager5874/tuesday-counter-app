import React, {useEffect, useState} from 'react';
import './App.css';
import s from "./App.module.css";
import {Indicator} from "./Indicator";
import {Button} from "./Button";
import {Settings} from "./Settings";
import styled from "styled-components";

function App() {

    //BLL should be placed in localStorage to imitate server data ?
    // let MIN_VALUE = 0;
    // let MAX_VALUE = 5;

    // const [limits, setLimits] = useState<Array<number>>([0, 1])
    const [tempLimitsValues, setTempLimitsValues] = useState<Array<number>>([0, 0]) //how do I use set if inputs for max/min live in another component?

    const [minValue, setMinValue] = useState<number>(0)
    const [maxValue, setMaxValue] = useState<number>(5)

    const [counter, setCounter] = useState<number>(minValue)
    const [error, setError] = useState('')
    const [paramsVisible, setParamsVisible] = useState(false)

    const incrementCounter = () => {
        debugger
        if (!paramsVisible && counter < maxValue) {
            setError('')
            setCounter(counter + 1)
        }
        if (paramsVisible) {
            setError('set your counter')
        }
    }

    const resetCounter = () => {
        setCounter(minValue) //no rerender if min have not changed
    }
    const setLimitsHandler = () => {
        if (paramsVisible) {
            // MIN_VALUE = minValue
            // MAX_VALUE = maxValue
            setMaxValue(tempLimitsValues[0])
            setMinValue(tempLimitsValues[1])
            localStorage.setItem('maxValue', JSON.stringify(maxValue))
            localStorage.setItem('minValue', JSON.stringify(minValue))
            setError('')
            setParamsVisible(false)
            // resetCounter()
        } else {
            setParamsVisible(true)
        }
    }
    const changeTempLocalState = (max: number, min: number) => {
        debugger
        setTempLimitsValues([max, min])
    }

    useEffect(() => {
        resetCounter()
    }, [maxValue, minValue])

    let mainDisplayClassName = `${counter === maxValue ? s.limitReached : ""} ${error ? s.errorMessage : ""}`

    return (
        <CounterWrapper>
            <Settings visible={paramsVisible}
                      error={error}
                      maxValue={maxValue}
                      minValue={minValue}
                      limitsChangedCallback={(max, min) => {
                          changeTempLocalState(max, min)
                      }}
            />
            <div className={s.mainBoardWrapper}>
                {/*<Indicator value={counter}/>*/}
                <CounterDisplay>
                    <CounterDisplayMainValue className={mainDisplayClassName}>
                        {error ? error : counter}
                    </CounterDisplayMainValue>
                    <div className={s.currentSetContainer}>
                        <div className={s.currentSet}>Current max value: {maxValue}</div>
                        <div className={s.currentSet}>Current start value: {minValue}</div>
                    </div>
                </CounterDisplay>
                <div className={s.buttonContainer}>
                    <Button disabled={counter === maxValue || Boolean(error)}
                            name={"inc"}
                            callback={incrementCounter}
                            indicatorValue={counter}/>
                    <Button disabled={counter === minValue || Boolean(error)}
                            name={"reset"}
                            callback={resetCounter}
                            indicatorValue={counter}/>
                    <Button disabled={false}
                            name={"set"}
                            callback={setLimitsHandler}
                            indicatorValue={counter}/>
                </div>
            </div>
        </CounterWrapper>

    )
}


const CounterWrapper = styled.div`
  /*border: 2px solid black;*/
  width: 330px;
  height: 500px;
  display: flex;
  flex-direction: column;
  /*flex-wrap: wrap;*/
  justify-content: center;
  align-items: center;

`

const CounterDisplay = styled.div`
  position: relative;
  background-color: #50717b; /*for compatibility with older browsers*/
  background-image: linear-gradient(#50717b, #8ecccc);
  /*background-color: #8ecccc;*/
  height: 100px;
  border-radius: 10px;
  font-size: 50px;
  text-align: center;
  color: #3a4042;
  font-weight: bold;
  /*border: 1px solid red;*/
  display: flex;
  flex-direction: column;
  box-shadow: 0px 1px 4px -2px #333;
  justify-content: flex-end;

  &::after {
    content: '';
    position: absolute;
    top: 2px;
    left: 2px;
    width: calc(100% - 4px);
    height: 50%;
    /*width: 300px;*/
    background: linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.2));
    border-radius: 10px 10px 0 0;
  }
`

const CounterDisplayMainValue = styled.div`
  //border: 1px solid yellow;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`


export default App;
