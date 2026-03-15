import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Zap, 
  Search, 
  Bell, 
  User, 
  Users, 
  MessageSquare, 
  Target,
  Sparkles,
  ChevronRight,
  Plus
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom';

const mockMatches = [
  { id: 1, name: 'Alex Chen', intent: 'ML Project Partner', match: 94, skills: ['Python', 'TensorFlow'] },
  { id: 2, name: 'Sarah Kim', intent: 'Startup Co-founder', match: 89, skills: ['Product', 'React'] },
  { id: 3, name: 'Jordan Lee', intent: 'Study Group - Algorithms', match: 85, skills: ['Java', 'DSA'] },
];

const mockMessages = [
  { id: 1, name: 'Alex Chen', message: 'Hey! Saw we matched on the ML project...', time: '2m ago', unread: true },
  { id: 2, name: 'Prof. Williams', message: 'Would love to discuss your research...', time: '1h ago', unread: false },
];

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState<'matches' | 'messages'>('matches');

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="container px-4 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <Zap className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="font-bold hidden sm:block">CampusConnect</span>
          </Link>

          <div className="flex-1 max-w-md mx-4 hidden md:block">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input placeholder="Search people, skills..." className="pl-10 bg-muted/50 border-0" />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-accent rounded-full" />
            </Button>
            <Link to="/profile">
              <Button variant="ghost" size="icon">
                <User className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="pt-24 pb-8 container px-4">
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left Column - Intent Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            {/* Current Intent */}
            <div className="glass-card p-6 mb-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Target className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Your current intent</p>
                    <h3 className="font-semibold">Looking for ML Project Partner</h3>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  Edit
                </Button>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Machine Learning', 'Python', 'Research', 'Computer Vision'].map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded-full bg-muted text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Tabs */}
            <div className="flex gap-1 p-1 bg-muted rounded-xl mb-6 max-w-xs">
              <button
                onClick={() => setActiveTab('matches')}
                className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-all flex items-center justify-center gap-2 ${
                  activeTab === 'matches' ? 'bg-card shadow-sm' : 'text-muted-foreground'
                }`}
              >
                <Users className="w-4 h-4" />
                Matches
              </button>
              <button
                onClick={() => setActiveTab('messages')}
                className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-all flex items-center justify-center gap-2 ${
                  activeTab === 'messages' ? 'bg-card shadow-sm' : 'text-muted-foreground'
                }`}
              >
                <MessageSquare className="w-4 h-4" />
                Messages
              </button>
            </div>

            {/* Content */}
            {activeTab === 'matches' ? (
              <div className="space-y-4">
                {mockMatches.map((match, i) => (
                  <motion.div
                    key={match.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="glass-card-hover p-5 flex items-center justify-between group cursor-pointer"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/50 to-secondary/50 flex items-center justify-center text-lg font-semibold">
                        {match.name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="font-semibold">{match.name}</h4>
                        <p className="text-sm text-muted-foreground">{match.intent}</p>
                        <div className="flex gap-2 mt-1">
                          {match.skills.map((skill) => (
                            <span key={skill} className="text-xs px-2 py-0.5 rounded bg-muted">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <div className="text-2xl font-bold gradient-text">{match.match}%</div>
                        <p className="text-xs text-muted-foreground">match</p>
                      </div>
                      <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="space-y-3">
                {mockMessages.map((msg, i) => (
                  <motion.div
                    key={msg.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className={`glass-card-hover p-4 flex items-center gap-4 cursor-pointer ${msg.unread ? 'border-l-2 border-l-primary' : ''}`}
                  >
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-secondary/50 to-accent/50 flex items-center justify-center font-semibold">
                      {msg.name.charAt(0)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <h4 className={`font-medium ${msg.unread ? 'text-foreground' : 'text-muted-foreground'}`}>{msg.name}</h4>
                        <span className="text-xs text-muted-foreground">{msg.time}</span>
                      </div>
                      <p className="text-sm text-muted-foreground truncate">{msg.message}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>

          {/* Right Column - Quick Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="space-y-6"
          >
            {/* AI Suggestion */}
            <div className="glass-card p-5 border-primary/30">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="w-5 h-5 text-primary" />
                <span className="font-semibold text-sm">AI Insight</span>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Based on your intent, you might also be interested in the "AI Research Group" that meets weekly.
              </p>
              <Button variant="outline" size="sm" className="w-full">
                Learn More
              </Button>
            </div>

            {/* New Intent */}
            <div className="glass-card p-5">
              <h4 className="font-semibold mb-3">Add New Intent</h4>
              <Button variant="outline" className="w-full justify-start gap-2">
                <Plus className="w-4 h-4" />
                Create Intent
              </Button>
            </div>

            {/* Stats */}
            <div className="glass-card p-5">
              <h4 className="font-semibold mb-4">Your Stats</h4>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Matches this week</span>
                  <span className="font-semibold">12</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Connections made</span>
                  <span className="font-semibold">5</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Profile views</span>
                  <span className="font-semibold">28</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;