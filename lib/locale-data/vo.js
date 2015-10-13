// GENERATED FILE
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = [{ "locale": "vo", "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    if (ord) return "other";return n == 1 ? "one" : "other";
  }, "fields": { "year": { "displayName": "yel", "relative": { "0": "ayelo", "1": "oyelo", "-1": "äyelo" }, "relativeTime": { "future": { "other": "+{0} y" }, "past": { "other": "-{0} y" } } }, "month": { "displayName": "mul", "relative": { "0": "amulo", "1": "omulo", "-1": "ämulo" }, "relativeTime": { "future": { "other": "+{0} m" }, "past": { "other": "-{0} m" } } }, "day": { "displayName": "Tag", "relative": { "0": "adelo", "1": "odelo", "2": "udelo", "-1": "ädelo", "-2": "edelo" }, "relativeTime": { "future": { "other": "+{0} d" }, "past": { "other": "-{0} d" } } }, "hour": { "displayName": "düp", "relativeTime": { "future": { "other": "+{0} h" }, "past": { "other": "-{0} h" } } }, "minute": { "displayName": "minut", "relativeTime": { "future": { "other": "+{0} min" }, "past": { "other": "-{0} min" } } }, "second": { "displayName": "sekun", "relative": { "0": "now" }, "relativeTime": { "future": { "other": "+{0} s" }, "past": { "other": "-{0} s" } } } } }, { "locale": "vo-001", "parentLocale": "vo" }];
module.exports = exports["default"];