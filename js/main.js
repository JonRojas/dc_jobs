<<<<<<< HEAD
Tabletop.init({
  key: "https://docs.google.com/spreadsheets/d/1rLXcGtJYa7byW464v4ddCtZr98okdwBMK277IRFL9xM/pubhtml?gid=391686811&single=true",
=======
var $container = $(".js-profiles")

Tabletop.init({ 
  key: "https://docs.google.com/spreadsheets/d/1_bU0idTkrU4c0P3Y4ha3KeULIQ8fL22t8mffOETafTA/pubhtml",
>>>>>>> JonRojas/master
  callback: sheetLoad,
  simpleSheet: true
})

function sheetLoad( data, tabletop ){
  render( data )
  buildTeams( data )
}

function render( context ){
  var template = $("#jobs-template").html()
  var compile = Handlebars.compile( template )
  var html = compile( { employer: context } )
  $(".js-profiles").html( html ).show()
}

function buildTeams( context ){
  var teams = _.map( context, function( person ){
    return person.Team 
  })
  teams = _.uniq( teams )
  var a = document.createElement("a")
  a.innerHTML = "All"
  a.setAttribute("data-filter","*")
  $(".js-teams-nav").append(a) 
  for( var i = 0; i < teams.length; i++ ){
    var a = document.createElement("a")
    a.innerHTML = teams[i]
    a.setAttribute("data-filter","." + teams[i])
    $(".js-teams-nav").append(a) 
  }
  $(".js-teams-nav a").on("click", function( event ){
    event.preventDefault()
    $(this).addClass("active").siblings().removeClass("active")
    $container.isotope({
      filter: $(this).attr("data-filter")
    })
  })
}