import setupUrl from "@/API/utils/setupUrl.ts";

export default async function getUsersList() {
    try{
        const response = await fetch(setupUrl());

        return response.json();
    }
    catch(error){
       if(error instanceof Error){
          return error.message;
       }
    }
}