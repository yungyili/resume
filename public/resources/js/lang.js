var langs = ['en', 'zh'];

var translate = function (jsdata) {
  console.log("translate: jsdata=",jsdata);
	$("[tkey]").each ( function (index) {
		var strTr = jsdata [$(this).attr('tkey')];
	    $(this).html(strTr);
	});
}
