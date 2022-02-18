// Copyright (c) 2022 qianjunakasumi <i@qianjunakasumi.ren>
//                    qianjunakasumi <qianjunakasumi@outlook.com>
//                    [qianjunakasumi] 千橘雫霞(https://github.com/qianjunakasumi)
//
//      This Source Code Form is subject to the terms of the Mozilla Public
//      License, v. 2.0. If a copy of the MPL was not distributed with this
//      file, You can obtain one at http://mozilla.org/MPL/2.0/.

// ==UserScript==
// @name         禁用福建综合素质系统重置密码提醒
// @namespace    ren.qianjunakasumi
// @version      1.0.0
// @author       qianjunakasumi
// @description  禁用福建省中学生综合素质评价信息管理系统重置密码提醒
// @source       https://github.com/qianjunakasumi/Dump-FjZHSZSys-PasswordRest
// @updateURL    https://github.com/qianjunakasumi/Dump-FjZHSZSys-PasswordRest/blob/main/main.js
// @downloadURL  https://github.com/qianjunakasumi/Dump-FjZHSZSys-PasswordRest/blob/main/main.js
// @supportURL   https://github.com/qianjunakasumi/Dump-FjZHSZSys-PasswordRest/issues/new/choose
// @match        http://112.111.2.107/eedu_pro_fj/r_index.do
// @run-at       document-body
// @grant        none
// ==/UserScript==

(function () {
    'use strict';
    HH_INDEX.getUserInfo = function () {
        var that = this;
        $.ajax({
            type: "post",
            url: "c_getUserIndexInfo.do",
            dataType: "json",
            cache: true,
            async: false,
            success: function (data) {
                if (data.code == 0) {
                    // PATCH DISABLE REST
                    data.data.passType = 0;
                    data.data.overPassword = '2099-12-31';

                    HH_USERINFO = data.data;
                    $(".uName").html(HH_USERINFO.userName);
                    HH_CONFIG.PASS_STRENGTH = data.data.strength;
                    if (data.data.strength == 2) {
                        HH_CONFIG.PASSWORDREG = "^(?=.*\\d)(?=.*[a-zA-Z])(?=.*[~!@#$%^&*<>?=+_(){}，。,.、|:：“”‘’';])(?!.*([a-zA-Z0-9])\\1{2})(?!.*(012|210|123|321|234|432|456|654|789|987|abc|cba|bcd|dcb|cde|edc|def|fed|efg|gfe|fgh|hgf|ghi|ihg|hij|jih|ijk|kji|jkl|lkj|klm|mlk|lmn|nml|mno|omn|nop|pon|opq|qpo|pqr|rqp|qrs|srq|rst|tsr|stu|uts|tuv|vut|uvw|wvu|vwx|xwv|wxy|yxw|xyz|zyx|ABC|CBA|BCD|DCB|CDE|EDC|DEF|FED|EFG|GFE|FGH|HGF|GHI|IHG|HIJ|JIH|IJK|KJI|JKL|LKJ|KLM|MLK|LMN|NML|MNO|OMN|NOP|PON|OPQ|QPO|PQR|RQP|QRS|SRQ|RST|TSR|STU|UTS|TUV|VUT|UVW|WVU|VWX|XWV|WXY|YXW|XYZ|ZYX))[a-zA-Z\\d~!@#$%^&*<>?=+_(){}，。,.、|:：“”‘’';]{8,16}$";
                        HH_CONFIG.PASS_TITLE = "请使用8-16位长度密码，至少包含数字/字母（区分大小写）/字符3种组合，不能含有非法字符、空格、中文，且密码中不能有3位及以上相同或连续的字母或数字(例：111,123,aaa,abc)。";
                    } else {
                        HH_CONFIG.PASSWORDREG = "^(?![a-zA-z]+$)(?!\\d+$)(?![!@#$%^&*<>?=+_(){}，。,.、|:：“”‘’';]+$)(?!.*([a-zA-Z0-9])\\1{2})(?!.*(012|210|123|321|234|432|456|654|789|987|abc|cba|bcd|dcb|cde|edc|def|fed|efg|gfe|fgh|hgf|ghi|ihg|hij|jih|ijk|kji|jkl|lkj|klm|mlk|lmn|nml|mno|omn|nop|pon|opq|qpo|pqr|rqp|qrs|srq|rst|tsr|stu|uts|tuv|vut|uvw|wvu|vwx|xwv|wxy|yxw|xyz|zyx|ABC|CBA|BCD|DCB|CDE|EDC|DEF|FED|EFG|GFE|FGH|HGF|GHI|IHG|HIJ|JIH|IJK|KJI|JKL|LKJ|KLM|MLK|LMN|NML|MNO|OMN|NOP|PON|OPQ|QPO|PQR|RQP|QRS|SRQ|RST|TSR|STU|UTS|TUV|VUT|UVW|WVU|VWX|XWV|WXY|YXW|XYZ|ZYX))[a-zA-Z\\d!@#$%^&*<>?=+_(){}，。,.、|:：“”‘’';]{8,16}$";
                        HH_CONFIG.PASS_TITLE = "请使用8-16位长度密码，至少包含数字/字母（区分大小写）/字符2种组合，不能含有非法字符、空格、中文，且密码中不能有3位及以上相同或连续的字母或数字(例：111,123,aaa,abc)。";
                    }
                    HH_CONFIG.INITIALPASSWORD = "abc654321";
                    if (data.data.orgType == 6) {
                        $("#operationManual").removeClass("hh-hidden");
                    }
                    that.initPage();
                }
            }
        });
    };
})();
