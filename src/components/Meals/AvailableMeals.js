import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";

const DUMMY_MEALS = [
	{
		id: "papaya-king-tropical-drink",
		img: "https://sqdte9mbh615zsvesmkh1eyq-wpengine.netdna-ssl.com/wp-content/uploads/2016/04/E-86th-179-Papaya-King-TA04.jpg",
		name: "Papaya King",
		dsc: "Papaya King - Tropical Drink",
		price: 6.90,
		rate: 4,
		country: "New York, NY",
	},
	{
		id: "hong-kong-boba-tea-kit-for-6",
		img: "https://i.pinimg.com/736x/7d/dd/d9/7dddd9a3be8540019a2b01e2c559b512--new-territories-nyc.jpg",
		name: "New Territories",
		dsc: "Hong Kong Boba Tea Kit for 6",
		price: 7.50,
		rate: 4,
		country: "New York, NY",
	},
	{
		id: "guys-caliente-margaritas-for-12",
		img: "https://media-cldnry.s-nbcnews.com/image/upload/newscms/2020_09/1543176/guy-fieri-today-food-today-main-200227-2.jpg",
		name: "Guy Fieri",
		dsc: "Guy's Caliente Margaritas for 12",
		price: 8.69,
		rate: 5,
		country: "Flavortown, USA",
	},
	{
		id: "woodford-reserve-mint-julep-syrup",
		img: "https://spiritedgifts.com/media/catalog/product/cache/fc3b7b9cb7803b13900ba97398cbdee8/a/p/api-v1.1-file-public_files-pim-assets-a5-15-27-5f-5f2715a5e6a7975d860fafd4-images-0f-b8-53-61-6153b80f2d84d493d0653e30-Woodford-Reserve-Bourbon-Whiskey-375ml_06.jpg",
		name: "Woodford Reserve",
		dsc: "Woodford Reserve Mint Julep Syrup",
		price: 9.50,
		rate: 4,
		country: "Louisville, KY",
	},
	{
		id: "new-orleans-hurricane-mix",
		img: "https://www.thechunkychef.com/wp-content/uploads/2021/08/Hurricane-Cocktail-feat.jpg",
		name: "Franco's Hurricane Mix",
		dsc: "New Orleans Hurricane Mix",
		price: 8.99,
		rate: 5,
		country: "Natchitoches, LA",
	},
	{
		id: "evan-williams-gourmet-mint-julep-mix-2-pack",
		img: "https://assets3.thrillist.com/v1/image/2861642/1200x600/scale;",
		name: "Evan Williams",
		dsc: "Evan Williams Gourmet Mint Julep Mix - 2 Pack",
		price: 30.44,
		rate: 4,
		country: "Louisville, KY",
	},
	{
		id: "margarita-mix",
		img: "https://static.wixstatic.com/media/f22774_e4ab80e43053477aae6373ac9eb3b155~mv2_d_5760_3840_s_4_2.jpg/v1/fill/w_1000,h_667,al_c,q_90,usm_0.66_1.00_0.01/f22774_e4ab80e43053477aae6373ac9eb3b155~mv2_d_5760_3840_s_4_2.jpg",
		name: "Johnny Sanchez",
		dsc: "Margarita Mix",
		price:9,
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
		img: "https://media1.popsugar-assets.com/files/thumbor/8p6svF2_YM4nMwKlmCUtBaog4V0/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2020/05/21/786/n/1922195/2c6f3a5e3d04ec9a_netimgIuZzPB/i/Bartolini-Choose-Your-Own-Thin-Crust-Pizza.jpg",
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
		price: 34.98,
		rate: 5,
		country: "New York, NY",
	},

	/*  */
	{
		id: "m1",
		img: "https://sushideluxe.de/bilder/sushifreunde-sushi-arten.jpg",
		name: "Temaki-Sushi",
		description: "Finest fish and veggies",
		price: 22.99,
		
	},
	{
		id: "the-gothamist-prosciutto-burrata-sandwich-kit-4-pack",
		img: "https://cdn.pixabay.com/photo/2017/10/15/11/41/sushi-2853382__340.jpg",
		name: "Uramaki Sushi",
		description: '"Uramaki Sushi" Veggies + Fish Sushi Kit - 4 Pack',
		price: 35.78,
		rate: 4,
		country: "New York, NY",
	},

	
	{
		id: "15504-original-muffuletta-sandwich-2-pack",
		img: "https://www.thespruceeats.com/thmb/u3eJa4SSpZ5NfCKdTtu_rj-Sc9w=/1923x1559/filters:fill(auto,1)/nigirisushi-1d865aa75e01437ab95916c025242ca3.jpg",
		name: "Nigiri Sushi",
		description: " Nigiri-Sushi- 2-Pack (Serves 6-8)",
		price: 25.69,
		rate: 5,
		country: "New Orleans, LA",
	},
	{
		id: "maki--sushi-roll-for-4",
		img: "https://media.istockphoto.com/photos/japanese-restaurant-sushi-dish-picture-id497022342?k=20&m=497022342&s=612x612&w=0&h=VkCoBfI4q67KiRfyIJ-bQx3S1EyjTfEWL2DtP9Ird-0=",
		name: "Maki Sushi Roll",
		description: "The Maki-Sushi-Roll for 4",
		price: 39.98,
		rate: 5,
		country: "Astoria, NY",
	},
	{
		id: "the-gothamist-prosciutto-burrata-sandwich-kit-4-pack",
		img: "https://assets3.thrillist.com/v1/image/2926863/382x382/flatten;crop;matte=ffffff=center;webp=auto;jpeg_quality=60.jpg",
		name: "Alidoro",
		description: '"The Gothamist" Prosciutto + Burrata Sandwich Kit - 4 Pack',
		price: 5.78,
		rate: 4,
		country: "New York, NY",
	},
	{
		id: "15428-pittsburgh-party-pack",
		img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132404/primanti-bros-sandwich-pack-choose-your-meat.db41e477a72d6957e98f860204ce356c.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
		name: "Primanti Bros.",
		description: "Primanti Bros Sandwich Pack - (Choose Your Meat)",
		price: 46.50,
		rate: 4,
		country: "Pittsburgh, PA",
	},
	{
		id: "pastrami-burnt-end-sandwich-kit",
		img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/101923/ugly-buns-burnt-end-sandwich-kit-4-pack.cadca40421c5a2b09d46673a8e2a8d37.jpeg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
		name: "Ugly Drum",
		description: 'Ugly Buns "Burnt End" Sandwich Kit - 6 Pack',
		price: 32.70,
		rate: 5,
		country: "Los Angeles, CA",
	},

	{
		id: "shake-shack-shackburger-16-pack",
		img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134022/shake-shack-shackburger-16-pack.316f8b09144db65931ea29e34869287a.png?ixlib=react-9.0.2&auto=format&ar=1%3A1",
		name: "Shake Shack",
		description: "Shake Shack Shackburger® – 16 Pack",
		price: 96.50,
		rate: 4,
		country: "New York, NY",
	},

	{
		id: "21-usda-prime-burgers-pack-of-18-8oz-each",
		img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133009/usda-prime-burgers-pack-of-18-8oz-each.274c67f15aa1c0b210dbf51801706670.png?ixlib=react-9.0.2&auto=format&ar=1%3A1",
		name: "Peter Luger Steak House",
		description: "USDA Prime Burgers - Pack of 18 (8oz each)",
		price: 125.95,
		rate: 4,
		country: "Brooklyn, NY",
	},

	{
		id: "goldbelly-burger-bash-pack",
		img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/66179/the-burger-bash-package.bd9d12d031865940bbe5faf15f1a62f8.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
		name: "Pat LaFrieda Meats",
		description: 'Goldbelly "Burger Bash" Pack',
		price: 34.75,
		rate: 5,
		country: "North Bergen, NJ",
	},
	{
		id: "burger-au-poivre-kit-4-pack",
		img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/103477/burger-au-poivre-kit-4-pack.3ca0e39b02db753304cd185638dad518.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
		name: "Raoul's",
		description: "Burger Au Poivre Kit - 4 Pack",
		price: 55.47,
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
