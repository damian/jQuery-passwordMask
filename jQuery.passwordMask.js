(function() {
	$.fn.passwordMask = function(options) {
	  
		var defaults = {
			hidden: true,
			checkboxlabel: 'show password',
			setfocus: false
		},
		settings = $.extend({}, defaults, options);
		
		this.each(function(i) {
			var $this = $(this);
			var check = $('<input type="checkbox" />');
      var label = $('<label />').text(settings.checkboxlabel);
      var hidden = cloneOriginalInput($this);
			
			linkUpCheckboxToLabel(check, label, 'checkbox-' + i);

			check.insertAfter($this);
			label.insertAfter(check);
			hidden.insertAfter($this);
			
			if (!settings.hidden) {
				check.attr('checked', true);
				toggleInputs($this, hidden);
			}

			passwordCopy($this, hidden);
			
			check.bind('change', function(){
				toggleInputs($this, hidden);
				if (settings.setfocus) {
          var previnput = $(this).prev();
          if (previnput.is(':hidden')) {
            previnput.prev().focus();
          } else {
            previnput.focus();
          }
        }
			});

		});
		return this;
	};
	
	function cloneOriginalInput(elem)
	{
	  var clone = $('<input type="text" />');
	  clone.addClass(elem.attr('class'));
	  clone.css('display', 'none');
    return clone;
	}
	
	function linkUpCheckboxToLabel(checkbox, label, forstring)
	{
	  checkbox.attr('id', forstring);
	  label.attr('for', forstring);
	}
	
	function passwordCopy(elem1, elem2)
	{
	  elem1.bind('keyup', function(){
	    elem2.val($(this).val());
	  });
	  
	  elem2.bind('keyup', function(){
	    elem1.val($(this).val());
	  });
	}
	
	function toggleInputs(elem1, elem2)
	{
		elem1.toggle();
		elem2.toggle();
	}

})(jQuery);