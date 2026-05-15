import {describe, expect, afterEach, vi, it, test} from 'vitest'
import setupUrl from "@/API/utils/setupUrl.ts"
import type IRequestParams from "../models/IRequestParams.ts"
import formatRequestParams from "@/API/utils/formatRequestParams.ts";
import * as formatRequestParamsModule from '@/API/utils/formatRequestParams'

describe("SetupURL interactions with localStorage",()=>{
    afterEach(() => {
        localStorage.clear();
    });

    test('with no args',()=>{
        expect(setupUrl().toString()).toBe('https://zdev.omobus.net/markup/jobs?tid=99')
    })

    test('with only tid',()=>{
        localStorage.setItem("tid","111")
        expect(setupUrl().toString()).toBe('https://zdev.omobus.net/markup/jobs?tid=111')
    })

    test('with only url',()=>{
        localStorage.setItem("serverURL","https://xyz.kadroom.com")
        expect(setupUrl().toString()).toBe('https://xyz.kadroom.com/markup/jobs?tid=99')
    })

    test('with both',()=>{
        localStorage.setItem("serverURL","https://xyz.kadroom.com")
        localStorage.setItem("tid","111")
        expect(setupUrl().toString()).toBe('https://xyz.kadroom.com/markup/jobs?tid=111')
    })
})

describe("SetupUrl processing request params",()=>{
    it("correctly processes rp object", ()=>{
        const requestParams: IRequestParams = {
            uid: "m3"
        }
        expect(setupUrl(requestParams).toString()).toBe('https://zdev.omobus.net/markup/jobs?tid=99&uid=m3')
    })
})