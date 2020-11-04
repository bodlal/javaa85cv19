var c = 0;

$(document).ready(function () {
	$("#b1")
.on('click', function () {
++c;
if (c > 10) {
$(this)
.attr({
href: "###",
target: "_self"
					});
			}
		});
	$("#b2")
		.on('click', function () {
			if (c > 3) window.location = "dir link hna";
			else window.alert("للأسف هناك اجراء مفقود لم تقم بالمشاركة مع 10 من اصدقائك " );
		});
});
