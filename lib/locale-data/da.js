// GENERATED FILE
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = [{ "locale": "da", "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    var s = String(n).split("."),
        i = s[0],
        t0 = Number(s[0]) == n;if (ord) return "other";return n == 1 || !t0 && (i == 0 || i == 1) ? "one" : "other";
  }, "fields": { "year": { "displayName": "År", "relative": { "0": "i år", "1": "næste år", "-1": "sidste år" }, "relativeTime": { "future": { "one": "om {0} år", "other": "om {0} år" }, "past": { "one": "for {0} år siden", "other": "for {0} år siden" } } }, "month": { "displayName": "Måned", "relative": { "0": "denne måned", "1": "næste måned", "-1": "sidste måned" }, "relativeTime": { "future": { "one": "om {0} måned", "other": "om {0} måneder" }, "past": { "one": "for {0} måned siden", "other": "for {0} måneder siden" } } }, "day": { "displayName": "Dag", "relative": { "0": "i dag", "1": "i morgen", "2": "i overmorgen", "-1": "i går", "-2": "i forgårs" }, "relativeTime": { "future": { "one": "om {0} dag", "other": "om {0} dage" }, "past": { "one": "for {0} dag siden", "other": "for {0} dage siden" } } }, "hour": { "displayName": "Time", "relativeTime": { "future": { "one": "om {0} time", "other": "om {0} timer" }, "past": { "one": "for {0} time siden", "other": "for {0} timer siden" } } }, "minute": { "displayName": "Minut", "relativeTime": { "future": { "one": "om {0} minut", "other": "om {0} minutter" }, "past": { "one": "for {0} minut siden", "other": "for {0} minutter siden" } } }, "second": { "displayName": "Sekund", "relative": { "0": "nu" }, "relativeTime": { "future": { "one": "om {0} sekund", "other": "om {0} sekunder" }, "past": { "one": "for {0} sekund siden", "other": "for {0} sekunder siden" } } } } }, { "locale": "da-DK", "parentLocale": "da" }, { "locale": "da-GL", "parentLocale": "da" }];
module.exports = exports["default"];