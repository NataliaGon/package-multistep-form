import React from "react";
import cx from "classnames";
import Icon from "../Icon/Icon";
import CheckedIcon from '../icons/checked.svg';
import "./StepsController.css";

const StepsIndicatorMobile = ({ step, stepsAmount }) => {

    const getStepsIndicator = () => {
        const stepsAmountArray = []
        for (let i = 1; i <= stepsAmount; i++) {
            stepsAmountArray.push(i)
        }
        return stepsAmountArray
    }

    return (
        <div className={"stepContainerMobile"}>
            {getStepsIndicator().map(item => <div className={"step"} key={item}>
                <div className={"circlePanel"} >
                    {item > 1 && <div className={cx("stem", {
                        ["stemActive"]: item === step || step > item
                    })}></div>}
                    <div className={cx("circle", {
                        ["circleActive"]: item === step || step > item
                    })}>
                        {step > item ? <Icon name={CheckedIcon} /> : <div className={cx("circleIn", {
                            ["circleInActive"]: item === step || step > item
                        })}></div>}
                    </div>
                </div>
                <div className={cx("stepText", {
                    ["stepTextActive"]: item === step
                })}>Step {step}</div>
            </div>
            )}
        </div>
    )
};

export default StepsIndicatorMobile;
