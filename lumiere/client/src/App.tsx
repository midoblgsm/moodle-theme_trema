import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Dashboard from "@/pages/dashboard";
import Courses from "@/pages/courses";
import Login from "@/pages/login";
import ThemeExport from "@/pages/theme-export";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Dashboard} />
      <Route path="/courses" component={Courses} />
      <Route path="/login" component={Login} />
      <Route path="/export" component={ThemeExport} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
