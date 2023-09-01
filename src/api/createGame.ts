import { IGameData } from "../components/menu/IGameData";
import { ConnectionsString } from "./connectionString"

export const createGame = async (playerOneName : string, playerTwoName : string): Promise<IGameData> => {
    const response = await fetch(`${ConnectionsString}/start`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ playerOneName, playerTwoName })
    });
    if (response.ok) {
        const data: IGameData = await response.json();
        return data;
    }
    else {
        throw new Error(response.statusText);
    }
}