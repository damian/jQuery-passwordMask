(function() {
  var PasswordMask;

  PasswordMask = (function() {

    function PasswordMask(passwordInput) {
      this.passwordInput = passwordInput;
      this.createTextInput();
      this.createCheckbox();
      this.setInitialTextInput();
      this.setupEvents();
    }

    PasswordMask.prototype.createTextInput = function() {
      this.textInput = $('<input type="text" />');
      return this.textInput.insertAfter(this.passwordInput).hide();
    };

    PasswordMask.prototype.setInitialTextInput = function() {
      return this.textInput.val(this.passwordInput.val());
    };

    PasswordMask.prototype.createCheckbox = function() {
      var html, passwordId;
      passwordId = this.passwordInput.attr('id');
      html = "<input type=\"checkbox\" id=\"" + passwordId + "-checkbox\">\n<label for=\"" + passwordId + "-checkbox\">show password</label>";
      this.textInput.after(html);
      return this.checkboxInput = this.textInput.next();
    };

    PasswordMask.prototype.setupEvents = function() {
      var _this = this;
      this.passwordInput.bind('keyup', function(event) {
        return _this.textInput.val(_this.passwordInput.val());
      });
      this.textInput.bind('keyup', function(event) {
        return _this.passwordInput.val(_this.textInput.val());
      });
      return this.checkboxInput.on('click', function(event) {
        _this.passwordInput.toggle();
        return _this.textInput.toggle();
      });
    };

    return PasswordMask;

  })();

  $(function() {
    var _this = this;
    return $('input:password').each(function(ind, el) {
      var $this;
      $this = $(el);
      return new PasswordMask($this);
    });
  });

}).call(this);
