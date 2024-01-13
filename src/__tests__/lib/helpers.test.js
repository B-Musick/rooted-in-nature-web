/**
 * @note - Needed to implement this change to get testing working with jest
 * https://stackoverflow.com/questions/35756479/does-jest-support-es6-import-export
 * 
 * Then was notified in a change in root directory format
 * https://jestjs.io/docs/configuration#roots-arraystring
 *  */ 
import { isInteger, capitalize } from "../../lib/helpers";
import { expect, test } from 'vitest'

test('Returns true when an integer', ()=>{
    expect(isInteger("2")).toBeTruthy();
})

test('Returns false when not an integer', () => {
    expect(isInteger("Hi2")).toBeFalsy();
})

test('Returns capital version of individual word', () => {
    expect(isInteger("species")).toBe("Species");
})
