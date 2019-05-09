# MarvelSuperheroesWars


SPECIFICATIONS:

Create a simple console application or HTML page that can simulate fights between heroes and villains.
You can use C#, Java, Kotlin, HTML, Javascript or any other language, as long as you provide a working sample and instructions (.JAR, .EXE, .HTML) that can be executed
without requiring an IDE setup to build the project.

You are given 2 input files planets & characters (JSON & XML) which contain the data for the program.
Each character has an initial health, and attack stats, and a flag indicating if this character is a hero or villain.
Each planet contains health & attack modifiers for villains and heroes, that are applied before the fight begins.

At runtime, the user should be able to select from the console/UI a planet, a villain and a superhero.
After this the fight begins, and the villain and hero attack turn by turn until someone's health reaches 0.
The damage that a character does each round is random, and it varies from 60% to 100% of his attack stats.


INSTRUCTIONS:

To run my version of Marvel Superheroes Wars, you just have to open "index.html" with the browser of your choice and the game should open right up.

To change the characters / planets, it's a bit tricky but not that hard. In the folder "/configuration" you open up characters.js / planets.js and change the content of the "var characters" / "var planets" to the content of a json containing the characters / planets of your choice.
I did this because this whole game is run locally and on some browsers I encountered a xmlhttprequest error when importing json's in my project and I wanted to make it work on at least every browser I currently have installed (Chrome, Firefox, Edge).

Thanks for reading this, have fun!
