// import setupUrl from "@/API/utils/setupUrl.ts";
// import type IRequestParams from "@/models/IRequestParams.ts";
// import type IUserData from "@/models/IUserData.ts";
// import getUserJobs from "@/API/APIHelpers/getUserJobs.ts";
// import getUsersList from "@/API/APIHelpers/getUsersList.ts";
//
// export default async function getUserStatistics(userName: string) {
//     const requestParams: IRequestParams = {
//         uid: userName
//     }
//
//     getUserJobs(requestParams).then(userJobs => {
//         if(userJobs instanceof Array){
//             const promises = userJobs.map((job)=>{
//                 getUserJobs()
//             })
//         }else{
//             throw new Error("No user jobs found.");
//         }
//     })
//
//     Promise.all(promises).then((data)=>{
//
//     })
// }