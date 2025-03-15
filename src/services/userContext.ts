<<<<<<< HEAD
import { createContext, SetStateAction } from "react";
import { User } from "../interfaces/users/User";


export const MyContext = createContext<
  [user: User | undefined, setUser: React.Dispatch<SetStateAction<User>>]
>([undefined, () => {}]);
=======
import { createContext, SetStateAction } from "react";
import { User } from "../interfaces/users/User";


export const MyContext = createContext<
  [user: User | undefined, setUser: React.Dispatch<SetStateAction<User>>]
>([undefined, () => {}]);
>>>>>>> e37926e37b9a313da62e0567fc341065ea047aa8
