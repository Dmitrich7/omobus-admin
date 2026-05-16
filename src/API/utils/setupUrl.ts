import { defaultTid, defaultUrl, folderPath } from "@/API/apiVariables.ts";
import type {IRequestParams} from "@/models";
import formatRequestParams from "@/API/utils/formatRequestParams.ts";

export default function setupUrl(requestParams?: IRequestParams): URL {

    const base =
        import.meta.env.DEV
            ? ""
            : localStorage.getItem("serverURL") ?? defaultUrl;

    const url = new URL(
        base || folderPath,
        base ? undefined : window.location.origin
    );
    url.pathname = folderPath;
    url.search = new URLSearchParams({
        tid: localStorage.getItem("tid") ?? defaultTid,
    }).toString();

    if (requestParams) {
        url.search += "&" + new URLSearchParams(formatRequestParams(requestParams)).toString();
    }

    return url;
}