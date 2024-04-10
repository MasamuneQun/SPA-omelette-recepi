import "./styles.scss";
import Image from "next/image";
import omeletteImage from "../public/image-omelette.jpeg";
function Divider(props: any) {
	return <div className={`divider my-[${props.margin}]`}></div>;
}
export default function Home() {
	return (
		<main className="min-h-screen min-w-full">
			<div className="w-auto h-full py-[6rem] px-6">
				<div className="content-frame">
					<div className="content-container">
						<div>
							<Image src={omeletteImage} alt="Omelette" className="rounded-[40px]" />
							<h1 className="h1 young-serif my-[2.5rem]">Simple Omelette Recipe</h1>
							<p className="p outfit">
								An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection,
								optionally filled with your choice of cheese, vegetables, or meats.
							</p>
						</div>
						<div className="frame-preparation-time outfit">
							<h3 className="h3 font-semibold">Preparation time</h3>
							<ul className="text-[#7E2A4C] list-disc list-inside">
								<li>
									<b>Total</b>
									<span>: Approximately 10 minutes</span>
								</li>
								<li>
									<b>Preparation</b>
									<span>: 5 minutes</span>
								</li>
								<li>
									<b>Cooking</b>
									<span>: 5 minutes</span>
								</li>
							</ul>
						</div>
						<div className="frame-ingredients outfit">
							<h2 className="h2 young-serif mb-4">Ingredients</h2>
							<ul className="list-disc list-inside">
								<li>2-3 large eggs</li>
								<li>Salt, to taste</li>
								<li>Pepper, to taste</li>
								<li>1 tablespoon of butter or oil</li>
								<li>Optional fillings: cheese, diced vegetables, cooked meats, herbs</li>
							</ul>
						</div>
						<Divider margin="2.5rem" />
						<div className="frame-instructions outfit ">
							<h2 className="h2 young-serif mb-4">Instructions</h2>
							<ol className="list-outside list-decimal">
								<li>
									<b>Beat the eggs</b>
									<span>
										: In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon
										of water or milk for a fluffier texture.
									</span>
								</li>
								<li>
									<b>Heat the pan</b>
									<span>: Place a non-stick frying pan over medium heat and add butter or oil.</span>
								</li>
								<li>
									<b>Cook the omelette</b>
									<span>
										: Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the
										surface.
									</span>
								</li>
								<li>
									<b>Add fillings (optonal)</b>
									<span>
										: When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen
										fillings over one half of the omelette.
									</span>
								</li>
								<li>
									<b>Fold and serve</b>
									<span>
										: As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for
										another minute, then slide it onto a plate.
									</span>
								</li>
								<li>
									<b>Enjoy</b>
									<span>: Serve hot, with additional salt and pepper if needed.</span>
								</li>
							</ol>
						</div>
						<Divider margin="2.5rem" />
						<div className="frame-nutrition outfit">
							<h2 className="h2 young-serif">Nutrition</h2>
							<p className="p mt-4 mb-4">The table below shows nutritional values per serving without the additional fillings.</p>
							<table>
								<tbody>
									<tr>
										<th>Calories</th>
										<th>277kcal</th>
									</tr>
									<tr>
										<th>Carbs</th>
										<th>0g</th>
									</tr>
									<tr>
										<th>Protein</th>
										<th>20g</th>
									</tr>
									<tr>
										<th>Fat</th>
										<th>22g</th>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}
