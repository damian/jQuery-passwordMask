(function() {
	$.fn.passwordMask = function(options) {
	  
		var defaults = {
			hidden: true,
			checkboxlabel: 'Show password'
		},
		settings = $.extend({}, defaults, options);
		
		this.each(function() {
			var $this = $(this);
			var name = $(this).attr('name');
			
			var check = $('<input type="checkbox" name="checkbox" value="" id="checkbox"><label for="checkbox">' + settings.checkboxlabel + '</label><br/>');
			var hidden = $('<input type="text" name="' + name + '" value="" id="pwd-hidden">');
			check.insertAfter($this);
			hidden.insertAfter($this).hide();
			
			if (!settings.hidden) {
				check.attr('checked', true);
				toggleInputs($this, hidden);
			}
			
			// TODO : Refactor these keyups in to a function as theyre both doing the same thing
			$this.bind('keyup', function(){
				hidden.attr('value', $(this).attr('value'));
			});
			
			hidden.bind('keyup', function(){
				$this.attr('value', $(this).attr('value'));
			});
			
			check.bind('click', function(){
				toggleInputs($this, hidden);
			});
			
		});
		return this;
	};
	
	function toggleInputs(elem1, elem2)
	{
		elem1.toggle();
		elem2.toggle();
	}

})(jQuery);