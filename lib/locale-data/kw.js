// GENERATED FILE
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = [{ "locale": "kw", "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    if (ord) return "other";return n == 1 ? "one" : n == 2 ? "two" : "other";
  }, "fields": { "year": { "displayName": "Bledhen", "relative": { "0": "this year", "1": "next year", "-1": "last year" }, "relativeTime": { "future": { "other": "+{0} y" }, "past": { "other": "-{0} y" } } }, "month": { "displayName": "Mis", "relative": { "0": "this month", "1": "next month", "-1": "last month" }, "relativeTime": { "future": { "other": "+{0} m" }, "past": { "other": "-{0} m" } } }, "day": { "displayName": "Dedh", "relative": { "0": "today", "1": "tomorrow", "-1": "yesterday" }, "relativeTime": { "future": { "other": "+{0} d" }, "past": { "other": "-{0} d" } } }, "hour": { "displayName": "Eur", "relativeTime": { "future": { "other": "+{0} h" }, "past": { "other": "-{0} h" } } }, "minute": { "displayName": "Minute", "relativeTime": { "future": { "other": "+{0} min" }, "past": { "other": "-{0} min" } } }, "second": { "displayName": "Second", "relative": { "0": "now" }, "relativeTime": { "future": { "other": "+{0} s" }, "past": { "other": "-{0} s" } } } } }, { "locale": "kw-GB", "parentLocale": "kw" }];
module.exports = exports["default"];