window.onload = function()
{
	httpObj = new XMLHttpRequest();
	httpObj.open("get", "./assets/songs.json", true);
	
	var songs = [];
	var songs_type = [];
	var songs_all = [];
	var songs_cute = [];
	var songs_cool = [];
	var songs_passion = [];

	var color = ["#000000", "#FB0774", "#236DFB", "#FCA926"];
	
	var difficulty = ["DEBUT", "REGULAR", "PRO", "MASTER"];
	
	httpObj.onload = function()
	{
		var songData = JSON.parse(this.responseText);
		var txt = "";
	
		for (var i=0; i<songData.songs.length; i++)
		{
			songs.push(songData.songs[i].name);
			songs_type.push(songData.songs[i].type);
			
			if(songData.songs[i].type == 0)
			{
				songs_all.push(songData.songs[i].name);
			}
			else if(songData.songs[i].type == 1)
			{
				songs_cute.push(songData.songs[i].name);
			}
			else if(songData.songs[i].type == 2)
			{
				songs_cool.push(songData.songs[i].name);
			}
			else if(songData.songs[i].type == 3)
			{
				songs_passion.push(songData.songs[i].name);
			}
			
			txt = txt + "<font color=\"" + color[songData.songs[i].type] + "\"><b>" + songs[i] + "</b></font> <br />";
		}
	
		document.getElementById("result").innerHTML = txt;
	}
	
	httpObj.send(null);
	
	var button = document.getElementById("sel");
	var button_all = document.getElementById("sel_all");
	var button_cute = document.getElementById("sel_cute");
	var button_cool = document.getElementById("sel_cool");
	var button_passion = document.getElementById("sel_passion");
	
	var bool_randiff = document.getElementById("randomize_difficulty");

	var area = document.getElementById("output");
	
	button.onclick = function()
	{
		var rand = Math.floor(Math.random() * songs.length);
		var dRand = Math.floor(Math.random() * difficulty.length);
		var result = songs[rand];
		
		var dWord = "";
		
		if(bool_randiff.checked == true)
		{
			dWord = " [" + difficulty[dRand] + "]";
		}
		
		var word = "<b> <font color=\"" + color[songs_type[rand]] + "\">" + result + dWord + "</font> </b>";
		area.innerHTML = word;
	}
	
	button_all.onclick = function()
	{
		var rand = Math.floor(Math.random() * songs_all.length);
		var dRand = Math.floor(Math.random() * difficulty.length);
		var result = songs_all[rand];
		
		var dWord = "";
		
		if(bool_randiff.checked == true)
		{
			dWord = " [" + difficulty[dRand] + "]";
		}
		
		var word = "<b> <font color=\"" + color[0] + "\">" + result + dWord + "</font> </b>";
		area.innerHTML = word;
	}
	
	button_cute.onclick = function()
	{
		var rand = Math.floor(Math.random() * songs_cute.length);
		var dRand = Math.floor(Math.random() * difficulty.length);
		var result = songs_cute[rand];

		var dWord = "";
		
		if(bool_randiff.checked == true)
		{
			dWord = " [" + difficulty[dRand] + "]";
		}
		
		var word = "<b> <font color=\"" + color[1] + "\">" + result + dWord + "</font> </b>";
		area.innerHTML = word;
	}
	
	button_cool.onclick = function()
	{
		var rand = Math.floor(Math.random() * songs_cool.length);
		var dRand = Math.floor(Math.random() * difficulty.length);
		var result = songs_cool[rand];

		var dWord = "";
		
		if(bool_randiff.checked == true)
		{
			dWord = " [" + difficulty[dRand] + "]";
		}
		
		var word = "<b> <font color=\"" + color[2] + "\">" + result + dWord + "</font> </b>";
		area.innerHTML = word;
	}
	
	button_passion.onclick = function()
	{
		var rand = Math.floor(Math.random() * songs_passion.length);
		var dRand = Math.floor(Math.random() * difficulty.length);
		var result = songs_passion[rand];
		
		var dWord = "";
		
		if(bool_randiff.checked == true)
		{
			dWord = " [" + difficulty[dRand] + "]";
		}

		var word = "<b> <font color=\"" + color[3] + "\">" + result + dWord + "</font> </b>";
		area.innerHTML = word;
	}
}