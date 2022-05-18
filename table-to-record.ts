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

export function tableToRecord<
    Rows extends AnyRows,
    Header extends Record<InnerKey<Rows>, string>,
    KeyIdx extends InnerKey<Rows>
>(rows: Rows, header: Header, keyIdx: KeyIdx): Entries<Rows, Header, KeyIdx> {
    const result = {}
    const h = header as unknown as string[]
    for (const row of rows) {
        // @ts-expect-error
        const key = row[keyIdx]
        const entry = {}
        for (let i = 0; i < h.length; i++) {
            entry[h[i]] = row[i]
        }
        result[key] = entry
    }
    return result as Entries<Rows, Header, KeyIdx>
}
