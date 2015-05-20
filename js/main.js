Tabletop.init({ 
  key: "https://docs.google.com/spreadsheets/u/1/d/1_bU0idTkrU4c0P3Y4ha3KeULIQ8fL22t8mffOETafTA/pubhtml",
  callback: sheetLoad,
  simpleSheet: true 
})

function sheetLoad( data, tabletop ){
  render( data )
}

function render( context ){
  var template = $("#employee-template").html()
  var compile = Handlebars.compile( template )
  var html = compile( { employees: context } )
  $(".js-profiles").html( html ).show()
}
