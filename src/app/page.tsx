import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Rocket, CheckCircle, ArrowRight, Check } from "lucide-react";
import Link from "next/link";
import Auth from "./components/auth";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default function LandingPage() {
  const { userId } = auth();
  if (userId) {
    redirect("/dashboard");
  }
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <Rocket className="h-6 w-6 mr-2" />
          <span className="font-bold">Praulio</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            Features
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            Pricing
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            About
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            Contact
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            <Auth />
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Crea contenido autoamtico
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  StartupX helps you streamline your business processes, boost
                  productivity, and achieve your goals faster.
                </p>
              </div>
              <div className="space-x-4">
                <Button>Get Started</Button>
                <Button variant="outline">Learn More</Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              Key Features
            </h2>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <CheckCircle className="h-8 w-8 text-green-500" />
                <h3 className="text-xl font-bold">Intuitive Dashboard</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  Get a clear overview of your business performance at a glance.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <CheckCircle className="h-8 w-8 text-green-500" />
                <h3 className="text-xl font-bold">Advanced Analytics</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  Make data-driven decisions with our powerful analytics tools.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <CheckCircle className="h-8 w-8 text-green-500" />
                <h3 className="text-xl font-bold">Seamless Integration</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  Connect with your favorite tools and services effortlessly.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              Choose Your Plan
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-center mb-4">Starter</h3>
                <p className="text-center text-gray-500 dark:text-gray-400 mb-4">
                  Perfect for small teams
                </p>
                <p className="text-4xl font-bold text-center mb-6">
                  $29<span className="text-base font-normal">/month</span>
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <Check className="text-green-500 mr-2 h-5 w-5" />
                    <span>Up to 5 team members</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="text-green-500 mr-2 h-5 w-5" />
                    <span>Basic analytics</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="text-green-500 mr-2 h-5 w-5" />
                    <span>5GB storage</span>
                  </li>
                </ul>
                <Button className="mt-auto">Get Started</Button>
              </div>
              <div className="flex flex-col p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg border-2 border-primary">
                <h3 className="text-2xl font-bold text-center mb-4">Pro</h3>
                <p className="text-center text-gray-500 dark:text-gray-400 mb-4">
                  Best for growing businesses
                </p>
                <p className="text-4xl font-bold text-center mb-6">
                  $79<span className="text-base font-normal">/month</span>
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <Check className="text-green-500 mr-2 h-5 w-5" />
                    <span>Up to 20 team members</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="text-green-500 mr-2 h-5 w-5" />
                    <span>Advanced analytics</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="text-green-500 mr-2 h-5 w-5" />
                    <span>50GB storage</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="text-green-500 mr-2 h-5 w-5" />
                    <span>Priority support</span>
                  </li>
                </ul>
                <Button className="mt-auto">Get Started</Button>
              </div>
              <div className="flex flex-col p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-center mb-4">
                  Enterprise
                </h3>
                <p className="text-center text-gray-500 dark:text-gray-400 mb-4">
                  For large-scale operations
                </p>
                <p className="text-4xl font-bold text-center mb-6">Custom</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <Check className="text-green-500 mr-2 h-5 w-5" />
                    <span>Unlimited team members</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="text-green-500 mr-2 h-5 w-5" />
                    <span>Custom analytics</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="text-green-500 mr-2 h-5 w-5" />
                    <span>Unlimited storage</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="text-green-500 mr-2 h-5 w-5" />
                    <span>24/7 dedicated support</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="text-green-500 mr-2 h-5 w-5" />
                    <span>Custom integrations</span>
                  </li>
                </ul>
                <Button className="mt-auto">Contact Sales</Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Get Started?
                </h2>
                <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Join thousands of satisfied customers and take your business
                  to the next level.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input
                    className="max-w-lg flex-1"
                    placeholder="Enter your email"
                    type="email"
                  />
                  <Button type="submit">
                    Subscribe
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  By subscribing, you agree to our Terms of Service and Privacy
                  Policy.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2024 StartupX Inc. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
