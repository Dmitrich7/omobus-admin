import type {IJobApiItem} from "@/models";

export interface IJobApiResponse {
    [taskName: string]: IJobApiItem;
}