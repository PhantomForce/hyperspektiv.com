$(window).scroll(function(){$(window).scrollTop()>500?($(".navbar-bg").addClass("navbar-bg-show"),$(".navbar-content").addClass("navbar-content-show")):($(".navbar-bg").removeClass("navbar-bg-show"),$(".navbar-content").removeClass("navbar-content-show"))}),$(".scroll").on("click",function(s){s.preventDefault(),$("html, body").animate({scrollTop:$(this.hash).offset().top},1500)}),$(function(){$("a[href*=#]:not([href=#])").click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var s=$(this.hash);if(s=s.length?s:$("[name="+this.hash.slice(1)+"]"),s.length)return $("html,body").animate({scrollTop:s.offset().top},1e3),!1}})}),$(function(){$("#distorted-reality").mouseover(function(){$("#splash-arrow").attr("src","../assets/images/down_arrow_hover.png")}),$("#distorted-reality").mouseout(function(){$("#splash-arrow").attr("src","../assets/images/down_arrow.png")})}),$(function(){$("#sign-up").mouseover(function(){$("#sign-up").attr("src","../assets/images/sign_up_hover.png")}),$("#sign-up").mouseout(function(){$("#sign-up").attr("src","../assets/images/sign_up.png")})});