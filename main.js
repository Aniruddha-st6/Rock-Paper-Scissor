function play (userChoice){

  let choices = [ 'Rock' , 'Paper' , ' Scissor'  ]

  let computerChoice = choices [Math.floor(Math.random() * 3)
  ]

console.log('userChice' + userChoice);
console.log('computerChoice' + computerChoice);

if(userChoice == computerChoice){
console.log('Its a tie!')

}else if(
  (userChoice == 'Rock' && computerChoice == 'Scissor')||
  (userChoice == 'Scissor' && computerChoice == 'Paper')||
  (userChoice == 'Paper' && computerChoice == 'Rock') 
){
  console.log( 'You won !' );
}else{
console.log('Computer won !');

}

}