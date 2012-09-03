$(document).ready(function(){
	
	$("#myform").validate({
		rules: {	
									
			range: {
				required: true,
				range: [0,5]
			},	
			name: {
				required: true,
				name: true
			},		
			email: {
				required: true,
				email: true
			},
			url: {
				required: true,
				url: true
			},
			date: {
				required: true,
				date:true
			},
			number: {
				required: true,
				number: true
			},
			phone: {
				required: true,
				phoneUS: true
			}
		}
	});
	
    $("input#url").autocomplete({
    	source: ["http://www.google.com", "http://www.facebook.com", "http://www.iupui.com", "http://www.netflix.com"]
	});
	
	jQuery.validator.addMethod("phoneUS", function(phone_number, element) {
		phone_number = phone_number.replace(/\s+/g, ""); 
		return this.optional(element) || phone_number.length > 9 &&
			phone_number.match(/^(1-?)?(\([2-9]\d{2}\)|[2-9]\d{2})-?[2-9]\d{2}-?\d{4}$/);
	}, "Please specify a valid phone number");
	
});

