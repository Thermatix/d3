rand = function(upper,lower){
	lower = typeof lower !== 'undefined' ? lower : 0;
	return Math.floor((Math.random() * upper) + lower);
};

Array.max = function( array ){
    return Math.max.apply( Math, array );
};

Array.min = function( array ){
    return Math.min.apply( Math, array );
};

setRandCol = function(tag,of){
	tag.transition().style(of, function(){
		return "hsl({0},100%,50%)".replace("{0}",rand(360));
	});
};

randnumbs = function(len){
	len = typeof len !== 'undefined' ? len : 5;
	var array = new Array();
	for(var i=0; i < len; i++){
		array[i] = rand(10);
	};
	return array;

};

setBasics = function(tag,apnd,id,clss,data){
	var t = typeof data != 'undefined' ? data : '';
	tag.append(apnd)
			.attr('id',id)
			.attr('class',clss)
			.data(t);
	// if(data != undefined){
	// 	tag.select(id).data(data);
	// };
}

main = function(){
	//creating values
	var numbers = randnumbs();
	values = [];
	for (var i=0; i < Array.max(numbers);i++){
		values[i] = i ;
	}
	values = values.reverse();

	//creating elements
	var body = d3.select("body");
	setBasics(body,"section","main","main")

	// body.append("section")
	// 		.attr("id","main")
	// 		.attr("class","main");
	// };

	var main = d3.select("#main");
	// main.append("section")
	// 		.attr('id','chart')
	// 		.attr('class','chart');
	setBasics(main,"section","chart","chart")

	var chart = d3.select("#chart");
	// chart.append("ul")
	// 		.attr("id","value_bar")
	// 		.attr("class","value_bar")
	// 		.data(values);
	setBasics(chart,"ul","value_Bar","value_Bar",values)

	var value = d3.select("#value_bar");
	value.data(values);


	chart.append("ul")
			.attr('id',"numb_bar")
			.attr('class',"numb_bar")
			.data(numbers);
	var numb = d3.select("#numb_bar");

	//populating elements
	for (var i=0; i < values.length;i++){
		value.append("li")
				 .attr('id',"value_{0}".replace('{0}',i))
				 .attr('class',"value" )
				 .text(values[i]);
	};

	for (var i=0; i < numbers.length;i++){
		var id = "numb_{0}".replace('{0}',i);
		numb.append("li")
				.attr('id',id)
				.attr('class','val_contain')
		id = "#{0}".replace('{0}',id);

		var t = d3.select(id).data(numbers);
		t.append("div")
			.attr("id","bar")
			.attr('class',"bar" );
		t.append("div")
			.text(numbers[i])
			.attr('class',"value");
				
	};

	//doing the bars
	for (var i=0; i < numbers.length;i++){
		var id = "#numb_{0}".replace('{0}',i);
		var t = d3.select(id).select('#bar');
		console.log(t)
		var h = numbers[i] * 18;
		h = (h != 0 ? h : 18) + 9;
		t.style('height',h);
		// t.style('top', h);

	}

};

// var randWords=['Hello','Good Bye','Good Afternoon','Good Evening','Good Morning','Bye' ]
// var paragraphs = d3.selectAll('p').data(randWords).text('X');

// paragraphs.style("background", "black", null);
// paragraphs.style("padding-left", "2px", null);
// paragraphs.style("padding", "5px", null);
// paragraphs.style("width", "70px", null);

// setRandCol(paragraphs,"color");

// setInterval(function(){
// 	setRandCol(paragraphs,"color")
// 	paragraphs.text(function(){return randWords[rand(4)]});
// }, 500);
// Update…
// var p = d3.select("body").selectAll("p")
//     .data([4, 8, 15, 16, 23, 42])
//     .text(String);




