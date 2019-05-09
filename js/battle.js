var planet, hero, villan;
var hAttack, hHealth, vAttack, vHealth;
var attackTurn = Math.floor(Math.random() * 2);

$(document).ready(function() {
  function getParametersFromURL() {
    let parameters, temp;
    parameters = location.search.substring(1).split("&");
    temp = parameters[0].split("=");

    const planetID = unescape(temp[1]); //planets
    for (i in planets)
      if(planets[i].id == planetID)
        planet = planets[i];

    temp = parameters[1].split("=");
    const heroID = unescape(temp[1]); //hero
    for (i in characters)
      if(characters[i].id == heroID)
        hero = characters[i];

    temp = parameters[2].split("=");
    const villanID = unescape(temp[1]); //villan
    for (i in characters)
      if(characters[i].id == villanID)
        villan = characters[i];
  }getParametersFromURL();

  function populatePlanetDiv(){
    var planetDiv = $(".planetDiv");
    planetDiv.append("<h1>" + planet.name + "</h1>");
    planetDiv.append("<p>" + planet.description + "</p>");
  }populatePlanetDiv();

  function populateHeroDiv(){
    var heroDiv = $(".heroDiv");
    hAttack = (hero.attack + planet.modifiers.heroAttackModifier);
    if (hAttack < 0)
      hAttack = 0;
    hHealth = (hero.health + planet.modifiers.heroHealthModifier);
    if (hHealth <= 0)
      attackTurn = -1; // hero is dead
    heroDiv.append("<h1>" + hero.name + "</h1>");
    heroDiv.append("<p>" + hero.description + "</p>");
    heroDiv.append("<p>Attack: " + hAttack + "</p>");
    heroDiv.append("<p id=\"hH\">Health: " + hHealth + "</p>");
  }populateHeroDiv();

  function populateVillanDiv(){
    var villanDiv = $(".villanDiv");
    vAttack = (villan.attack + planet.modifiers.villainAttackModifier);
    if (vAttack < 0)
      vAttack = 0;
    vHealth = (villan.health + planet.modifiers.villainHealthModifier);
    if (vHealth <= 0)
      attackTurn = -2; // villain is dead
    villanDiv.append("<h1>" + villan.name + "</h1>");
    villanDiv.append("<p>" + villan.description + "</p>");
    villanDiv.append("<p>Attack: " + vAttack + "</p>");
    villanDiv.append("<p id=\"vH\">Health: " + vHealth + "</p>");
  }populateVillanDiv();

  function deathCheck(){
    if (attackTurn == -1) // hero died
      $(".statsDiv").html("<h2>Villian wins<br>Hero is dead</h2>");

    if (attackTurn == -2) // villan died
      $(".statsDiv").html("<h2>Hero wins<br>Villian is dead</h2>");
  }deathCheck();

  $("button").on("click", function(){
    var statusDiv = $(".fightStatusDiv").html("");
    var randomAttack = Math.floor(Math.random() * 41) + 60;
    if (attackTurn == 0){ // hero's attack turn
      var damage = Math.floor((randomAttack * hAttack)/100);
      statusDiv.append("<p>" + hero.name + " deals " + damage + " DMG</p>");
      $("#vH").html("Health: " + ($("#vH").html().split(" ")[1] - damage));
      attackTurn = 1;
      if($("#vH").html().split(" ")[1] < 0)
        attackTurn = -2; // villan died
    }
    else if (attackTurn == 1) { // villan's attack turn
      var damage = Math.floor((randomAttack * vAttack)/100);
      statusDiv.append("<p>" + villan.name + " deals " + damage + " DMG</p>");
      $("#hH").html("Health: " + ($("#hH").html().split(" ")[1] - damage));
      attackTurn = 0;
      if($("#hH").html().split(" ")[1] < 0)
        attackTurn = -1; // hero dies
    }

    deathCheck();

  })

});
