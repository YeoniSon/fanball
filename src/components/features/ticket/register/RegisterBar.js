import {
  StepBar,
  StepItem,
  StepDot,
  StepLabel,
  StepSeparator,
} from "../../../../styles/ticket/register/RegisterBarStyled";

const steps = [
  { id: 1, label: "경기선택" },
  { id: 2, label: "좌석정보" },
  { id: 3, label: "가격설정" },
  { id: 4, label: "상세정보" },
];

const RegisterBar = ({ currentStep = 1 }) => {
  return (
    <StepBar>
      {steps.map((s, idx) => (
        <>
          <StepItem key={s.id}>
            <StepDot
              $active={currentStep === s.id}
              $completed={currentStep > s.id}
            >
              {s.id}
            </StepDot>
            <StepLabel $active={currentStep === s.id}>{s.label}</StepLabel>
          </StepItem>
          {idx < steps.length - 1 && <StepSeparator />}
        </>
      ))}
    </StepBar>
  );
};

export default RegisterBar;
