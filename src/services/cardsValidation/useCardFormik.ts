<<<<<<< HEAD
import { useFormik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { normalizeCard } from "../../utilits/cards/normalizedCard";
import { postNewCard } from "../cardsService";
import { errorMessage, successMessage } from "../feedbackService";
import { UnnormalizedCard } from "../../interfaces/cards/UnnormalizedCard";


const useCardFormik = () => {
  const navigate = useNavigate();

  return useFormik({
    initialValues: {
      title: "",
      subtitle: "",
      description: "",
      phone: "",
      email: "",
      web: "",
      url: "",
      alt: "",
      state: "",
      country: "",
      city: "",
      street: "",
      houseNumber: "",
      zip: "",
    },
    validationSchema: yup.object({
      title: yup.string().min(2).max(256).required(),
      subtitle: yup.string().min(2).max(256).required(),
      description: yup.string().min(2).max(1024).required(),
      phone: yup.string().min(9).max(11).required(),
      email: yup.string().email().min(5).required(),
      url: yup.string().min(14).optional(),
      alt: yup.string().min(2).max(256).optional(),
      state: yup.string().optional(),
      country: yup.string().required(),
      city: yup.string().required(),
      street: yup.string().required(),
      houseNumber: yup.number().min(1).required(),
      zip: yup.number().required(),
    }),
    onSubmit: (values, { resetForm }) => {
      let normalizedCard = normalizeCard(values as unknown as UnnormalizedCard);
      postNewCard(normalizedCard)
        .then(() => {
          successMessage(`Your card posted successfully!`);
          navigate("/");
        })
        .catch((err) => {
          console.log(err);
          errorMessage(err.response.data);
        });
      resetForm();
    },
  });
};

export default useCardFormik;
=======
import { useFormik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { normalizeCard } from "../../utilits/cards/normalizedCard";
import { postNewCard } from "../cardsService";
import { errorMessage, successMessage } from "../feedbackService";
import { UnnormalizedCard } from "../../interfaces/cards/UnnormalizedCard";


const useCardFormik = () => {
  const navigate = useNavigate();

  return useFormik({
    initialValues: {
      title: "",
      subtitle: "",
      description: "",
      phone: "",
      email: "",
      web: "",
      url: "",
      alt: "",
      state: "",
      country: "",
      city: "",
      street: "",
      houseNumber: "",
      zip: "",
    },
    validationSchema: yup.object({
      title: yup.string().min(2).max(256).required(),
      subtitle: yup.string().min(2).max(256).required(),
      description: yup.string().min(2).max(1024).required(),
      phone: yup.string().min(9).max(11).required(),
      email: yup.string().email().min(5).required(),
      url: yup.string().min(14).optional(),
      alt: yup.string().min(2).max(256).optional(),
      state: yup.string().optional(),
      country: yup.string().required(),
      city: yup.string().required(),
      street: yup.string().required(),
      houseNumber: yup.number().min(1).required(),
      zip: yup.number().required(),
    }),
    onSubmit: (values, { resetForm }) => {
      let normalizedCard = normalizeCard(values as unknown as UnnormalizedCard);
      postNewCard(normalizedCard)
        .then(() => {
          successMessage(`Your card posted successfully!`);
          navigate("/");
        })
        .catch((err) => {
          console.log(err);
          errorMessage(err.response.data);
        });
      resetForm();
    },
  });
};

export default useCardFormik;
>>>>>>> e37926e37b9a313da62e0567fc341065ea047aa8
