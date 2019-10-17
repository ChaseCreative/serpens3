var nomPE1 = "a";
var genPE1 = "ae";
var datPE1 = "ae";
var accPE1 = "am";
var ablPE1 = "ā";
var vocPE1 = "a";

var nomPE2 = "ae";
var genPE2 = "ārum";
var datPE2 = "īs";
var accPE2 = "ās";
var ablPE2 = "īs";
var vocPE2 = "ae";


var nomPE2nd = "us";
var genPE2nd = "ī";
var datPE2nd = "ō";
var accPE2nd = "um";
var ablPE2nd = "ō";
var vocPE2nd = "e";

var nomPE2ndPlural = "ī";
var genPE2ndPlural = "ōrum";
var datPE2ndPlural = "īs";
var accPE2ndPlural = "ōs";
var ablPE2ndPlural = "īs";
var vocPE2ndPlural = "ī";

var nomPE3rd = "";
var genPE3rd = "is";
var datPE3rd = "ī";
var accPE3rd = "em";
var ablPE3rd = "e";
var vocPE3rd = "";

var nomPE3rdPlural = "ēs";
var genPE3rdPlural = "um";
var datPE3rdPlural = "ibus";
var accPE3rdPlural = "ēs";
var ablPE3rdPlural = "ibus";
var vocPE3rdPlural = "ēs";


		var pres1stSing = "o";
		var pres2ndSing = "s";
		var pres3rdSing = "t";
		var pres1stPl = "mus";
		var pres2ndPl = "tis";
		var pres3rdPl = "nt";

var randomNounIndex = 0;
var randomObjectIndex = 0;
var randomVerbIndex = 0;
var ranIndex = 0;




var randomSerpensAIndex = 0;
var correctAnswer = 0;
var wrongAnswer = 0;




var randomSerpensBIndex = 0;
var correctAnswer1 = 0;
var wrongAnswer1 = 0;



var randomSerpensCIndex = 0;
var correctAnswer2 = 0;
var wrongAnswer2 = 0;

var num_questions = 5;
var count = 0;




function incrementCount(){
	count++;
}


function setRandomSerpIndices(){

	randomSerpensAIndex = Math.floor(Math.random() * 2);
	correctAnswer = randomSerpensAIndex;
	wrongAnswer = randomSerpensAIndex;

	randomSerpensBIndex = Math.floor(Math.random() * 2);
	correctAnswer1 = randomSerpensBIndex;
	wrongAnswer1 = randomSerpensBIndex;

	randomSerpensCIndex = Math.floor(Math.random() * 2);
	correctAnswer2 = randomSerpensCIndex;
	wrongAnswer2 = randomSerpensCIndex;
}



//get function for getElementByID - x is a parameter for arguments
function get(x){
  return document.getElementById(x);
}


	var startButton = get("startButton");
    var serBtnA = get("serBtnA");
    var serBtnB = get("serBtnB");
    var serBtnC = get("serBtnC");

    var serBtnA1 = get("serBtnA1");
    var serBtnB2 = get("serBtnB2");
    var serBtnC3 = get("serBtnC3");



    var responseButton = get("responseButton");
    var responseNext = get("responseNext");





//This sets up the name of the app and four seoparate games
function appName() {get("boxTwo").innerHTML = "Serpens3";}

function gameTitle() {get("startButton").innerHTML = "Start the Game!";}





//This loads the names of the games

    appName();
    //gameTitle();


function resetColors(){

		serBtnA.style.backgroundColor = "white";
		serBtnA.style.border = "white";
		serBtnA.style.color = "black";
		serBtnA.disabled =false;
		document.getElementById("serpensA").style.backgroundColor = "white";

		serBtnA1.style.color = "black";
		serBtnA1.style.backgroundColor = "white";
		serBtnA1.style.border = "white";
		serBtnA1.disabled = false;
		document.getElementById("serpensA1").style.backgroundColor = "white";



		serBtnB.style.backgroundColor = "white";
		serBtnB.style.border = "white";
		serBtnB.style.color = "black";
		serBtnB.disabled =false;
		document.getElementById("serpensB").style.backgroundColor = "white";

		serBtnB2.style.color = "black";
		serBtnB2.style.backgroundColor = "white";
		serBtnB2.style.border = "white";
		serBtnB2.disabled = false;
		document.getElementById("serpensB2").style.backgroundColor = "white";


		serBtnC.style.backgroundColor = "white";
		serBtnC.style.border = "white";
		serBtnC.style.color = "black";
		serBtnC.disabled =false;
		document.getElementById("serpensC").style.backgroundColor = "white";

		serBtnC3.style.color = "black";
		serBtnC3.style.backgroundColor = "white";
		serBtnC3.style.border = "white";
		serBtnC3.disabled = false;
		document.getElementById("serpensC3").style.backgroundColor = "white";

		responseButton.innerHTML = "";
		responseButton.style.color = "";

}


var correctAns = 0;
var correctAnswerTotal = 1;








//Score variables and functions



    var points = 0;

    var pointsPerCorrectAnswer = 10;



    function addPoints(){
    	points += pointsPerCorrectAnswer;
		document.getElementById("boxThree").innerHTML = points;

    }


    function subtractPoints(){
    	points -= pointsPerCorrectAnswer/2;
		document.getElementById("boxThree").innerHTML = points;

    }


 //Timer variables
	var timeleft = 20;
	var countdown = setInterval(x,1000);



 	function countDownTimer(){

		document.getElementById("boxOne").innerHTML = timeleft;
  		timeleft -= 1;
  			if(timeleft <= 0)  {
    			clearInterval(countdown);
    			document.getElementById("boxOne").innerHTML = "Timer";
    			disableButtons();
    			startButton.disabled = false;
    			resetColors();
    			startButton.innerHTML = "Next Question!";
    			responseButton.innerHTML = "Tempus Fugit!"
    			serBtnA.innerHTML = "";
    			serBtnB.innerHTML = "";
    			serBtnC.innerHTML = "";
    			serBtnA1.innerHTML = "";
    			serBtnB2.innerHTML = "";
    			serBtnC3.innerHTML = "";
    			correctAns = 0;


  }

}



function stopTimer() {


	clearInterval(countdown);


}


function resetTimer(){

	if (correctAns >= 3){
	resetColors();
	stopTimer();
	timeleft = 20;
	document.getElementById("boxOne").innerHTML = "Timer";
    			disableButtons();
    			startButton.disabled = false;

    			startButton.innerHTML = "Next Question!";
    			responseButton.innerHTML = "Optime!"
    			responseButton.style.color = "yellow";
    			serBtnA.innerHTML = "";
    			serBtnB.innerHTML = "";
    			serBtnC.innerHTML = "";
    			serBtnA1.innerHTML = "";
    			serBtnB2.innerHTML = "";
    			serBtnC3.innerHTML = "";
	correctAns = 0;
}
}



function enableButtons(){

	serBtnA.disabled = false;
	serBtnB.disabled = false;
	serBtnC.disabled = false;

	serBtnA1.disabled = false;
	serBtnB2.disabled = false;
	serBtnC3.disabled = false;


}

function disableButtons(){
	serBtnA.disabled = true;
	serBtnB.disabled = true;
	serBtnC.disabled = true;

	serBtnA1.disabled = true;
	serBtnB2.disabled = true;
	serBtnC3.disabled = true;
}




function gameOverAudio(){
       var gameOverAudio = document.getElementById("gameOverAudio");
       gameOverAudio.play();
                 }

  function correctAnswerAudio(){
       var correctAnswerAudio = document.getElementById("correctAnswerAudio");
       correctAnswerAudio.play();
                 }

function wrongAnswerAudio(){
       var wrongAnswerAudio = document.getElementById("wrongAnswerAudio");
       wrongAnswerAudio.play();
                 }




 function serpens() {

 countDownTimer();
 timeleft = 20;
countdown = setInterval(countDownTimer,1000);


 resetColors();
 setRandomSerpIndices();
 enableButtons();
 startButton.disabled = true;



 class Noun{

 	constructor(nounForms){
 	this.nounForm = nounForms;
 	}
 }

var thirdDecNouns = [["canis", "can", "a dog"],["leo", "leon", "a lion"],["Grumio", "Grumion", "Grumio"],["mercator", "mercator", "a merchant"],["pater", "patr", "a father"],["mater", "matr", "a mother"]];
var secondDecNouns = [["servus", "serv", "a slave"], ["hortus", "hort", "a garden"],["Caecilius", "Caecili", "Caecilius"], ["puer", "puer", "a boy"],["vir", "vir", "a man"]];
var firstDecNouns = [["puella", "puell", "a girl"], ["agricola", "agricol", "a farmer"], ["filia", "fili", "a daughter"], ["ancilla", "ancill", "a maid servant"], ["nauta", "naut", "a sailor"],["femina", "femin", "a woman"]];

var thirdDecNounsPlural = [["canis", "can", "dogs"],["leo", "leon", "lions"],["mercator", "mercator", "merchants"],["pater", "patr", "fathers"],["mater", "matr", "mothers"]];
var secondDecNounsPlural = [["servus", "serv", "slaves"], ["hortus", "hort", "gardens"], ["Caecilius", "Caecili", "the Caecilii"],["puer", "puer", "boys"],["vir", "vir", "men"]];
var firstDecNounsPlural = [["puella", "puell", "girls"], ["agricola", "agricol", "farmers"], ["filia", "fili", "daughters"], ["ancilla", "ancill", "maid servants"], ["nauta", "naut", "sailors"],["femina", "femin", "women"]];

var firstDecNounIndex = Math.floor(Math.random() * firstDecNouns.length);
var secondDecNounIndex = Math.floor(Math.random() * secondDecNouns.length);
var thirdDecNounIndex = Math.floor(Math.random() * thirdDecNouns.length);

var firstDecNounIndexPlural = Math.floor(Math.random() * firstDecNounsPlural.length);
var secondDecNounIndexPlural = Math.floor(Math.random() * secondDecNounsPlural.length);
var thirdDecNounIndexPlural = Math.floor(Math.random() * thirdDecNounsPlural.length);


var firstDecNounShuffle = firstDecNouns[firstDecNounIndex][2];
var secondDecNounShuffle = secondDecNouns[secondDecNounIndex][2];
var thirdDecNounShuffle = thirdDecNouns[thirdDecNounIndex][2];

var firstDecNounShufflePlural = firstDecNounsPlural[firstDecNounIndexPlural][2];
var secondDecNounShufflePlural = secondDecNounsPlural[secondDecNounIndexPlural][2];
var thirdDecNounShufflePlural = thirdDecNounsPlural[thirdDecNounIndexPlural][2];


var nounShuffleMix = [firstDecNounShuffle,secondDecNounShuffle,thirdDecNounShuffle];
var nounShuffleMixPlural = [firstDecNounShufflePlural,secondDecNounShufflePlural,thirdDecNounShufflePlural];

var nounShuffleMixIndex = Math.floor(Math.random() * nounShuffleMix.length);
var nounShuffleMixIndexPlural = Math.floor(Math.random() * nounShuffleMixPlural.length);










//var latinPredNomIndex = Math.floor(Math.random() * predNom.length);
//var nounMixup = [firstDecNounShuffle,secondDecNounShuffle;
//var nounMixupIndex = Math.floor(Math.random() * nounMixup.length);
//var nounMixupTwo = nounMixup[nounMixupIndex];




//This sets the correct subject in serpensA
var subjectArraySing = [["Is", "est", "He is " + nounShuffleMix[nounShuffleMixIndex], "Tu", "es"], ["Ego", "sum", "I am " + nounShuffleMix[nounShuffleMixIndex], "Is", "est"], ["Ea", "est", "She is " + nounShuffleMix[nounShuffleMixIndex], "Ego", "sum"], ["Tu", "es", "You are " + nounShuffleMix[nounShuffleMixIndex], "Ea", "est"], ["Id", "est", "It is " + nounShuffleMix[nounShuffleMixIndex], "Tu", "es"]];
var randomNounIndex = Math.floor(Math.random() * subjectArraySing.length);
//newSubject = new Noun(subjectArray[randomNounIndex][0]);
var subjectSing = subjectArraySing[randomNounIndex][0];
//This sets the false subject in serpensA1
//falseSubject = new Noun(subjectArray[randomNounIndex][1]);
var fakeSubject = subjectArraySing[randomNounIndex][3]
//get("serBtnA1").innerHTML = fakeSubject;

var subjectArrayPlural = [["Eī", "sunt", "The boys are " + nounShuffleMixPlural[nounShuffleMixIndexPlural], "Vōs", "estis"], ["Nōs", "sumus", "We are " + nounShuffleMixPlural[nounShuffleMixIndexPlural], "Eī", "sunt"], ["Eae", "sunt", "The girls are " + nounShuffleMixPlural[nounShuffleMixIndexPlural], "Nōs", "sumus"], ["Vōs", "estis", "You all are " + nounShuffleMixPlural[nounShuffleMixIndexPlural], "Eae", "sunt"], ["Ea", "sunt", "The things are " + nounShuffleMixPlural[nounShuffleMixIndexPlural], "Vōs", "estis"]];
var randomNounIndexPlural = Math.floor(Math.random() * subjectArrayPlural.length);
//newSubjecPt = new Noun(subjectArray[randomNounIndex][0]);
var subjectPlural = subjectArrayPlural[randomNounIndex][0];
//This sets the false subject in serpensA1
//falseSubject = new Noun(subjectArray[randomNounIndex][1]);
var fakeSubjectPlural = subjectArrayPlural[randomNounIndex][3];
//get("serBtnA1").innerHTML = fakeSubject;

var subjectMix = [subjectSing,subjectPlural];
var subjectMixIndex = Math.floor(Math.random() * subjectMix.length);
var subject = subjectMix[subjectMixIndex];

var fakeSubjectMix = [fakeSubject,fakeSubjectPlural];
var fakeSubject = fakeSubjectMix[subjectMixIndex];

//This randomizes the serpensA and serpensA1
if (randomSerpensAIndex == 0) {
	get("serBtnA").innerHTML = subject;
	get("serBtnA1").innerHTML = fakeSubject;

} else {
	get("serBtnA1").innerHTML = subject;
	get("serBtnA").innerHTML = fakeSubject;

}





//This sets the correct subject in serpensB
//var subjectArray = [["Is", "est", "He is a "], ["ego", "sum", "I am a "], ["Ea", "est", "She is a "], ["tu", "es", "You are a "], ["Id", "est", "It is a "]];

//var objectArray = [["puella", "puell", "girl"], ["agricola", "agricol", "farmer"], ["filia", "fili", "daughter"], ["ancilla", "ancill", "maid servant"], ["nauta", "naut", "sailor"]];
//var randomObjectIndex = Math.floor(Math.random() * objectArray.length);
//newObject = new Noun(objectArray[randomObjectIndex][1]);
//object = newObject.nounForm +accPE1;
var verbSing = subjectArraySing[randomNounIndex][1];
var verbPlural = subjectArrayPlural[randomNounIndex][1];





//This sets the fake object in serpensB2
//falseObject = new Noun(objectArray[randomObjectIndex][0]);
//fakeObject = falseObject.nounForm;
var fakeVerbSing = subjectArraySing[randomNounIndex][4];
var fakeVerbPlural = subjectArrayPlural[randomNounIndex][4];


var verbMix = [verbSing,verbPlural];
//var subjectMixIndex = Math.floor(Math.random() * subjectMix.length);
var verb = verbMix[subjectMixIndex];

var fakeVerbMix = [fakeVerbSing,fakeVerbPlural];
var fakeVerb = fakeVerbMix[subjectMixIndex];

//get("serBtnB").innerHTML = verb;

//get("serBtnB2").innerHTML = fakeVerb;






//This randomizes serpensB and serpensB2
if (randomSerpensBIndex == 0) {
	get("serBtnB").innerHTML = verb;
	get("serBtnB2").innerHTML = fakeVerb;
} else {
	get("serBtnB2").innerHTML = verb;
	get("serBtnB").innerHTML = fakeVerb;
}



//var objectArray = [secondDecNouns[secondDecNounIndex][0]];
//var objectArray = [["puella", "puell", "girl", "girls"], ["femina", "femin", "woman", "women"], ["agricola", "agricol", "farmer", "farmers"], ["filia", "fili", "daughter", "daughters"], ["ancilla", "ancill", "maid servant", "maid servants"], ["nauta", "naut", "sailor", "sailors"]];
//var randomObjectIndex = Math.floor(Math.random() * objectArray.length);


//falseObject = new Noun(objectArray[randomObjectIndex][1]);

var latinPredNom1 = firstDecNouns[firstDecNounIndex][0];
var latinPredNom2 = secondDecNouns[secondDecNounIndex][0];
var latinPredNom3 = thirdDecNouns[thirdDecNounIndex][0];

var latinPredNom1Stem = new Noun(firstDecNounsPlural[firstDecNounIndexPlural][1]);
var latinPredNom1Plural = latinPredNom1Stem.nounForm + nomPE2;
var latinPredNom2Stem = new Noun(secondDecNounsPlural[secondDecNounIndexPlural][1]);
var latinPredNom2Plural = latinPredNom2Stem.nounForm + nomPE2ndPlural;
var latinPredNom3Stem = new Noun(thirdDecNounsPlural[thirdDecNounIndexPlural][1]);
var latinPredNom3Plural = latinPredNom3Stem.nounForm + nomPE3rdPlural;


var predNomMix = [latinPredNom1, latinPredNom2,latinPredNom3];
var predNomSing = predNomMix[nounShuffleMixIndex];

var predNomMixPlural = [latinPredNom1Plural, latinPredNom2Plural,latinPredNom3Plural];
var predNomPlural = predNomMixPlural[nounShuffleMixIndexPlural];

var falseObject1 = new Noun(firstDecNouns[firstDecNounIndex][1]);
var falseObject1Acc = falseObject1.nounForm + accPE1;
var falseObject2 = new Noun(secondDecNouns[secondDecNounIndex][1]);
var falseObject2Acc = falseObject2.nounForm + accPE2nd;
var falseObject3 = new Noun(thirdDecNouns[thirdDecNounIndex][1]);
var falseObject3Acc = falseObject3.nounForm + accPE3rd;
var objectMix = [falseObject1Acc,falseObject2Acc,falseObject3Acc];
var objectSing = objectMix[nounShuffleMixIndex];

//var falseObject1Plural = new Noun(firstDecNounsPlural[firstDecNounIndexPlural][1]);
var falseObject1AccPlural = latinPredNom1Stem.nounForm + accPE2;
//var falseObject2Plural = new Noun(secondDecNounsPlural[secondDecNounIndexPlural][1]);
var falseObject2AccPlural = latinPredNom2Stem.nounForm + accPE2ndPlural;
//var falseObject3Plural = new Noun(thirdDecNounsPlural[thirdDecNounIndexPlural][1]);
var falseObject3AccPlural = latinPredNom3Stem.nounForm + accPE3rd;
var objectMixPlural = [falseObject1AccPlural,falseObject2AccPlural,falseObject3AccPlural];
var objectPlural = objectMixPlural[nounShuffleMixIndexPlural];



var predNomMix = [predNomSing,predNomPlural];
//var predMixIndex = Math.floor(Math.random() * 2);
var predNom = predNomMix[subjectMixIndex];

var fakeObjectMix = [objectSing,objectPlural];
var object = fakeObjectMix[subjectMixIndex];



//var firstDecNounShuffle = firstDecNouns[firstDecNounIndex][2];



	//var predNom2 = secondDecNouns[secondDecNounIndex][0]
	//var predNom = objectArray[randomObjectIndex][0];
	//var predNom = falseObject.nounForm + nomPE2;
	//get ("serBtnC").innerHTML = predNom;
	//object = falseObject2.nounForm + accPE2nd;

	//object = falseObject.nounForm + accPE1;
	//object = falseObject.nounForm + accPE2;
	//get ("serBtnC3").innerHTML = object;






	if (randomSerpensCIndex == 0) {
		get("serBtnC3").innerHTML = object;
	  get("serBtnC").innerHTML = predNom;
	} else {
	 get("serBtnC").innerHTML = object;
	 get("serBtnC3").innerHTML = predNom;
	}







	var subjectArrayMix = [subjectArraySing,subjectArrayPlural];
	//var predMixIndex = Math.floor(Math.random() * 2);
	var subjectArray = subjectArrayMix[subjectMixIndex];










//This prints the correct subject in the sentence

var subjectTranslation = subjectArray[randomNounIndex][2];


//This sets the correc verb translaiton in the sentence


//This prints the direct object in the sentence

//var objectTranslation = objectArray[randomObjectIndex][3];
//var objectTranslation = objectArray[randomObjectIndex][3];








function sentence(){
	get("startButton").innerHTML = subjectTranslation + ".";
}

sentence();

incrementCount();



//responseButton.innerHTML = count;

if (count > num_questions) {
	resetColors();
	serBtnA.innerHTML = "";
	serBtnB.innerHTML = "";
	serBtnC.innerHTML = "";

	serBtnA1.innerHTML = "";
	serBtnB2.innerHTML = "";
	serBtnC3.innerHTML = "";


	startButton.innerHTML = "Click to play again!"
	startButton.disabled = false;
	count = 0;
	document.getElementById("boxThree").innerHTML = "Score";
	responseButton.innerHTML = "Try to beat your score of " + points + " points!";
		points = 0;

	stopTimer();
	document.getElementById("boxOne").innerHTML = "Timer";

}




}



function serpens2BPlural() {

countDownTimer();
timeleft = 20;
countdown = setInterval(countDownTimer,1000);


resetColors();
setRandomSerpIndices();
enableButtons();
startButton.disabled = true;



class Noun{

 constructor(nounForms){
 this.nounForm = nounForms;
 }
}




//This sets the correct subject in serpensA
var subjectArray = [["Nos", "sumus", "We are ", "Vos", "estis"], ["Vos", "estis", "You are ", "Ei", "sunt"], ["Eae", "sunt", "The girls are ", "Nos", "sumus"], ["Ei", "sunt", "The boys are ", "Is", "est"], ["Ea", "sunt", "The things are ", "Ei", "est"]];

var randomNounIndex = Math.floor(Math.random() * subjectArray.length);
newSubject = new Noun(subjectArray[randomNounIndex][0]);
var subject = subjectArray[randomNounIndex][0];


//This sets the false subject in serpensA1
falseSubject = new Noun(subjectArray[randomNounIndex][1]);
var fakeSubject = subjectArray[randomNounIndex][3]
//get("serBtnA1").innerHTML = fakeSubject;

//This randomizes the serpensA and serpensA1



if (randomSerpensAIndex == 0) {
 get("serBtnA").innerHTML = subject;
 get("serBtnA1").innerHTML = fakeSubject;

} else {
 get("serBtnA1").innerHTML = subject;
 get("serBtnA").innerHTML = fakeSubject;

}





//This sets the correct subject in serpensB
//var subjectArray = [["Is", "est", "He is a "], ["ego", "sum", "I am a "], ["Ea", "est", "She is a "], ["tu", "es", "You are a "], ["Id", "est", "It is a "]];

//var objectArray = [["puella", "puell", "girl"], ["agricola", "agricol", "farmer"], ["filia", "fili", "daughter"], ["ancilla", "ancill", "maid servant"], ["nauta", "naut", "sailor"]];
//var randomObjectIndex = Math.floor(Math.random() * objectArray.length);
//newObject = new Noun(objectArray[randomObjectIndex][1]);
//object = newObject.nounForm +accPE1;
var verb2B = subjectArray[randomNounIndex][1]
get("serBtnB").innerHTML = verb2B;


//This sets the fake object in serpensB2
//falseObject = new Noun(objectArray[randomObjectIndex][0]);
//fakeObject = falseObject.nounForm;
var fakeVerb2B = subjectArray[randomNounIndex][4]
get("serBtnB2").innerHTML = fakeVerb2B;


//This randomizes serpensB and serpensB2


if (randomSerpensBIndex == 0) {
 get("serBtnB").innerHTML = verb2B;
 get("serBtnB2").innerHTML = fakeVerb2B;
} else {
 get("serBtnB2").innerHTML = verb2B;
 get("serBtnB").innerHTML = fakeVerb2B;
}


var objectArray = [["puella", "puell", "girl", "girls"], ["femina", "femin", "woman", "women"], ["agricola", "agricol", "farmer", "farmers"], ["filia", "fili", "daughter", "daughters"], ["ancilla", "ancill", "maid servant", "maid servants"], ["nauta", "naut", "sailor", "sailors"]];
var randomObjectIndex = Math.floor(Math.random() * objectArray.length);

falseObject = new Noun(objectArray[randomObjectIndex][1]);
//var predNom = objectArray[randomObjectIndex][0];
var predNom = falseObject.nounForm + nomPE2;
get ("serBtnC").innerHTML = predNom;
//object = falseObject.nounForm + accPE1;
object = falseObject.nounForm + accPE2;
get ("serBtnC3").innerHTML = object;

if (randomSerpensCIndex == 0) {
get("serBtnC3").innerHTML = object;
get("serBtnC").innerHTML = predNom;
} else {
get("serBtnC").innerHTML = object;
get("serBtnC3").innerHTML = predNom;
}







//This prints the correct subject in the sentence

var subjectTranslation = subjectArray[randomNounIndex][2];


//This sets the correc verb translaiton in the sentence


//This prints the direct object in the sentence

var objectTranslation = objectArray[randomObjectIndex][3];
//var objectTranslation = objectArray[randomObjectIndex][3];








function sentence(){
 get("startButton").innerHTML = subjectTranslation + " " + objectTranslation + ".";
}

sentence();

incrementCount();



//responseButton.innerHTML = count;

if (count > num_questions) {
 resetColors();
 serBtnA.innerHTML = "";
 serBtnB.innerHTML = "";
 serBtnC.innerHTML = "";

 serBtnA1.innerHTML = "";
 serBtnB2.innerHTML = "";
 serBtnC3.innerHTML = "";


 startButton.innerHTML = "Click to play again!"
 startButton.disabled = false;
 count = 0;
 document.getElementById("boxThree").innerHTML = "Score";
 responseButton.innerHTML = "Try to beat your score of " + points + " points!";
	 points = 0;

 stopTimer();
 document.getElementById("boxOne").innerHTML = "Timer";

}



}



function serpensShuffle(){


	var mixUp = [serpens, serpens2BPlural];
	var randomSerpIndex = Math.floor(Math.random() * mixUp.length);

	mixUp[randomSerpIndex]();

}







function gameOverAudio(){
       var gameOverAudio = document.getElementById("gameOverAudio");
       gameOverAudio.play();
                 }

  function correctAnswerAudio(){
       var correctAnswerAudio = document.getElementById("correctAnswerAudio");
       correctAnswerAudio.play();
                 }

function wrongAnswerAudio(){
       var wrongAnswerAudio = document.getElementById("wrongAnswerAudio");
       wrongAnswerAudio.play();
                 }







   function resetAnswerColors(){

	A1.style.backgroundColor = "white";
	A2.style.backgroundColor = "white";
	A3.style.backgroundColor = "white";
	A4.style.backgroundColor = "white";

	answerOne.style.backgroundColor = "white";
	answerTwo.style.backgroundColor = "white";
	answerThree.style.backgroundColor = "white";
	answerFour.style.backgroundColor = "white";

	answerOne.style.color = "black";
	answerTwo.style.color = "black";
	answerThree.style.color = "black";
	answerFour.style.color = "black";

}











function clickedButton1(){


	if (correctAnswer == 0){
		correctAnswerAudio();
		//clickedCorrectAnswerOneAudio ();
		points += pointsPerCorrectAnswer;
		correctAns += correctAnswerTotal;
		document.getElementById("boxThree").innerHTML = points;

		serBtnA.style.backgroundColor = "yellow";
		serBtnA.style.border = "yellow";
		document.getElementById("serpensA").style.backgroundColor = "yellow";


		responseButton.innerHTML = "Bene!";
		responseButton.style.color = "yellow";


		serBtnA1.style.color = "red";
		serBtnA1.style.backgroundColor = "black";
		serBtnA1.style.border = "black";
		serBtnA1.disabled = true;
		document.getElementById("serpensA1").style.backgroundColor = "black";

		resetTimer();


	}

if (wrongAnswer == 1){

		wrongAnswerAudio();
		points -= pointsPerCorrectAnswer/2;
		document.getElementById("boxThree").innerHTML = points;



		serBtnA.style.color = "red";
		serBtnA.style.backgroundColor = "black";
		serBtnA.style.border = "black";
		serBtnA.disabled = true;
		document.getElementById("serpensA").style.backgroundColor = "black";
		responseButton.style.color = "black";

		responseButton.innerHTML = "Eheu!";


	}





}


function clickedButton2(){

	if (wrongAnswer == 0){
		wrongAnswerAudio();
		points -= pointsPerCorrectAnswer/2;
		document.getElementById("boxThree").innerHTML = points;



		serBtnA1.style.color = "red";
		serBtnA1.style.backgroundColor = "black";
		serBtnA1.style.border = "black";
		serBtnA1.disabled = true;
		document.getElementById("serpensA1").style.backgroundColor = "black";
		responseButton.style.color = "black";

		responseButton.innerHTML = "Eheu!";

	}

if (correctAnswer == 1){

		correctAnswerAudio();
		//clickedCorrectAnswerTwoAudio();
		points += pointsPerCorrectAnswer;
		correctAns += correctAnswerTotal;
		responseButton.innerHTML = correctAns;
		document.getElementById("boxThree").innerHTML = points;


		serBtnA1.style.backgroundColor = "yellow";
		serBtnA1.style.border = "yellow";
		document.getElementById("serpensA1").style.backgroundColor = "yellow";

		responseButton.innerHTML = "Bene!";
		responseButton.style.color = "yellow";


		serBtnA.style.color = "red";
		serBtnA.style.backgroundColor = "black";
		serBtnA.style.border = "black";
		serBtnA.disabled = true;
		document.getElementById("serpensA").style.backgroundColor = "black";

		resetTimer();

	}


}






function clickedButton3(){

	if (correctAnswer1 == 0){

		correctAnswerAudio();
		//clickedCorrectAnswerThreeAudio();
		points += pointsPerCorrectAnswer;
		correctAns += correctAnswerTotal;
		document.getElementById("boxThree").innerHTML = points;

		serBtnB.style.backgroundColor = "yellow";
		serBtnB.style.border = "yellow";
		document.getElementById("serpensB").style.backgroundColor = "yellow";

		//responseButton.innerHTML = correctAns;
		responseButton.innerHTML = "Bene!";
		responseButton.style.color = "yellow";


		serBtnB2.style.color = "red";
		serBtnB2.style.backgroundColor = "black";
		serBtnB2.style.border = "black";
		serBtnB2.disabled = true;
		document.getElementById("serpensB2").style.backgroundColor = "black";

		resetTimer();

	}

if (wrongAnswer1 == 1){
		wrongAnswerAudio();
		points -= pointsPerCorrectAnswer/2;
		document.getElementById("boxThree").innerHTML = points;



		serBtnB.style.color = "red";
		serBtnB.style.backgroundColor = "black";
		serBtnB.style.border = "black";
		serBtnB.disabled = true;
		document.getElementById("serpensB").style.backgroundColor = "black";
		responseButton.style.color = "black";

		responseButton.innerHTML = "Eheu!";

	}


}


function clickedButton4(){

	if (wrongAnswer1 == 0){
		wrongAnswerAudio();
		points -= pointsPerCorrectAnswer/2;
		document.getElementById("boxThree").innerHTML = points;


		serBtnB2.style.color = "red";
		serBtnB2.style.backgroundColor = "black";
		serBtnB2.style.border = "black";
		serBtnB2.disabled = true;
		document.getElementById("serpensB2").style.backgroundColor = "black";
		responseButton.style.color = "black";

		responseButton.innerHTML = "Eheu!";

	}

if (correctAnswer1 == 1){

		correctAnswerAudio();
		//clickedCorrectAnswerFourAudio();
		points += pointsPerCorrectAnswer;
		correctAns += correctAnswerTotal;
		document.getElementById("boxThree").innerHTML = points;

		serBtnB2.style.backgroundColor = "yellow";
		serBtnB2.style.border = "yellow";
		document.getElementById("serpensB2").style.backgroundColor = "yellow";

		//responseButton.innerHTML = correctAns;
		responseButton.innerHTML = "Bene!";
		responseButton.style.color = "yellow";


		serBtnB.style.color = "red";
		serBtnB.style.backgroundColor = "black";
		serBtnB.style.border = "black";
		serBtnB.disabled = true;
		document.getElementById("serpensB").style.backgroundColor = "black";

		resetTimer();
	}


}







function clickedButton5(){

	if (correctAnswer2 == 0){

		correctAnswerAudio();
		//clickedCorrectAnswerFiveAudio();
		points += pointsPerCorrectAnswer;
		correctAns += correctAnswerTotal;

		document.getElementById("boxThree").innerHTML = points;

		serBtnC.style.backgroundColor = "yellow";
		serBtnC.style.border = "yellow";
		document.getElementById("serpensC").style.backgroundColor = "yellow";


		responseButton.innerHTML = "Bene!";
		responseButton.style.color = "yellow";



		serBtnC3.style.color = "red";
		serBtnC3.style.backgroundColor = "black";
		serBtnC3.style.border = "black";
		serBtnC3.disabled = true;
		document.getElementById("serpensC3").style.backgroundColor = "black";

		resetTimer();
	}

if (wrongAnswer2 == 1){
		wrongAnswerAudio();
		points -= pointsPerCorrectAnswer/2;
		document.getElementById("boxThree").innerHTML = points;



		serBtnC.style.color = "red";
		serBtnC.style.backgroundColor = "black";
		serBtnC.style.border = "black";
		serBtnC.disabled = true;
		document.getElementById("serpensC").style.backgroundColor = "black";
		responseButton.style.color = "black";

		responseButton.innerHTML = "Eheu!";

	}


}


function clickedButton6(){

	if (wrongAnswer2 == 0){
		wrongAnswerAudio();
		points -= pointsPerCorrectAnswer/2;
		document.getElementById("boxThree").innerHTML = points;



		serBtnC3.style.color = "red";
		serBtnC3.style.backgroundColor = "black";
		serBtnC3.style.border = "black";
		serBtnC3.disabled = true;
		document.getElementById("serpensC3").style.backgroundColor = "black";
		responseButton.style.color = "black";

		responseButton.innerHTML = "Eheu!";

	}

if (correctAnswer2 == 1){

		correctAnswerAudio();
		//clickedCorrectAnswerSixAudio();
		points += pointsPerCorrectAnswer;
		correctAns += correctAnswerTotal;


		document.getElementById("boxThree").innerHTML = points;

		serBtnC3.style.backgroundColor = "yellow";
		serBtnC3.style.border = "yellow";
		document.getElementById("serpensC3").style.backgroundColor = "yellow";

		responseButton.innerHTML = "Bene!";
		responseButton.style.color = "yellow";



		serBtnC.style.color = "red";
		serBtnC.style.backgroundColor = "black";
		serBtnC.style.border = "black";
		serBtnC.disabled = true;
		document.getElementById("serpensC").style.backgroundColor = "black";

		resetTimer();
	}


}
