# multistep-react-form

> A React component package to create customizable, multi-step forms. This package includes a `StepsController` component for managing form steps, validation, and responsiveness.

<kbd>
<img height="350px" src="https://res.cloudinary.com/ecohub/image/upload/v1727967730/form-steps/Screen_Shot_2024-10-03_at_18.00.52_vmwvzv.png"/>
</kbd>


## Features
- Create customizable multi-step forms.
- Add custom validation logic for step transitions.
- Responsive design with configurable breakpoints.
- Supports custom class names for styling.

## Installation

Install the package via npm:

```bash
npm install multistep-react-form
```
## Usage

The StepsController component manages the overall structure of the multi-step form, handling transitions and validation.

#### Props:

| PROPERTY       | DESCRIPTION                                                  | TYPE        | DEFAULT    | isRequired|
|----------------|--------------------------------------------------------------|-------------|------------|-----------|
| title          | The title displayed at the top of the form.                  |string       |''          |false      |
| breakpoint     | The width breakpoint for responsive design.                  |number       |1119        |false      |
| manageNextStep | A function that manages validation logic.                    |function     |() => true  |false      |
| steps          | An array of steps, each containing a  component to render.    |Array        |[]          |true       |


### Example

Here is an example of how to use the StepsController component:

```jsx
import React from 'react';
import StepsController from 'multistep-react-form';

const steps = [
    <StepOneForm formData={formData} validationError={validationError} handleFieldChange={handleFieldChange} />,
    <StepTwoForm formData={formData} validationError={validationError} handleFieldChange={handleFieldChange} />,
    <StepThreeForm formData={formData} validationError={validationError} handleFieldChange={handleFieldChange} />
];

const manageNextStep = (currentStep) => {
    // Example validation logic
    if (currentStep === 1 && !formData.name) {
        return false; // Prevent navigation if name is not provided
    }
    return true;
};

const MyForm = () => (
    <StepsController
        title="Add a new company"
        breakpoint={856}
        manageNextStep={manageNextStep}
        steps={steps}
    />
);

export default MyForm;

```
### Custom Validation:
The manageNextStep function takes two arguments: the currentStep (number) and formData (object). Return true to allow navigation to the next step, or false to block it based on your custom validation logic.
```jsx
const manageNextStep = (currentStep) => {
    // Validation logic
    return true; // or false
};
```
### Breakpoint:
Use the breakpoint prop to define the width at which the form layout will switch from a desktop view to a mobile-friendly layout.

### License
This project is licensed under the MIT License.