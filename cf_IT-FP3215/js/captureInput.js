/*The script */

/* Function is invoked once the page has been fully loaded*/
window.onload = init;   
function init(){
var submit = document.getElementById("submit") 



/*Returns the html elements with id="recipientName", id="organizationName", id="eventDate", id="websiteURL", and id="hostName"*/
submit.onclick = function(){
	var recipientName = document.getElementById("recipientName").value;
  	var organizationName = document.getElementById("organizationName").value;
	var eventDate = document.getElementById("eventDate").value;
	var websiteURL = document.getElementById("websiteURL").value;
	var hostName = document.getElementById("hostName").value;

/*Outputted to the page*/
  document.getElementById("outputRecipientName").innerText = recipientName;
  document.getElementById("outputOrganizationName").innerText = organizationName;
  document.getElementById("outputEventDate").innerText = eventDate;
  document.getElementById("outputWebsiteURL").innerText = websiteURL;
  document.getElementById("outputHostName").innerText = hostName;
}


}
