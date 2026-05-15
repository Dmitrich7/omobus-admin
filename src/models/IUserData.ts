interface IEntity {
    entityName: string,
    lastOpen: Date,
    lastChanged: Date,
    changesCount: number,
    timeSpent: number
}

interface IItem {
    itemName: string,
    itemEntities: IEntity[]
}

interface IJob {
    jobName: string,
    jobItems: IItem[]
}

export default interface IUserData {
    userName: string,
    jobs: IJob[]
}