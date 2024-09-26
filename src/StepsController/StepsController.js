import React, { useState } from "react";
import Button from "../Button/Button"
import StepsIndicator from "./StepsIndicator";
import "./StepsController.css";

const StepsController = ({ steps, manageNextStepValidation, stepsAmount, formTitle }) => {
    const [step, setStep] = useState(1);

    const onNextStep = () => {
        if (!manageNextStepValidation && step !== stepsAmount) {
            setStep(step + 1)
        }
        if (manageNextStepValidation(step) && step !== stepsAmount) {
            setStep(step + 1)
        }
    }

    return (
        <div className={"container"}>
            <div className={"indicatorContainer"}>
                <h1 className={"title"}>{formTitle}</h1>
                <StepsIndicator
                    step={step}
                    stepsAmount={stepsAmount} />
            </div>
            <div className={"formContainer"}>
                <div> {
                    steps[step - 1]
                }</div>
                <div className={"buttonsContainer"}>
                    <Button className={"nextButton"}
                        onClick={() => onNextStep()}
                    >
                        {
                            step !== stepsAmount ? "Next" :
                                "Send"}
                    </Button>
                    {step !== 1 && <Button className={"backButton"} onClick={() => setStep(step - 1)}>Back</Button>}
                </div>
            </div>
        </div>
    )
};

export default StepsController;

