rand = function(upper,lower)
{
	lower = typeof lower !== 'undefined' ? lower : 0;
	return Math.floor((Math.random() * upper) + lower);
};


setRandCol = function(tag,of)
{
	tag.style(of, function()
	{
		return "hsl(" + rand(360) + ",100%,50%)";
	});
};

main = function(){
	var randWords=['Hello','Good Bye','Good Afternoon','Good Evening','Good Morning','Bye' ]
	var paragraphs = d3.selectAll('p').data(randWords).text('X');
	paragraphs.style("background", "black", null);
	paragraphs.style("padding-left", "2px", null);
	paragraphs.style("padding", "5px", null);
	paragraphs.style("width", "70px", null);

	setRandCol(paragraphs,"color");
	
	setInterval(function(){
		setRandCol(paragraphs,"color")
		paragraphs.text(function(){return randWords[rand(4)]});
	}, 200);
	
};



