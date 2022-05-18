/* eslint-disable @typescript-eslint/no-explicit-any */

type AnyRows = ReadonlyArray<ReadonlyArray<any>>
type IdxOf<T extends readonly any[]> = Exclude<keyof T, keyof any[]>
// @ts-expect-error
type InnerKey<Rows extends AnyRows> = IdxOf<Rows[IdxOf<Rows>]>
type Entries<
    Rows extends AnyRows,
    Header extends Record<InnerKey<Rows>, string>,
    KeyIdx extends InnerKey<Rows>
    > = {
        // @ts-expect-error
        [I in IdxOf<Rows> as Rows[I][KeyIdx]]: {
            // @ts-expect-error
            [K in IdxOf<Rows[I]> as Header[K]]: Rows[I][K]
        }
    }

export function tableToObj<
    Rows extends AnyRows,
    Header extends Record<InnerKey<Rows>, string>,
    KeyIdx extends InnerKey<Rows>
>(rows: Rows, header: Header, keyIdx: KeyIdx): Entries<Rows, Header, KeyIdx> {
    const result = {}
    for (const row of rows) {
        // @ts-expect-error
        const key = row[keyIdx]
        const entry = {}
        for (const [idx, key] of Object.entries(header)) {
            // @ts-expect-error
            entry[key] = row[idx]
        }
        result[key] = entry
    }
    return result as Entries<Rows, Header, KeyIdx>
}

function _example() {
    const rows = [
        [888, 2, '3', false],
        [999, 5, '6', true],
    ] as const
    const header = ['uid', 'price', 'name', 'is_available'] as const
    const obj = tableToObj(rows, header, '0')
    const _f: true = obj[999].is_available
    const _t: false = obj[888].is_available
    console.log({ obj })
}
