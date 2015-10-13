// GENERATED FILE
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = [{ "locale": "nn", "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    if (ord) return "other";return n == 1 ? "one" : "other";
  }, "fields": { "year": { "displayName": "år", "relative": { "0": "dette år", "1": "neste år", "-1": "i fjor" }, "relativeTime": { "future": { "one": "om {0} år", "other": "om {0} år" }, "past": { "one": "for {0} år siden", "other": "for {0} år siden" } } }, "month": { "displayName": "månad", "relative": { "0": "denne månad", "1": "neste månad", "-1": "forrige månad" }, "relativeTime": { "future": { "one": "om {0} måned", "other": "om {0} måneder" }, "past": { "one": "for {0} måned siden", "other": "for {0} måneder siden" } } }, "day": { "displayName": "dag", "relative": { "0": "i dag", "1": "i morgon", "2": "i overmorgon", "-1": "i går", "-2": "i forgårs" }, "relativeTime": { "future": { "one": "om {0} døgn", "other": "om {0} døgn" }, "past": { "one": "for {0} døgn siden", "other": "for {0} døgn siden" } } }, "hour": { "displayName": "time", "relativeTime": { "future": { "one": "om {0} time", "other": "om {0} timer" }, "past": { "one": "for {0} time siden", "other": "for {0} timer siden" } } }, "minute": { "displayName": "minutt", "relativeTime": { "future": { "one": "om {0} minutt", "other": "om {0} minutter" }, "past": { "one": "for {0} minutt siden", "other": "for {0} minutter siden" } } }, "second": { "displayName": "sekund", "relative": { "0": "now" }, "relativeTime": { "future": { "one": "om {0} sekund", "other": "om {0} sekunder" }, "past": { "one": "for {0} sekund siden", "other": "for {0} sekunder siden" } } } } }, { "locale": "nn-NO", "parentLocale": "nn" }];
module.exports = exports["default"];