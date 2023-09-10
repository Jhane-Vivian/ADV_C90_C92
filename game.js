player1_name = localStorage.getItem("player1Name");
player2_name = localStorage.getItem("player2Name");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";

document.getElementById("player1_score").innerHTML = player1_score ;
document.getElementById("player2_score").innerHTML = player2_score ;

document.getElementById("playerQuestion").innerHTML = "Turno de Pergunta: " + player1_name ;
document.getElementById("playerAnswer").innerHTML = "Turno de Resposta: " + player2_name ;

 
 
 function send(){
    number1 = document.getElementById("numero1").value;
    number2 = document.getElementById("numero2").value;
atual_ansewr = parseInt(number1) * parseInt(number2);
question_number = "<h4>" + number1+ "X" +number2 + "</h4>";
input_box = "<br>Resposta : <input type='text' id= 'input_check_box'>";
check_button= "<br> <br> <button class='btn btn-info' onclick='check()'>checar</button>";
row= question_number+input_box+check_button;
document.getElementById("output").innerHTML=row;
document.getElementById("numero1").value="";
document.getElementById("numero2").value="";
 }
 questionturn="player1";
 answerturn="player2";
 function check(){
get_answer=document.getElementById("input_check_box").value;
if(get_answer==atual_ansewr){

    if(answerturn=="player1"){
        player1_score = player1_score+1;
        document.getElementById("player1_score").innerHTML = player1_score;
    
    }
    else{
        player2_score= player2_score+1;
        document.getElementById("player2_score").innerHTML = player2_score;
    }
}
if(questionturn=="player1"){
    questionturn= "player2"
    document.getElementById("playerQuestion").innerHTML = "turno de pergunta-"+ player2_name;
}
else{
    questionturn="player1"
    document.getElementById("playerQuestion").innerHTML = "turno de resposta-"+ player1_name;

}

if(answerturn=="player1"){
    answerturn= "player2"
    document.getElementById("playerAnswer").innerHTML = "turno de pergunta-"+ player2_name;
}
else{
    answerturn="player1"
    document.getElementById("playerAnswer").innerHTML = "turno de resposta-"+ player1_name;

}
document.getElementById("input_check_box").value="";
document.getElementById("output").innerHTML="";
 }