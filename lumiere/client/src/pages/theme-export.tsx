import { MainLayout } from "@/components/layout/main-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Copy, Download, Code, Palette, Type } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function ThemeExport() {
  const { toast } = useToast();

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied to clipboard",
      description: "You can now paste the CSS variables into your Moodle theme.",
    });
  };

  const handleDownload = () => {
    const cssContent = `:root {
  --background: 210 20% 98%;
  --foreground: 222 47% 11%;
  --card: 0 0% 100%;
  --card-foreground: 222 47% 11%;
  --popover: 0 0% 100%;
  --popover-foreground: 222 47% 11%;
  --primary: 221 83% 53%;
  --primary-foreground: 210 40% 98%;
  --secondary: 210 40% 96.1%;
  --secondary-foreground: 222 47% 11.2%;
  --muted: 210 40% 96.1%;
  --muted-foreground: 215.4 16.3% 46.9%;
  --accent: 210 40% 96.1%;
  --accent-foreground: 222 47% 11.2%;
  --destructive: 0 84.2% 60.2%;
  --destructive-foreground: 210 40% 98%;
  --border: 214.3 31.8% 91.4%;
  --input: 214.3 31.8% 91.4%;
  --ring: 221 83% 53%;
  --radius: 0.75rem;
  --font-sans: "Inter", sans-serif;
  --font-heading: "Outfit", sans-serif;
}`;
    
    const blob = new Blob([cssContent], { type: "text/css" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "lumiere-theme-variables.css";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    toast({
      title: "Download started",
      description: "lumiere-theme-variables.css has been saved.",
    });
  };

  return (
    <MainLayout>
      <div className="space-y-8 pb-12">
        <div>
          <h1 className="text-3xl font-heading font-bold">Theme Developer Export</h1>
          <p className="text-muted-foreground mt-2 max-w-3xl">
            Use these design tokens, color variables, and implementation guides to port the Lumière theme to your Moodle installation. 
            Moodle themes use PHP and Mustache templates, so you'll need to integrate these CSS variables into your theme's <code className="bg-secondary px-1 py-0.5 rounded text-xs">styles.css</code> or SCSS files.
          </p>
        </div>

        <Tabs defaultValue="tokens" className="w-full">
          <div className="flex items-center justify-between mb-4">
            <TabsList>
              <TabsTrigger value="tokens" className="gap-2"><Code className="w-4 h-4" /> CSS Tokens</TabsTrigger>
              <TabsTrigger value="colors" className="gap-2"><Palette className="w-4 h-4" /> Color Palette</TabsTrigger>
              <TabsTrigger value="guide" className="gap-2"><Type className="w-4 h-4" /> Implementation Guide</TabsTrigger>
            </TabsList>
            <Button onClick={handleDownload} className="gap-2">
              <Download className="w-4 h-4" /> Download CSS
            </Button>
          </div>

          <TabsContent value="tokens" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>CSS Variables</CardTitle>
                <CardDescription>
                  Copy these variables into your Moodle theme's root CSS file (usually in local/theme/scss/post.scss or styles.css).
                </CardDescription>
              </CardHeader>
              <CardContent className="relative">
                <Button 
                  size="icon" 
                  variant="ghost" 
                  className="absolute top-4 right-4 h-8 w-8" 
                  onClick={() => handleCopy(`:root {
  --background: 210 20% 98%;
  --foreground: 222 47% 11%;
  --card: 0 0% 100%;
  --card-foreground: 222 47% 11%;
  --popover: 0 0% 100%;
  --popover-foreground: 222 47% 11%;
  --primary: 221 83% 53%;
  --primary-foreground: 210 40% 98%;
  --secondary: 210 40% 96.1%;
  --secondary-foreground: 222 47% 11.2%;
  --muted: 210 40% 96.1%;
  --muted-foreground: 215.4 16.3% 46.9%;
  --accent: 210 40% 96.1%;
  --accent-foreground: 222 47% 11.2%;
  --destructive: 0 84.2% 60.2%;
  --destructive-foreground: 210 40% 98%;
  --border: 214.3 31.8% 91.4%;
  --input: 214.3 31.8% 91.4%;
  --ring: 221 83% 53%;
  --radius: 0.75rem;
  --font-sans: "Inter", sans-serif;
  --font-heading: "Outfit", sans-serif;
}`)}
                >
                  <Copy className="w-4 h-4" />
                </Button>
                <pre className="bg-secondary/50 p-4 rounded-lg overflow-x-auto text-sm font-mono leading-relaxed">
{`:root {
  /* Soft, clean, ergonomic palette */
  --background: 210 20% 98%;
  --foreground: 222 47% 11%;

  /* Cards */
  --card: 0 0% 100%;
  --card-foreground: 222 47% 11%;

  /* Popovers */
  --popover: 0 0% 100%;
  --popover-foreground: 222 47% 11%;

  /* Primary Branding */
  --primary: 221 83% 53%;
  --primary-foreground: 210 40% 98%;

  /* Secondary Elements */
  --secondary: 210 40% 96.1%;
  --secondary-foreground: 222 47% 11.2%;

  /* Muted Text */
  --muted: 210 40% 96.1%;
  --muted-foreground: 215.4 16.3% 46.9%;

  /* Accents & States */
  --accent: 210 40% 96.1%;
  --accent-foreground: 222 47% 11.2%;

  /* Alerts/Destructive */
  --destructive: 0 84.2% 60.2%;
  --destructive-foreground: 210 40% 98%;

  /* Borders & Inputs */
  --border: 214.3 31.8% 91.4%;
  --input: 214.3 31.8% 91.4%;
  --ring: 221 83% 53%;

  /* Global Properties */
  --radius: 0.75rem;
  --font-sans: "Inter", sans-serif;
  --font-heading: "Outfit", sans-serif;
}`}
                </pre>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="colors" className="space-y-6">
             <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="space-y-2">
                  <div className="h-24 rounded-lg bg-primary shadow-sm flex items-end p-2">
                    <span className="text-primary-foreground font-mono text-xs">--primary</span>
                  </div>
                  <p className="text-sm font-medium">Brand Primary</p>
                  <p className="text-xs text-muted-foreground">Main actions, active states, branding.</p>
                </div>
                <div className="space-y-2">
                  <div className="h-24 rounded-lg bg-secondary shadow-sm flex items-end p-2">
                    <span className="text-secondary-foreground font-mono text-xs">--secondary</span>
                  </div>
                  <p className="text-sm font-medium">Brand Secondary</p>
                  <p className="text-xs text-muted-foreground">Backgrounds, hover states, accents.</p>
                </div>
                <div className="space-y-2">
                  <div className="h-24 rounded-lg bg-background border border-border shadow-sm flex items-end p-2">
                    <span className="text-foreground font-mono text-xs">--background</span>
                  </div>
                  <p className="text-sm font-medium">Page Background</p>
                  <p className="text-xs text-muted-foreground">Main app canvas color (not pure white).</p>
                </div>
                <div className="space-y-2">
                  <div className="h-24 rounded-lg bg-card border border-border shadow-sm flex items-end p-2">
                    <span className="text-card-foreground font-mono text-xs">--card</span>
                  </div>
                  <p className="text-sm font-medium">Surface / Card</p>
                  <p className="text-xs text-muted-foreground">Content containers, widgets, panels.</p>
                </div>
             </div>
          </TabsContent>

          <TabsContent value="guide" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Moodle Integration Steps</CardTitle>
                <CardDescription>Follow these steps to apply this design to a Moodle site.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold shrink-0">1</div>
                  <div>
                    <h3 className="font-semibold mb-1">Create a Child Theme</h3>
                    <p className="text-sm text-muted-foreground">Don't modify Moodle core themes directly. Create a child theme based on "Boost" (Moodle's default theme).</p>
                  </div>
                </div>
                <Separator />
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold shrink-0">2</div>
                  <div>
                    <h3 className="font-semibold mb-1">Import Fonts</h3>
                    <p className="text-sm text-muted-foreground mb-2">Add the following Google Fonts import to your theme's header:</p>
                    <code className="block bg-secondary/50 p-2 rounded text-xs font-mono">
                      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Outfit:wght@400;500;600;700&display=swap');
                    </code>
                  </div>
                </div>
                <Separator />
                 <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold shrink-0">3</div>
                  <div>
                    <h3 className="font-semibold mb-1">Apply CSS Variables</h3>
                    <p className="text-sm text-muted-foreground">Copy the tokens from the "CSS Tokens" tab and paste them into your theme's SCSS file. Moodle 4.x supports CSS variables natively.</p>
                  </div>
                </div>
                 <Separator />
                 <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold shrink-0">4</div>
                  <div>
                    <h3 className="font-semibold mb-1">Override Moodle Classes</h3>
                    <p className="text-sm text-muted-foreground">You will need to write specific CSS overrides for Moodle classes like <code className="text-xs bg-secondary px-1 py-0.5 rounded">.card</code>, <code className="text-xs bg-secondary px-1 py-0.5 rounded">.navbar</code>, and <code className="text-xs bg-secondary px-1 py-0.5 rounded">.drawer</code> using the CSS variables defined above.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
}
