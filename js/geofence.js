$(document).ready(function () {

    var e = [];
    var s, i;

    $("#why").click(function(){
      alert("I would love to see Digital Revolution, but I cannot make it to London for the exhibit. I am happy to see at least these works.");
    });

    $('#artists').show();
    $("#janvantomme").click(function () {
        var e = document.createElement("canvas");
        e.id = "artwork-janvantomme", e.width = "320", e.height = "320", $("#art").append(e);
        var t = document.createElement("script");
        t.type = "text/javascript", t.src = "http://hacktheartworld.com/js/janvantomme.js", t.id = "artscript", $("body").append(t), $("#artists").css("display", "none"), $("#art").css("display", "block"), $("#closeButton").css("display", "block")
    }), $("#dianalange").click(function () {
        var e = document.createElement("canvas");
        e.id = "artwork-dianalange", e.width = "320", e.height = "320", $("#art").append(e);
        var t = document.createElement("script");
        t.type = "text/javascript", t.src = "http://hacktheartworld.com/js/dianalange.js", t.id = "artscript", $("body").append(t), $("#artists").css("display", "none"), $("#art").css("display", "block"), $("#closeButton").css("display", "block")
    }), $("#quasimondo").click(function () {
        var e = document.createElement("script");
        e.type = "text/javascript", e.src = "js/easeljs-0.7.1.min.js", $("body").append(e);
        var t = document.createElement("script");
        t.type = "text/javascript", t.src = "js/qlib_min.js", $("body").append(t);
        var a = document.createElement("canvas");
        a.id = "artwork-quasimondo", a.width = "320", a.height = "320", $("#art").append(a);
        var s = document.createElement("script");
        s.type = "text/javascript", s.src = "http://hacktheartworld.com/js/quasimondo.js", s.id = "artscript", $("body").append(s), $("#artists").css("display", "none"), $("#art").css("display", "block"), $("#closeButton").css("display", "block")
    }), $("#grgrdvrt").click(function () {
        var e = document.createElement("canvas");
        e.id = "artwork-grgrdvrt", e.width = "320", e.height = "320", $("#art").append(e);
        var t = document.createElement("script");
        t.type = "text/javascript", t.src = "http://hacktheartworld.com/js/grgrdvrt.js", t.id = "artscript", $("body").append(t), $("#artists").css("display", "none"), $("#art").css("display", "block"), $("#closeButton").css("display", "block")
    }), $("#zenbullets").click(function () {
        var e = document.createElement("iframe");
        e.src = "http://hacktheartworld.com/js/zb/zb.html", e.id = "zbiframe", $("#art").append(e), $("#zbiframe").css("height", $(window).height()), $("#zbiframe").css("width", $(window).width()), $("#artists").css("display", "none"), $("#art").css("display", "block"), $("#closeButton").css("display", "block")
    }), $("#emiliegervais").click(function () {
        var e = document.createElement("iframe");
        e.src = "http://justin.emiliegervais.com/", e.id = "emiframe", $("#art").append(e), $("#emiframe").css("height", $(window).height()), $("#emiframe").css("width", $(window).width()), $("#artists").css("display", "none"), $("#art").css("display", "block"), $("#closeButton").css("display", "block")
    }), $("#driesdepoorter").click(function () {
        var e = document.createElement("iframe");
        e.src = "http://hacktheartworld.com/js/dries/index.html", e.id = "dpiframe", $("#art").append(e), $("#dpiframe").css("height", $(window).height()), $("#dpiframe").css("width", $(window).width()), $("#artists").css("display", "none"), $("#art").css("display", "block"), $("#closeButton").css("display", "block")
    }), $("#wblut").click(function () {
        var e = document.createElement("iframe");
        e.src = "http://hacktheartworld.com/js/wblut/index.html", e.id = "wbiframe", $("#art").append(e), $("#wbiframe").css("height", $(window).height()), $("#wbiframe").css("width", $(window).width()), $("#artists").css("display", "none"), $("#art").css("display", "block"), $("#closeButton").css("display", "block")
    }), $("#shardcore").click(function () {
        var e = document.createElement("iframe");
        e.src = "http://shardcore.org/htaw/", e.id = "shiframe", $("#art").append(e), $("#shiframe").css("height", $(window).height()), $("#shiframe").css("width", $(window).width()), $("#artists").css("display", "none"), $("#art").css("display", "block"), $("#closeButton").css("display", "block")
    }), $("#sabrinaverhage").click(function () {
        var e = document.createElement("canvas");
        e.id = "artwork-sabrinaverhage", e.width = "320", e.height = "320", $("#art").append(e);
        var t = document.createElement("script");
        t.type = "text/javascript", t.src = "http://hacktheartworld.com/js/sabrinaverhage.js", t.id = "artscript", $("body").append(t), $("#artists").css("display", "none"), $("#art").css("display", "block"), $("#closeButton").css("display", "block")
    }), $("#claudiamate").click(function () {
        var e = document.createElement("iframe");
        e.src = "http://hacktheartworld.com/js/claudia-mate/index.html", e.id = "cmiframe", $("#art").append(e), $("#cmiframe").css("height", $(window).height()), $("#cmiframe").css("width", $(window).width()), $("#artists").css("display", "none"), $("#art").css("display", "block"), $("#closeButton").css("display", "block"), ga("send", "event", "Artwork Visited", "Claudia MatÃ©")
    }), $("#matthew").click(function () {
        var e = document.createElement("iframe");
        e.src = "http://hacktheartworld.com/js/matthew/index.html", e.id = "mpfiframe", $("#art").append(e), $("#mpfiframe").css("height", $(window).height()), $("#mpfiframe").css("width", $(window).width()), $("#artists").css("display", "none"), $("#art").css("display", "block"), $("#closeButton").css("display", "block")
    }), $("#closeButton").click(function () {
        $("#artists").css("display", "block"), $("#art").css("display", "none"), $("#closeButton").css("display", "none"), $("#artscript").remove(); $("#art").html("");
    })
});
