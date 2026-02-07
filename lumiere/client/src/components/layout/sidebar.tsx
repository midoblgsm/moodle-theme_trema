import { 
  LayoutDashboard, 
  BookOpen, 
  Calendar, 
  MessageSquare, 
  GraduationCap, 
  Library, 
  Settings,
  LogOut,
  Menu,
  Code
} from "lucide-react";
import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/" },
  { icon: BookOpen, label: "My Courses", href: "/courses" },
  { icon: Calendar, label: "Calendar", href: "/calendar" },
  { icon: MessageSquare, label: "Messages", href: "/messages" },
  { icon: GraduationCap, label: "Grades", href: "/grades" },
  { icon: Library, label: "Library", href: "/library" },
];

export function Sidebar() {
  const [location] = useLocation();
  const isMobile = useIsMobile();

  return (
    <aside className="w-64 border-r border-sidebar-border bg-sidebar h-screen flex flex-col sticky top-0 hidden md:flex">
      <div className="p-6 flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
          <GraduationCap className="text-white w-5 h-5" />
        </div>
        <span className="font-heading font-bold text-xl text-sidebar-foreground">Lumière</span>
      </div>

      <nav className="flex-1 px-4 py-4 space-y-1">
        {navItems.map((item) => {
          const isActive = location === item.href;
          return (
            <Link key={item.href} href={item.href}>
              <Button
                variant="ghost"
                className={cn(
                  "w-full justify-start gap-3 h-11 rounded-xl transition-all duration-200",
                  isActive 
                    ? "bg-sidebar-accent text-sidebar-accent-foreground font-medium shadow-sm" 
                    : "text-muted-foreground hover:text-foreground hover:bg-sidebar-accent/50"
                )}
              >
                <item.icon className={cn("w-5 h-5", isActive ? "text-primary" : "text-muted-foreground")} />
                {item.label}
              </Button>
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-sidebar-border mt-auto">
        <Link href="/export">
           <Button variant="ghost" className="w-full justify-start gap-3 text-muted-foreground hover:text-foreground mb-1">
            <Code className="w-5 h-5" />
            Theme Export
          </Button>
        </Link>
        <Link href="/settings">
           <Button variant="ghost" className="w-full justify-start gap-3 text-muted-foreground hover:text-foreground">
            <Settings className="w-5 h-5" />
            Settings
          </Button>
        </Link>
        <Link href="/login">
          <Button variant="ghost" className="w-full justify-start gap-3 text-destructive hover:text-destructive/80 hover:bg-destructive/10 mt-1">
            <LogOut className="w-5 h-5" />
            Log Out
          </Button>
        </Link>
      </div>
    </aside>
  );
}
