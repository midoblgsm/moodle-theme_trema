import { MainLayout } from "@/components/layout/main-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { cn } from "@/lib/utils";
import { 
  Clock, 
  TrendingUp, 
  ArrowRight,
  MoreHorizontal,
  FileText,
  AlertCircle
} from "lucide-react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const activityData = [
  { day: "Mon", hours: 2.5 },
  { day: "Tue", hours: 4.2 },
  { day: "Wed", hours: 3.8 },
  { day: "Thu", hours: 5.5 },
  { day: "Fri", hours: 1.2 },
  { day: "Sat", hours: 3.0 },
  { day: "Sun", hours: 2.0 },
];

const courses = [
  {
    id: 1,
    title: "Advanced UI Design Principles",
    instructor: "Sarah Connors",
    progress: 75,
    nextLesson: "Color Theory in Practice",
    color: "bg-blue-500",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 2,
    title: "React Performance Patterns",
    instructor: "Michael Chen",
    progress: 32,
    nextLesson: "Memoization Techniques",
    color: "bg-purple-500",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 3,
    title: "Data Visualization D3.js",
    instructor: "Emma Watson",
    progress: 12,
    nextLesson: "SVG Paths Basics",
    color: "bg-emerald-500",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
  },
];

const deadlines = [
  { id: 1, title: "UI Case Study", course: "Advanced UI Design", due: "Today, 11:59 PM", type: "Assignment", urgent: true },
  { id: 2, title: "React Quiz 3", course: "React Patterns", due: "Tomorrow", type: "Quiz", urgent: false },
  { id: 3, title: "D3 Project Proposal", course: "Data Vis", due: "Fri, Oct 24", type: "Project", urgent: false },
];

export default function Dashboard() {
  return (
    <MainLayout>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content Area */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* Welcome Banner */}
          <div className="relative rounded-3xl bg-primary overflow-hidden text-primary-foreground p-8 shadow-lg">
            <div className="relative z-10 max-w-lg">
              <h1 className="text-3xl font-heading font-bold mb-2">Welcome back, Alex!</h1>
              <p className="text-primary-foreground/90 text-lg mb-6">
                You've completed <strong>85%</strong> of your weekly goals. Keep up the momentum!
              </p>
              <Button variant="secondary" className="rounded-full px-6 font-medium shadow-none hover:bg-white">
                Continue Learning <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
            
            {/* Abstract Background Shapes */}
            <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-20 pointer-events-none">
               <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <path fill="#FFFFFF" d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,81.6,-46.6C91.4,-34.1,98.1,-19.2,95.8,-5.3C93.5,8.6,82.2,21.5,70.6,31.7C59,41.9,47.1,49.5,35.4,56.8C23.7,64.1,12.2,71.1,-0.9,72.7C-14,74.3,-29.5,70.5,-42.6,63.6C-55.7,56.7,-66.4,46.7,-74.6,34.5C-82.8,22.3,-88.5,7.9,-86.2,-5.4C-83.9,-18.7,-73.6,-30.9,-62.3,-40.3C-51,-49.7,-38.7,-56.3,-26.1,-64.8C-13.5,-73.3,-0.6,-83.7,13.2,-84.9C27,-86.1,44.7,-76.4,44.7,-76.4Z" transform="translate(100 100)" />
              </svg>
            </div>
            {/* Using the generated image as a subtle overlay instead if desired, but CSS shapes are cleaner for this banner style */}
          </div>

          {/* Continue Learning Section */}
          <section>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-heading font-semibold text-foreground">Continue Learning</h2>
              <Button variant="ghost" className="text-primary hover:text-primary/80">View All</Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {courses.map((course) => (
                <Link href={`/courses/${course.id}`} key={course.id}>
                  <Card className="cursor-pointer group overflow-hidden border-transparent shadow-sm hover:shadow-md transition-all duration-300 bg-white dark:bg-card">
                    <div className="h-32 overflow-hidden relative">
                      <img 
                        src={course.image} 
                        alt={course.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <Badge className="absolute top-3 right-3 bg-white/20 backdrop-blur-md text-white border-none hover:bg-white/30">
                        In Progress
                      </Badge>
                    </div>
                    <CardContent className="p-5">
                      <h3 className="font-heading font-semibold text-lg leading-tight mb-2 group-hover:text-primary transition-colors">
                        {course.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">{course.nextLesson}</p>
                      
                      <div className="space-y-2">
                        <div className="flex justify-between text-xs font-medium text-muted-foreground">
                          <span>Progress</span>
                          <span>{course.progress}%</span>
                        </div>
                        <Progress value={course.progress} className="h-2" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </section>

          {/* Activity Chart */}
          <section>
            <h2 className="text-xl font-heading font-semibold text-foreground mb-6">Study Activity</h2>
            <Card className="border-none shadow-sm bg-white dark:bg-card">
              <CardContent className="p-6">
                <div className="h-[250px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={activityData}>
                      <defs>
                        <linearGradient id="colorHours" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3}/>
                          <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" />
                      <XAxis 
                        dataKey="day" 
                        axisLine={false} 
                        tickLine={false} 
                        tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }} 
                        dy={10}
                      />
                      <YAxis 
                        axisLine={false} 
                        tickLine={false} 
                        tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }} 
                      />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: 'hsl(var(--card))', 
                          border: '1px solid hsl(var(--border))',
                          borderRadius: '8px',
                          boxShadow: 'var(--shadow-md)'
                        }}
                        itemStyle={{ color: 'hsl(var(--foreground))' }}
                      />
                      <Area 
                        type="monotone" 
                        dataKey="hours" 
                        stroke="hsl(var(--primary))" 
                        strokeWidth={3}
                        fillOpacity={1} 
                        fill="url(#colorHours)" 
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>

        {/* Right Sidebar Area */}
        <div className="space-y-8">
          {/* Calendar Widget Placeholder */}
          <Card className="border-none shadow-sm overflow-hidden">
            <CardHeader className="pb-2 bg-gradient-to-br from-primary/5 to-secondary/50">
              <CardTitle className="text-lg font-heading">October 2024</CardTitle>
            </CardHeader>
            <CardContent className="p-4 pt-6">
              <div className="grid grid-cols-7 gap-2 text-center text-sm mb-2">
                <span className="text-muted-foreground">M</span>
                <span className="text-muted-foreground">T</span>
                <span className="text-muted-foreground">W</span>
                <span className="text-muted-foreground">T</span>
                <span className="text-muted-foreground">F</span>
                <span className="text-muted-foreground">S</span>
                <span className="text-muted-foreground">S</span>
              </div>
              <div className="grid grid-cols-7 gap-2 text-center text-sm">
                {[...Array(31)].map((_, i) => (
                  <div 
                    key={i} 
                    className={cn(
                      "aspect-square flex items-center justify-center rounded-full text-foreground cursor-pointer hover:bg-secondary transition-colors",
                      i + 1 === 23 ? "bg-primary text-primary-foreground font-bold hover:bg-primary" : "",
                      i + 1 === 24 ? "border border-destructive text-destructive" : ""
                    )}
                  >
                    {i + 1}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Upcoming Deadlines */}
          <section>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-heading font-semibold">Upcoming Deadlines</h2>
            </div>
            <div className="space-y-3">
              {deadlines.map((item) => (
                <div 
                  key={item.id} 
                  className="bg-white dark:bg-card p-4 rounded-2xl border border-transparent hover:border-border shadow-sm transition-all flex items-start gap-4 group"
                >
                  <div className={cn(
                    "w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-1",
                    item.urgent ? "bg-destructive/10 text-destructive" : "bg-secondary text-secondary-foreground"
                  )}>
                    {item.urgent ? <AlertCircle className="w-5 h-5" /> : <Clock className="w-5 h-5" />}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-sm group-hover:text-primary transition-colors">{item.title}</h4>
                    <p className="text-xs text-muted-foreground mb-1">{item.course}</p>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="text-[10px] h-5 px-1.5 border-border">{item.type}</Badge>
                      <span className={cn("text-xs font-medium", item.urgent ? "text-destructive" : "text-muted-foreground")}>
                        {item.due}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Recent Feedback */}
          <section>
             <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-heading font-semibold">Recent Feedback</h2>
            </div>
            <div className="bg-white dark:bg-card p-5 rounded-2xl shadow-sm border border-transparent">
              <div className="flex gap-4 mb-3">
                 <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 flex items-center justify-center font-bold">
                   A
                 </div>
                 <div>
                   <h4 className="font-semibold text-sm">Design Systems 101</h4>
                   <p className="text-xs text-muted-foreground">Assignment 2 • Graded yesterday</p>
                 </div>
              </div>
              <p className="text-sm text-foreground/80 italic mb-3">
                "Excellent work on the component architecture. Your documentation was particularly clear."
              </p>
              <Button variant="outline" size="sm" className="w-full text-xs h-8">View Grading Details</Button>
            </div>
          </section>
        </div>
      </div>
    </MainLayout>
  );
}
