export enum ShotResult {
    Miss,
    Hit,
    Sunk,
    GameOver,
    Default
}

export interface IShot {
    shotResult: ShotResult;
    shipLength: number;
}

export const translateShotResult = (shotResult: ShotResult) => {
    switch (shotResult) {
        case ShotResult.Miss:
            return 'Miss';
        case ShotResult.Hit:
            return 'Hit';
        case ShotResult.Sunk:
            return 'Sunk';
        case ShotResult.GameOver:
            return 'Game Over';
        default:
            return 'Error';
    }
}

export const deafultShot: IShot = { shotResult: ShotResult.Default, shipLength: 0 }; 