import React, { useState } from 'react';
import { MessageSquare, Users, Mail, Calendar, ArrowRight, Code, Terminal, X } from 'lucide-react';

function App() {
  const [email, setEmail] = useState('');
  const [showBooking, setShowBooking] = useState(false);
  const [bookingForm, setBookingForm] = useState({
    name: '',
    position: '',
    industry: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email submission
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle booking submission
    setShowBooking(false);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed w-full p-6 flex justify-between items-center z-50">
        <div className="flex items-center gap-3">
          <div className="relative">
            <Code className="w-8 h-8 text-white absolute transform -rotate-45" />
            <Terminal className="w-8 h-8 text-purple-600" />
          </div>
          <span className="font-mono text-lg tracking-widest">SCULPTED.AI</span>
        </div>
        <button onClick={() => setShowBooking(true)} className="cta-button flex items-center gap-2">
          <Calendar className="w-4 h-4" />
          BOOK A CALL
        </button>
      </nav>

      {/* Booking Popup */}
      {showBooking && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center">
          <div className="bg-zinc-900 p-8 rounded-sm border border-zinc-800 w-full max-w-md relative">
            <button 
              onClick={() => setShowBooking(false)}
              className="absolute right-4 top-4 text-gray-400 hover:text-white"
            >
              <X className="w-6 h-6" />
            </button>
            <h2 className="text-2xl font-bold mb-6 tracking-wider">Schedule Your Strategy Call</h2>
            <form onSubmit={handleBookingSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-zinc-800/50 border border-zinc-700 rounded-sm px-4 py-3 focus:outline-none focus:border-purple-600/50"
                  value={bookingForm.name}
                  onChange={(e) => setBookingForm({...bookingForm, name: e.target.value})}
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Position in Company"
                  className="w-full bg-zinc-800/50 border border-zinc-700 rounded-sm px-4 py-3 focus:outline-none focus:border-purple-600/50"
                  value={bookingForm.position}
                  onChange={(e) => setBookingForm({...bookingForm, position: e.target.value})}
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Industry"
                  className="w-full bg-zinc-800/50 border border-zinc-700 rounded-sm px-4 py-3 focus:outline-none focus:border-purple-600/50"
                  value={bookingForm.industry}
                  onChange={(e) => setBookingForm({...bookingForm, industry: e.target.value})}
                  required
                />
              </div>
              <div className="bg-zinc-800/50 border border-zinc-700 rounded-sm p-4 h-64">
                {/* Calendly integration placeholder */}
                <p className="text-gray-400 text-center mt-24">Calendly Integration</p>
              </div>
              <button type="submit" className="w-full cta-button">
                ACCELERATE YOUR GROWTH
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="flex flex-col">
        <div className="min-h-[80vh] flex items-center justify-center relative">
          <div className="absolute inset-0 bg-gradient-to-br from-zinc-900/20 to-transparent"></div>
          
          {/* Typewriter Text and Strapline */}
          <div className="relative flex flex-col items-center">
            <h1 className="text-7xl font-bold tracking-wider typewriter-main mb-8">
              Sculpted.AI
            </h1>
            <p className="text-3xl tracking-wider fade-in-delay strapline">
              Automate. Scale. Dominate.
            </p>
            
            {/* Email Capture */}
            <form onSubmit={handleSubmit} className="mt-12 flex gap-4 fade-in-delay w-full max-w-md">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 bg-zinc-900/50 border border-zinc-800 rounded-sm px-6 py-4 focus:outline-none focus:border-purple-600/50"
                required
              />
              <button type="submit" className="cta-button flex items-center gap-2">
                ELEVATE <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>

        {/* Hero Sections */}
        <div className="px-20 py-20 grid grid-cols-3 gap-12 bg-zinc-950/50 backdrop-blur-sm">
          <div className="hero-card">
            <MessageSquare className="w-12 h-12 mb-6 text-purple-600" />
            <h3 className="text-xl font-bold mb-4 typewriter">AI Chat Agent</h3>
            <p className="text-gray-400 leading-relaxed">
              Advanced conversational AI that understands context and provides human-like responses for seamless customer interactions.
            </p>
          </div>
          
          <div className="hero-card">
            <Users className="w-12 h-12 mb-6 text-purple-600" />
            <h3 className="text-xl font-bold mb-4 typewriter">CRM Lead Generation</h3>
            <p className="text-gray-400 leading-relaxed">
              Automated lead capture and qualification system that integrates with your existing CRM for efficient prospect management.
            </p>
          </div>
          
          <div className="hero-card">
            <Mail className="w-12 h-12 mb-6 text-purple-600" />
            <h3 className="text-xl font-bold mb-4 typewriter">Email Automation</h3>
            <p className="text-gray-400 leading-relaxed">
              Smart email marketing system that segments audiences and delivers personalized content at the optimal time.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full p-6 text-center text-gray-500 font-mono text-sm bg-black">
        <p>SCULPTED.AI [C] 2025. ALL RIGHTS RESERVED.</p>
      </footer>
    </div>
  );
}

export default App;