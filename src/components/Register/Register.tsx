import React from "react";
import FormRow from "./FormRow";
import useRegisterFormik from "../../services/registerValidation/useRegisterFormik";

const Register: React.FC = () => {
  const formik = useRegisterFormik();

  return (
    <div className="w-50 mx-auto py-3">
      <h1 className="display-1 text-center mb-4">Register</h1>
      <form onSubmit={formik.handleSubmit}>
        <FormRow
          fields={[
            { id: "first", label: "First Name", value: formik.values.first },
            { id: "middle", label: "Middle Name", value: formik.values.middle },
            { id: "last", label: "Last Name", value: formik.values.last },
          ]}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          errors={formik.errors}
          touched={formik.touched}
        />
        <FormRow
          fields={[
            { id: "phone", label: "Phone", value: formik.values.phone, type: "tel" },
            { id: "email", label: "Email", value: formik.values.email, type: "email" },
          ]}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          errors={formik.errors}
          touched={formik.touched}
        />
        <FormRow
          fields={[
            { id: "password", label: "Password", value: formik.values.password, type: "password" },
            { id: "confirmPassword", label: "Confirm Password", value: formik.values.confirmPassword, type: "password" },
          ]}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          errors={formik.errors}
          touched={formik.touched}
        />
        <FormRow
          fields={[
            { id: "state", label: "State", value: formik.values.state },
            { id: "country", label: "Country", value: formik.values.country },
            { id: "city", label: "City", value: formik.values.city },
          ]}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          errors={formik.errors}
          touched={formik.touched}
        />

        <FormRow
          fields={[
            { id: "street", label: "Street", value: formik.values.street },
            { id: "houseNumber", label: "House Number", value: formik.values.houseNumber, type: "number" },
            { id: "zip", label: "Zip Code", value: formik.values.zip, type: "number" },
          ]}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          errors={formik.errors}
          touched={formik.touched}
        />
        <FormRow
          fields={[
            { id: "image", label: "Profile Image", value: formik.values.image, type: "url" },
            { id: "alt", label: "Alternative Text", value: formik.values.alt },
          ]}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          errors={formik.errors}
          touched={formik.touched}
        />
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id="isBusiness"
            name="isBusiness"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.isBusiness ? "true" : "false"}
          />
          <label className="form-check-label" htmlFor="isBusiness">
            Is Business?
          </label>
          {formik.touched.isBusiness && formik.errors.isBusiness && (
            <p className="text-danger">{formik.errors.isBusiness}</p>
          )}
        </div>

        <button
          disabled={!formik.dirty || !formik.isValid}
          type="submit"
          className="btn btn-primary mt-4"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
