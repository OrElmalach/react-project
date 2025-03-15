import { createContext, SetStateAction } from "react";
import { User } from "../interfaces/users/User";


export const MyContext = createContext<
  [user: User | undefined, setUser: React.Dispatch<SetStateAction<User>>]
>([undefined, () => {}]);
