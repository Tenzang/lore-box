import type { V2_MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: V2_MetaFunction = () => {
	return [{ title: "New Remix App" }];
};

export default function Index() {
	return (
		<main>
			<Link to="/characters" className="text-xl text-blue-600 underline">
				Characters
			</Link>
			<h1 className="text-3xl font-bold underline">Hello world!</h1>
			lore box coming soon...
		</main>
	);
}
