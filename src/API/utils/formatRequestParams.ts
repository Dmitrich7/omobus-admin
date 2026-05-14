import type IRequestParams from "@/models/IRequestParams.ts";

export default function formatRequestParams(requestParams: IRequestParams):[string, string][] {
    return Object.entries(requestParams).filter(
        ([, v]) => v !== undefined
    ) as [string, string][];
}