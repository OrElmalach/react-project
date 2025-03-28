<<<<<<< HEAD
import React from "react";
import FormField from "./FormField";

interface FormRowProps {
  fields: { id: string; label: string; value: string | number }[];
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
      {fields.map(({ id, label, value }) => (
        <div className="col-md" key={id}>
          <FormField
            id={id}
            label={label}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            error={errors[id]}
            touched={touched[id]}
          />
        </div>
      ))}
    </div>
  );
};

export default FormRow;
=======
import React from "react";
import FormField from "./FormField";

interface FormRowProps {
  fields: { id: string; label: string; value: string | number }[];
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
      {fields.map(({ id, label, value }) => (
        <div className="col-md" key={id}>
          <FormField
            id={id}
            label={label}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            error={errors[id]}
            touched={touched[id]}
          />
        </div>
      ))}
    </div>
  );
};

export default FormRow;
>>>>>>> e37926e37b9a313da62e0567fc341065ea047aa8
