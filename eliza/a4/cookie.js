
			// global variables
			var nClicks = 0;
			var startTime = new Date().getTime();


function checkRadio() {
				var correctAnsSelected = document.getElementById('correctAnswer').checked;
				if (correctAnsSelected == true) {
					document.getElementById('answer').innerHTML = ("Correct")
				}
				else {
					document.getElementById('answer').innerHTML = ("Wrong")
				}
			}
			
			function updateClicks() {
				if (nClicks == 0) {
					nClicks++
					startTime = new Date().getTime();
					document.getElementById("clicks").innerHTML = "Cookie # " + (nClicks)
				} else {
					nClicks++
					document.getElementById("clicks").innerHTML = "Cookie # " + (nClicks)
				}
			}
			setInterval(updateCPS, 50);

			function updateCPS() {
				var currentTime = new Date();
				var timeElapsed = (currentTime - startTime);
				var cps = (nClicks / timeElapsed) * 1000
				cps = cps.toFixed(2);
				document.getElementById("cpsDisplay").innerHTML = "CPS - " + (cps)
			}

			function reset() {
				location.reload();
			}
			setInterval(clock, 50);

			function clock() {
				if (nClicks == 0) {
					document.getElementById("clock").innerHTML = "Time 0";
				} else {
					var currentTime = new Date();
					var timeElapsed = (currentTime - startTime) / 1000;
					timeElapsed = timeElapsed.toFixed(2);
					document.getElementById("clock").innerHTML = "Time " + timeElapsed;
				}
			}
