(function (Ravi) {
    (function (Plugin) {
        var Jsql = (function () {
            /**
            *
            */
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

                return query.replace(/\s+/gi, ' ').replace(/,\s/gi,',');

            };

            Jsql.prototype.parse = function (query) {
                return query;
            };
            return Jsql;
        })();
        Plugin.Jsql = Jsql;
    })(Ravi.Plugin || (Ravi.Plugin = {}));
    var Plugin = Ravi.Plugin;
})(exports.Ravi || (exports.Ravi = {}));
var Ravi = exports.Ravi;
