"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { Card, Button } from "@heroui/react";
import { signIn } from "@/lib/auth-client";

import {
  FiMail,
  FiLock,
  FiEye,
  FiEyeOff,
} from "react-icons/fi";

export default function LoginForm() {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    const form = new FormData(e.currentTarget);

    const email = form.get("email");
    const password = form.get("password");

    setLoading(true);

    try {
      const result = await signIn.email({
        email,
        password,
      });

      if (result?.error) {
        setError(result.error.message);
        setLoading(false);
        return;
      }

      router.push("/");
    } catch (err) {
      setError("Something went wrong. Please try again.");
    }

    setLoading(false);
  };

  return (
    <Card className="w-full max-w-md bg-zinc-950 border border-zinc-800 p-8 rounded-3xl shadow-2xl">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-white">
          Welcome Back
        </h1>

        <p className="text-zinc-400 mt-2">
          Sign in to continue to HireLoop
        </p>
      </div>

      <form onSubmit={handleSubmit} className="mt-8 space-y-5">
        {/* Email */}
        <div>
          <label className="block text-sm text-zinc-300 mb-2">
            Email
          </label>

          <div className="relative">
            <FiMail className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" />

            <input
              type="email"
              name="email"
              required
              placeholder="john@gmail.com"
              className="w-full rounded-xl border border-zinc-700 bg-zinc-900 py-3 pl-10 pr-4 text-white outline-none focus:border-violet-500"
            />
          </div>
        </div>

        {/* Password */}
        <div>
          <label className="block text-sm text-zinc-300 mb-2">
            Password
          </label>

          <div className="relative">
            <FiLock className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" />

            <input
              type={showPassword ? "text" : "password"}
              name="password"
              required
              placeholder="********"
              className="w-full rounded-xl border border-zinc-700 bg-zinc-900 py-3 pl-10 pr-12 text-white outline-none focus:border-violet-500"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-white"
            >
              {showPassword ? (
                <FiEyeOff size={18} />
              ) : (
                <FiEye size={18} />
              )}
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center gap-2 text-zinc-400">
            <input
              type="checkbox"
              className="accent-violet-600"
            />
            Remember me
          </label>

          <Link
            href="/forgot-password"
            className="text-violet-400 hover:underline"
          >
            Forgot Password?
          </Link>
        </div>

        {error && (
          <p className="text-sm text-red-500">
            {error}
          </p>
        )}

        <Button
          type="submit"
          isLoading={loading}
          className="w-full bg-violet-600 text-white font-semibold"
        >
          Sign In
        </Button>
      </form>

      <p className="mt-6 text-center text-sm text-zinc-400">
        Do not have an account?{" "}
        <Link
          href="/signup"
          className="text-violet-400 hover:underline"
        >
          Sign Up
        </Link>
      </p>
    </Card>
  );
}