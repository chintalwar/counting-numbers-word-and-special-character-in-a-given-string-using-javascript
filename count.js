//function creation for check the number
function btnCount(){

   
    //array declaration
    var txt = [];

    //variable declaration 
    var alph =0, digit =0, specialChar =0,enter=0,sentence=0;

    //special character declared and store
    var specialChars = /^[!@#$%^&*()_+\-=\[\]{};':"\\|,<>\/?]*$/;

   
    //taking input from user and storing it into txt
    txt = document.getElementById("txtCount").value;
     
    //calculating total number of word
    myArr =txt.split(" ").length;
      
    //loop for chaking the paragraph till the end 
    for(i=0; i < txt.length; i++){
        var ch = txt[i];
        if((txt[i]>='a' && txt[i]<='z') || (txt[i]>='A'&& txt[i]<='Z')){
           ++alph;
       }else if(txt[i]>='0' && txt[i]<='9'){
           ++digit;
       }else if(txt[i].match(specialChars)){
           ++specialChar;
       }else if(txt[i] = String.fromCharCode(46)){
           ++sentence;
       }else if(txt[i] =String.fromCharCode(10)){
           ++enter;
    }

    }
    
    //Display the output 
    document.getElementById("alph").innerHTML ="TOTAL NUMBER OF ALPHABETS IS : " + alph;
    document.getElementById("digit").innerHTML ="TOTAL NUMBER OF DIGIT IS : " +digit;
    document.getElementById("specialChar").innerHTML ="TOTAL SPECIAL CHARACTER IS : " +specialChar;
    document.getElementById("enter").innerHTML ="TOTAL NUMBER OF PARAGRAPH IS : " +enter;
    document.getElementById("words").innerHTML ="TOTAL NUMBER OF WORD IS : " + myArr;
    document.getElementById("sentence").innerHTML ="TOTAL NUMBER OF SENTENCES IS : " +sentence;
    
}


//functon create for pop up showing
function frequencyPopup(){

    //array for counting index
    var myArr = new Array(26);
         
    //array declaration
     var txt = [];
     
    //taking input from user and storing it into txt
     txt = document.getElementById("txtCount").value;

     for(i=0;i<txt.length;i++){
        var ch = txt[i];
         if(txt.charAt((i) >65) && txt.charAt((i)<=90) || txt.charAt((i) >97) && txt.charAt((i)<=122)){
             myArr[txt.charAt(i)-65]++;
            
         }
     }
     alert(myArr);
}

//function create for display view
function section(){
    document.getElementById("btnCount").style.display="none";
    document.getElementById("restart").style.display = "block";
}