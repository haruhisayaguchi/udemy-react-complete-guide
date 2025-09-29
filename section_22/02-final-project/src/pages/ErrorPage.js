import MainNavigation from "../components/MainNavigation";

export default function ErrorPage() {
	return (
		<>
			<MainNavigation />
			<main>
				<h1>An error occured!</h1>
				<p>Page doesn't exist</p>
			</main>
		</>
	)
}