var answer = new Array(10);
var quant = 0;

var choices = new Array();

//var quest = new Question();

function select(escolha){
	quant++

	choices.push(escolha);

	quest.compare(choices);
}

function submit(){

	var a = document.getElementById(escolha);

	if (quant<10) {
		var x = document.getElementById("inner");
		x.innerHTML = "Por favor, responda todas as questões"
	}

	else{

		if(quest.validate1 == true){
			a.style.backgroundColor = "#86DF79"
		}
			
		else{
			a.style.backgroundColor = "#F72B4D"
		}

		if(quest.validate2 == true){
			a.style.backgroundColor = "#86DF79"
		}
			
		else{
			a.style.backgroundColor = "#F72B4D"
		}

		if(quest.validate3 == true){
			a.style.backgroundColor = "#86DF79"
		}
			
		else{
			a.style.backgroundColor = "#F72B4D"
		}
		

	}
	
}

