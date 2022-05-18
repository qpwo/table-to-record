import { tableToRecord } from "../dist/table-to-record"


const rows = [
    [888, 2, '3', false],
    [999, 5, '6', true],
] as const
const header = ['uid', 'price', 'name', 'is_available'] as const
const obj = tableToRecord(rows, header, '0')
const _f: true = obj[999].is_available
const _t: false = obj[888].is_available
console.log({ obj })
