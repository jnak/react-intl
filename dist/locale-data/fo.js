(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}(g.ReactIntlLocaleData || (g.ReactIntlLocaleData = {})).fo = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=[{locale:"fo",pluralRuleFunction:function(e,t){return t?"other":1==e?"one":"other"},fields:{year:{displayName:"ár",relative:{0:"hetta ár",1:"næstu ár","-1":"síðstu ár"},relativeTime:{future:{other:"+{0} y"},past:{other:"-{0} y"}}},month:{displayName:"mánuður",relative:{0:"henda mánuður",1:"næstu mánuður","-1":"síðstu mánuður"},relativeTime:{future:{other:"+{0} m"},past:{other:"-{0} m"}}},day:{displayName:"dagur",relative:{0:"í dag",1:"á morgunn",2:"á yfirmorgunn","-1":"í gær","-2":"í fyrradag"},relativeTime:{future:{other:"+{0} d"},past:{other:"-{0} d"}}},hour:{displayName:"klukkustund",relativeTime:{future:{other:"+{0} h"},past:{other:"-{0} h"}}},minute:{displayName:"mínúta",relativeTime:{future:{other:"+{0} min"},past:{other:"-{0} min"}}},second:{displayName:"sekund",relative:{0:"now"},relativeTime:{future:{other:"+{0} s"},past:{other:"-{0} s"}}}}},{locale:"fo-FO",parentLocale:"fo"}],module.exports=exports["default"];
},{}]},{},[1])(1)
});