"use strict";
/** Microlibrary for converting a table to a fully-typed record */
exports.__esModule = true;
exports.tableToRecord = void 0;
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
function tableToRecord(rows, header, keyIdx) {
    var result = {};
    var h = header;
    for (var _i = 0, rows_1 = rows; _i < rows_1.length; _i++) {
        var row = rows_1[_i];
        // @ts-expect-error
        var key = row[keyIdx];
        var entry = {};
        for (var i = 0; i < h.length; i++) {
            entry[h[i]] = row[i];
        }
        result[key] = entry;
    }
    return result;
}
exports.tableToRecord = tableToRecord;
