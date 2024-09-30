import React, { useState, useEffect } from "react";
import Button from "../Button/Button"
import StepsIndicator from "./StepsIndicator";
import StepsIndicatorMobile from "./StepsIndicatorMobile";
import "./StepsController.css";

const StepsController = ({ steps, manageNextStepValidation = () => true, formTitle, breakpoint = 1119 }) => {
    const [step, setStep] = useState(1);

    const stepsAmount = steps.length;

    const onNextStep = () => {
        if (manageNextStepValidation(step) && step !== stepsAmount) {
            setStep(step + 1)
        }
    }

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= breakpoint);
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, [breakpoint]);


    return (
        <div className={"container"}>
            <div className={"indicatorContainer"}>
                {formTitle && <h1 className={"title"}>{formTitle}</h1>}
                <StepsIndicator
                    step={step}
                    stepsAmount={stepsAmount}
                />
            </div>
            <div className={"indicatorContainerMobile"}>
                {formTitle && <h1 className={"title"}>{formTitle}</h1>}
                < StepsIndicatorMobile
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

