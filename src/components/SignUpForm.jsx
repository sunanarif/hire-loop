"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { Card, Button } from "@heroui/react";
import { signUp } from "@/lib/auth-client";

import {
  FiUser,
  FiMail,
  FiLock,
  FiEye,
  FiEyeOff,
} from "react-icons/fi";

export default function SignUpForm() {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    const form = new FormData(e.currentTarget);

    const name = form.get("name");
    const email = form.get("email");
    const password = form.get("password");

    setLoading(true);

    try {
      const result = await signUp.email({
        name,
        email,
        password,
      });

      if (result?.error) {
        setError(result.error.message);
        setLoading(false);
        return;
      }

      router.push("/login");
    } catch (err) {
      setError("Something went wrong. Please try again.");
    }

    setLoading(false);
  };

  return (
    <Card className="w-full max-w-md bg-zinc-950 border border-zinc-800 p-8 rounded-3xl shadow-2xl">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-white">
          Create Account
        </h1>

        <p className="text-zinc-400 mt-2">
          Start your journey with HireLoop
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="mt-8 space-y-5"
      >
        {/* Name */}
        <div>
          <label className="block text-sm text-zinc-300 mb-2">
            Full Name
          </label>

          <div className="relative">
            <FiUser className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" />

            <input
              type="text"
              name="name"
              required
              placeholder="John Doe"
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-zinc-900 border border-zinc-700 text-white outline-none focus:border-violet-500"
            />
          </div>
        </div>

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
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-zinc-900 border border-zinc-700 text-white outline-none focus:border-violet-500"
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
              className="w-full pl-10 pr-12 py-3 rounded-xl bg-zinc-900 border border-zinc-700 text-white outline-none focus:border-violet-500"
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

        {error && (
          <p className="text-red-500 text-sm">
            {error}
          </p>
        )}

        <Button
          type="submit"
          isLoading={loading}
          className="w-full bg-violet-600 text-white font-semibold"
        >
          Create Account
        </Button>
      </form>

      <p className="text-center mt-6 text-sm text-zinc-400">
        Already have an account?{" "}
        <Link
          href="/auth/singin"
          className="text-violet-400 hover:underline"
        >
          Login
        </Link>
      </p>
    </Card>
  );
}