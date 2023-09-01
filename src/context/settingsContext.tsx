import { createContext, useContext, useState } from "react";
import {ISettingsContext} from './ISettingsContext'

const SettingsContext: React.Context<any> = createContext({
    playerOneName: "",
    playerTwoName: "",
    playerOneNameSetter: () => {},
    playerTwoNameSetter: () => {},

});
export  const SettingsProvider = ({ children } : {children : React.ReactNode}) => {
    const [playerOneName, setPlayerOneName] = useState("Player 1");
    const [playerTwoName, setPlayerTwoName] = useState("Player 2");

    const value = {
        playerOneName,
        playerTwoName,
        playerOneNameSetter: (name :string) => setPlayerOneName(name),
        playerTwoNameSetter: (name :string) => setPlayerTwoName(name),
    }

    return (
        <SettingsContext.Provider
        value={value}>
            {children}
        </SettingsContext.Provider>
    );
}

export const useSettingsContext = () : ISettingsContext => {
   return useContext(SettingsContext);
}