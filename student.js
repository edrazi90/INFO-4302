
class student{

    constructor(name,matricNo, major){
        this.name = name;
        this.matricNo = matricNo;
        this.major = major;

    }

    get Name(){ 
              return this.name;    
             } 
    
    get MatricNo(){
        return this.matricNo;
    }          

    get Major(){
        return this.major;
    }
              
    set Name(name){  
             this.name = name;     }    

    set MatricNo(matricNo){
        this.matricNo = matricNo;
    }

    set Major(){
        this.MatricNo = matricNo;
    }
}

module.exports = student;
