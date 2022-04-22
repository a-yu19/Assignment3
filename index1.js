var i = 0;
var correctCount = 0;
var numQuestions = 20
const questionCounterText = document.getElementById("questionCounter");
generate(0);

var name = window.prompt("Enter your name");

function generate(index){
	document.getElementById("question").innerHTML = jsonData1[index].q;
	document.getElementById("optt1").innerHTML = jsonData1[index].opt1;
	document.getElementById("optt2").innerHTML = jsonData1[index].opt2;
	document.getElementById("optt3").innerHTML = jsonData1[index].opt3;
}

function checkAnswer(){
	if(document.getElementById("opt1").checked && jsonData1[i].opt1 == jsonData1[i].answer){
		correctCount++;
	}
	if(document.getElementById("opt2").checked && jsonData1[i].opt2 == jsonData1[i].answer){
		correctCount++;
	}
	if(document.getElementById("opt3").checked && jsonData1[i].opt3 == jsonData1[i].answer){
		correctCount++;
	}
	i++;

	
	if(jsonData1.length-1 < i){
		var scoreper = Math.round(correctCount/numQuestions*100)
		document.write("<body style='background-color: #00A6E8;'>");
		document.write("<p style='color:#ffffff; font-size:18pt;'> Your score is : " +scoreper+"%. </p>");	
		if(scoreper > 80){
		document.write("<p style='color:#ffffff; font-size:18pt;'> Congratulations "+name+"! You pass the quiz! </p>")
	} else {
		document.write("<p style='color:#ffffff; font-size:18pt;'> Sorry "+name+", you failed the quiz. </p>")
	}
	}
	generate(i);

}
