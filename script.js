let artists = {
  "a": {
    'name': 'Alvvays',
    'img': 'alvvays.png',
    'audio': 'alvvays.mp3',
  },
  "b": {
    'name': 'Beachhouse',
    'img': 'beachhouse.png',
    'audio': 'beachhouse.mp3',
  },
  "c": {
    'name': 'Clairo',
    'img': 'clairo.png',
    'audio': 'clairo.mp3',
  },
  "d": {
    'name': 'Daughter',
    'img': 'daughter.png',
    'audio': 'daughter.mp3',
  },
  "e": {
    'name': 'Elliot Smith',
    'img':  'elliot.png',
    'audio': 'elliot.mp3',
  },
  "f": {
    'name': 'Foxes In Fiction',
    'img': 'foxes.png',
    'audio': 'foxes.mp3',
  },
  "g": {
    'name': 'Grimes',
    'img': 'grimes.png',
    'audio': 'grimes.mp3',
  },
  "h": {
    'name': 'Headrest',
    'img': 'headrest.png',
    'audio': 'headrest.mp3',
  },
  "i": {
    'name': 'Mazzy',
    'img': 'mazzy.png',
    'audio': 'mazzy.mp3',
  },
  "j": {
    'name': 'Japanese Breakfast',
    'img': 'japanese.png',
    'audio': 'japanese.mp3',
  },
  "k": {
    'name': 'Sufjan',
    'img': 'sufjan.png',
    'audio': 'sufjan.mp3',
  },
 'l': {
    'name': 'Lana Del Rey',
    'img': 'lana.png',
    'audio': 'lana.mp3',
  },
  'm': {
    'name': 'Mitski',
    'img': 'mitski.png',
    'audio': 'mitski.mp3',
  },
  'n': {
    'name': 'Neutral',
    'img': 'neutral.png',
    'audio': 'neutral.mp3',
  },
  'o': {
    'name': 'Soccer Mommy',
    'img': 'mommy.png',
    'audio': 'mommy.mp3',
  },
  'p': {
    'name': 'Phoebe Bridgers',
    'img': 'phoebe.png',
    'audio': 'phoebe.mp3',
  },
  'q': {
    'name': 'Modest Mouse',
    'img': 'modest.png',
    'audio': 'modest.mp3',
  },
  'r': {
    'name': 'R.E.M',
    'img': 'rem.png',
    'audio': 'rem.mp3',
  },
   's': {
    'name': 'Slowdive',
    'img': 'slowdive.png',
    'audio': 'slowdive.mp3',
   },
   't': {
    'name': 'The Shins',
    'img': 'shins.png',
    'audio': 'shins.mp3',
   },
   'u':{
    'name': 'Vashti Bunyan',
    'img': 'vashti.png',
    'audio': 'vashti.mp3',
   },
   'v': {
    'name': 'Teen Dream',
    'img': 'teen.png',
    'audio': 'teen.mp3',
   },
   'w': {
    'name': 'Wolf Parade',
    'img': 'wolf.png',
    'audio': 'wolf.mp3',
   },
   'x': {
    'name': 'Charli XCX',
    'img': 'xcx.png',
    'audio': 'xcx.mp3',
   },
   'y': {
    'name': 'Young The Giant',
    'img': 'young.png',
    'audio': 'young.mp3',
   },
   'z': {
    'name': 'Cigarettes After Sex',
    'img': 'cigs.png',
    'audio': 'cigs.mp3',
   },
};
let inputElement = document.querySelector ("#input");
let result = document.querySelector ("#result");

        // for (let i = 0; i < 26; i++){

        //     console.log(i);

        //     let letter = name[i];
        //     console.log(letter);

let audio = document.createElement('audio');

inputElement.addEventListener('keyup', function (event) {
  if (event.key == 'Enter') {
      result.innerHTML = ""
      let text = inputElement.value;
      for (i=0; i < text.length; i++){

          if (text[i] in artists) {
            let artist = artists[text[i]];
            console.log(artist.name, artist.img, artist.audio);
            
            let img = document.createElement('img');
            img.src = artist.img;
            result.append(img);

            img.addEventListener('mouseover', () => {
              audio.src = artist.audio;
              audio.play();
            });

            img.addEventListener('mouseout', () => {
              audio.pause();
            })
          }
      }
    }
});
    
    