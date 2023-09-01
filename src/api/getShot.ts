import {  IShot } from "../components/gameBoard/ShotResult";
import { ConnectionsString } from "./connectionString";

export const getShot = async (cellNumber: number, boardId: number): Promise<IShot> => {
    const response = await fetch(`${ConnectionsString}/shot?GameBoardId=${boardId}&Cordinate=${cellNumber}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        }
    })
    if (response.ok) {
        const data: IShot = await response.json()
        return data
    } else {
        throw new Error(response.statusText)
    }

}