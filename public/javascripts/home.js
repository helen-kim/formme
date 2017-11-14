$(document).ready(function() {
  showLists();
});

function showLists() {
  console.log("showlists called");

  // find all restaurants that has the same username
  $.ajax({
            url: './profiles',
            type: 'GET',
            data: {},
            success:function(result){
                console.log("Successfully retrieved item");
                $('#lists').html(result);
            }
        });
}
