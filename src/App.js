import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  // States
  const [step, setStep] = useState(0);
  const [isOpen, SetIsOpen] = useState(true);

  // State handling Functions
  const incrementStep = () => {
    if (step < 2) setStep((count) => count + 1);
  };

  const decrementStep = () => {
    if (step > 0) setStep((count) => count - 1);
  };

  const handleOpen = () => {
    SetIsOpen(!isOpen);
    if (isOpen) {
      setStep(0);
    }
  };

  return (
    <>
      <button className="close" onClick={() => handleOpen()}>
        &#10005;
      </button>
      {isOpen ? (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 0 ? "active" : ""}>1</div>
            <div className={step >= 1 ? "active" : ""}>2</div>
            <div className={step >= 2 ? "active" : ""}>3</div>
          </div>
          <div className="message">{`Step ${step + 1}: ` + messages[step]}</div>
          <div className="buttons">
            <button onClick={() => decrementStep()}>Previous</button>
            <button onClick={() => incrementStep()}>Next</button>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
