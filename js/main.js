Tabletop.init({
  key: "https://docs.google.com/spreadsheets/d/1rLXcGtJYa7byW464v4ddCtZr98okdwBMK277IRFL9xM/pubhtml?gid=391686811&single=true",
  callback: sheetLoad,
  simpleSheet: true
})

function sheetLoad( data, tabletop ){
  render( data )
}

function render( context ){
  var template = $("#jobs-template").html()
  var compile = Handlebars.compile( template )
  var html = compile( { employer: context } )
  $(".js-profiles").html( html ).show()
}
