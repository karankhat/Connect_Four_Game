var p1 = prompt("Player One: Enter your Name! You will be Blue.");
var p2 = prompt("Player Two: Enter your Name! You will be Red.");

$("#msg").text(p1 + ": It is your turn. Please pick a column to drop your blue chip!");

var turn = p1;
var chipColor = "blue";
var winner = "";

$("td").click(function () {
	var ind = $(this).index();
	// console.log(ind);

	// Drop the respective chip at the bottom
	for (var i = 5; i >= 0; i--) {
		var color = $("tr").eq(i).find("td:eq("+ind+")").css("background-color");
		
		if (color === "rgb(128, 128, 128)") {
			$("tr").eq(i).find("td:eq("+ind+")").css("background-color", chipColor);

			if (chipColor === "red") {
				chipColor = "blue";
			} else {
				chipColor = "red";
			}

			break;
		}
	}

	// Check for horizontal win
	for (var i = 5; i >= 0; i--) {

		for (var j = 0; j < 4; j++) {
			var color1 = $("tr").eq(i).find("td:eq("+j+")").css("background-color");
			var color2 = $("tr").eq(i).find("td:eq("+(j+1)+")").css("background-color");
			var color3 = $("tr").eq(i).find("td:eq("+(j+2)+")").css("background-color");
			var color4 = $("tr").eq(i).find("td:eq("+(j+3)+")").css("background-color");

			if (color1 === color2 && color2 === color3 && color3 === color4) {
				if (color1 === "rgb(255, 0, 0)") {
					winner = p2;
					break;
				} else if (color1 === "rgb(0, 0, 255)") {
					winner = p1;
					break;
				}				
			}

		}

		if (winner !== "") {
			console.log(winner);
			$("h1").text(winner + " is the winner!");
			$("p").text("");
			break;
		}
	}

	// Check for vertical win
	if (winner === "") {
		for (var i = 6; i >= 0; i--) {
		
			for (var j = 5; j >= 3; j--) {
				var color1 = $("tr").eq(j).find("td:eq("+i+")").css("background-color");
				var color2 = $("tr").eq(j-1).find("td:eq("+i+")").css("background-color");
				var color3 = $("tr").eq(j-2).find("td:eq("+i+")").css("background-color");
				var color4 = $("tr").eq(j-3).find("td:eq("+i+")").css("background-color");

				if (color1 === color2 && color2 === color3 && color3 === color4) {
					if (color1 === "rgb(255, 0, 0)") {
						winner = p2;
						break;
					} else if (color1 === "rgb(0, 0, 255)") {
						winner = p1;
						break;
					}				
				}
			}

			if (winner !== "") {
				console.log(winner);
				$("h1").text(winner + " is the winner!");
				$("p").text("");
				break;
			}
		}
	}

	// Check for bottom-left to top-right diagonal win
	if (winner === "") {
		for (var i = 5; i >= 3; i--) {
			
			for (var j = 0; j < 4; j++) {
				var color1 = $("tr").eq(i).find("td:eq("+j+")").css("background-color");
				var color2 = $("tr").eq(i-1).find("td:eq("+(j+1)+")").css("background-color");
				var color3 = $("tr").eq(i-2).find("td:eq("+(j+2)+")").css("background-color");
				var color4 = $("tr").eq(i-3).find("td:eq("+(j+3)+")").css("background-color");

				if (color1 === color2 && color2 === color3 && color3 === color4) {
					if (color1 === "rgb(255, 0, 0)") {
						winner = p2;
						break;
					} else if (color1 === "rgb(0, 0, 255)") {
						winner = p1;
						break;
					}				
				}
			}

			if (winner !== "") {
				console.log(winner);
				$("h1").text(winner + " is the winner!");
				$("p").text("");
				break;
			}
		}
	}

	// Check for bottom-right to top-left diagonal win
	if (winner === "") {
		for (var i = 6; i >= 3; i--) {
		
			for (var j = 5; j >= 3; j--) {
				var color1 = $("tr").eq(j).find("td:eq("+i+")").css("background-color");
				var color2 = $("tr").eq(j-1).find("td:eq("+(i-1)+")").css("background-color");
				var color3 = $("tr").eq(j-2).find("td:eq("+(i-2)+")").css("background-color");
				var color4 = $("tr").eq(j-3).find("td:eq("+(i-3)+")").css("background-color");

				if (color1 === color2 && color2 === color3 && color3 === color4) {
					if (color1 === "rgb(255, 0, 0)") {
						winner = p2;
						break;
					} else if (color1 === "rgb(0, 0, 255)") {
						winner = p1;
						break;
					}				
				}
			}

			if (winner !== "") {
				console.log(winner);
				$("h1").text(winner + " is the winner!");
				$("p").text("");
				break;
			}
		}
	}

	// Show corresponding msg at the top
	if (winner === "") {
		if (turn === p1) {
			turn = p2;
			$("#msg").text(p2 + ": It is your turn. Please pick a column to drop your red chip!");
		} else if (turn === p2) {
			turn = p1
			$("#msg").text(p1 + ": It is your turn. Please pick a column to drop your blue chip!");
		}
	}

});