class PasswordMask
  constructor: (@passwordInput) ->
    @.createTextInput()
    @.createCheckbox()
    @.setInitialTextInput()
    @.setupEvents()

  createTextInput: ->
    @textInput = $('<input type="text" />')
    @textInput.insertAfter(@passwordInput).hide()

  setInitialTextInput: ->
    @textInput.val(@passwordInput.val())

  createCheckbox: ->
    passwordId = @passwordInput.attr('id')
    html = """
      <input type="checkbox" id="#{passwordId}-checkbox">
      <label for="#{passwordId}-checkbox">show password</label>
    """
    @textInput.after html
    @checkboxInput = @textInput.next()

  setupEvents: ->
    @passwordInput.bind 'keyup', (event) =>
      @textInput.val @passwordInput.val()

    @textInput.bind 'keyup', (event) =>
      @passwordInput.val @textInput.val()

    @checkboxInput.on 'click', (event) =>
      @passwordInput.toggle()
      @textInput.toggle()

$ ->
  $('input:password').each (ind, el) =>
    $this = $(el)
    new PasswordMask($this);
