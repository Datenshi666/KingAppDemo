define("bundles/kingappaccount/js/loggedUser",["jquery","bundles/kingappcommon/js/browser","jquery-cookie"],function(e,n){var o,t=e(".account-frontend-logged-user");function a(){e("body").toggleClass("account--open").removeClass("hamburger--open"),e(".hamburger__menu").removeClass("state--open")}return t.on("click",".linkToLogout",function(o){o.preventDefault(),e.get(e(this).attr("href")).done(function(){n.reload()})}),function(n){if(!o){o=!0;var l=e.cookie("loggedUser");l?(t.html(decodeURIComponent(escape(atob(l)))),t.find(".media-avatar").length&&t.addClass("logged")):t.load(n.url,function(){e.cookie("loggedUser",btoa(unescape(encodeURIComponent(t.html()))),{path:"/"})}),t.on("click",a),e(".login-modal").find("form").length&&t.on("click",".linkToLogin",function(n){t.find(".media-avatar").length||(e("#login").modal(),n.preventDefault())}),e(".register-modal").find("form").length&&t.on("click",".linkToRegister",function(n){t.find(".media-avatar").length||(e("#register").modal(),n.preventDefault())})}}});