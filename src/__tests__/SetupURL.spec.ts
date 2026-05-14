import {describe, expect, afterEach, test, vi, it} from 'vitest'
import setupUrl from "@/API/utils/setupUrl.ts"
import type IRequestParams from "../models/IRequestParams.ts"

describe("SetupURL interactions with localStorage",()=>{
    afterEach(() => {
        localStorage.clear();
    });

    it('Checks url setup with missing parameters in local storage',()=>{
        expect(setupUrl().toString()).toBe('https://zdev.omobus.net/markup/jobs?tid=99')
    })

    it('Checks url setup with some parameters in local storage',()=>{
        localStorage.setItem("tid","111")
        expect(setupUrl().toString()).toBe('https://zdev.omobus.net/markup/jobs?tid=111')
    })

    it('Checks url setup with some parameters in local storage',()=>{
        localStorage.setItem("serverURL","https://xyz.kadroom.com")
        expect(setupUrl().toString()).toBe('https://xyz.kadroom.com/markup/jobs?tid=99')
    })

    it('Checks url setup with some parameters in local storage',()=>{
        localStorage.setItem("serverURL","https://xyz.kadroom.com")
        localStorage.setItem("tid","111")
        expect(setupUrl().toString()).toBe('https://xyz.kadroom.com/markup/jobs?tid=111')
    })
})

describe("Checks different arguments passed to SetupURL",()=>{
    it("Checks different arguments passed", ()=>{
        const requestParams: IRequestParams = {
            uid: "m3"
        }
    })
})