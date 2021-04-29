let strangerinthealpsURL = "https://media.pitchfork.com/photos/59bff1bb62f8b05385d54288/1:1/w_600/strangerinthealps.jpg";

let punisherURL = "https://upload.wikimedia.org/wikipedia/en/2/23/Phoebe_Bridgers_Punisher_%282020%29.png";

let teendreamURL = "https://media.pitchfork.com/photos/5929a80313d1975652139561/1:1/w_600/20945b0e.jpg";

let makeoutURL = "https://media.pitchfork.com/photos/5929ab1e13d1975652139b60/1:1/w_600/d5ef5055.jpg";

let boygeniusURL = "https://store.matadorrecords.com/pub/media/catalog/product/cache/efacd7ae70ea5536df7d34da21510682/o/l/ole-1408-boygenius.jpg";

let flowerURL = "https://images.genius.com/a29be5856c484ff4595e575f3b62e697.1000x1000x1.jpg";

let beachhouseURL = "https://upload.wikimedia.org/wikipedia/en/0/00/Beach_House_-_Depression_Cherry.png";

let foxesURL = "https://media.pitchfork.com/photos/5929a962b1335d7bf16994a1/1:1/w_600/eff047d2.jpg";

let soccermommyURL = "https://media.pitchfork.com/photos/5a6f65e2cc2e1353ffb6250a/1:1/w_500/soccer%20mommy%20cover.jpg";

let cigsURL = "https://images-na.ssl-images-amazon.com/images/I/719UhQ8IhSL._SL1500_.jpg";

let snailmailURL = "https://upload.wikimedia.org/wikipedia/en/8/87/Snail_Mail_Lush2.jpg";

let alvvaysURL = "https://upload.wikimedia.org/wikipedia/en/e/e2/Antisocialites_-_Alvvays_%28Band%29_Album_Cover.jpg";

let strokesURL = "https://img.apmcdn.org/8ce67ca8996b8b44980873f01cb03856a63209d1/square/a510d8-20200218-the-strokes-the-new-abnormal-02.jpg";

let nfrURL = "https://media.pitchfork.com/photos/5d5ec71f8aeb9e0008ccf296/1:1/w_600/LanaDelRey_NormalFuckingRockwell.jpg";

let ultraviolenceURL ="https://img.discogs.com/jc8f2GyyKGA7bQ_EdSfQa3YvWvQ=/fit-in/412x412/filters:strip_icc():format(webp):mode_rgb():quality(90)/discogs-images/R-5801778-1486942985-6480.png.jpg";

let carrieURL ="https://media.pitchfork.com/photos/5929ac5c5e6ef959693218f8/1:1/w_600/dbfa1978.jpg";

let drdogURL = "https://upload.wikimedia.org/wikipedia/en/thumb/a/a0/Shame_Shame.jpg/220px-Shame_Shame.jpg";

let macURL = "https://images-na.ssl-images-amazon.com/images/I/91eMyF70YUL._SL1500_.jpg";

let cocteauURL = "https://images-na.ssl-images-amazon.com/images/I/71ykS5obm%2BL._SX522_.jpg";

let mazzyURL ="https://images-na.ssl-images-amazon.com/images/I/81lPq-2%2BJZL._SL1227_.jpg";

let modestURL ="https://f4.bcbits.com/img/a2046837486_10.jpg";

let smithsURL ="https://www.nme.com/wp-content/uploads/2016/10/2015TheSmiths_TheQueenIsDead_Press_030815.jpg";

let cureURL ="https://upload.wikimedia.org/wikipedia/en/2/2b/TheCureWish.jpg";

let elvisURL ="https://s9.limitedrun.com/images/1179690/v600_RFC141-600.jpg";

let neutralURL ="https://d.newsweek.com/en/full/815300/neutral-milk-hotel.jpg?w=1600&h=1600&q=88&f=ddff35a4f28636d9bff62dde99139f19";

let sirpleaseURL ="https://i.kfs.io/album/global/44997954,0v1/fit/500x500.jpg";

let bloomURL ="https://media.pitchfork.com/photos/5929b536b1335d7bf169a88a/1:1/w_600/f251d544.jpeg";

let shinsURL ="https://i.pinimg.com/originals/62/63/e5/6263e5977ac9beb4b7038fa2ed796550.jpg";

let drainURL ="https://f4.bcbits.com/img/a1272225382_10.jpg";

let inputElement = document.querySelector ("#input");

let result = document.querySelector ("#result");

inputElement.addEventListener("keydown", function(event) {


	if (event.key == "Enter"){



		//get the contents of the text input
        let name = inputElement.value;
        console.log(name);

		//we can also clear what we wrote in here
		inputElement.value = "";

        result.innerHTML ="";

		for (let i = 0; i < 26; i++){

			console.log(i);

			let letter = name[i];
			console.log(letter);

			let selectedCard = document.createElement("img");

			if (["a",].includes(letter)){
				selectedCard.src = strangerinthealpsURL;
			}

            if (["b",].includes(letter)){
                selectedCard.src = punisherURL;
            }

            if (["c",].includes(letter)){
                selectedCard.src = teendreamURL;
            }

            if (["d",].includes(letter)){
                selectedCard.src = makeoutURL;
            }

             if (["e",].includes(letter)){
                selectedCard.src = boygeniusURL;
            }

            if (["f",].includes(letter)){
                selectedCard.src = flowerURL;
            }
			if (["g"].includes(letter)){
				selectedCard.src = foxesURL;
			}
            if (["h"].includes(letter)){
                selectedCard.src = beachhouseURL;
            }
            if (["i"].includes(letter)){
                selectedCard.src = soccermommyURL;
            }
            if (["j"].includes(letter)){
                selectedCard.src = cigsURL;
            }
            if (["k"].includes(letter)){
                selectedCard.src = snailmailURL;
            }
            if (["l"].includes(letter)){
                selectedCard.src = alvvaysURL;
            }
            if (["m"].includes(letter)){
                selectedCard.src = nfrURL;
            }
            if (["n"].includes(letter)){
                selectedCard.src = carrieURL;
            }
            if (["o"].includes(letter)){
                selectedCard.src = drdogURL;
            }
            if (["p"].includes(letter)){
                selectedCard.src = macURL;
            }
            if (["q"].includes(letter)){
                selectedCard.src = cocteauURL;
            }
            if (["r"].includes(letter)){
                selectedCard.src = mazzyURL;
            }
            if (["s"].includes(letter)){
                selectedCard.src = modestURL;
            }
            if (["t"].includes(letter)){
                selectedCard.src = smithsURL;
            }
            if (["u"].includes(letter)){
                selectedCard.src = cureURL;
            }
            if (["v"].includes(letter)){
                selectedCard.src = elvisURL;
            }
            if (["w"].includes(letter)){
                selectedCard.src = sirpleaseURL;
            }
            if (["x"].includes(letter)){
                selectedCard.src = shinsURL;
            }
            if (["y"].includes(letter)){
                selectedCard.src = bloomURL;
            }
            if (["z"].includes(letter)){
                selectedCard.src = drainURL;
            }

            result.appendChild(selectedCard);
            
		}
	}
})
