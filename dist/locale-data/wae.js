(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}(g.ReactIntlLocaleData || (g.ReactIntlLocaleData = {})).wae = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=[{locale:"wae",pluralRuleFunction:function(e,t){return t?"other":1==e?"one":"other"},fields:{year:{displayName:"Jár",relative:{0:"this year",1:"next year","-1":"last year"},relativeTime:{future:{one:"I {0} jár",other:"I {0} jár"},past:{one:"vor {0} jár",other:"cor {0} jár"}}},month:{displayName:"Mánet",relative:{0:"this month",1:"next month","-1":"last month"},relativeTime:{future:{one:"I {0} mánet",other:"I {0} mánet"},past:{one:"vor {0} mánet",other:"vor {0} mánet"}}},day:{displayName:"Tag",relative:{0:"Hitte",1:"Móre",2:"Ubermóre","-1":"Gešter","-2":"Vorgešter"},relativeTime:{future:{one:"i {0} tag",other:"i {0} täg"},past:{one:"vor {0} tag",other:"vor {0} täg"}}},hour:{displayName:"Schtund",relativeTime:{future:{one:"i {0} stund",other:"i {0} stunde"},past:{one:"vor {0} stund",other:"vor {0} stunde"}}},minute:{displayName:"Mínütta",relativeTime:{future:{one:"i {0} minüta",other:"i {0} minüte"},past:{one:"vor {0} minüta",other:"vor {0} minüte"}}},second:{displayName:"Sekunda",relative:{0:"now"},relativeTime:{future:{one:"i {0} sekund",other:"i {0} sekunde"},past:{one:"vor {0} sekund",other:"vor {0} sekunde"}}}}},{locale:"wae-CH",parentLocale:"wae"}],module.exports=exports["default"];
},{}]},{},[1])(1)
});