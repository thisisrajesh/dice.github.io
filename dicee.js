var h1=document.getElementById('h1');
var num1=Math.random();
var num2=Math.random();
var img1=document.getElementById('img1');
var img2=document.getElementById('img2');
var button=document.getElementById('button');

function play(){
var num1=Math.random();
var num2=Math.random();

num1=Math.floor(6*num1+1);
num2=Math.floor(6*num2+1);

var img11; 
switch(num1){
	case 1:
	img11= 'images/dice1.png';
	break;

	case 2:
	img11='images/dice2.png';
	break;

	case 3:
	img11='images/dice3.png';
	break;

	case 4:
	img11='images/dice4.png';
	break;

	case 5:
	img11='images/dice5.png';
	break;

	case 6:
	img11='images/dice6.png';
	break;
}

var img22 ;
switch(num2){
	case 1:
	img22 ='images/dice1.png';
	break;

	case 2:
	img22 = 'images/dice2.png';
	break;

	case 3:
	img22 = 'images/dice3.png';
	break;

	case 4:
	img22 ='images/dice4.png';
	break;

	case 5:
	img22 ='images/dice5.png';
	break;

	case 6:
	img22 = 'images/dice6.png';
	break;
}

if(num1>num2){
	h1.innerText='Player 1 Wins';
	img1.src=img11;
	img2.src=img22;
	
}
else if(num1<num2){
	h1.innerText='Player 2 Wins';
	img1.src=img11;
	img2.src=img22;
}
else{
	h1.innerText='Tie';
	img1.src=img11;
	img2.src=img22;
}

}

button.addEventListener('click',play);
