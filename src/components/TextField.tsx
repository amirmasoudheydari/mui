export enum TextFieldVariants {
  Sm = "SMALL",
  Md = "MEDIUM",
  Lg = "LARGE",
}

type InputTypes = "text" | "number" | "search" | "password" | "tel";

type InputValue = string | number;

// type TextFieldProps = {
//   label?: string;
//   fullWidth?: boolean;
//   placeholder?: string;
//   value: InputValue;
//   variant: TextFieldVariants;
//   type?: InputTypes;
// };

interface BaseInputProps  {
  type?: InputTypes;
  placeholder?: string;
  value: InputValue;
}

interface TextFieldProps extends BaseInputProps {
  label?: string;
  fullWidth?: boolean;
  variant: TextFieldVariants;
};

export default function TextField(props: TextFieldProps) {
  const { type, label, fullWidth, variant, placeholder } = props;

  let padding: number = 0;
  switch (variant) {
    case TextFieldVariants.Sm:
      padding = 10;
      break;
    case TextFieldVariants.Md:
      padding = 20;
      break;
    case TextFieldVariants.Lg:
      padding = 25;
      break;
    default:
      padding = 10;
      break;
  }

  return (
    <div>
      {!!label && <label>{label}</label>}
      <input
        placeholder={placeholder}
        style={{
          width: fullWidth ? "100%" : "auto",
          padding,
        }}
        type={type || "text"}
      />
    </div>
  );
}
