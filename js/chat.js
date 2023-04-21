$(document).ready( function () {

	$("#twitchChatTest").show();
	$("#subChatTest").hide();
	$("#bothChatTest").hide();

	$("#twitchChat").on('click', function () { 
		$("#twitchChatTest").show();
		$("#subChatTest").hide();
		$("#bothChatTest").hide();
	})

	$("#subChat").on('click', function () { 
		$("#twitchChatTest").hide();
		$("#subChatTest").show();
		$("#bothChatTest").hide();

	})

	$("#bothChat").on('click', function () { 
		$("#twitchChatTest").hide();
		$("#subChatTest").hide();
		$("#bothChatTest").show();
	})

});