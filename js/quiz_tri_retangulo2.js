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