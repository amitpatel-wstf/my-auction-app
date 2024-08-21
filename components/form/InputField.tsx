import { Dispatch, SetStateAction } from "react";

const InputField = ({
  value,
  setState,
  placeholder,
  type,
  name,
  required=true
}: {
  value: string;
  setState: Dispatch<SetStateAction<string>>;
  placeholder: string;
  type: string;
  name: string;
  required?: boolean;
}) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      className="border px-4 p-2 outline-none"
      value={value}
      onChange={(e) => setState(e.target.value)}
      required={required}
    />
  );
};

export default InputField;
