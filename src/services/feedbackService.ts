<<<<<<< HEAD
import { Bounce, toast } from "react-toastify";

export function successMessage(massege: string) {
  toast.success(massege, {
    position: "top-right",
    autoClose: 2500,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Bounce,
  });
}

export function errorMessage(massege: string) {
  toast.error(massege, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Bounce,
  });
=======
import { Bounce, toast } from "react-toastify";

export function successMessage(massege: string) {
  toast.success(massege, {
    position: "top-right",
    autoClose: 2500,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Bounce,
  });
}

export function errorMessage(massege: string) {
  toast.error(massege, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Bounce,
  });
>>>>>>> e37926e37b9a313da62e0567fc341065ea047aa8
}