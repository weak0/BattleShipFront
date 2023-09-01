export interface ISettingsContext {
    playerOneName: string;
    playerTwoName: string;
    playerOneNameSetter: (name: string) => void;
    playerTwoNameSetter: (name: string) => void;
}