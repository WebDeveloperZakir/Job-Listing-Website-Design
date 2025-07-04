//JSHint Validated Custom JS Code
! function(t) {
    t.fn.countdown = function(e, n) {
        "use strict";

        function i() {
            var e = Date.parse(r.date) / 1e3,
                i = Math.floor(t.now() / 1e3);
            i >= e && (n.call(this), clearInterval(f));
            var s = e - i,
                d = Math.floor(s / 86400);
            s -= 60 * d * 60 * 24;
            var o = Math.floor(s / 3600);
            s -= 60 * o * 60;
            var l = Math.floor(s / 60);
            s -= 60 * l, 1 == d ? a.find(".timeRefDays").text("day") : a.find(".timeRefDays").text("days"), 1 == o ? a.find(".timeRefHours").text("hour") : a.find(".timeRefHours").text("hours"), 1 == l ? a.find(".timeRefMinutes").text("minute") : a.find(".timeRefMinutes").text("minutes"), 1 == s ? a.find(".timeRefSeconds").text("second") : a.find(".timeRefSeconds").text("seconds"), "on" == r.format && (d = String(d).length >= 2 ? d : "0" + d, o = String(o).length >= 2 ? o : "0" + o, l = String(l).length >= 2 ? l : "0" + l, s = String(s).length >= 2 ? s : "0" + s), isNaN(e) ? (alert("Invalid date. Here's an example: 12 Tuesday 2012 17:30:00"), clearInterval(f)) : (a.find(".days").text(d), a.find(".hours").text(o), a.find(".minutes").text(l), a.find(".seconds").text(s))
        }
        var a = t(this),
            r = {
                date: null,
                format: null
            };
        e && t.extend(r, e);
        var f;
        i(), f = setInterval(i, 1e3)
    }
}(jQuery);