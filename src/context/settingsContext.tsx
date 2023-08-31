import { createContext, useContext, useState } from "react";
import {ISettingsContext} from './ISettingsContext'

const SettingsContext: React.Context<any> = createContext({
    playerOneName: "",
    playerTwoName: "",
    playerOneNameSetter: () => {},
    playerTwoNameSetter: () => {},
    numberOfShips5Length: 0,
    numberOfShips4Length: 0,
    numberOfShips3Length: 0,
    numberOfShips2Length: 0,
    numberOfShips5LengthSetter: () => {},
    numberOfShips4LengthSetter: () => {},
    numberOfShips3LengthSetter: () => {},
    numberOfShips2LengthSetter: () => {}
});
export  const SettingsProvider = ({ children } : {children : React.ReactNode}) => {
    const [playerOneName, setPlayerOneName] = useState("Player 1");
    const [playerTwoName, setPlayerTwoName] = useState("Player 2");
    const [numberOfShips5Length, setNumberOfShips5Length] = useState(1);
    const [numberOfShips4Length, setNumberOfShips4Length] = useState(1);
    const [numberOfShips3Length, setNumberOfShips3Length] = useState(1);
    const [numberOfShips2Length, setNumberOfShips2Length] = useState(2);

    const value = {
        playerOneName,
        playerTwoName,
        playerOneNameSetter: (name :string) => setPlayerOneName(name),
        playerTwoNameSetter: (name :string) => setPlayerTwoName(name),
        numberOfShips5Length,
        numberOfShips4Length,
        numberOfShips3Length,
        numberOfShips2Length,
        numberOfShips5LengthSetter: (number :number) => setNumberOfShips5Length(number),
        numberOfShips4LengthSetter: (number :number) => setNumberOfShips4Length(number),
        numberOfShips3LengthSetter: (number :number) => setNumberOfShips3Length(number),
        numberOfShips2LengthSetter: (number :number) => setNumberOfShips2Length(number)
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