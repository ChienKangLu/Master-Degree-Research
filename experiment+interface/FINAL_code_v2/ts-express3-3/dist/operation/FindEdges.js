"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const DBAsync_1 = require("../database/DBAsync");
class FindEdges {
    static find(dbName, collName, smaller, larger) {
        return __awaiter(this, void 0, void 0, function* () {
            let db = yield DBAsync_1.DBAsync.connectDBAsync(dbName);
            let coll = yield DBAsync_1.DBAsync.coll(db, collName);
            let edges = yield DBAsync_1.DBAsync.find(coll, { $and: [{ except: { $gte: larger } }, { except: { $lte: smaller } }] }, {});
            console.log(`larger:${larger}`);
            console.log(`smaller:${smaller}`);
            yield DBAsync_1.DBAsync.closeDB();
            return edges;
        });
    }
}
exports.FindEdges = FindEdges;
