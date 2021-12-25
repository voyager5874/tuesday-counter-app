import styles from "./Indicator.module.css"
import {useState} from "react";

type IndicatorValueType = {
    value: number
    maxValue: number
    minValue: number
}
export const Indicator = (props: IndicatorValueType) => {
    const[error, setError] = useState('')

    return(

        <div className={`${props.value === props.maxValue ? styles.limitReached : ""} ${styles.indicator}`}>{error ? error : props.value}</div>

    )
}