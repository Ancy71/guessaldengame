function addUser(){

    p1n = document.getElementById("p1n").value;

    p2n = document.getElementById("p2n").value;

    localStorage.setItem("Player 1's Name", p1n);

    localStorage.setItem("Player 2's Name", p2n);

    window.location = "game_page.html";

}