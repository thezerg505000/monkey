
function save()
{
	localStorage.setItem("susp", susp)
}

function load()
{
	susp = localStorage.getItem("susp");
	susp = parseInt(susCount)
}

