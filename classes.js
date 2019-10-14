            class PokemonInfo{
              toonPokemon(pokemon){
                    document.getElementById("spelerEenPokemonTekst").innerHTML = pokemon.naam;
                    document.getElementById("aanval1").innerHTML = pokemon.moves[0].naam + " ("+pokemon.moves[0].power+")";
                    document.getElementById("aanval2").innerHTML = pokemon.moves[1].naam + " ("+pokemon.moves[1].power+")";
                    document.getElementById("hpSpeler1").innerHTML = "HP: "+pokemon.HP;
                    totaal = pokemon.HP;
                    schade1 = pokemon.moves[0].power;
                    schade2 = pokemon.moves[1].power;
                    var image = document.getElementById("plaatje1");
                    image.src = pokemon.afbeelding1;
                    //if (attack.type == pokemon.weakness){ ...
                }
              toonPokemon2(pokemon){
                    document.getElementById("spelerTweePokemonTekst").innerHTML = pokemon.naam;
                    document.getElementById("aanval3").innerHTML = pokemon.moves[0].naam + " ("+pokemon.moves[0].power+")";
                    document.getElementById("aanval4").innerHTML = pokemon.moves[1].naam + " ("+pokemon.moves[1].power+")";
                    document.getElementById("hpSpeler2").innerHTML = "HP: "+pokemon.HP;
                    totaal2 = pokemon.HP;
                    schade3 = pokemon.moves[0].power;
                    schade4 = pokemon.moves[1].power;
                    var image2 = document.getElementById("plaatje2");
                    image2.src = pokemon.afbeelding2;
                }
            }
                            
            class Pokemon{     //Het 'idee'; de vorm. Deze moet dus heel generiek zijn, zodat je zoveel objecten in deze 'vorm' kan maken als je wilt.
                naam;
                type;
                HP;
                moves;
                afbeelding;
                constructor(naam, type, HP, moves, afbeelding1, afbeelding2){
                    this.naam = naam;
                    this.type = type;             //Array maken
                    this.HP = HP;
                    this.moves = moves;
                    this.afbeelding1 = afbeelding1;
                    this.afbeelding2 = afbeelding2;
                    //this.resistence = resistence;
                    //this.weakness = weakness;
                }
            }


            class Aanval{
                constructor(naam, type, power){
                    this.naam = naam;
                    this.type = type;
                    this.power = power;
                    //this.pp = pp;
                }
            }

            var charmander = new Pokemon("Charmander", "vuur", 65, charmandermoves, "charmander1.png", "charmander2.png");            //Het 'uitgietsel' van die vorm > Met 'new' instantieer je, een maak je een nieuw object.
            var squirtle = new Pokemon("Squirtle", "water", 55, squirtlemoves, "squirtle1.png", "squirtle2.png");              //Hierbij staan dus ook de haakjes, omdat er een methode wordt aangeroepen > De constructor.
            var bulbasaur = new Pokemon("Bulbasaur", "grass", 60, bulbasaurmoves, "bulbasaur1.png", "bulbasaur2.png");
            var charmander, squirtle, bulbasaur, charmandermoves, squirtlemoves, bulbasaurmoves;
            charmandermoves = [
                new Aanval("Ember", "vuur", 20),
                new Aanval("Body Slam", "normal", 20)
            ];
            squirtlemoves = [
                new Aanval("Bubble", "water", 25),
                new Aanval("Ice Fang", "ice", 15)
            ];
            bulbasaurmoves = [
                new Aanval("Vine Whip", "grass", 30),
                new Aanval("Poison Sting", "poison", 10)
            ];

            //console.log(charmander.naam, charmander.type, charmander.HP);
            //console.log(squirtle.naam, squirtle.type, squirtle.HP);
            //console.log(bulbasaur.naam, bulbasaur.type, bulbasaur.HP);

            var p = new PokemonInfo();