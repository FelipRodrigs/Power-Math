var answer = new Array(10);

var quant = 0;

var choices = new Array();

var aux = new Array(10);

class Question{
    constructor(){
        this.answer1 = 1;
        this.answer3 = 2;
        this.answer3 = 3;
        this.validate1;
        this.validate2;
        this.validate3;
    }
    compare(choices){
        if(choices[0] == this.answer1){
            this.validate1 = true;
        }

        else{
            this.validate1 = false;
        }

        if(choices[1] == this.answer1){
            this.validate2 = true;
        }

        else{
            this.validate2 = false;
        }

        if(choices[2] == this.answer1){
            this.validate3 = true;
        }

        else{
            this.validate3 = false;
        }
    }

}


var quest = new Question();


function select(escolha){
	quant++

	choices.push(escolha);

	quest.compare(choices);

	
}

function submit(){

	var a = new Array();

	if (quant<3) {
		var x = document.getElementById("inner");
		x.innerHTML = "Por favor, responda todas as questões"
	}

	else{
		for(var i=0; i<3; i++){
			a[i] = document.getElementById(choices[i]);

			if(quest.validate1){
				a[i].style.backgroundColor = "#86DF79"
			}
				
			else{
				a[i].style.backgroundColor = "#F72B4D"
			}
	
			if(quest.validate2){
				a[i].style.backgroundColor = "#86DF79"
			}
				
			else{
				a[i].style.backgroundColor = "#F72B4D"
			}
	
			if(quest.validate3){
				a[i].style.backgroundColor = "#86DF79"
			}
				
			else{
				a[i].style.backgroundColor = "#F72B4D"
			}
		}
	}

	alert(choices);
	
}

