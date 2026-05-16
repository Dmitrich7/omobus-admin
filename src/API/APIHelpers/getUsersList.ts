import setupUrl from "@/API/utils/setupUrl.ts";

export default async function getUsersList():Promise<string[]> {
    const response = await fetch(setupUrl());
    if (!response.ok) {
        throw new Error(`Request failed: ${response.status} ${response.statusText}`);
    }
    return await response.json();
}