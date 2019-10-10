
mywords = {
      words: ["dog", "strawberry", "computer", "table", "chair", "javascript"],
      getRandom: function () {
            return this.words[Math.floor(Math.random() * this.words.length)];

      },
      arrayBlank: function (word) {
            let blank = " __ ";
            let arrayBlank = [];
            for (let index = 0; index < word.length; index++) {
                  arrayBlank.push(blank);

            }

            return arrayBlank;

      },
      convertToArray: function (word) {
            let array = [];
            for (let index = 0; index < word.length; index++) {
                  array[index] = word.charAt(index);

            } return array;
      },

      letterChecker: function (letter, array) {
            let checker = false;
            for (let index = 0; index < array.length; index++) {
                  if (letter === array[index]) {
                        checker = true;
                  }
            } return checker;
      },
      wordCompleted: function (arra) {
            let bool = false;
            for (let index = 0; index < arra.length; index++) {
                  if (arra[index] === " __ ") {
                        bool = true;
                  }

            } return bool;
      },

};
let w = mywords.getRandom();
let a = mywords.arrayBlank(w);
let arrayWord = mywords.convertToArray(w);
let left = 10;
let arrayGuesse = [];
document.getElementById('left').innerHTML = left;
document.getElementById('wordGuess').innerHTML = a;
document.onkeyup = function () {
      let usserguess = String.fromCharCode(event.keyCode).toLowerCase();






      if (left != 0) {
            if (mywords.letterChecker(usserguess, arrayWord)) {
                  for (let index = 0; index < arrayWord.length; index++) {
                        if (usserguess === arrayWord[index]) {
                              arrayWord.splice(index, 1, "0");
                              a.splice(index, 1, usserguess);
                              document.getElementById('wordGuess').innerHTML = a;
                              console.log(a);

                              if (mywords.wordCompleted(a) == false) {

                                    alert("congrats u won");
                                    w = mywords.getRandom();
                                    a = mywords.arrayBlank(w);
                                    arrayWord = mywords.convertToArray(w);
                                    left = 10;
                                    document.getElementById('left').innerHTML = left;
                                    document.getElementById('wordGuess').innerHTML = a;
                                    arrayGuesse = [];
                                    document.getElementById('Guesses').innerHTML = "";


                              }



                        }


                  }




            } else {
                  left--;
                  document.getElementById('left').innerHTML = left;
                  arrayGuesse.push(usserguess);
                  document.getElementById('Guesses').innerHTML = arrayGuesse;
            }



      } else {
            alert("you lost, try again");
            w = mywords.getRandom();
            a = mywords.arrayBlank(w);
            arrayWord = mywords.convertToArray(w);
            left = 10;
            document.getElementById('left').innerHTML = left;
            document.getElementById('wordGuess').innerHTML = a;
            arrayGuesse = [];
            document.getElementById('Guesses').innerHTML = "";

      }

}