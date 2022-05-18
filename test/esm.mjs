import { tableToRecord } from '../dist/table-to-record.js'

const rows = [[888, 2, '3', false]]
const header = ['uid', 'price', 'name', 'is_available']
const obj = tableToRecord(rows, header, '0')
console.log({ obj })
