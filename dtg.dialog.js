(function($) {
    var options = {
		okBtn: '&nbsp;确定&nbsp;',
		cancelBtn: '&nbsp;取消&nbsp;',
		isUsedDefaultStyle: false,
		isStyle:null
	}
	
	var defaultStyle = "<style>.dialog{position:fixed;box-shadow:0px 2px 0px 1px #ccc;border:1px solid #007aff;left:35%;top: 35%;text-align:center;z-index:999999;background:white;color:#595959;border-radius:5px;width:auto;width:30%}.dialog  p{line-height:22px;}.dialog  h1{margin:0;font-size:14px;text-align:left;padding:8px 8px 8px 8px;background: #007aff;border-top-left-radius:4px;border-top-right-radius:4px;color:white}.dialog input{width:50%;margin-bottom: 8px;background:#007aff;border:0;color:white;border-radius:4px;line-height:22px;height:22px;}</style>";
	
    function DtgDialog(style){
	   if( style == null ) {
	      if(!options.isUsedDefaultStyle)
	         $("BODY").append(defaultStyle)
	   }else{
	      options.isStyle = style;
	   }
	}
	
	DtgDialog.prototype.alert = function(message, title){
	   if( title == null ) title = '提示';
	   if( message == null ) message = '';
       show(message, title);
    }
	
	var show = function (msg ,title){
       var date = new Date();
	   var uuid = date.getTime()
	   if(options.isStyle == null){
	      $("BODY").append(
			  '<div id="dialog'+uuid+'" class="dialog">' +
			    '<h1>'+title.replace(/\n/g, '<br />')+'</h1>' +
			    '<p>' +msg.replace(/\n/g, '<br />') + '</p>' +
				'<input type="button" value="' + options.okBtn + '" id="dialog_ok'+uuid+'" />'+
			  '</div>');
	   }else{
	      $("BODY").append(
			  '<div id="dialog'+uuid+'" class='+options.isStyle+'>' +
			    '<h1>'+title.replace(/\n/g, '<br />')+'</h1>' +
			    '<p>' +msg.replace(/\n/g, '<br />') + '</p>' +
				'<input type="button" value="' + options.okBtn + '" id="dialog_ok'+uuid+'" />'+
			  '</div>');
	   }
	   
	   $("BODY").append('<div id="popup_overlay'+uuid+'"></div>');
					$("#popup_overlay"+uuid).css({
						position: 'absolute',
						zIndex: 99998,
						top: '0px',
						left: '0px',
						width: '100%',
						height: $(document).height()
					});

	   $("#dialog_ok"+uuid).click( function() {
	   	   hidden(uuid);
	   });
	   $("#dialog_ok"+uuid).focus().keypress( function(e) {
	   	if( e.keyCode == 13 || e.keyCode == 27 ) $("#dialog_ok"+uuid).trigger('click');
	   });
	}
	
	var hidden = function(uuid){
	  $("#dialog"+uuid).remove();
	  $("#popup_overlay"+uuid).remove();
	}

	$.dtgAlert = function(message, title, style) {
	    var al;
    	if( style == null ) {
		  al = new DtgDialog();
		}else{
		  al = new DtgDialog(style);
		}
		al.alert(message, title);
	}
})($);