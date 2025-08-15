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
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link } from "react-router";
import { z } from "zod";
import SocialButtons from "./SocialLoginButtons";

const LoginForm = () => {
	const formSchema = z.object({
		email: z
			.string()
			.min(1, "Email is required")
			.email("Invalid email format"),
		password: z
			.string({ error: "Password is required" })
			.min(8, "Password must be at least 8 characters long")
			.regex(/^(?=.*[a-z])/, {
				message: "Password must contain at least one lowercase letter",
			})
			.regex(/^(?=.*[A-Z])/, {
				message: "Password must contain at least one uppercase letter",
			})
			.regex(/^(?=.*[!@#$%^&*()])/, {
				message:
					"Password must contain at least one special character (!@#$%^&*())",
			})
			.regex(/^(?=.*\d)/, {
				message: "Password must contain at least one number",
			}),
	});

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	});
	const onSubmit = (data: z.infer<typeof formSchema>) => {
		console.log("Form submitted:", data);
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
