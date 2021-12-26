import React, {useEffect, useState} from 'react';
import s from "./Settings.module.css"
import {LimitValueInput} from "./LimitValueInput";
import styled from "styled-components";

type SettingsPropsType = {
    error: string
    visible: boolean
    maxValue: number
    minValue: number
    // minChangedCallback: (newValue: number) => void
    // maxChangedCallback: (newValue: number) => void
    limitsChangedCallback: (newMax: number, newMin: number) => void
}

export const Settings = (props: SettingsPropsType) => {

    const [minValue, setMinValue] = useState<number>(props.minValue)
    const [maxValue, setMaxValue] = useState<number>(props.maxValue)
    const [error, setError] = useState<boolean>(false)

    const validateNewMax = (newMax: number) => {

        if (newMax > minValue) {
            setError(false)
            setMaxValue(newMax)
            // limitsChangedHandler()
        } else {
            setError(true)
        }
    }
    const validateNewMin = (newMin: number) => {
        if (newMin < maxValue) {
            setError(false)
            setMinValue(newMin)
            // limitsChangedHandler()

        } else {
            setError(true)
        }
    }

    const limitsChangedHandler = () => {
        props.limitsChangedCallback(maxValue, minValue)
    }

    useEffect(() => {
        props.limitsChangedCallback(maxValue, minValue)
    }, [maxValue, minValue])

    let visibility = `${props.visible ? s.settingsVisible : s.settingsInvisible}`
    // let settingsClassName = `${s.settingsVisible} ${s.settingsWrapper}`
    // let settingsClassName = `${s.settingsWrapper}`
    // let settingsClassName = `${props.visible ? s.showHidden : s.slowlyHide} ${s.settingsWrapper}`
    //how to make slider animation with styled components??


    return (
        <SettingsWrapper className={visibility}>
            <LimitValueInput label={"max value"} currentValue={maxValue}
                             callback={(newValue) => validateNewMax(newValue)}/>
            <LimitValueInput label={"min value"} currentValue={minValue}
                             callback={(newValue) => validateNewMin(newValue)}/>
        </SettingsWrapper>
    );
};


const SettingsWrapper = styled.div`
  /*position: relative;*/
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: #3a4042;
  width: 250px;
  heigth: 500px;
  border: 3px solid #8ecccc;
  border-bottom: none;
  border-radius: 10px 10px 0 0;
  //box-shadow: 0 4px 8px 0 rgb(33, 33, 33), 0 6px 20px 0 rgb(33, 33, 33);
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
  /*max-height: 0;*/
  /*overflow: hidden;*/
`

