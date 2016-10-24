"use strict";
var JS;
(function (JS) {
    var Plugins;
    (function (Plugins) {
        var Jsql = (function () {
            function Jsql(query) {
                this.query = query;
                this.init = function () {
                };
            }
            Jsql.isNullOrUndefined = function (query) {
                return !query || query.length === 0;
            };
            Jsql.cleanQuery = function (query) {
                if (Jsql.isNullOrUndefined(query))
                    throw new Error('Invalid string passed');
                return query.replace(/\s+/gi, ' ');
            };
            Jsql.prototype.parse = function (query) {
                return query;
            };
            return Jsql;
        }());
        Plugins.Jsql = Jsql;
    })(Plugins = JS.Plugins || (JS.Plugins = {}));
})(JS = exports.JS || (exports.JS = {}));
//# sourceMappingURL=Jsql.js.map