import React from "react";

interface FormFieldProps {
  id: string;
  label: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  error?: string;
  touched?: boolean;
}

const FormField: React.FC<FormFieldProps> = ({
  id,
  label,
  value,
  onChange,
  onBlur,
  error,
  touched,
}) => {
  return (
    <div className="form-floating mb-3">
      <input
        type="text"
        className="form-control"
        id={id}
        placeholder={label}
        name={id}
        value={value}
        onBlur={onBlur}
        onChange={onChange}
      />
      <label htmlFor={id}>{label}</label>
      {touched && error && <p className="text-danger">{error}</p>}
    </div>
  );
};

export default FormField;
