import { motion } from 'framer-motion';
import { 
  Zap, 
  ArrowLeft, 
  Search,
  Filter,
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Link, useNavigate } from 'react-router-dom';

const allMatches = [
  { id: 1, name: 'Alex Chen', intent: 'ML Project Partner', match: 94, skills: ['Python', 'TensorFlow'], faculty: false },
  { id: 2, name: 'Sarah Kim', intent: 'Startup Co-founder', match: 89, skills: ['Product', 'React'], faculty: false },
  { id: 3, name: 'Jordan Lee', intent: 'Study Group - Algorithms', match: 85, skills: ['Java', 'DSA'], faculty: false },
  { id: 4, name: 'Prof. Williams', intent: 'Research Mentorship', match: 82, skills: ['NLP', 'Research'], faculty: true },
  { id: 5, name: 'Taylor Smith', intent: 'Hackathon Team', match: 78, skills: ['Node.js', 'MongoDB'], faculty: false },
  { id: 6, name: 'Morgan Brown', intent: 'Placement Prep', match: 75, skills: ['DSA', 'System Design'], faculty: false },
  { id: 7, name: 'Prof. Davis', intent: 'Thesis Advisor', match: 72, skills: ['ML', 'CV'], faculty: true },
  { id: 8, name: 'Casey Wilson', intent: 'Open Source Contribution', match: 70, skills: ['Rust', 'Go'], faculty: false },
];

const Matches = () => {
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
        </div>
      </header>

      <main className="pt-24 pb-12 container px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold">Your Matches</h1>
              <p className="text-muted-foreground">AI-curated connections based on your intent</p>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">{allMatches.length} matches</span>
            </div>
          </div>

          {/* Search & Filter */}
          <div className="flex gap-3 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input placeholder="Search matches..." className="pl-10 bg-muted/50" />
            </div>
            <Button variant="outline" className="gap-2">
              <Filter className="w-4 h-4" />
              Filter
            </Button>
          </div>

          {/* Matches Grid */}
          <div className="grid md:grid-cols-2 gap-4">
            {allMatches.map((match, i) => (
              <motion.div
                key={match.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="glass-card-hover p-5 cursor-pointer group"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div className={`w-14 h-14 rounded-full flex items-center justify-center text-xl font-semibold ${
                      match.faculty 
                        ? 'bg-gradient-to-br from-secondary to-accent' 
                        : 'bg-gradient-to-br from-primary/50 to-secondary/50'
                    }`}>
                      {match.name.charAt(0)}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="font-semibold">{match.name}</h4>
                        {match.faculty && (
                          <span className="text-xs px-2 py-0.5 rounded-full bg-secondary/20 text-secondary">
                            Faculty
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">{match.intent}</p>
                      <div className="flex gap-2 mt-2">
                        {match.skills.map((skill) => (
                          <span key={skill} className="text-xs px-2 py-0.5 rounded bg-muted">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <div className="text-2xl font-bold gradient-text">{match.match}%</div>
                    <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default Matches;