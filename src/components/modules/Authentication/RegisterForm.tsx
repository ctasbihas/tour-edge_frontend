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
import { useRegisterMutation } from "@/redux/features/auth/auth.api";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import SocialButtons from "./SocialLoginButtons";

const formSchema = z
	.object({
		name: z
			.string()
			.trim()
			.min(3, "Name must be at least 3 characters long"),
		email: z
			.string()
			.trim()
			.min(1, "Email is required")
			.email("Invalid email format"),
		password: z
			.string()
			.min(1, "Password is required")
			.min(8, "Password must be at least 8 characters long")
			.regex(/(?=.*[a-z])/, {
				message: "Password must contain at least one lowercase letter",
			})
			.regex(/(?=.*[A-Z])/, {
				message: "Password must contain at least one uppercase letter",
			})
			.regex(/(?=.*[!@#$%^&*()])/, {
				message:
					"Password must contain at least one special character (!@#$%^&*())",
			})
			.regex(/(?=.*\d)/, {
				message: "Password must contain at least one number",
			}),
		confirmPassword: z.string().min(1, "Please confirm your password"),
	})
	.refine((v) => v.password === v.confirmPassword, {
		path: ["confirmPassword"],
		message: "Passwords do not match",
	});

type FormValues = z.infer<typeof formSchema>;

const RegisterForm = () => {
	const [register] = useRegisterMutation();
	const form = useForm<FormValues>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: "",
			email: "",
			password: "",
			confirmPassword: "",
		},
		mode: "onSubmit",
	});

	const onSubmit = async (data: FormValues) => {
		try {
			const result = await register(data).unwrap();
			console.log("Registration successful:", result);
		} catch (error) {
			console.error("Registration failed:", error);
		}
	};

	return (
		<>
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className="space-y-8"
					noValidate
				>
					<FormField
						control={form.control}
						name="name"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Name</FormLabel>
								<FormControl>
									<Input
										placeholder="John Doe"
										autoComplete="name"
										{...field}
									/>
								</FormControl>
								<FormDescription className="sr-only">
									This is your name.
								</FormDescription>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="email"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Email</FormLabel>
								<FormControl>
									<Input
										type="email"
										placeholder="example@domain.com"
										autoComplete="email"
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
								<FormLabel>Password</FormLabel>
								<FormControl>
									<Input
										type="password"
										placeholder="••••••••"
										autoComplete="new-password"
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
					<FormField
						control={form.control}
						name="confirmPassword"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Confirm Password</FormLabel>
								<FormControl>
									<Input
										type="password"
										placeholder="••••••••"
										autoComplete="new-password"
										{...field}
									/>
								</FormControl>
								<FormDescription className="sr-only">
									Confirm your password.
								</FormDescription>
								<FormMessage />
							</FormItem>
						)}
					/>
					<Button
						type="submit"
						className="w-full"
						disabled={form.formState.isSubmitting}
					>
						{form.formState.isSubmitting
							? "Registering..."
							: "Register"}
					</Button>
				</form>
			</Form>
			<SocialButtons />
		</>
	);
};

export default RegisterForm;
