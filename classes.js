            class PokemonInfo{
              toonPokemon(pokemon){
                    var pokemonTwee = document.getElementById("spelerTweeKeuze").value.toLowerCase();
                    pokemonTweeWeakness = window[pokemonTwee].weakness;
                    pokemonTweeResistence = window[pokemonTwee].resistence;
                    pokemonTweeResistenceTwee = window[pokemonTwee].resistence2;

                    moveOneTotalPP = pokemon.moves[0].pp;
                    moveOnePP = pokemon.moves[0].pp;
                    moveTwoTotalPP = pokemon.moves[1].pp;
                    moveTwoPP = pokemon.moves[1].pp;

                    document.getElementById("spelerEenPokemonTekst").innerHTML = pokemon.naam;
                    document.getElementById("aanval1").innerHTML = pokemon.moves[0].naam + " ("+pokemon.moves[0].power+")";
                    document.getElementById("aanval2").innerHTML = pokemon.moves[1].naam + " ("+pokemon.moves[1].power+")";
                    document.getElementById("aanval1pp").innerHTML = "(" + moveOnePP + "/" + moveOneTotalPP + ")";
                    document.getElementById("aanval2pp").innerHTML = "(" + moveTwoPP + "/" + moveTwoTotalPP + ")";
                    document.getElementById("hpSpeler1").innerHTML = "HP: "+pokemon.HP;
                    document.getElementById("health").value = pokemon.HP;
                    document.getElementById("health").max = pokemon.HP;
                    totaal = pokemon.HP;
                    schade1 = pokemon.moves[0].power;
                    schade2 = pokemon.moves[1].power;
                    if (pokemon.moves[0].type == pokemonTweeWeakness){
                        schade1 = schade1 * 2;
                        document.getElementById("aanval1").addEventListener("click", superEffectiefMsg);
                    }
                    if (pokemon.moves[0].type == pokemonTweeResistence || pokemon.moves[0].type == pokemonTweeResistenceTwee){
                        schade1 = schade1 - 10;
                        document.getElementById("aanval1").addEventListener("click", nietEffectiefMsg);
                    }
                    if (pokemon.moves[1].type == pokemonTweeWeakness){
                        schade2 = schade2 * 2;
                        document.getElementById("aanval2").addEventListener("click", superEffectiefMsg);
                    }
                    if (pokemon.moves[1].type == pokemonTweeResistence || pokemon.moves[1].type == pokemonTweeResistenceTwee){
                        schade2 = schade2 - 10;
                        document.getElementById("aanval2").addEventListener("click", nietEffectiefMsg);
                    }
                    if (pokemon.moves[0].type != pokemonTweeWeakness && pokemon.moves[0].type != pokemonTweeResistence && pokemon.moves[0].type != pokemonTweeResistenceTwee) {
                        document.getElementById("aanval1").addEventListener("click", addCount);
                    }
                    if (pokemon.moves[1].type != pokemonTweeWeakness && pokemon.moves[1].type != pokemonTweeResistence && pokemon.moves[1].type != pokemonTweeResistenceTwee) {
                        document.getElementById("aanval2").addEventListener("click", addCount);
                    }
                    var image = document.getElementById("plaatje1");
                    image.src = pokemon.afbeelding1;
                    pokemonEenWeakness = pokemon.weakness;
                    pokemonEenResistence = pokemon.resistence;
                    pokemonEenResistenceTwee = pokemon.resistence2;
                }
              toonPokemon2(pokemon){
                    moveThreeTotalPP = pokemon.moves[0].pp;
                    moveThreePP = pokemon.moves[0].pp;
                    moveFourTotalPP = pokemon.moves[1].pp;
                    moveFourPP = pokemon.moves[1].pp;

                    document.getElementById("spelerTweePokemonTekst").innerHTML = pokemon.naam;
                    document.getElementById("aanval3").innerHTML = pokemon.moves[0].naam + " ("+pokemon.moves[0].power+")";
                    document.getElementById("aanval4").innerHTML = pokemon.moves[1].naam + " ("+pokemon.moves[1].power+")";
                    document.getElementById("aanval3pp").innerHTML = "(" + moveThreePP + "/" + moveThreeTotalPP + ")";
                    document.getElementById("aanval4pp").innerHTML = "(" + moveFourPP + "/" + moveFourTotalPP + ")";
                    document.getElementById("hpSpeler2").innerHTML = "HP: "+pokemon.HP;
                    document.getElementById("health2").value = pokemon.HP;
                    document.getElementById("health2").max = pokemon.HP;
                    totaal2 = pokemon.HP;
                    schade3 = pokemon.moves[0].power;
                    schade4 = pokemon.moves[1].power;
                    if (pokemon.moves[0].type == pokemonEenWeakness){
                        schade3 = schade3 * 2;
                        document.getElementById("aanval3").addEventListener("click", superEffectiefMsg2);
                    }
                    if (pokemon.moves[0].type == pokemonEenResistence || pokemon.moves[0].type == pokemonEenResistenceTwee){
                        schade3 = schade3 - 10;
                        document.getElementById("aanval3").addEventListener("click", nietEffectiefMsg2);
                    }
                    if (pokemon.moves[1].type == pokemonEenWeakness){
                        schade4 = schade4 * 2;
                        document.getElementById("aanval4").addEventListener("click", superEffectiefMsg2);
                    }
                    if (pokemon.moves[1].type == pokemonEenResistence || pokemon.moves[1].type == pokemonEenResistenceTwee){
                        schade4 = schade4 - 10;
                        document.getElementById("aanval4").addEventListener("click", nietEffectiefMsg2);
                    }
                    if (pokemon.moves[0].type != pokemonEenWeakness && pokemon.moves[0].type != pokemonEenResistence && pokemon.moves[0].type != pokemonEenResistenceTwee) {
                        document.getElementById("aanval3").addEventListener("click", addCount2);
                    }
                    if (pokemon.moves[1].type != pokemonEenWeakness && pokemon.moves[1].type != pokemonEenResistence && pokemon.moves[1].type != pokemonEenResistenceTwee) {
                        document.getElementById("aanval4").addEventListener("click", addCount2);
                    }
                    var image2 = document.getElementById("plaatje2");
                    image2.src = pokemon.afbeelding2;
                }
            }
                            
            class Pokemon{     //Het Platonische 'idee'; de vorm. Deze moet dus heel generiek zijn, zodat je zoveel objecten in deze vorm kan maken als je wilt.
                constructor(naam, HP, moves, afbeelding1, afbeelding2, resistence, resistence2, weakness){
                    this.naam = naam;
                    this.HP = HP;
                    this.moves = moves;
                    this.afbeelding1 = afbeelding1;
                    this.afbeelding2 = afbeelding2;
                    this.resistence = resistence;
                    this.resistence2 = resistence2;
                    this.weakness = weakness;
                }
            }


            class Aanval{
                constructor(naam, type, power, pp){
                    this.naam = naam;
                    this.type = type;
                    this.power = power;
                    this.pp = pp;
                    //this.effect = effect;
                }
            }

            var ember = new Aanval("Ember", "fire", 20, 25);
            var bodyslam = new Aanval("Body Slam", "normal", 20, 15);
            var bubble = new Aanval("Bubble", "water", 25, 30);
            var icefang = new Aanval("Ice Fang", "ice", 15, 15);
            var vinewhip = new Aanval("Vine Whip", "grass", 30, 25);
            var poisonsting = new Aanval("Poison Sting", "poison", 10, 35);
            var thunder = new Aanval("Thunder", "electric", 110, 10);
            var extrasensory = new Aanval("Extrasensory", "psychic", 80, 20);
            var slash = new Aanval("Slash", "normal", 70, 20);
            var flareblitz = new Aanval("Flare Blitz", "fire", 120, 15);

            charmandermoves = [
                ember,
                bodyslam
            ];
            squirtlemoves = [
                bubble,
                icefang
            ];
            bulbasaurmoves = [
                vinewhip,
                poisonsting
            ];
            raikoumoves = [
                thunder,
                extrasensory
            ];
            charizardmoves = [
                flareblitz,
                slash
            ];

            var p = new PokemonInfo();