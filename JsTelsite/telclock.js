var clock = document.getElementById("clock");
Number.prototype.zeroLead = function() {
	var s = String(this);
	while (s.length < 2) {
		s = "0" + s;
	}
	return s;
}

function updateTime() {
	var now = new Date();
	
	clock.innerHTML = now.getHours().zeroLead() + ":" + now.getMinutes().zeroLead();
	var seconds = now.getSeconds();
	
}
setInterval("updateTime()", 100);
