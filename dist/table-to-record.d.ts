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
export declare function tableToRecord<Rows extends AnyRows, Header extends Record<InnerKey<Rows>, string>, KeyIdx extends InnerKey<Rows>>(rows: Rows, header: Header, keyIdx: KeyIdx): Entries<Rows, Header, KeyIdx>
export { }
