// to handle all actions that involve adding a new profile form

function addAnotherField() {
	console.log("add another field");
	var addField = "";
	addField += "<div class='two fields'><div class='field'><label>Field</label><select class='ui fluid dropdown fieldoptions'></select></div>";
	addField += "<div class='field'><label>Information</label><input type='text' name='shipping[last-name]' id ='information' placeholder='Information'>";
	addField += "</div></div>";
	$("#profile").append(addField);
	getFields();
}


function submitProfile() {
	console.log("submitprofile");
}

function goback() {
	window.location.href='/mylists';
}