const API_KEY = "a2c903cc-b31e-4547-9299-b6d07b7631ab";

function encryptApiKey() {
    var t = API_KEY
        , e = t.split("")
        , n = e.splice(0, 8);
    return t = e.concat(n).join("")
}

function encryptTime(t) {
    var a = 1111111111111;
    var e = (1 * t + a).toString().split("")
        , n = parseInt(10 * Math.random(), 10)
        , r = parseInt(10 * Math.random(), 10)
        , i = parseInt(10 * Math.random(), 10);
    return e.concat([n, r, i]).join("")
}

function comb(t, e) {
    var n = "".concat(t, "|").concat(e);
    return btoa(n)
}

function getApiKey(timestamp) {
    var t = timestamp
        , e = encryptApiKey();
    return t = encryptTime(t),
    comb(e, t)
}
