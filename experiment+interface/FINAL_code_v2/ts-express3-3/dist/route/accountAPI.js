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
const express = require("express");
const FindUser_1 = require("../operation/FindUser");
let router = express.Router();
router.post('/post', (req, res, next) => __awaiter(this, void 0, void 0, function* () {
    res.setHeader('Access-Control-Allow-Origin', '*');
    const sess = req.session;
    console.log(req.body);
    let account = req.body.account;
    let password = req.body.password;
    console.log(account, password);
    let user = yield FindUser_1.FindUser.find({
        account: account,
        password: password
    });
    let login = false;
    if (user.length == 1) {
        login = true;
        sess.login = true;
        sess.name = user[0].name;
    }
    res.json({
        message: {
            login: login
        }
    });
    console.log("good job");
    res.end;
}));
exports.default = router;
