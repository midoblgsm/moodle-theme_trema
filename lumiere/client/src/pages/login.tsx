import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";
import { Link, useLocation } from "wouter";

export default function Login() {
  const [, setLocation] = useLocation();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, validation and auth would happen here
    setLocation("/");
  };

  return (
    <div className="min-h-screen w-full flex bg-background">
      {/* Left Side - Visual */}
      <div className="hidden lg:flex w-1/2 bg-primary relative overflow-hidden items-center justify-center p-12">
        <div className="relative z-10 max-w-lg text-white">
           <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center mb-8">
            <GraduationCap className="text-white w-7 h-7" />
          </div>
          <h1 className="text-5xl font-heading font-bold mb-6">Learn without limits.</h1>
          <p className="text-lg text-primary-foreground/80 leading-relaxed">
            Join thousands of students on Lumière to master new skills, advance your career, and explore your passions through our ergonomic learning platform.
          </p>
        </div>
        
        {/* Background Graphic */}
        <div className="absolute inset-0 pointer-events-none">
          <img 
             src="/images/dashboard-hero.png" 
             alt="Abstract Learning" 
             className="w-full h-full object-cover opacity-40 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent opacity-80" />
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="max-w-md w-full space-y-8">
          <div className="text-center lg:text-left">
            <div className="lg:hidden w-12 h-12 rounded-xl bg-primary flex items-center justify-center mx-auto mb-6">
              <GraduationCap className="text-white w-7 h-7" />
            </div>
            <h2 className="text-3xl font-heading font-bold">Welcome back</h2>
            <p className="text-muted-foreground mt-2">Enter your credentials to access your account.</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="alex@example.com" className="h-12 rounded-lg bg-secondary/30 border-transparent focus:bg-background" />
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <Link href="/forgot-password" className="text-xs text-primary hover:underline font-medium">Forgot password?</Link>
              </div>
              <Input id="password" type="password" placeholder="••••••••" className="h-12 rounded-lg bg-secondary/30 border-transparent focus:bg-background" />
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox id="remember" />
              <Label htmlFor="remember" className="text-sm font-normal text-muted-foreground">Remember me for 30 days</Label>
            </div>

            <Button type="submit" className="w-full h-12 rounded-xl text-base font-semibold shadow-md hover:shadow-lg transition-all">
              Sign In
            </Button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-border" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Button variant="outline" type="button" className="h-11 rounded-xl">
                Google
              </Button>
              <Button variant="outline" type="button" className="h-11 rounded-xl">
                Microsoft
              </Button>
            </div>
          </form>
          
          <p className="text-center text-sm text-muted-foreground">
            Don't have an account? <Link href="/register" className="text-primary font-semibold hover:underline">Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
