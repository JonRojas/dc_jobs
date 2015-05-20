'use strict';

$(function () {
  // Grab the template script
  var theTemplateScript = $("#student-template").html();

  // Compile the template
  var theTemplate = Handlebars.compile(theTemplateScript);

  // This is the default context, which is passed to the template
  var context = {
    students: [
        {
          "teacher":"Mr. Holder, band director for four years. Made me love band, teamwork, and taught me what it takes to be successful.",
          "inspiration":"Billy Strayhorn. Composer, band arranger, and pianist who wrote a ton of great tunes for Duke Ellington, but more importantly was openly gay and a minority in the early 20th century but yet highly regarded both then and now. ",
          "project":"Working as a wrangler in Montana. It was awesome because I got to ride horses all in day in a beautiful place and get paid for it. ",
          "pleasure":"I like to pretend I'm the radio commentator for the Washington Nationals when I'm listening to the broadcast on the radio. \n\nI like to pretend like I'm playing the drums on my steering wheel with the pair of drum sticks I keep in my car when stuck in traffic. ",
          "name":"Tyler Brooks",
          "twitter":"@idonthaveoneyet",
          "git":"@htylerbrooks"
        },
        {
          "teacher":"Don't really have one. I had plenty of teachers that did their jobs well but no one who really stood out. I guess if I had to choose, maybe my Algebra teacher Mr.Odell or my IB English teacher Ms.Green or maybe my Music Theory teacher Mr. Samandari.",
          "inspiration":"I actually wrote down a list sometime ago that included Simone de Bovier (awesome 2nd wave feminist and existentialist) , Maria Callas(revolutionized opera singing by introducing theatrics), Ayn Rand (respect her for her influence, not politics), Bob Dylan (amazing songwriting and story telling skills) and Margret Thatcher (see Ayn Rand explanation). I stand by it.",
          "project":"The last project I completed before WDI was my online portfolio. It was the first project that I incorporated JQuery and Javascript into along with my usual HTML/CSS and a few wireframes and sitemaps to get the design down.",
          "pleasure":"I don't know, cheesy pop music?",
          "name":"Isatu Conteh",
          "twitter":"don't have on yet",
          "git":"https://github.com/Freetown5"
        }
    ]
  };

  // Pass our data to the template
  var theCompiledHtml = theTemplate(context);

  // Add the compiled html to the page
  $(document.body).append(theCompiledHtml);
});
