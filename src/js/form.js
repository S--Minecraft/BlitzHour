;(function () {

	'use strict';

	$("#application-form").submit(function(e) {
		e.preventDefault();

		var $form = $(this);
		var $submit = $form.find("button");

		$.ajax({
			url: "https://script.google.com/macros/s/AKfycbxXjpzOOAvcaIVb44Tz_id1HLwBAGdU74Dsccug_vPznHWygXjv/exec",
			type: "post",
			data: $form.serialize(),
			timeout: 10000,
			beforeSend: function(xhr, settings) {
				$submit.prop("disabled", true);
			},
			complete: function(xhr, settings) {
				$submit.prop("disabled", false);
			},
			success: function(result, status, xhr) {
				$form[0].reset();
				$form.append($("<div class=\"alert alert-success alert-dismissible\"><button type=\"button\" class=\"close\" data-dismiss=\"alert\"><span>&times;</span></button>送信完了</div>"));
			},
			error: function(xhr, settings) {
				$form.append($("<div class=\"alert alert-warning alert-dismissible\"><button type=\"button\" class=\"close\" data-dismiss=\"alert\"><span>&times;</span></button>送信失敗</div>"));
			}
		});
	});

	// Document on load.
	$(function(){


	});


}());