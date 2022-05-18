"use strict";
/* eslint-disable @typescript-eslint/no-explicit-any */
exports.__esModule = true;
exports.tableToRecord = void 0;
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
