import Footer from "./Footer";
import Navbar from "./Navbar";

const PublicLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<main>
			<Navbar />
			{children}
			<Footer />
		</main>
	);
};

export default PublicLayout;
