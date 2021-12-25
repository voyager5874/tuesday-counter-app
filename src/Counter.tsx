import React from 'react';
import styles from "./App.module.css";
import {Button} from "./Button";

export const Counter = () => {

    return (
        <div className={styles.mainBoardWrapper}>
        {/*    /!*<Indicator value={counter}/>*!/*/}
        {/*    <div*/}
        {/*        className={`${counter === maxValue ? styles.limitReached : ""} ${styles.indicator}`}>*/}
        {/*        {error ? error : counter}*/}
        {/*    </div>*/}
        {/*    <div className={styles.buttonContainer}>*/}
        {/*        <Button disabled={counter === maxValue} name={"inc"} callback={incrementCounter}*/}
        {/*                indicatorValue={counter}/>*/}
        {/*        <Button disabled={counter === minValue} name={"reset"} callback={resetCounter}*/}
        {/*                indicatorValue={counter}/>*/}
        {/*        <Button disabled={error} name={"set"} callback={setLimitsHandler}*/}
        {/*                indicatorValue={counter}/>*/}
        {/*    </div>*/}
        </div>
    );
};



