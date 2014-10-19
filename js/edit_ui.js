
//
$(function(){

	// jScrollPane開始
	$('#KijiSelArea ul').jScrollPane();
	$('#BentoKouhoArea ul').jScrollPane();
	// ▲ボタンでもスクロール
	var _sy = 40;
	var paneL = $('#KijiSelArea ul').data('jsp');
	$('#KijiSelArea a.btn_up').click(function(){paneL.scrollBy(0,-_sy); return false;});
	$('#KijiSelArea a.btn_down').click(function(){paneL.scrollBy(0,_sy); return false;});
	var paneR = $('#BentoKouhoArea ul').data('jsp');
	$('#BentoKouhoArea a.btn_up').click(function(){paneR.scrollBy(0,-_sy); return false;});
	$('#BentoKouhoArea a.btn_down').click(function(){paneR.scrollBy(0,_sy); return false;});
	
});