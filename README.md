# table-to-record

Typescript package to convert a table (rectangular array) to a well-typed record (aka object/map/dictionary) so you can concisely store data. (Instead of repeating yourself a million times in an enourmous json.)

```sh
npm i table-to-record
```

Usage: `tableToRecord(rows, header, indexToKeyBy)`

## Example

```ts
import { tableToRecord } from 'table-to-record'
const header = ['uid', 'price', 'name', 'is_available'] as const
const rows = [
    [888, 2, 'bread', false],
    [999, 5, 'milk', true],
] as const
const rec = tableToRecord(rows, header, '0')
// has exact types!
const breadAvailable: true = rec[999].is_available
const _t: false = rec[888].is_available

console.log(rec)
/* Result:
{
    '888': { uid: 888, price: 2, name: '3', is_available: false },
    '999': { uid: 999, price: 5, name: '6', is_available: true },
}
*/
```
