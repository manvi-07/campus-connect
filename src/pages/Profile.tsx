import { motion } from 'framer-motion';
import { 
  Zap, 
  ArrowLeft, 
  Camera, 
  Mail, 
  BookOpen, 
  Code, 
  Briefcase,
  Save,
  LogOut
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Link, useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="container px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <Zap className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="font-bold hidden sm:block">CampusConnect</span>
            </Link>
          </div>
          <Button variant="ghost" size="sm" className="text-muted-foreground gap-2">
            <LogOut className="w-4 h-4" />
            Sign Out
          </Button>
        </div>
      </header>

      <main className="pt-24 pb-12 container px-4 max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Profile Header */}
          <div className="text-center mb-8">
            <div className="relative inline-block">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-3xl font-bold">
                A
              </div>
              <button className="absolute bottom-0 right-0 w-8 h-8 rounded-full bg-card border border-border flex items-center justify-center hover:bg-muted transition-colors">
                <Camera className="w-4 h-4" />
              </button>
            </div>
            <h1 className="text-2xl font-bold mt-4">Alex Johnson</h1>
            <p className="text-muted-foreground">Computer Science, Senior</p>
          </div>

          {/* Form */}
          <div className="space-y-6">
            {/* Basic Info */}
            <div className="glass-card p-6">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                Basic Info
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Display Name</label>
                  <Input defaultValue="Alex Johnson" className="bg-muted/50" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">University Email</label>
                  <Input value="alex.johnson@university.edu" disabled className="bg-muted/30" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Year & Major</label>
                  <Input defaultValue="Senior, Computer Science" className="bg-muted/50" />
                </div>
              </div>
            </div>

            {/* Skills */}
            <div className="glass-card p-6">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <Code className="w-4 h-4 text-secondary" />
                Skills
              </h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {['Python', 'Machine Learning', 'React', 'TensorFlow', 'Data Analysis'].map((skill) => (
                  <span key={skill} className="px-3 py-1.5 rounded-full bg-muted text-sm flex items-center gap-1">
                    {skill}
                    <button className="ml-1 text-muted-foreground hover:text-foreground">×</button>
                  </span>
                ))}
              </div>
              <Input placeholder="Add a skill..." className="bg-muted/50" />
            </div>

            {/* Interests */}
            <div className="glass-card p-6">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-accent" />
                Academic Interests
              </h3>
              <Textarea 
                defaultValue="Artificial Intelligence, Computer Vision, Startups, Open Source"
                className="bg-muted/50 min-h-[100px]"
                placeholder="What are you passionate about?"
              />
            </div>

            {/* Goals */}
            <div className="glass-card p-6">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-electric-blue" />
                Career Goals
              </h3>
              <Textarea 
                defaultValue="Looking to join an AI research lab after graduation. Interested in startups and entrepreneurship."
                className="bg-muted/50 min-h-[100px]"
                placeholder="What are your academic or career goals?"
              />
            </div>

            {/* Save Button */}
            <Button className="w-full h-12 font-semibold glow-primary btn-glow gap-2">
              <Save className="w-4 h-4" />
              Save Changes
            </Button>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default Profile;