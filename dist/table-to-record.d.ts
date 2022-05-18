/** Microlibrary for converting a table to a fully-typed record */
declare type AnyRows = ReadonlyArray<ReadonlyArray<any>>
declare type IdxOf<T extends readonly any[]> = Exclude<keyof T, keyof any[]>
// @ts-ignore
declare type InnerKey<Rows extends AnyRows> = IdxOf<Rows[IdxOf<Rows>]>
declare type Entries<Rows extends AnyRows, Header extends Record<InnerKey<Rows>, string>, KeyIdx extends InnerKey<Rows>> = {
    // @ts-ignore
    [I in IdxOf<Rows> as Rows[I][KeyIdx]]: {
        // @ts-ignore
        [K in IdxOf<Rows[I]> as Header[K]]: Rows[I][K]
    }
}
/** Converts a table to a record.
 *
 * @param rows: rectangular array of values
 * @param header: string array, names of columns
 * @param keyIdx: index of column to use as key (string)
 * @returns the generated record (just a plain object)
 *
 * @example
 *  const header = ['id', 'name', 'age'] as const
 *  const rows = [[555, 'John', 42], [666, 'Jane', 43]] as const
 *  const rec = tableToRecord(rows, header, '0')
 */
export declare function tableToRecord<Rows extends AnyRows, Header extends Record<InnerKey<Rows>, string>, KeyIdx extends InnerKey<Rows>>(rows: Rows, header: Header, keyIdx: KeyIdx): Entries<Rows, Header, KeyIdx>
export { }
