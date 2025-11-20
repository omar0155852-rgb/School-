import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import { DataProvider, useData } from "@/lib/store";
import AuthPage from "@/pages/auth-page";
import Dashboard from "@/pages/dashboard";
import SchoolView from "@/pages/school-view";

function Router() {
  const { user } = useData();

  if (!user) {
    return <AuthPage />;
  }

  return (
    <Switch>
      <Route path="/" component={Dashboard} />
      <Route path="/school/:id" component={SchoolView} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <DataProvider>
          <Router />
          <Toaster />
        </DataProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
