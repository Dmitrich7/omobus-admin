import {defaultTid, defaultUrl, folderPath} from "@/API/apiVariables.ts";
import type IRequestParams from "@/models/IRequestParams.ts";
import formatRequestParams from "@/API/utils/formatRequestParams.ts";

export default function setupUrl(requestParams?: IRequestParams): URL {
    const url = new URL(localStorage.getItem("serverURL")??defaultUrl);
    url.pathname = folderPath;
    url.search = new URLSearchParams({tid: localStorage.getItem("tid")??defaultTid}).toString()
    url.search += requestParams ? "&" + new URLSearchParams(formatRequestParams(requestParams)).toString() : ""
    return url;
}