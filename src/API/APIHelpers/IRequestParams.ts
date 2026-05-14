export default interface IRequestParams{
    tid?: number;
    uid?: number;
    ref?: string;
    item?: string;
    entity?: string;
    type?: "thumb"|"annotation";
}

export const folderPath: string = "/markup/jobs"
export const defaultTid: string = "99";
export const defaultUrl: string = "https://zdev.omobus.net" + folderPath;
