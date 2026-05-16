import {describe, it, expect} from 'vitest'
import type {IRequestParams} from "@/models"
import formatRequestParams from "@/API/utils/formatRequestParams.ts"

describe("Param formating",()=>{
    it("Gets IRequestParams obj and turns it into [key:string,value:string][] obj",()=>{
        const rp: IRequestParams = {
            uid: "m3"
        }
        const convertedRp: [string, string][] = [["uid", "m3"]]
        expect(formatRequestParams(rp)).toStrictEqual(convertedRp)
    })
    it("Gets empty object",()=>{
        const rp: IRequestParams = {}
        expect(formatRequestParams(rp)).toStrictEqual([])
    })
})