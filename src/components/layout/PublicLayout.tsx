import Navbar from "./Navbar";

const PublicLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<main>
			<Navbar />
			{children}
		</main>
	);
};

export default PublicLayout;
