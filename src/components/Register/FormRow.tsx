import React from "react";
import FormField from "./FormField";

interface FormRowProps {
  fields: { id: string; label: string; value: string | number; type?: string }[];
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  errors: any;
  touched: any;
}

const FormRow: React.FC<FormRowProps> = ({
  fields,
  onChange,
  onBlur,
  errors,
  touched,
}) => {
  return (
    <div className="row g-3">
      {fields.map(({ id, label, value, type }) => (
        <div className="col-md" key={id}>
          <FormField
            id={id}
            label={label}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            error={errors[id]}
            touched={touched[id]}
            type={type}
          />
        </div>
      ))}
    </div>
  );
};

export default FormRow;
