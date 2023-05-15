import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";

export const loader = async () => {
	return json({
		characters: [
			{
				slug: "my-first-character",
				name: "Lubash",
			},
			{
				slug: "another-character",
				name: "Schubert",
			},
		],
	});
};

export default () => {
	const { characters } = useLoaderData<typeof loader>();
	console.log(characters);
	return (
		<main>
			<h1>Characters</h1>
			<ul>
				{characters.map((character) => (
					<li key={character.slug}>
						<Link to={character.slug} className="text-blue-600 underline">
							{character.name}
						</Link>
					</li>
				))}
			</ul>
		</main>
	);
};
