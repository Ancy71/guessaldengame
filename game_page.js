p1n = localStorage.getItem("p1n");

p2n = localStorage.getItem("p2n");

p1s = 0;

p2s = 0;

document.getElementById("p1n").innerHTML = p1n + ":";

document.getElementById("p2n").innerHTML = p2n + ":";

document.getElementById("p1s").innerHTML = p1s;

document.getElementById("p2s").innerHTML = p2s;

document.getElementById("pNq").innerHTML = "Question turn:" + p1n;

document.getElementById("pNa").innerHTML = "Answer turn:" + p2n;

function send(){

    gWord = document.getElementById("word").value;

    word = gWord.toLowerCase();

    console.log("Word: " + word);

    c1 = word.charAt(1);

    console.log(c1);

    c2n = Math.floor(word.length / 2);

    c2 = word.charAt(c2n);

    console.log(c2);

    c3n = word.length - 1;

    c3 = word.charAt(c3n);

    console.log(c3);

    c1r = word.replace(c1, "_");

    c2r = c1r.replace(c2, "_");

    c3r = c2r.replace(c3, "_");

    console.log(c3r);

    qWord = "<h4 id='word_display'>Question: " + c3r + "</h4>";

    input = "<br> Answer: <input type='text' id='input_check_box'>";

    bCheck = "<br> <br><button class='btn btn-info' onclick='check()'>Check</button>";

    cQIB = qWord + input + bCheck;

    document.getElementById("output").innerHTML = cQIB;
    document.getElementById("word").value="";
}
question_turn = "player1";
answer_turn = "player2";


function check()
{
	get_answer = document.getElementById("input_check_box").value;
	answer = get_answer.toLowerCase();
	console.log("answer in lower case - " + answer);
	if(answer == word)	
	{
		if(answer_turn == "player1")
		{
			p1s = p1s +1;
		    document.getElementById("p1s").innerHTML = p1s;
		}
		else 
		{
			p2s = p2s +1;
		    document.getElementById("p2s").innerHTML = p2s;
		}
	}
	if(question_turn == "player1")
	{
		question_turn = "player2";
		document.getElementById("pNq").innerHTML = "Question Turn - " + p2n ;
	}
	else 
	{
		question_turn = "player1";
		document.getElementById("pNq").innerHTML = "Question Turn - " + p1n ;
	}

	if(answer_turn == "player1")
	{
		answer_turn = "player2";
		document.getElementById("pNa").innerHTML = "Answer Turn - " + p2n ;
	}
	else 
	{
		answer_turn = "player2";
		document.getElementById("pNa").innerHTML = "Answer Turn - " + p1n ;
	}

    document.getElementById("output").innerHTML = "";
}

