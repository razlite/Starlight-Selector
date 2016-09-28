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

	var color = ["#000000", "#FB0774", "#236DFB", "#FCA926"]
	
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
	
	var area = document.getElementById("output");
	
	button.onclick = function()
	{
		var rand = Math.floor(Math.random() * songs.length);
		var result = songs[rand];
		
		var word = "<b> <font color=\"" + color[songs_type[rand]] + "\">" + result + "</font> </b>";
		area.innerHTML = word;
	}
	
	button_all.onclick = function()
	{
		var rand = Math.floor(Math.random() * songs_all.length);
		var result = songs_all[rand];
		
		var word = "<b> <font color=\"" + color[0] + "\">" + result + "</font> </b>";
		area.innerHTML = word;
	}
	
	button_cute.onclick = function()
	{
		var rand = Math.floor(Math.random() * songs_cute.length);
		var result = songs_cute[rand];
		
		var word = "<b> <font color=\"" + color[1] + "\">" + result + "</font> </b>";
		area.innerHTML = word;
	}
	
	button_cool.onclick = function()
	{
		var rand = Math.floor(Math.random() * songs_cool.length);
		var result = songs_cool[rand];
		
		var word = "<b> <font color=\"" + color[2] + "\">" + result + "</font> </b>";
		area.innerHTML = word;
	}
	
	button_passion.onclick = function()
	{
		var rand = Math.floor(Math.random() * songs_passion.length);
		var result = songs_passion[rand];
		
		var word = "<b> <font color=\"" + color[3] + "\">" + result + "</font> </b>";
		area.innerHTML = word;
	}
}