import { IGameData } from "../components/menu/IGameData";
import { ConnectionsString } from "./connectionString"

export const createGame = async (): Promise<IGameData> => {
    const response = await fetch(`${ConnectionsString}/start`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    });
    if (response.ok) {
        const data: IGameData = await response.json();
        return data;
    }
    else {
        throw new Error(response.statusText);
    }
}