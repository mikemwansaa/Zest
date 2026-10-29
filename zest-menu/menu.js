// ALL MENU CONTENT LIVES HERE. Edit names, descriptions (d) and prices (p, kwacha). v:1 = vegetarian. Price can be text like "160/195".
const SPECIALS=[
["Monday","2 beef or chicken burgers with chips and salads for K300"],
["Tuesday","2 pizzas for K300"],
["Wednesday","2 chicken espetadas for K400"],
["Sunday","Add a Fruiticana to any kids meal for K10"]];
const MENU=[
{id:"starters",t:"Starters",items:[
["Sticky Wings",145,"Crispy fried chicken winglets in a sweet sticky Asian sauce (8 wings)"],
["Mini Croc Skewers",140,"Croc tail cooked on the braai with chimichurri sauce"],
["Haloumi & Mushroom Skewers",145,"Served with chimichurri sauce",1],
["Haloumi & Chorizo Skewers",165,"Served with chimichurri sauce"],
["Fried Haloumi",145,"In a light batter served with sweet chilli",1],
["Chicken Gizzards",80,"Fried with onions (request to add chilli)"],
["Stuffed Chillies",100,"Chillies stuffed with feta cheese in batter",1],
["Bacon Wrapped Chillies",155,"Chillies stuffed with feta cheese wrapped in crispy bacon"],
["Croc Bites",140,"Bite sized pieces of croc tail"],
["Prawns",180,"Four prawns Portuguese style"],
["Onion Rings",60,"",1],["Samosas",75,"Chicken, beef or veg (4 pieces)",1],
["Braai Wings","160/195","Piri piri, lemon & garlic, Portuguese or BBQ (4 or 6 pieces)"],
["Vinkubala",80,"Crispy fried vinkubala with fried onion (request to add chilli)"]]},
{id:"platters",t:"Platters",items:[
["Sasula Platter",600,"Fried mbuzi, 4 Portuguese wings, pork chops, boerwors sausage, chips"],
["Bar Snack Platter",450,"4 samosas, 4 piri piri wings, fried mbuzi and chips"],
["Platter for Two",420,"Ribs, Portuguese chicken pieces, beef sausage, chips and salads"],
["Double Trouble Platter (2)",700,"4 prince prawns, 4 wings, 250g pork ribs, 2 samosas, beef sausage, chips and salads"],
["Mixed Grill (3 to 4)",800,"Pork ribs, lemon and garlic chicken, T-bone, chips and salad"],
["Mega Nyama (6 to 7)",1400,"Portuguese chicken, strips of steak, pork chops, pork ribs, chips and salads"],
["Family Platter (10-12)",2350,"2 full Portuguese chickens, strips of steak (1kg), beef sausage, pork ribs (1kg), chips and salads"]]},
{id:"combos",t:"Combos",items:[
["Surf n Turf",380,"300g steak and 3 prawns with chips and salads"],
["Zest Combo",200,"Quarter Portuguese chicken and boerewors sausage with chips and salads"],
["Prawns and Chicken",300,"3 prawns and a quarter Portuguese chicken with chips and salads"],
["Ribs and Chicken",320,"250g pork ribs and quarter BBQ chicken with chips and salads"],
["Pork and Sausage",265,"Pork chops, boerewors sausage, chips and salads"],
["Treat Yourself",420,"3 prawns, 2 BBQ wings, ribs, chips and salads"]]},
{id:"chef",t:"Chef Specials",note:"Main meal sides: choose one starch (chips, rice, nshima) and one veg (salads, green beans and carrots, traditional veggies).",items:[
["Pork Spare Ribs","360/600","Sticky smoked pork spare ribs. Half rack 500g / full rack 1kg"],
["Pork Chops",175,""],["Oxtail",260,"Slow cooked tender oxtail in a rich gravy"],
["Portuguese Chicken",270,"Succulent whole chicken slathered in Portuguese sauce"],
["Prawns",360,"6 prawns in our mouthwatering Portuguese style sauce"],
["Grilled Half Chicken",195,"Lemon and garlic, BBQ, Portuguese or piri-piri sauce, grilled on the braai"],
["Fish Fillet",250,"Fish fillet in lemon butter sauce"],
["Boerwors 400g",220,"400g boerwors beef sausage"],
["Veggie, Feta & Basil Parcels",180,"Seasonal veggies, basil and feta cheese, served in a foil parcel",1]]},
{id:"steaks",t:"Steaks",items:[
["Rump Steak 300g/500g","230/350","Grilled to your liking with mushroom or pepper sauce"],
["Rib Eye 300g/500g","260/370","Tender rib eye grilled to your liking with mushroom or pepper sauce"],
["T-Bone 500g",310,"Thick juicy T-bone grilled to your liking with mushroom or pepper sauce"],
["Chuck Steak 300g/500g","185/260","Cooked to perfection on the charcoal braai"]]},
{id:"game",t:"Game Meat",items:[
["Croc Ribs 500g/1kg","250/440","Game meat on the bone fried with onion and a touch of chilli"],
["Kudu Stew",230,""],["Kudu Fried",230,""],["Impala Stew",230,""],["Impala Fried",230,""]]},
{id:"stuffed",t:"Stuffed Chicken Breast",note:"Choose one from each: stuffing, cooking style (grilled, crumbed or bacon wrapped +K50) and sauce (mushroom or pepper).",items:[
["Plain",135,""],["Mushroom, Basil & Feta",195,""],["Bacon & Cheese",195,""],["Sundried Tomato, Basil & Cheese",195,""]]},
{id:"espetadas",t:"Espetadas",note:"Brazilian style skewers of oversized chunks marinated in our Brazilian sauce, cooked on the braai, served with our amazing chimichurri sauce.",items:[
["Chicken Espetada",235,"Succulent pieces of marinated chicken thighs"],
["Chicken Chorizo Espetada",250,"Chorizo sausage and marinated chicken thighs"],
["Pork Espetada",240,"Flavour packed marinated pork"],
["Beef Espetada",285,"Marinated chunks of beef"],
["Croc Espetada",230,"Marinated crocodile tail"],
["Prawn & Chicken Espetada",365,"Marinated chicken thighs and Portuguese prawns"],
["Vegetable Espetada",180,"Seasonal vegetables grilled on the braai",1],
["Haloumi & Vegetable Espetada",250,"",1]]},
{id:"salads",t:"Salads",items:[
["Chicken Salad",150,"Grilled Portuguese chicken strips, feta, tomato, cucumber, onion and lettuce"],
["Greek Salad",65,"Feta, tomato, cucumber, onion, lettuce",1]]},
{id:"pizza",t:"Pizza",note:"Extras: cheese K55, any meat K45, mushroom K30, sundried tomatoes K25, jalapenos K20, other veggies K5.",items:[
["Margarita",120,"Cheese and basil",1],["Meat Lovers",190,"Beef mince, BBQ chicken, bacon, chorizo and cheese"],
["Supreme",185,"Beef mince, BBQ chicken, mushroom, onion, green pepper and cheese"],
["Chicken Paradise",170,"Chicken, pineapple, green pepper, onion and cheese"],
["Bacon Paradise",175,"Bacon, pineapple, green pepper, onion and cheese"],
["Chicken & Mushroom",180,"Chicken, mushrooms, onion and cheese"],
["Prawn",230,"Prawns, tomato, onion, garlic and cheese"],
["The Vixen",175,"Chicken, sundried tomato, feta, basil"],
["Spicy Veg",165,"Pickled jalapenos, mushroom, onion, green pepper and cheese",1],
["Croc Pizza",165,"Croc, tomato, onion, cheese"],
["Some Like It Hot",165,"Chicken, pickled jalapenos, mushroom, green pepper and cheese"],
["Vegetarian",165,"Mushroom, olives, basil, tomato, onion, green pepper and cheese",1],
["Zest Special",165,"Chorizo, feta, basil, olives, tomato and cheese"]]},
{id:"burgers",t:"Burgers",note:"Served with chips and salads.",items:[
["Chicken Burger",185,"Juicy home made patty with basil aioli, lettuce, tomato and onion"],
["Beef Burger",185,"Home made patty with cheese, pickles, lettuce, tomato and onion"],
["Bacon Burger",210,"Home made patty with cheese, bacon, lettuce, tomato and onion"],
["Jalapeno Burger",195,"Home made patty with cheese, jalapenos, lettuce, tomato and onion"],
["Veggie Burger",155,"Home made patty with basil aioli, lettuce, tomato and onion",1],
["Veggie Haloumi Burger",195,"Home made patty with grilled haloumi, basil aioli, lettuce, tomato and onion",1]]},
{id:"pasta",t:"Pasta & Asian",items:[
["Chimichurri Pasta","145/170/185","Veg / Chicken / Bacon. Seasonal veggies, home made chimichurri sauce with pasta"],
["Basil Stir Fry","250/180/145","Beef / Chicken / Veg. Seasonal veggies stir fried with basil, served with rice"],
["Thai Curry","250/250/195/160","Beef / Fish / Chicken / Veg. Red, green or yellow Thai curry served with rice"],
["Loaded Fries","130/165","Fries in melted cheese, onion and fresh basil. Add bacon"]]},
{id:"traditional",t:"Traditional",items:[
["Fried Fish","140/190","Whole fried bream"],["Foiled/Grilled Fish","165/235","Whole fish in foil or grilled (1hr wait)"],
["Vinkubala",110,""],["Mbuzi",145,"Tender goat meat on the bone stewed or lightly fried with onion and chilli"],
["Beef Stew",125,"Slow cooked beef in a rich gravy"],["Gizzards",110,"Chicken gizzards fried with onion"],
["Village Chicken","130/195","Quarter or half village chicken cooked till tender in tomato and onion gravy"],
["Vimbombo",120,"Beef hooves traditionally cooked"],["Kapenta",110,""]]},
{id:"kids",t:"Kids",note:"Kids meals come with one side only.",items:[
["Kids Ribs",215,"250g pork ribs served with chips"],["Chicken Strips",130,"Crumbed strips of chicken"],
["Fish Fingers",150,"Crumbed strips of fish fillet"],["Sausage and Chips",90,"Beef or hungarian sausage"],
["Quarter Chicken and Chips",120,""]]},
{id:"sandwiches",t:"Sandwiches",note:"White or brown bread or wrap, toasted or fresh. Add chips K25 / salad K15.",items:[
["Chicken Mayo",130,"Chicken breast, mayonnaise, tomato, onion and green pepper"],
["Chicken and Bacon",150,"Chicken breast, bacon, basil aioli, tomato, onion and green pepper"],
["Cheese and Tomato",70,"",1],["Bacon, Cheese & Tomato",110,""],["Bacon, Egg and Cheese",115,""],
["Grilled Veggie",100,"Grilled seasonal veggies with basil and cheese",1]]},
{id:"breakfast",t:"Breakfast",note:"Extras: egg K15, bacon K50, beef sausage/chorizo K50, toast K25, beans K25, haloumi K70.",items:[
["Truck Drivers Breakfast",175,"2 eggs, bacon, boerewors, chips and toast (with tea or instant coffee)"],
["Big Breakfast",195,"2 eggs, bacon, chorizo, beans, mushroom, chips and toast"],
["Big Vegetarian Breakfast",185,"2 eggs, beans, mushroom, grilled haloumi, chips and toast",1],
["Bacon and Egg Roll",75,""],["Bacon, Egg and Cheese Roll",90,""],["Eggs on Toast",55,"",1],
["Eggs, Bacon and Toast",75,""],["Omelet with Toast",50,"2 egg omelet. Fillings: cheese K50, bacon K50, mushroom K25, onion K5, pepper K5, tomatoes K5",1]]},
{id:"extras",t:"Extras & Dessert",items:[
["Chips",55,""],["Salads",30,""],["Rice",30,""],["Mashed Potato",55,""],["Mushroom, Pepper or Chimichurri Sauce",40,""],
["Nshima",25,""],["Traditional Veggies or Beans",30,""],["Green Beans and Carrots",35,""],
["Cake Slices",120,"Ask your waiter for today's available flavours"]]}
];
const el=(t,c,x)=>{const e=document.createElement(t);if(c)e.className=c;if(x!=null)e.textContent=x;return e};
const tabs=document.getElementById('tabs'),main=document.getElementById('menu');
const sp=el('section','sec');sp.id='specials';sp.append(el('h2','','Daily Specials'));
const sg=el('div','specials');SPECIALS.forEach(([d,x])=>{const s=el('div','special');s.append(el('b','',d+' Special'),el('span','',x));sg.append(s)});
sp.append(sg);main.append(sp);
tabs.append(Object.assign(el('a','','Specials'),{href:'#specials'}));
MENU.forEach(m=>{
 tabs.append(Object.assign(el('a','',m.t.replace(' & Dessert','')),{href:'#'+m.id}));
 const s=el('section','sec');s.id=m.id;s.append(el('h2','',m.t));
 if(m.note)s.append(el('p','note',m.note));
 const g=el('div','grid');
 m.items.forEach(([n,p,d,v])=>{const c=el('div','card'),r=el('div','row'),nm=el('span',v?'v':'',n);r.append(nm,el('span','price',p));c.append(r);if(d)c.append(el('p','d',d));g.append(c)});
 s.append(g);main.append(s);
});
main.append(el('p','foot','Prices in kwacha and subject to change without notice. Please tell us about any allergies when ordering. No outside food or drinks.'));
