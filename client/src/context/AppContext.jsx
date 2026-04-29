import { createContext, useState } from "react";

export const AppContext = createContext(null);

const AppProvider = ({ children }) => {

    const [accountCont, setAccountCont] = useState('');

    return (
        <AppContext.Provider
            value={{
                accountCont,
                setAccountCont
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export default AppProvider;