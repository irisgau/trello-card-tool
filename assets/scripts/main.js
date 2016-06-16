(function(){

	var mdButton = document.getElementById('mdButton');
	mdButton.addEventListener('click', function(event){
	validateForm();

  });

	var validateForm;
  	validateForm = function() {
		var des = (document.getElementById('description').value).replace(/\n\r?/g, '<br />'); // preserves line breaks 
		console.log('#Description \n' + des);

		var exit = (document.getElementById('exitcriteria').value).replace(/\n\r?/g, '<br />');
		console.log('#Exit Criteria \n' + exit);

		var o = parseFloat(document.getElementById('timeo').value);
		var l = parseFloat(document.getElementById('timel').value);
		var p = parseFloat(document.getElementById('timep').value);
		var u = ((o+l+(4*p))/6);


		var checkbox_list = ["checkbox1", "checkbox2", "checkbox3", "checkbox4"]; // goes through checkboxes to get checked usernames
		var people = "";
		var i;
		for (i = 0; i < checkbox_list.length; i++) {
			if (document.getElementById(checkbox_list[i]).checked) {
				people += document.getElementById(checkbox_list[i]).value + " ";
			}
		}

		document.getElementById('output').innerHTML = ('#Description:' + "<br />" +
		des + "<br />" + "<br />" +
		'#Exit Criteria:' + "<br />" + 
		exit + "<br />" +  "<br />" +
		'###Hours:' + "<br />" +
		"OLPU: " + o + ", " + l + ", " + p + ", " + u + "<br/>" + "<br/>" + 
		'###People:' + "<br />" + people);

  };

}).call(this);


// FURTHER DEVELOPMENT:
// - separate olpu input for each person
// - separate olpu for each person in output
// - if no entry, do not output
// - copy to clipboard 

