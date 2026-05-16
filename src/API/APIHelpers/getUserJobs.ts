import setupUrl from "@/API/utils/setupUrl.ts";
import type {IUserData} from "@/models";
import type {IJob} from "@/models";
import type {IJobApiResponse} from "@/models";

export default async function getUserJobs(uid: string): Promise<IUserData> {

    const response = await fetch(setupUrl({ uid }));
    if (!response.ok) {
        throw new Error(`Request failed: ${response.status} ${response.statusText}`);
    }
    const responseData: IJobApiResponse = await response.json();

    return {
        uid,
        jobs: Object.entries(responseData).map(([jobName, jobDetails]): IJob => ({
            jobName,
            jobItems: jobDetails.items
        }))
    };
}