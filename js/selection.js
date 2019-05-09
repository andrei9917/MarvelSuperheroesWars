var selectedPlanet;
var selectedHero;
var selectedVillan;

$(document).ready(function() {
  var planetlist = $("#planetlist");
  var herolist = $("#herolist");
  var villanlist = $("#villanlist");

  //display everything in the menu
  for (i=0; i<planets.length; i++){
    planetlist.append("<li id=\"" + planets[i].id + "\">Name: " + planets[i].name + "<br>Description: " + planets[i].description +
                      "<br>Hero Attack Modifier: " + planets[i].modifiers.heroAttackModifier + "<br>Hero Health Modifier: " + planets[i].modifiers.heroHealthModifier +
                      "<br>Villain Attack Modifier: " + planets[i].modifiers.villainAttackModifier + "<br>Villain Health Modifier: " + planets[i].modifiers.villainHealthModifier + "<br><br></li>");
  }

  for(i=0; i<characters.length; i++){
    if(characters[i].isVillain === true)
      villanlist.append("<li id=\"" + characters[i].id + "\">Name: " + characters[i].name + "<br>Description: " + characters[i].description + "<br>Attack: " + characters[i].attack + "<br>Health: " + characters[i].health + "<br><br></li>");
    else
      herolist.append("<li id=\"" + characters[i].id + "\">Name: " + characters[i].name + "<br>Description: " + characters[i].description + "<br>Attack: " + characters[i].attack + "<br>Health: " + characters[i].health + "<br><br></li>");
  }

  $("li").on("click", function() {
    var parentName = $(this).closest("ul").attr("id");
    $("#" + parentName + " li.selected").removeClass("selected");
    $(this).addClass("selected");
    if(parentName === "planetlist")
      selectedPlanet = $(this).attr("id");
    if(parentName === "herolist")
      selectedHero = $(this).attr("id");
    if(parentName === "villanlist")
      selectedVillan = $(this).attr("id");
    if(selectedHero && selectedPlanet && selectedVillan){
      $("button[name=battleButton]").fadeIn(2000);
      $("button[name=battleButton] a").attr("href", "./battle.html?planet="+selectedPlanet+"&hero="+selectedHero+"&villan="+selectedVillan)
    }
  });
});
