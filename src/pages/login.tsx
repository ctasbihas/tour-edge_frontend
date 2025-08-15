import SlideImage from "@/assets/login.png";
import LoginForm from "@/components/modules/Authentication/LoginForm";
import { Card, CardContent } from "@/components/ui/card";

const Login = () => {
	return (
		<main className="bg-muted flex min-h-svh flex-col items-center justify-center p-6 md:p-10">
			<div className="w-full max-w-sm md:max-w-3xl">
				<div className="flex flex-col gap-6">
					<Card className="overflow-hidden p-0">
						<CardContent className="grid p-0 md:grid-cols-2">
							<div className="p-6 md:p-8">
								<div className="flex flex-col gap-6">
									<div className="flex flex-col items-center text-center">
										<h1 className="text-2xl font-bold">
											Welcome back
										</h1>
										<p className="text-muted-foreground text-balance">
											Login to your Tour Edge account
										</p>
									</div>
									<LoginForm />
								</div>
							</div>
							<div className="bg-muted relative hidden md:block">
								<img
									src={SlideImage}
									alt="Image"
									className="absolute inset-0 h-full w-full object-cover dark:bg-lime-950 bg-lime-100"
								/>
							</div>
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

export default Login;
