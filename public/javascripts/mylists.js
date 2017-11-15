$(document).ready(function() {
  showLists();
  $('#newProfileForm').hide();
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

function delProfile(type) {
  console.log("delProfile pressed");
  console.log(type);

  // delete profile that mathces username and profile type
  $.ajax({
            url: './profiles',
            type: 'DELETE',
            data: { type: decodeURIComponent(type) },
            success:function(result){
                console.log("Successfully deleted item");
                $('#lists').html(result);
            }
        });
  location.reload();
}

function showprofile(type) {
  console.log("showprofile called");
  console.log(type);
  $.ajax({
            url: './profiles',
            type: 'GET',
            data: { type: decodeURIComponent(type) },
            success:function(result) {
              console.log("Successfully retrieved profile");
                $('#lists').empty();
                $('#main').empty();
                $('#lists').html(result);
            }
        });
}

function updateprofileinfo() {
  console.log("pressed");
}

function showmodal(type) {
  $('#'+type+'.ui.modal')
    .modal('show')
  ;
}

function toggleNewProfile() {
  console.log("toggle new profile form");
  getFields();
  $('#lists').hide();
  $('#main').hide();
  $('#newProfileForm').show();
}

// populate fields for adding new profiles
function getFields() {
  console.log("getting fields");
  $.ajax({
            url: './fields',
            type: 'GET',
            data: {},
            success:function(result) {
              console.log(result);
              $('.fieldoptions').html(result);
            }
        });
}