import setupUrl from "@/API/utils/setupUrl.ts";
import type {IItem} from "@/models";

export default async function getItem(uid: string, jobName: string): Promise<IItem> {
    const response = await fetch(setupUrl({uid: uid}));
    if (!response.ok) {
        throw new Error(`Request failed: ${response.status} ${response.statusText}`);
    }
    const data = await response.json()
    return {
        itemName: uid,
        jobs: data
    };
}