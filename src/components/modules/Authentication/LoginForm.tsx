import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useLoginMutation } from "@/redux/features/auth/auth.api";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link } from "react-router";
import { z } from "zod";
import SocialButtons from "./SocialLoginButtons";

const formSchema = z.object({
	email: z.email().min(1, "Email is required"),
	password: z
		.string({ error: "Password is required" })
		.min(8, "Password must be at least 8 characters long"),
});

const LoginForm = () => {
	const [login] = useLoginMutation();

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	});
	const onSubmit = async (data: z.infer<typeof formSchema>) => {
		try {
			const result = await login(data).unwrap();

			console.log(result);
		} catch (error) {
			console.error("Login failed:", error);
		}
	};
	return (
		<>
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className="space-y-8"
				>
					<FormField
						control={form.control}
						name="email"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Email</FormLabel>
								<FormControl>
									<Input
										placeholder="example@domain.com"
										{...field}
									/>
								</FormControl>
								<FormDescription className="sr-only">
									This is your email address.
								</FormDescription>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="password"
						render={({ field }) => (
							<FormItem>
								<div className="flex items-center justify-between">
									<FormLabel>Password</FormLabel>
									<Link
										to="/forgot-password"
										className="text-sm text-muted-foreground hover:underline"
									>
										Forgot Password?
									</Link>
								</div>
								<FormControl>
									<Input
										placeholder="••••••••"
										type="password"
										{...field}
									/>
								</FormControl>
								<FormDescription className="sr-only">
									This is your super secure password.
								</FormDescription>
								<FormMessage />
							</FormItem>
						)}
					/>
					<Button
						type="submit"
						className="w-full"
					>
						Login
					</Button>
				</form>
			</Form>
			<SocialButtons />
		</>
	);
};

export default LoginForm;
