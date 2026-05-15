import setupUrl from "@/API/utils/setupUrl.ts";
import type IRequestParams from "@/models/IRequestParams.ts";

export default async function getUserData(requestParams: IRequestParams) {
    try{
        return await fetch(setupUrl(requestParams),
            {
                mode: 'no-cors'
            });
    }
    catch(error){
        if(error instanceof Error){
            return error.message;
        }
    }
}