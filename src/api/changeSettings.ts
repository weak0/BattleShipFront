import { ConnectionsString } from "./connectionString";

export const configureGame = async (
    numberOfShips5Length: number,
    numberOfShips4Length: number,
    numberOfShips3Length: number,
    numberOfShips2Length: number
): Promise<boolean> => {
    const response = await fetch(`${ConnectionsString}/configure`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            numberOfShips5Length,
            numberOfShips4Length,
            numberOfShips3Length,
            numberOfShips2Length,
        }),
    });
    
    if (response.ok) {
        return true;
    } else {
        throw new Error(`Request failed with status: ${response.status}`);
    }
};
