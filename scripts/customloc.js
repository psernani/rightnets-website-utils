var currentUrl = window.location.href;
var text = "EN";
if (currentUrl.includes("rightnets.unimc.it/en/"))
{
	text = "IT";
	currentUrl = currentUrl.replace("rightnets.unimc.it/en/", "rightnets.unimc.it/");
}
else
{
	currentUrl = currentUrl.replace("rightnets.unimc.it/", "rightnets.unimc.it/en/");
}
 
document.getElementById("loc-button").innerHTML = '<a class="wp-block-button__link wp-element-button" href="' + currentUrl + '">' + text + '</a>';