import { ShotResult } from "../components/gameBoard/ShotResult";
import { ConnectionsString } from "./connectionString";

export const getShot = async (cellNumber: number, boardId: number): Promise<ShotResult> => {
    const response = await fetch(`${ConnectionsString}/start/shot?GameBoardId=${boardId}&Cordinate=${cellNumber}`)
    if (response.ok) {
        const data: ShotResult = await response.json()
        return data
    } else {
        throw new Error(response.statusText)
    }

}