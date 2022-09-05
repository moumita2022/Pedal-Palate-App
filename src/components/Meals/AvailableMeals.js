import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";

const DUMMY_MEALS = [
	{
		id: "papaya-king-tropical-drink",
		img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132258/papaya-king-tropical-drink.206f7c5b09ed7affb414f9bc7fe32447.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
		name: "Papaya King",
		dsc: "Papaya King - Tropical Drink",
		price: 69,
		rate: 4,
		country: "New York, NY",
	},
	{
		id: "hong-kong-boba-tea-kit-for-6",
		img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/108725/hong-kong-boba-tea-kit-for-6.63841de36d8e5edfafa13023fc303285.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
		name: "New Territories",
		dsc: "Hong Kong Boba Tea Kit for 6",
		price: 59,
		rate: 4,
		country: "New York, NY",
	},
	{
		id: "guys-caliente-margaritas-for-12",
		img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/126836/guys-caliente-margaritas-for-12.ca8c6bc06b8f1039549385ffcebc749d.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
		name: "Guy Fieri",
		dsc: "Guy's Caliente Margaritas for 12",
		price: 69,
		rate: 5,
		country: "Flavortown, USA",
	},
	{
		id: "woodford-reserve-mint-julep-syrup",
		img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134036/woodford-reserve-mint-julep-syrup.ef523ac7cbae5f4aba6b058207f490d2.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
		name: "Woodford Reserve",
		dsc: "Woodford Reserve Mint Julep Syrup",
		price: 39,
		rate: 4,
		country: "Louisville, KY",
	},
	{
		id: "new-orleans-hurricane-mix",
		img: "https://www.thechunkychef.com/wp-content/uploads/2021/08/Hurricane-Cocktail-feat.jpg",
		name: "Franco's Hurricane Mix",
		dsc: "New Orleans Hurricane Mix",
		price: 39,
		rate: 5,
		country: "Natchitoches, LA",
	},
	{
		id: "evan-williams-gourmet-mint-julep-mix-2-pack",
		img: "https://goldbelly.imgix.net/uploads/product_image/image/42820/evan-williams-gourmet-mint-julep-mix-2-pack.a0bd561099dd14bfb33e3363c1c025d0.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
		name: "Evan Williams",
		dsc: "Evan Williams Gourmet Mint Julep Mix - 2 Pack",
		price: 39,
		rate: 4,
		country: "Louisville, KY",
	},
	{
		id: "margarita-mix",
		img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132643/margarita-mix.bd48a000d589d3147b14790af3c33fcd.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
		name: "Johnny Sanchez",
		dsc: "Margarita Mix",
		price: 59,
		rate: 5,
		country: "New Orleans, LA",
	},
	{
		id: "2-lou-malnatis-deep-dish-pizzas",
		img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/97981/2-lou-malnatis-deep-dish-pizzas.bf0fe065d251a9cca3925b269d443a27.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
		name: "Lou Malnati's Pizza",
		description: "2 Lou Malnati's Deep Dish Pizzas",
		price: 13.99,
		rate: 4,
		country: "Chicago, IL",
	},
	{
		id: "23699-choose-your-own-thin-crust-pizza-4-pack",
		img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/89781/choose-your-own-thin-crust-pizza-4-pack.b928a2008eab50c65dc87e59b5952190.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
		name: "Bartolini’s",
		description: "Choose Your Own Thin Crust Pizza - 4 Pack",
		price: 12.0,
		rate: 4,
		country: "Chicago, IL",
	},
	{
		id: "choose-your-own-new-haven-style-pizza-6-pack",
		img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/131840/choose-your-own-new-haven-style-pizza-6-pack.ab82828afc6172cdd4017556c15e36dd.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
		name: "Zuppardi's Apizza",
		description: "New Haven-Style Pizza - 6 Pack (Choose Your Own)",
		price: 20.0,
		rate: 4,
		country: "West Haven, CT",
	},

	{
		id: "the-coop-complete-fried-chicken-dinner-for-4",
		img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134235/complete-fried-chicken-dinner-for-4.aeabf841c124b9cc2fb0166f27790999.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
		name: "Blue Ribbon",
		description: '"The Coop" Complete Fried Chicken Dinner for 4',
		price: 22.0,
		rate: 5,
		country: "New York, NY",
	},
	{
		id: "hot-chicken-whole-bird",
		img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/110733/hot-chicken-whole-bird.bfd696b1cf611210ee813293c4c1bf28.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
		name: "Hattie B's Hot Chicken",
		description: "Hot Chicken - Whole Bird",
		price: 18.9,
		rate: 5,
		country: "Nashville, TN",
	},
	{
		id: "the-bird-fried-chicken-for-4",
		img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132392/fried-chicken-for-4.0e6dfb35e3b83144791a5ddae71836e7.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
		name: "Blue Ribbon",
		description: '"The Bird" Fried Chicken for 4',
		price: 30.5,
		rate: 4,
		country: "New York, NY",
	},
	{
		id: "fried-chicken-biscuit-sandwich-kit",
		img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/85286/fried-chicken-biscuit-sandwich-kit.44b29820e6389324a2dd7ccb0b677a22.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
		name: "Sunrise Biscuit Kitchen",
		description: "Fried Chicken Biscuit Sandwich Kit",
		price: 9.9,
		rate: 4,
		country: "Chapel Hill, NC",
	},

	{
		id: "the-family-coop-complete-fried-chicken-dinner-for-8",
		img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132341/complete-fried-chicken-dinner-for-8.512f5bff5f9f22995de1408764b7c0ff.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
		name: "Blue Ribbon",
		dsc: '"The Family Coop" Complete Fried Chicken Dinner for 8-10',
		price: 189,
		rate: 5,
		country: "New York, NY",
	},

	/*  */
	{
		id: "m1",
		name: "Sushi",
		description: "Finest fish and veggies",
		price: 22.99,
		img: "https://sushideluxe.de/bilder/sushifreunde-sushi-arten.jpg",
	},

	{
		id: "the-gothamist-prosciutto-burrata-sandwich-kit-4-pack",
		img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/129490/the-gothamist-prosciutto-burrata-sandwich-kit-4-pack.4238b1e274d50b6e09d0b488aebe64bd.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
		name: "Alidoro",
		dsc: '"The Gothamist" Prosciutto + Burrata Sandwich Kit - 4 Pack',
		price: 99,
		rate: 4,
		country: "New York, NY",
	},
	{
		id: "15504-original-muffuletta-sandwich-2-pack",
		img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/68615/original-muffuletta-sandwich-2-pack.ee9a97c691374b6866ea5b7083dd46d5.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
		name: "Central Grocery Muffulettas",
		dsc: "Original Muffuletta Sandwich - 2-Pack (Serves 6-8)",
		price: 109,
		rate: 5,
		country: "New Orleans, LA",
	},
	{
		id: "the-bomb-sandwich-for-4",
		img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/85102/the-bomb-sandwich-for-4.78f5f65f8b94d6b3c81f70761b8d0f87.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
		name: "Sal, Kris & Charlie's Deli",
		dsc: "The Bomb Sandwich for 4",
		price: 89,
		rate: 5,
		country: "Astoria, NY",
	},
	{
		id: "15428-pittsburgh-party-pack",
		img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132404/primanti-bros-sandwich-pack-choose-your-meat.db41e477a72d6957e98f860204ce356c.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
		name: "Primanti Bros.",
		dsc: "Primanti Bros Sandwich Pack - (Choose Your Meat)",
		price: 89,
		rate: 4,
		country: "Pittsburgh, PA",
	},
	{
		id: "pastrami-burnt-end-sandwich-kit",
		img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/101923/ugly-buns-burnt-end-sandwich-kit-4-pack.cadca40421c5a2b09d46673a8e2a8d37.jpeg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
		name: "Ugly Drum",
		dsc: 'Ugly Buns "Burnt End" Sandwich Kit - 6 Pack',
		price: 109,
		rate: 5,
		country: "Los Angeles, CA",
	},

	{
		id: "shake-shack-shackburger-16-pack",
		img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134022/shake-shack-shackburger-16-pack.316f8b09144db65931ea29e34869287a.png?ixlib=react-9.0.2&auto=format&ar=1%3A1",
		name: "Shake Shack",
		dsc: "Shake Shack Shackburger® – 16 Pack",
		price: 89,
		rate: 4,
		country: "New York, NY",
	},

	{
		id: "21-usda-prime-burgers-pack-of-18-8oz-each",
		img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133009/usda-prime-burgers-pack-of-18-8oz-each.274c67f15aa1c0b210dbf51801706670.png?ixlib=react-9.0.2&auto=format&ar=1%3A1",
		name: "Peter Luger Steak House",
		dsc: "USDA Prime Burgers - Pack of 18 (8oz each)",
		price: 175.95,
		rate: 4,
		country: "Brooklyn, NY",
	},

	{
		id: "goldbelly-burger-bash-pack",
		img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/66179/the-burger-bash-package.bd9d12d031865940bbe5faf15f1a62f8.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
		name: "Pat LaFrieda Meats",
		dsc: 'Goldbelly "Burger Bash" Pack',
		price: 109,
		rate: 5,
		country: "North Bergen, NJ",
	},
	{
		id: "burger-au-poivre-kit-4-pack",
		img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/103477/burger-au-poivre-kit-4-pack.3ca0e39b02db753304cd185638dad518.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
		name: "Raoul's",
		dsc: "Burger Au Poivre Kit - 4 Pack",
		price: 99,
		rate: 4,
		country: "New York, NY",
	},
];

const AvailableMeals = () => {
	const mealsList = DUMMY_MEALS.map((meal) => (
		<MealItem
			key={meal.id}
			id={meal.id}
			name={meal.name}
			description={meal.description}
			price={meal.price}
			img={meal.img}
		/>
	));

	return (
		<section className={classes.meals}>
			<Card>
				<ul>{mealsList}</ul>
			</Card>
		</section>
	);
};

export default AvailableMeals;
