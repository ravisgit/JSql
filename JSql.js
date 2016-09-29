(function (Ravi) {
    (function (Plugin) {
        var Jsql = (function () {
            /**
            *
            */
            function Jsql(query) {
                this.query = query;
            }
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
