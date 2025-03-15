<<<<<<< HEAD
import React from "react";
import useCardFormik from "../../services/cardsValidation/useCardFormik";
import FormField from "./FormField";
import FormRow from "./FormRow";


const NewCard: React.FC = () => {
  const formik = useCardFormik();

  return (
    <form className="w-50" onSubmit={formik.handleSubmit}>
      {/* First Part of the Form */}
      <FormField
        id="title"
        label="Title"
        value={formik.values.title}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.errors.title}
        touched={formik.touched.title}
      />
      <FormField
        id="subtitle"
        label="Subtitle"
        value={formik.values.subtitle}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.errors.subtitle}
        touched={formik.touched.subtitle}
      />
      <FormField
        id="description"
        label="Description"
        value={formik.values.description}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.errors.description}
        touched={formik.touched.description}
      />
      
      {/* Second Part of the Form */}
      <FormField
        id="phone"
        label="Phone"
        value={formik.values.phone}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.errors.phone}
        touched={formik.touched.phone}
      />
      <FormField
        id="email"
        label="Email"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.errors.email}
        touched={formik.touched.email}
      />
      
      {/* Third Part of the Form (address-related fields) */}
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
          {
            id: "houseNumber",
            label: "House Number",
            value: formik.values.houseNumber,
          },
          { id: "zip", label: "Zip Code", value: formik.values.zip },
        ]}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        errors={formik.errors}
        touched={formik.touched}
      />
      
      <button
        type="submit"
        className="btn btn-primary mt-4"
        disabled={!formik.dirty || !formik.isValid || formik.isSubmitting}
      >
        Create Business
      </button>
    </form>
  );
};

export default NewCard;
=======
import React from "react";
import useCardFormik from "../../services/cardsValidation/useCardFormik";
import FormField from "./FormField";
import FormRow from "./FormRow";


const NewCard: React.FC = () => {
  const formik = useCardFormik();

  return (
    <form className="w-50" onSubmit={formik.handleSubmit}>
      {/* First Part of the Form */}
      <FormField
        id="title"
        label="Title"
        value={formik.values.title}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.errors.title}
        touched={formik.touched.title}
      />
      <FormField
        id="subtitle"
        label="Subtitle"
        value={formik.values.subtitle}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.errors.subtitle}
        touched={formik.touched.subtitle}
      />
      <FormField
        id="description"
        label="Description"
        value={formik.values.description}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.errors.description}
        touched={formik.touched.description}
      />
      
      {/* Second Part of the Form */}
      <FormField
        id="phone"
        label="Phone"
        value={formik.values.phone}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.errors.phone}
        touched={formik.touched.phone}
      />
      <FormField
        id="email"
        label="Email"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.errors.email}
        touched={formik.touched.email}
      />
      
      {/* Third Part of the Form (address-related fields) */}
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
          {
            id: "houseNumber",
            label: "House Number",
            value: formik.values.houseNumber,
          },
          { id: "zip", label: "Zip Code", value: formik.values.zip },
        ]}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        errors={formik.errors}
        touched={formik.touched}
      />
      
      <button
        type="submit"
        className="btn btn-primary mt-4"
        disabled={!formik.dirty || !formik.isValid || formik.isSubmitting}
      >
        Create Business
      </button>
    </form>
  );
};

export default NewCard;
>>>>>>> e37926e37b9a313da62e0567fc341065ea047aa8
