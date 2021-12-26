import React, {useEffect, useState} from 'react';
import './App.css';
import s from "./App.module.css";
import {MainDisplay} from "./MainDisplay";
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
        // if(max > )
        setTempLimitsValues([max, min])
    }

    useEffect(() => {
        resetCounter()
    }, [maxValue, minValue])

    // let mainDisplayClassName = `${counter === maxValue ? s.limitReached : ""} ${error ? s.errorMessage : ""}`

    return (
        <CounterWrapper>
            <Settings visible={paramsVisible}
                      error={error}
                      maxValue={maxValue}
                      minValue={minValue}
                      limitsChangedCallback={(max, min) => {
                          changeTempLocalState(max, min)
                      }}
                      setErrorCallback={setError}
            />
            <MainBoardWrapper>
                <MainDisplay mainValue={counter} error={error} value1={maxValue} value2={minValue} value1Label={"max"}
                             value2Label={"start"} finish={counter === maxValue}/>
                <ControlsWrapper>
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
                </ControlsWrapper>
            </MainBoardWrapper>
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

const MainBoardWrapper = styled.div`
  z-index: 3;
  width: 300px;
  height: 200px;
  border: 3px solid #8ecccc;
  padding: 10px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  background-color: #3a4042;
  /*box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);*/
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
`

const ControlsWrapper = styled.div`
  border: 3px solid #8ecccc;
  margin-top: 20px;
  border-radius: 10px;
  height: 40%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 10px;
  padding-right: 10px;
`

export default App;
