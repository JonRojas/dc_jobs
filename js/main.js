$(document).ready(resizeCard);

$(window).resize(resizeCard);


function resizeCard() {
  $('.profile-card + .profile-card').css({
    'max-width': $('.profile-card:first-child').width()
    });
}


var $container = $(".js-profiles")

Tabletop.init({
  key: "https://docs.google.com/spreadsheets/d/1rLXcGtJYa7byW464v4ddCtZr98okdwBMK277IRFL9xM/pubhtml?gid=391686811&single=true",
  callback: sheetLoad,
  simpleSheet: true
})

function sheetLoad( data, tabletop ){
  render( data )
  buildCategories( data )
}

function render( context ){
  var template = $("#jobs-template").html()
  var compile = Handlebars.compile( template )
  var html = compile( { employer: context } )
  $(".js-profiles").html( html ).show()
  resizeCard();
}


function buildCategories( context ){
  var categories = _.map( context, function( company ){
    return company.Category
  })
  categories = _.uniq( categories )
  var a = document.createElement("a")
  a.innerHTML = "All"
  a.setAttribute("data-filter","*")
  $(".js-teams-nav").append(a)
  for( var i = 0; i < categories.length; i++ ){
    var a = document.createElement("a")
    a.innerHTML = categories[i]
    a.setAttribute("data-filter","." + categories[i])
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
