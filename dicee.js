var h1=document.getElementById('h1');
var img1=document.getElementById('img1');
var img2=document.getElementById('img2');
var button=document.getElementById('button');


function play(){
	var num1=Math.random();
	var num2=Math.random();
	num1=Math.floor(6*num1+1);
	num2=Math.floor(6*num2+1);

	var img11='images/dice'+num1+'.png';
	var img22='images/dice'+num2+'.png';

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
