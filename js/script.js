(function(){
	var letras = ["A", "B", "C", "D", "E", "F", "G", "H"];
	var images = [];
	var flippedCards = [];

	for( var i = 0; i < 16; i++ ){
		var img = {
			src: i < 8 ? "img/"+ letras[i % 8] + "-0" + ".png" : "img/"+ letras[i % 8] + ".png",
			id: i % 8
		}
		images.push(img);
	}

	startGame();

	function startGame(){
		flippedCards = [];

		images = randomSort(images);

		var frontFaces = document.getElementsByClassName("front");

		for (var i = 0; i < 16; i++) {
			var card = document.querySelector("#card" + i);
			card.style.left = i % 8 === 0 ? (2 + "%") : (((i % 8) * 12) + 2) + "%";
			card.style.top = i < 8 ? 2 + "%" : 50 + "%";

			card.addEventListener("click", flipCard, false);

			frontFaces[i].style.background = "url('"+ images[i].src +"')";
			
		}
	}

	function randomSort(oldArray){
		var newArray = [];

		while( newArray.length !== oldArray.length ){
			var i = Math.floor(Math.random()*oldArray.length);

			if( newArray.indexOf(oldArray[i]) < 0 ){
				newArray.push(oldArray[i]);
			}
		}
		return newArray;
	}

	function flipCard(){
		if( flippedCards.length < 2 ){
			var faces = this.getElementsByClassName("face");

			console.log(faces);
			
			if( faces[0].classList.length > 2 ){
				return ;
			}

			faces[0].classList.toggle("flipped");
			faces[1].classList.toggle("flipped");

			flippedCards.push(this);
		}		
		else{
			flippedCards[0].childNodes[1].classList.toggle("flipped");
			flippedCards[0].childNodes[3].classList.toggle("flipped");

			flippedCards[1].childNodes[1].classList.toggle("flipped");
			flippedCards[1].childNodes[3].classList.toggle("flipped");

			flippedCards = [];
		}
	}
}());