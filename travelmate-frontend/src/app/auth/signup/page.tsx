
"use client";

import { Suspense, useState, FormEvent, ChangeEvent } from "react";
import { Card, Button, Link, TextField, Label, InputGroup, Input } from "@heroui/react";
import { Radio, RadioGroup } from "@heroui/react";
import { Eye, EyeSlash, Person, At, ShieldKeyhole } from "@gravity-ui/icons";
import { authClient, signUp } from "@/lib/auth-client";
import { useRouter, useSearchParams } from "next/navigation";
import { FcGoogle } from "react-icons/fc";

type UserRole = "guest" | "user";

function SignupForm() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [role, setRole] = useState<UserRole>("guest");

  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectTo: string = searchParams.get("redirect") || "/";

  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");

  const toggleVisibility = (): void => setIsVisible((prev) => !prev);

  const handleSignup = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    setError("");
    setSuccess("");
    setIsLoading(true);

    const plan = role === "guest" ? "guest_free" : "user_free";

    try {
      const { error: authError } = await signUp.email({
        email,
        password,
        name,
        fetchOptions: {
          body: {
            plan,
          },
        },
      });

      if (authError) {
        setError(authError.message || "Something went wrong during signup.");
      } else {
        setSuccess("Account created successfully! Welcome.");
        setName("");
        setEmail("");
        setPassword("");
        router.push(redirectTo);
      }
    } catch (err) {
      setError("An unexpected network error occurred.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
    console.log(data);
  };

  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <Card className="w-full max-w-md p-6 shadow-sm border border-zinc-200 dark:border-zinc-800">

        <div className="flex flex-col items-center justify-center gap-1 pb-6 border-b border-zinc-100 dark:border-zinc-800 mb-6 text-center">
          <h1 className="text-2xl font-semibold tracking-tight text-blue-950 dark:text-blue-50">Create an account</h1>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">Fill in the fields below to get started</p>
        </div>

        <form onSubmit={handleSignup} className="flex flex-col gap-5">

          <TextField isRequired name="name" className="flex flex-col gap-1.5">
            <Label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Name</Label>
            <InputGroup className="flex items-center gap-2 border border-zinc-200 dark:border-zinc-800 rounded-xl px-3 bg-zinc-50 dark:bg-zinc-900 focus-within:border-primary transition-colors">
              <Person className="text-zinc-400 pointer-events-none" width={16} height={16} />
              <Input
                type="text"
                placeholder="Enter your full name"
                value={name}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                className="w-full bg-transparent py-2 text-sm outline-none border-none text-zinc-900 dark:text-zinc-100"
              />
            </InputGroup>
          </TextField>

          <TextField isRequired name="email" type="email" className="flex flex-col gap-1.5">
            <Label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Email Address</Label>
            <InputGroup className="flex items-center gap-2 border border-zinc-200 dark:border-zinc-800 rounded-xl px-3 bg-zinc-50 dark:bg-zinc-900 focus-within:border-primary transition-colors">
              <At className="text-zinc-400 pointer-events-none" width={16} height={16} />
              <Input
                placeholder="you@example.com"
                value={email}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                className="w-full bg-transparent py-2 text-sm outline-none border-none text-zinc-900 dark:text-zinc-100"
              />
            </InputGroup>
          </TextField>

          <TextField isRequired name="password" className="flex flex-col gap-1.5">
            <Label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Password</Label>
            <InputGroup className="flex items-center gap-2 border border-zinc-200 dark:border-zinc-800 rounded-xl px-3 bg-zinc-50 dark:bg-zinc-900 focus-within:border-primary transition-colors">
              <ShieldKeyhole className="text-zinc-400 pointer-events-none" width={16} height={16} />
              <Input
                type={isVisible ? "text" : "password"}
                placeholder="Choose a password"
                value={password}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                className="w-full bg-transparent py-2 text-sm outline-none border-none text-zinc-900 dark:text-zinc-100"
              />
              <button
                className="focus:outline-none text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 transition"
                type="button"
                onClick={toggleVisibility}
                aria-label="toggle password visibility"
              >
                {isVisible ? <EyeSlash width={18} height={18} /> : <Eye width={18} height={18} />}
              </button>
            </InputGroup>
          </TextField>

          <div className="flex flex-col gap-2">
            <Label className="text-sm font-medium text-zinc-300">User plan</Label>
            <div className="grid grid-cols-2 gap-1 p-1 bg-zinc-900/90 border border-zinc-800 rounded-xl">
              <button
                type="button"
                onClick={() => setRole("guest")}
                className={`py-2 text-sm font-semibold rounded-lg transition-all ${role === "guest"
                    ? "bg-blue-600 text-white shadow-md shadow-blue-950/40"
                    : "text-zinc-400 hover:text-zinc-200"
                  }`}
              >
                Guest
              </button>
              <button
                type="button"
                onClick={() => setRole("user")}
                className={`py-2 text-sm font-semibold rounded-lg transition-all ${role === "user"
                    ? "bg-blue-600 text-white shadow-md shadow-blue-950/40"
                    : "text-zinc-400 hover:text-zinc-200"
                  }`}
              >
                User
              </button>
            </div>
          </div>

          {error && (
            <div className="p-3.5 text-xs font-medium rounded-xl bg-red-100/60 dark:bg-red-950/50 text-red-700 dark:text-red-400 border border-red-200 dark:border-red-900">
              <span className="font-semibold">Error:</span> {error}
            </div>
          )}

          {success && (
            <div className="p-3.5 text-xs font-medium rounded-xl bg-emerald-100/60 dark:bg-emerald-950/50 text-emerald-800 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-900">
              <span className="font-semibold">Success:</span> {success}
            </div>
          )}

          <Button
            type="submit"
            className="w-full font-semibold rounded-xl text-sm h-12 bg-blue-600 hover:bg-blue-700 text-white"
            isDisabled={isLoading}
          >
            {isLoading ? "Signing up..." : "Sign Up"}
          </Button>

          <div className="text-center pt-4 border-t border-zinc-100 dark:border-zinc-800 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            Already have an account?{" "}
            <Link href={`/auth/signin?redirect=${redirectTo}`} className="font-medium cursor-pointer text-sm text-blue-600 dark:text-blue-400">
              Sign in instead
            </Link>
          </div>

        </form>
        <p className="text-center mt-4">or</p>

        <Button onClick={handleGoogleSignIn} className="w-full text-white hover:bg-accent" variant="outline">
          <FcGoogle />
          Sign in with Google
        </Button>
      </Card>
    </div>
  );
}

export default function SignupPage() {
  return (
    <Suspense fallback={<div className="flex min-h-screen items-center justify-center">Loading...</div>}>
      <SignupForm />
    </Suspense>
  );
}