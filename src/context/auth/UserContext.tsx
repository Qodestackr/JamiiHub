import { createContext, useState, ReactNode, useContext } from "react";

export type UserType = {
    id?: number;
    firstAndLastName?: string;
    email?: string;
    password?: string;
    phoneNumber?: string;
    aragonAddress?: string;
    paymentAddress: string;
} | null;

const hardcodedUser: UserType = {
    id: 1,
    firstAndLastName: "john doe",
    email: "john@example.com",
    password: "Password",
    phoneNumber: "254712345678",
    aragonAddress: "",
    paymentAddress: ""
};

type UserContextType = {
    user: UserType;
    setUser: React.Dispatch<React.SetStateAction<UserType>>;
};

const UserContext = createContext<UserContextType>({
    user: hardcodedUser,
    setUser: () => { },
});

export const useUserContext = () => useContext(UserContext);

export const UserContextProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<UserType>(hardcodedUser);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};