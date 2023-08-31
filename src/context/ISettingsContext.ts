export interface ISettingsContext {
    playerOneName: string;
    playerTwoName: string;
    playerOneNameSetter: (name: string) => void;
    playerTwoNameSetter: (name: string) => void;
    numberOfShips5Length: number;
    numberOfShips4Length: number;
    numberOfShips3Length: number;
    numberOfShips2Length: number;
    numberOfShips5LengthSetter: (count: number) => void;
    numberOfShips4LengthSetter: (count: number) => void;
    numberOfShips3LengthSetter: (count: number) => void;
    numberOfShips2LengthSetter: (count: number) => void;
}