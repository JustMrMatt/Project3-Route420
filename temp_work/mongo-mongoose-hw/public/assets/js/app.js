$(document).ready(function() 
{
  scrapeNews();

  $("#getNews").on("click", function() 
  {
    scrapeNews();
  });

  function scrapeNews()
  {
    $.ajax(
      {
        method: "GET",
        url: "/scrape"
      })
      .then(function(data) 
      {
        location.reload();
      });
  }

  $(document).on("click", ".article-data", function() 
  {
    var articleID = $(this).attr("data-article-id");
    window.location.href = "/article/" + articleID;
  });

  $( "#new-note-submit" ).click(function(event)
  {
    event.preventDefault();
    var newNote = $("#user-added-note").val().trim();
    var articleID = $("#wrapper").attr("data-article-id");

    if(newNote.length >= 2)
    {
      $.ajax(
      {
        method: "POST",
        url: "/article/" + articleID,
        data: 
        {
          body: newNote,
          article: articleID
        }
      }).then(function(data) 
      {
        location.reload();
      });
    }
  });

  $(document).on("click", ".deleteNote", function()
  {
    var articleID = $("#wrapper").attr("data-article-id");
    var noteID = $(this).attr("data-note-id");

    $.ajax(
    {
      method: "DELETE",
      url: "/note/" + noteID,
    }).then(function(data) 
    {
      location.reload();
    });

  }); 

});
