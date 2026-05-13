import {URL} from "@/API/apiParams.ts";

export default async function getUsersList() {
    try{
        const response = await fetch(URL);

        return response.json();
    }
    catch(error){
       if(error instanceof Error){
          return error.message;
       }
    }
}