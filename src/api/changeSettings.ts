import { ConnectionsString } from "./connectionString"

export const configureGame = async (numberOfShips5Length : number, numberOfShips4Length: number, numberOfShips3Length : number , numberOfShips2Length : number) => {
    const response = await fetch(`${ConnectionsString}/configure`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            numberOfShips5Length,
            numberOfShips4Length,
            numberOfShips3Length,
            numberOfShips2Length
        })

    });
    if (response.ok) {
         await response.json();
    }
    else {
        throw new Error(response.statusText);
    }
}