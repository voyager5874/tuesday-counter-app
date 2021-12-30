import React, {useEffect, useReducer} from 'react';
import './App.css';
import {MainDisplay} from "./components/MainDisplay";
import {Button} from "./components/Button";
import {Settings} from "./components/Settings";
import styled from "styled-components";
import {
    counterActionsReducer,
    applySettingsAC,
    setErrorAC,
    showSettingsAC,
    resetCounterAC,
    hideSettingsAC,
    incrementCounterAC,
    getStateFromStorageAC,
    getMaxFromUserAC,
    getMinFromUserAC
} from "./state/counterActionsReducer";

function App() {

    const [counterState, counterActionsDispatch] = useReducer(counterActionsReducer, {
        counterValue: 0,
        maxValue: 1,
        minValue: 0,
        error: '',
        settingsVisible: false,
        maxToBeSet: 0,
        minToBeSet: 0
    })

    useEffect(() => {
        // debugger
        counterActionsDispatch(getStateFromStorageAC())
    }, [])

    const incrementCounter = () => {
        // debugger
        if (!counterState.settingsVisible && counterState.counterValue < counterState.maxValue) {
            counterActionsDispatch(setErrorAC(''))
            counterActionsDispatch(incrementCounterAC())
        }
        if (counterState.settingsVisible) {
            counterActionsDispatch(setErrorAC('set your counter'))
            setTimeout(() => counterActionsDispatch(setErrorAC('')), 1500)
        }
    }

    const resetCounter = () => {
        counterActionsDispatch(resetCounterAC())
    }

    const toggleSettingsVisibility = () => {
        if (counterState.settingsVisible) {
            // counterActionsDispatch(applySettingsAC(counterState.maxToBeSet, counterState.minToBeSet)) //could be done without parameters (copy from state inside reducer)
            counterActionsDispatch(applySettingsAC()) //could be done without parameters (copy from state inside reducer)
            counterActionsDispatch(hideSettingsAC())
            counterActionsDispatch(resetCounterAC())
        } else {
            counterActionsDispatch(showSettingsAC())
        }
    }

    useEffect(() => {
        // debugger
        localStorage.setItem('maxValue', JSON.stringify(counterState.maxValue))
        localStorage.setItem('minValue', JSON.stringify(counterState.minValue))
        localStorage.setItem('counterValue', JSON.stringify(counterState.counterValue))
    }, [counterState.maxValue, counterState.minValue, counterState.counterValue])

    const validateNewMax = (newMax: number) => {
        if (newMax > counterState.minToBeSet && newMax > 0) {
            counterActionsDispatch(setErrorAC(''))
            counterActionsDispatch(getMaxFromUserAC(newMax))
            // debugger

        } else {
            newMax <= counterState.minToBeSet ? counterActionsDispatch(setErrorAC('max must be above the min'))
                : counterActionsDispatch(setErrorAC('negative values not allowed'))
            setTimeout(() => counterActionsDispatch(setErrorAC('')), 1000)
        }
    }

    const validateNewMin = (newMin: number) => {
        if (newMin < counterState.maxToBeSet && newMin >= 0) {
            counterActionsDispatch(setErrorAC(''))
            counterActionsDispatch(getMinFromUserAC(newMin))

        } else {
            newMin >= counterState.maxToBeSet ? counterActionsDispatch(setErrorAC('min must be less than the max'))
                : counterActionsDispatch(setErrorAC('negative values not allowed'))
            setTimeout(() => counterActionsDispatch(setErrorAC('')), 1000)
        }
    }


    return (
        <CounterWrapper>
            <Settings visible={counterState.settingsVisible}
                      maxValue={counterState.maxToBeSet}
                      minValue={counterState.minToBeSet}
                      validateNewMax={validateNewMax}
                      validateNewMin={validateNewMin}


            />
            <MainBoardWrapper>
                <MainDisplay mainValue={counterState.counterValue} error={counterState.error}
                             value1={counterState.maxValue} value2={counterState.minValue} value1Label={"max"}
                             value2Label={"start"} finish={counterState.counterValue === counterState.maxValue}/>
                <ControlsWrapper>
                    <Button
                        disabled={counterState.counterValue === counterState.maxValue || Boolean(counterState.error)}
                        name={"inc"}
                        callback={incrementCounter}
                    />
                    <Button
                        disabled={counterState.counterValue === counterState.minValue || Boolean(counterState.error)}
                        name={"reset"}
                        callback={resetCounter}
                    />
                    <Button disabled={Boolean(counterState.error)}
                            name={"set"}
                            callback={toggleSettingsVisibility}
                    />
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
