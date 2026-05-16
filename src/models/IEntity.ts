export interface IEntity {
    entityName: string,
    lastOpen: Date,
    lastChanged: Date,
    changesCount: number,
    timeSpent: number
}