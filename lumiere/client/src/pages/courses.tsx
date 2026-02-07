import { MainLayout } from "@/components/layout/main-layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, Clock, Users, Star } from "lucide-react";
import { Link } from "wouter";

const allCourses = [
  {
    id: 1,
    title: "Advanced UI Design Principles",
    instructor: "Sarah Connors",
    description: "Master the fundamental principles of modern user interface design, from layout to typography.",
    students: 1240,
    rating: 4.8,
    duration: "6 weeks",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800",
    category: "Design",
    tags: ["UI/UX", "Figma", "Design Systems"]
  },
  {
    id: 2,
    title: "React Performance Patterns",
    instructor: "Michael Chen",
    description: "Deep dive into optimizing React applications for scale and speed.",
    students: 856,
    rating: 4.9,
    duration: "4 weeks",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=800",
    category: "Development",
    tags: ["React", "JavaScript", "Optimization"]
  },
  {
    id: 3,
    title: "Data Visualization with D3.js",
    instructor: "Emma Watson",
    description: "Learn to create stunning interactive data visualizations using D3.js.",
    students: 640,
    rating: 4.7,
    duration: "8 weeks",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    category: "Data Science",
    tags: ["D3", "JavaScript", "Data Viz"]
  },
  {
    id: 4,
    title: "Product Management Essentials",
    instructor: "David Kim",
    description: "The complete guide to modern product management methodologies.",
    students: 2100,
    rating: 4.6,
    duration: "5 weeks",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800",
    category: "Business",
    tags: ["Product", "Agile", "Strategy"]
  },
  {
    id: 5,
    title: "Machine Learning A-Z",
    instructor: "Dr. Andrew Ng",
    description: "An introduction to machine learning concepts and algorithms.",
    students: 5400,
    rating: 4.9,
    duration: "12 weeks",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=800",
    category: "Data Science",
    tags: ["Python", "AI", "Algorithms"]
  }
];

export default function Courses() {
  return (
    <MainLayout>
      <div className="space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-heading font-bold">Explore Courses</h1>
            <p className="text-muted-foreground mt-1">Discover new skills and advance your career.</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="gap-2 rounded-full">
              <Filter className="w-4 h-4" /> Filters
            </Button>
            <Button className="rounded-full">Create New Course</Button>
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative max-w-2xl">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input 
            placeholder="Search for courses, categories, or instructors..." 
            className="pl-12 h-12 rounded-full bg-white dark:bg-card border-none shadow-sm text-lg"
          />
        </div>

        {/* Categories Tabs - Simplified */}
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {["All", "Design", "Development", "Data Science", "Business", "Marketing", "Photography"].map((cat, i) => (
            <Button 
              key={cat} 
              variant={i === 0 ? "default" : "secondary"} 
              className={i === 0 ? "rounded-full px-6" : "rounded-full px-6 bg-white dark:bg-card hover:bg-secondary"}
            >
              {cat}
            </Button>
          ))}
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allCourses.map((course) => (
            <Link href={`/courses/${course.id}`} key={course.id}>
              <Card className="h-full cursor-pointer hover:shadow-lg transition-all duration-300 border-none shadow-sm bg-white dark:bg-card flex flex-col overflow-hidden group">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <Badge className="absolute top-4 left-4 bg-white/90 text-foreground backdrop-blur-sm border-none shadow-sm">
                    {course.category}
                  </Badge>
                </div>
                <CardContent className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground mb-3">
                    <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {course.duration}</span>
                    <span className="flex items-center gap-1"><Users className="w-3.5 h-3.5" /> {course.students}</span>
                    <span className="flex items-center gap-1 text-amber-500"><Star className="w-3.5 h-3.5 fill-current" /> {course.rating}</span>
                  </div>
                  
                  <h3 className="font-heading font-bold text-xl mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-muted-foreground text-sm line-clamp-2 mb-4 flex-1">
                    {course.description}
                  </p>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-border mt-auto">
                    <div className="flex items-center gap-2">
                       <div className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center text-xs font-bold text-secondary-foreground">
                         {course.instructor.charAt(0)}
                       </div>
                       <span className="text-xs font-medium text-muted-foreground">{course.instructor}</span>
                    </div>
                    <span className="text-sm font-bold text-primary">Enroll Now</span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </MainLayout>
  );
}
