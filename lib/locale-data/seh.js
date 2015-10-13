// GENERATED FILE
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = [{ "locale": "seh", "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    if (ord) return "other";return n == 1 ? "one" : "other";
  }, "fields": { "year": { "displayName": "Chaka", "relative": { "0": "this year", "1": "next year", "-1": "last year" }, "relativeTime": { "future": { "other": "+{0} y" }, "past": { "other": "-{0} y" } } }, "month": { "displayName": "Mwezi", "relative": { "0": "this month", "1": "next month", "-1": "last month" }, "relativeTime": { "future": { "other": "+{0} m" }, "past": { "other": "-{0} m" } } }, "day": { "displayName": "Ntsiku", "relative": { "0": "Lero", "1": "Manguana", "-1": "Zuro" }, "relativeTime": { "future": { "other": "+{0} d" }, "past": { "other": "-{0} d" } } }, "hour": { "displayName": "Hora", "relativeTime": { "future": { "other": "+{0} h" }, "past": { "other": "-{0} h" } } }, "minute": { "displayName": "Minuto", "relativeTime": { "future": { "other": "+{0} min" }, "past": { "other": "-{0} min" } } }, "second": { "displayName": "Segundo", "relative": { "0": "now" }, "relativeTime": { "future": { "other": "+{0} s" }, "past": { "other": "-{0} s" } } } } }, { "locale": "seh-MZ", "parentLocale": "seh" }];
module.exports = exports["default"];