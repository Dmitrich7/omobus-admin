import setupUrl from "@/API/utils/setupUrl.ts";
import type IRequestParams from "@/models/IRequestParams.ts";
import type IUserData from "@/models/IUserData.ts";
import getUserData from "@/API/APIHelpers/getUserData.ts";

export default async function getUserStatistics(userName: string) {
    const requestParams: IRequestParams = {
        uid: userName
    }

    getUserData(requestParams).then(res => {
        console.log(res)
    });
}