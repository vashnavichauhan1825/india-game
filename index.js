var readlinesync=require('readline-sync');
const CFonts=require('cfonts');
var color = require('colors-cli/safe');
var chalk=require('chalk');
var score=0;
var put=2;
console.log(color.xb1.x154.bold.underline('WELCOME TO THE QUIZ GAME🎉🎉🎉\n') )

var userName=readlinesync.question("hey hello 🙋,\n"+(chalk.green("What's your name?\n")));

CFonts.say('NAMASTE 🙏\n'+userName+' JI !', {
	font: 'chrome',              // define the font face
	align: 'center',              // define text alignment
	colors: ["#0ff",'green',"#ff0"],         // define all colors
	background: 'transparent',  // define the background color, you can also use `backgroundColor` here as key
	letterSpacing: 1,           // define letter spacing
	lineHeight: 1,              // define the line height
	space: true,                // define if the output text should have empty lines on top and on the bottom
	maxLength: '0',             // define how many character can be on one line
	gradient:false,            // define your two gradient colors
	independentGradient: false, // define if you want to recalculate the gradient for each new line
	transitionGradient: false,  // define if this is a transition between colors directly
	env: 'node'                 // define the environment CFonts is being executed in
});



   console.log('🔹 : '+(color.x117.bold(' For every right answer you will be awarded with '))+ (chalk.green('1 point\n') ))

  console.log('🔹 : '+(color.x117.bold('this game is all about our diverse country ')+(chalk.yellow.underline.bold('IN')+(chalk.white.underline.bold("D"))+(chalk.green.underline.bold('IA\n')))))

  console.log('🔹 : '+(color.x117.bold("you should write only options\nex:\nWhich state has the highest literacy rate\nA.goa\nB.assam\nC.kerala\nD.U.P\n")+(chalk.white.bold.underline("c\n"))))

  console.log('🔹 : '+(color.x117.bold("there are 4 levels in this quiz ")))


  var press=readlinesync.question(color.x9('press enter to continue\n'))





function play(question,hint,answer){
  var userAns=readlinesync.question(color.x228(question));
  
  if(userAns.toUpperCase()==answer.toUpperCase()){
    console.log(color.x82.bold("oh yes!! it's a right answer 🙌\n\n"))
    score=score+1;
  }else{
    console.log(color.x95.underline("oops! incorrect 👎 "))
  }
  console.log(color.xb201.x190.bold.underline("ANS : "+hint));
  console.log(chalk.cyan.underline("\nyour current score 🏁  "+ score))
  if(put==score){
  level();}
  console.log(color.x190("⚜⚜⚜⚜⚜⚜⚜⚜⚜⚜⚜⚜⚜⚜⚜⚜⚜⚜⚜⚜⚜⚜⚜⚜⚜⚜⚜⚜⚜⚜⚜⚜⚜⚜⚜⚜⚜⚜⚜⚜⚜⚜⚜⚜⚜⚜⚜⚜⚜"));
  
  var press=readlinesync.question(color.x9('press enter to continue\n'))


  }
function level(){
  
  if(score==2){
       put=put+4;
 console.log(color.x45.underline('your level upgraded to : '))
CFonts.say('LEVEL 1 ', {
	font: 'slick',              // define the font face
	align: 'left',              // define text alignment
	colors: ['yellow',"#333"],         // define all colors
	background: 'transparent',  // define the background color, you can also use `backgroundColor` here as key
	letterSpacing: 1,           // define letter spacing
	lineHeight: 1,              // define the line height
	space: true,                // define if the output text should have empty lines on top and on the bottom
	maxLength: '0',             // define how many character can be on one line
	gradient: false,            // define your two gradient colors
	independentGradient: false, // define if you want to recalculate the gradient for each new line
	transitionGradient: false,  // define if this is a transition between colors directly
	env: 'node'                 // define the environment CFonts is being executed in
});
       
}if(score==6){
  put=put+2;
   console.log(color.x45.underline('your level upgraded to : '))
CFonts.say('LEVEL 2 ', {
	font: 'slick',              // define the font face
	align: 'left',              // define text alignment
	colors: ['yellow',"#333"],         // define all colors
	background: 'transparent',  // define the background color, you can also use `backgroundColor` here as key
	letterSpacing: 1,           // define letter spacing
	lineHeight: 1,              // define the line height
	space: true,                // define if the output text should have empty lines on top and on the bottom
	maxLength: '0',             // define how many character can be on one line
	gradient: false,            // define your two gradient colors
	independentGradient: false, // define if you want to recalculate the gradient for each new line
	transitionGradient: false,  // define if this is a transition between colors directly
	env: 'node'                 // define the environment CFonts is being executed in
});

}else if(score==8){
  put=put+2;
   console.log(color.x45.underline('your level upgraded to : '))
CFonts.say('LEVEL 3 ', {
	font: 'slick',              // define the font face
	align: 'left',              // define text alignment
	colors: ['yellow',"#333"],         // define all colors
	background: 'transparent',  // define the background color, you can also use `backgroundColor` here as key
	letterSpacing: 1,           // define letter spacing
	lineHeight: 1,              // define the line height
	space: true,                // define if the output text should have empty lines on top and on the bottom
	maxLength: '0',             // define how many character can be on one line
	gradient: false,            // define your two gradient colors
	independentGradient: false, // define if you want to recalculate the gradient for each new line
	transitionGradient: false,  // define if this is a transition between colors directly
	env: 'node'                 // define the environment CFonts is being executed in
});

}else if(score==10){
   console.log(color.x45.underline('your level upgraded to : '))
CFonts.say('LEVEL 4 ', {
	font: 'slick',              // define the font face
	align: 'left',              // define text alignment
	colors: ['yellow',"#333"],         // define all colors
	background: 'transparent',  // define the background color, you can also use `backgroundColor` here as key
	letterSpacing: 1,           // define letter spacing
	lineHeight: 1,              // define the line height
	space: true,                // define if the output text should have empty lines on top and on the bottom
	maxLength: '0',             // define how many character can be on one line
	gradient: false,            // define your two gradient colors
	independentGradient: false, // define if you want to recalculate the gradient for each new line
	transitionGradient: false,  // define if this is a transition between colors directly
	env: 'node'                 // define the environment CFonts is being executed in
});
}
};


play("India's first metro railway service in Kolkata was started in the year\nA.1984\nB.1990\nC.1992\nD.1995\n","A","A");
play(" India's first all women Post Office is located at\nA.chennai\nB.delhi\nC.patna\nD.mumbai\n","B","b");
play("Which one is the biggest slum area in Asia\nA.Dharavi, Mumbai\nB.Orangi, Karachi\nC.East Cipinang, Jakarta\nD. None of the above\n","B","b");
play(" The population census in India is conducted after every\nA.5 year\nB.10 year\nC.12 year\nD.6 year\n","B","b");
play("Who is known as the 'Metro man' in India\nA.Ratan tata\nB.C Rangarajan\nC.E Sreedharan\nD.Montek Singh Ahluwalia\n","C","c");
play("Which city is known as the diamond city of India\nA.surat\nB.hyderabad\nC.kerala\nD.nagpur\n","A","a");
play("India's largest city by population\nA.U.P\nB.rajasthan\nC.M.P\nD.mumbai\n",
"D","d");
play("What is the name of India's National Aquatic Animal?\nA.green frog\nB.katla fish\nC.river dolphin\nD.crocodile\n","C","c");
play("Hindi Divas celebrate in India on\nA.14th sep\nB.12 nov\nC.11 march\nD.12 april\n","A","A");
play(" Which state is known as India's Spice Garden ?\nA.kerala\nB.Kolkata\nC.assam\nD.gujrat\n","A","A");




console.log(chalk.bold.underline.cyan.inverse("your final score 🏆 is  :"+ score));

