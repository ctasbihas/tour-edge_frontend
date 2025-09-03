import { Card, CardContent } from "@/components/ui/card";
import { useLocation, useNavigate } from "react-router";

const VerifyEmail = () => {
	const location = useLocation();
	const navigate = useNavigate();

	console.log(location.state);
	if (!location.state) {
		navigate(-1);
		return null;
	}

	return (
		<main className="bg-muted flex min-h-svh flex-col items-center justify-center p-6 md:p-10">
			<div className="w-full max-w-sm md:max-w-3xl">
				<div className="flex flex-col gap-6">
					<Card className="overflow-hidden p-0">
						<CardContent className="grid p-0 md:grid-cols-2">
							<h1>Verify your email address</h1>
						</CardContent>
					</Card>
					<div className="text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
						By clicking continue, you agree to our{" "}
						<a href="">Terms of Service</a> and{" "}
						<a href="">Privacy Policy</a>.
					</div>
				</div>
			</div>
		</main>
	);
};

export default VerifyEmail;
