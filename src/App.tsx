import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { LumaRegistration } from '@/components/LumaRegistration';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  ChevronRight, 
  CheckCircle2,
  Users,
  Sparkles,
  Shield,
  MessageSquare,
  FileText,
  Coffee,
  Menu,
  X,
  Gamepad2,
  Gift,
  Handshake
} from 'lucide-react';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const LUMA_EVENT_ID = 'evt-fGRX3jAL31GE7gI';

  return (
    <div className="min-h-screen bg-fernwood-navy text-fernwood-slate-light overflow-x-hidden">
      {/* Grain Overlay */}
      <div className="fixed inset-0 grain-overlay z-0 pointer-events-none" />
      
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? 'bg-fernwood-navy/90 backdrop-blur-md border-b border-white/5' : 'bg-transparent'
      }`}>
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <img 
                src="/fernwood_logo.png" 
                alt="Fernwood Systems" 
                className="h-24 sm:h-24 w-auto"
              />
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollToSection('overview')} className="text-sm text-fernwood-slate hover:text-white transition-colors">Overview</button>
              <button onClick={() => scrollToSection('agenda')} className="text-sm text-fernwood-slate hover:text-white transition-colors">Agenda</button>
              <button onClick={() => scrollToSection('speakers')} className="text-sm text-fernwood-slate hover:text-white transition-colors">Speakers</button>
              <LumaRegistration eventId={LUMA_EVENT_ID} className="bg-[#0066CC] hover:bg-[#004499] text-white font-semibold px-4 sm:px-6 py-2 rounded-lg transition-colors duration-200" />
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-fernwood-navy/95 backdrop-blur-md border-b border-white/5">
            <div className="px-4 py-4 space-y-3">
              <button onClick={() => scrollToSection('overview')} className="block w-full text-left py-2 text-fernwood-slate hover:text-white transition-colors">Overview</button>
              <button onClick={() => scrollToSection('agenda')} className="block w-full text-left py-2 text-fernwood-slate hover:text-white transition-colors">Agenda</button>
              <button onClick={() => scrollToSection('speakers')} className="block w-full text-left py-2 text-fernwood-slate hover:text-white transition-colors">Speakers</button>
              <div className="pt-2">
                <LumaRegistration eventId={LUMA_EVENT_ID} className="w-full bg-[#0066CC] hover:bg-[#004499] text-white font-semibold py-3 rounded-lg text-center block transition-colors duration-200" />
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/hero-city.jpg" 
            alt="Modern African Business District" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-fernwood-navy/60 via-fernwood-navy/70 to-fernwood-navy" />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12 pt-20">
          <div className="max-w-5xl mx-auto text-center">
            {/* Logo in Hero */}
            {/* <div className="mb-8 animate-fade-in-up opacity-0">
              <img 
                src="/fernwood_logo.png" 
                alt="Fernwood Systems" 
                className="h-24 sm:h-20 mx-auto"
              />
            </div> */}
            
            {/* Eyebrow */}
            <p className="font-mono text-xs sm:text-sm tracking-[0.2em] text-fernwood-green uppercase mb-6 animate-fade-in-up animation-delay-100 opacity-0">
              Fernwood Systems Presents
            </p>
            
            {/* Headline */}
            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-[0.95] tracking-tight mb-6 animate-fade-in-up animation-delay-200 opacity-0">
              AI That Works for<br className="hidden sm:block" /> Your Business
            </h1>
            
            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-fernwood-slate max-w-2xl mx-auto mb-4 animate-fade-in-up animation-delay-300 opacity-0">
              AWS Solutions for SMBs
            </p>
            <p className="text-base sm:text-lg text-fernwood-slate/80 max-w-xl mx-auto mb-10 animate-fade-in-up animation-delay-400 opacity-0">
              Join Fernwood Systems for a strategic deep dive into the next era of business intelligence.
            </p>

            {/* Event Date Badge */}
            <div className="inline-flex flex-col sm:flex-row items-center gap-2 sm:gap-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 sm:px-5 py-3 mb-8 sm:mb-10 animate-fade-in-up animation-delay-500 opacity-0 text-xs sm:text-sm">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 sm:w-5 h-4 sm:h-5 text-fernwood-green" />
                <span className="text-white font-medium">February 28, 2026</span>
              </div>
              <span className="hidden sm:inline text-fernwood-slate">•</span>
              <span className="text-fernwood-slate">9:00 AM – 3:00 PM WAT</span>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 animate-fade-in-up animation-delay-500 opacity-0">
              <LumaRegistration 
                eventId={LUMA_EVENT_ID} 
                className="bg-[#0066CC] hover:bg-[#004499] text-white font-bold px-6 sm:px-8 py-4 sm:py-5 text-sm sm:text-base rounded-xl shadow-glow animate-pulse-glow inline-flex items-center justify-center gap-2 w-full sm:w-auto transition-colors duration-200"
              />
              <button 
                onClick={() => scrollToSection('agenda')}
                className="text-fernwood-slate hover:text-white transition-colors flex items-center justify-center gap-2 w-full sm:w-auto py-3 sm:py-0"
              >
                View Agenda
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        {/* <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-fernwood-green rounded-full" />
          </div>
        </div> */}
      </section>

      {/* Event Overview Section */}
      <section id="overview" className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/overview-street.jpg" 
            alt="City Street" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-fernwood-navy via-fernwood-navy/95 to-fernwood-navy/80" />
        </div>

        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-7xl mx-auto">
            <div className="glass-card rounded-2xl p-8 lg:p-10">
              <div className="w-12 h-1 bg-fernwood-green mb-6" />
              <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white mb-4">
                Executive Summit 2026
              </h2>
              <p className="text-fernwood-slate leading-relaxed mb-8">
                Join leaders, engineers, and operators for a focused day of keynotes, demos, and roundtables—designed to help teams ship AI features faster and safer using AWS solutions tailored for small and medium businesses.
              </p>
              <LumaRegistration 
                eventId={LUMA_EVENT_ID} 
                className="bg-[#0066CC] hover:bg-[#004499] text-white font-semibold inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-2 rounded-lg transition-colors duration-200"
              />
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4 p-5 rounded-xl bg-white/5 border border-white/10 hover:border-fernwood-green/30 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-fernwood-green/10 flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-6 h-6 text-fernwood-green" />
                </div>
                <div>
                  <p className="font-mono text-xs text-fernwood-slate uppercase tracking-wider mb-1">Date</p>
                  <p className="text-white font-semibold text-lg">February 28, 2026</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 rounded-xl bg-white/5 border border-white/10 hover:border-fernwood-green/30 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-fernwood-green/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-fernwood-green" />
                </div>
                <div>
                  <p className="font-mono text-xs text-fernwood-slate uppercase tracking-wider mb-1">Time</p>
                  <p className="text-white font-semibold text-lg">9:00 AM – 3:00 PM WAT</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 rounded-xl bg-white/5 border border-white/10 hover:border-fernwood-green/30 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-fernwood-green/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-fernwood-green" />
                </div>
                <div>
                  <p className="font-mono text-xs text-fernwood-slate uppercase tracking-wider mb-1">Location</p>
                  <p className="text-white font-semibold text-lg">Lagos, Nigeria</p>
                  <p className="text-fernwood-slate text-sm mt-1">Venue announced to registered attendees</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Agenda Section */}
      <section id="agenda" className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/agenda-sky.jpg" 
            alt="City Skyline" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-fernwood-navy/90" />
        </div>

        <div className="absolute top-10 left-4 text-[18vw] font-heading font-extrabold text-white/[0.03] leading-none select-none pointer-events-none">
          AGENDA
        </div>

        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <p className="font-mono text-sm tracking-[0.2em] text-fernwood-green uppercase mb-4">Program</p>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
                The Agenda
              </h2>
              <p className="text-fernwood-slate max-w-xl mx-auto">
                A day packed with insights, demos, and networking opportunities
              </p>
            </div>

            <div className="glass-card rounded-2xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left py-4 px-4 sm:px-6 font-mono text-xs text-fernwood-green uppercase tracking-wider">Time</th>
                      <th className="text-left py-4 px-4 sm:px-6 font-mono text-xs text-fernwood-green uppercase tracking-wider">Activity</th>
                      <th className="text-left py-4 px-4 sm:px-6 font-mono text-xs text-fernwood-green uppercase tracking-wider hidden sm:table-cell">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { time: '10:00 - 10:15 AM', activity: 'Welcome Address', desc: 'Opening remarks and event introduction', icon: Sparkles },
                      { time: '10:15 - 10:45 AM', activity: 'Keynote 1', desc: 'Introduction to Agentic AI and AWS Bedrock Agents Core', icon: Users },
                      { time: '10:45 - 11:15 AM', activity: 'Keynote 2', desc: 'Why AI Is No Longer Optional for Business Leaders', icon: Users },
                      { time: '11:15 - 11:30 AM', activity: 'Interactive Game', desc: 'Fun networking activity', icon: Gamepad2 },
                      { time: '11:30 AM - 12:30 PM', activity: 'Fernwood Pitch Deck & Project Demo', desc: 'Service offerings presentation and project demonstration', icon: FileText },
                      { time: '12:30 - 1:00 PM', activity: 'Panel Discussion', desc: 'AI Adoption in African Enterprises: Opportunities and Challenges', icon: MessageSquare },
                      { time: '1:00 - 1:30 PM', activity: 'Fernwood Special Announcement', desc: 'Academy launch, discount on services/free services for a particular period', icon: Sparkles },
                      { time: '1:30 - 1:45 PM', activity: 'Appreciation & Distribution', desc: 'Appreciation remarks, lunch distribution, special gift distribution', icon: Gift },
                      { time: '1:45 PM onwards', activity: 'Networking', desc: 'Networking and consultation booths', icon: Handshake },
                    ].map((item, i) => (
                      <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                        <td className="py-4 px-4 sm:px-6">
                          <span className="text-fernwood-green font-mono text-sm">{item.time}</span>
                        </td>
                        <td className="py-4 px-4 sm:px-6">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg bg-fernwood-green/10 flex items-center justify-center flex-shrink-0">
                              <item.icon className="w-4 h-4 text-fernwood-green" />
                            </div>
                            <span className="text-white font-medium">{item.activity}</span>
                          </div>
                        </td>
                        <td className="py-4 px-4 sm:px-6 text-fernwood-slate hidden sm:table-cell">
                          {item.desc}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Speakers Section */}
      <section id="speakers" className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/speakers-street.jpg" 
            alt="City Street" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-fernwood-navy via-fernwood-navy/95 to-fernwood-navy" />
        </div>

        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <p className="font-mono text-sm tracking-[0.2em] text-fernwood-green uppercase mb-4">Featured Presenters</p>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
                Speakers
              </h2>
              <p className="text-fernwood-slate max-w-xl mx-auto">
                Industry experts and thought leaders sharing real-world insights
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="glass-card rounded-2xl p-6 text-center hover:border-fernwood-green/30 transition-all duration-300 group">
                  <div className="relative mx-auto mb-5">
                    <div className="w-28 h-28 mx-auto rounded-full overflow-hidden border-2 border-fernwood-green/30 group-hover:border-fernwood-green transition-colors">
                      <img 
                        src={`/speaker-${i}.jpg`} 
                        alt={`Speaker ${i}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-fernwood-green flex items-center justify-center">
                      <Sparkles className="w-4 h-4 text-fernwood-navy" />
                    </div>
                  </div>
                  <h3 className="font-heading font-bold text-white mb-1">To Be Announced</h3>
                  <p className="text-fernwood-slate text-sm">Speaker details coming soon</p>
                </div>
              ))}
            </div>

            <div className="mt-10 text-center">
              <p className="text-fernwood-slate mb-4">More speakers to be revealed in the coming weeks</p>
              <LumaRegistration 
                eventId={LUMA_EVENT_ID} 
                className="bg-[#0066CC] hover:bg-[#004499] text-white font-semibold inline-flex items-center justify-center px-4 sm:px-6 py-2 rounded-lg transition-colors duration-200"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Attend Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/why-buildings.jpg" 
            alt="City Buildings" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-fernwood-navy via-fernwood-navy/95 to-fernwood-navy/80" />
        </div>

        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-7xl mx-auto">
            <div>
              <div className="w-12 h-1 bg-fernwood-green mb-6" />
              <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-6">
                Leave with a roadmap.
              </h2>
              <p className="text-fernwood-slate text-lg leading-relaxed mb-8">
                No fluff. No sales pitches. Just patterns that work—and the contacts to help you implement them.
              </p>
              <LumaRegistration 
                eventId={LUMA_EVENT_ID} 
                className="bg-[#0066CC] hover:bg-[#004499] text-white font-semibold inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-2 rounded-lg transition-colors duration-200"
              />
            </div>

            <div className="space-y-4">
              {[
                { icon: CheckCircle2, text: 'Practical architecture reviews' },
                { icon: Shield, text: 'Security checklists for AI workloads' },
                { icon: MessageSquare, text: '1:1 office hours with speakers' },
                { icon: FileText, text: '30-day post-event resource access' },
              ].map((benefit, i) => (
                <div 
                  key={i} 
                  className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-fernwood-green/30 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-fernwood-green/10 flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-5 h-5 text-fernwood-green" />
                  </div>
                  <span className="text-white font-medium">{benefit.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Venue Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/venue-road.jpg" 
            alt="City Road" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-fernwood-navy/85" />
        </div>

        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-3xl mx-auto">
            <div className="glass-card rounded-2xl p-8 lg:p-12 text-center">
              <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white mb-4">
                Lagos after dark.
              </h2>
              <p className="text-fernwood-slate leading-relaxed mb-8">
                The venue is minutes from the CBD with secure parking, fast WiFi, and space to work between sessions.
              </p>

              <div className="grid sm:grid-cols-3 gap-6 mb-8">
                <div className="flex flex-col items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-fernwood-green/10 flex items-center justify-center">
                    <Clock className="w-6 h-6 text-fernwood-green" />
                  </div>
                  <p className="text-white font-medium">Doors open at 8:30 AM</p>
                </div>
                <div className="flex flex-col items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-fernwood-green/10 flex items-center justify-center">
                    <Coffee className="w-6 h-6 text-fernwood-green" />
                  </div>
                  <p className="text-white font-medium">Lunch included</p>
                </div>
                <div className="flex flex-col items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-fernwood-green/10 flex items-center justify-center">
                    <Gift className="w-6 h-6 text-fernwood-green" />
                  </div>
                  <p className="text-white font-medium">Special gifts for attendees</p>
                </div>
              </div>

              <Button 
                variant="outline" 
                className="border-white/20 text-white hover:bg-white/5 hover:border-fernwood-green/50"
              >
                <MapPin className="w-4 h-4 mr-2" />
                Get directions
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Registration CTA Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/cta-skyline.jpg" 
            alt="City Skyline" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-fernwood-navy via-fernwood-navy/90 to-fernwood-navy/70" />
        </div>

        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
              Reserve your place.
            </h2>
            <p className="text-fernwood-slate text-lg">
              Seats are limited. Registration closes February 21.
            </p>
          </div>

          <div className="max-w-xl mx-auto text-center px-4 sm:px-0">
            <div className="glass-card rounded-2xl p-6 sm:p-8">
              <img 
                src="/fernwood_logo.png" 
                alt="Fernwood Systems" 
                className="h-24 sm:h-16 mx-auto mb-4 sm:mb-6"
              />
              <p className="text-fernwood-slate mb-6 sm:mb-8 text-sm sm:text-base">
                Complete your registration to secure your spot at this exclusive event.
              </p>
              <LumaRegistration 
                eventId={LUMA_EVENT_ID} 
                className="bg-[#0066CC] hover:bg-[#004499] text-white font-bold px-6 sm:px-8 py-4 sm:py-5 text-sm sm:text-base rounded-xl shadow-glow animate-pulse-glow inline-flex items-center justify-center gap-2 w-full transition-colors duration-200"
              />
              <p className="text-fernwood-slate text-xs sm:text-sm mt-4 sm:mt-6">
                We will email your confirmation + agenda within 5 minutes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-16 border-t border-white/5">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
              <div className="lg:col-span-2">
                <div className="flex items-center gap-3 mb-4">
                  <img 
                    src="/fernwood_logo.png" 
                    alt="Fernwood Systems" 
                    className="h-24 w-auto"
                  />
                </div>
                <p className="text-fernwood-slate max-w-sm">
                  Empowering African businesses with cutting-edge AI and cloud solutions. Building the future, one deployment at a time.
                </p>
              </div>

              <div>
                <h4 className="font-heading font-semibold text-white mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  <li><button onClick={() => scrollToSection('overview')} className="text-fernwood-slate hover:text-white transition-colors">Overview</button></li>
                  <li><button onClick={() => scrollToSection('agenda')} className="text-fernwood-slate hover:text-white transition-colors">Agenda</button></li>
                  <li><button onClick={() => scrollToSection('speakers')} className="text-fernwood-slate hover:text-white transition-colors">Speakers</button></li>
                </ul>
              </div>

              <div>
                <h4 className="font-heading font-semibold text-white mb-4">Contact</h4>
                <ul className="space-y-2">
                  <li><a href="mailto:info@fernwoodsystems.com" className="text-fernwood-slate hover:text-white transition-colors">info@fernwoodsystems.com</a></li>
                  <li><span className="text-fernwood-slate">Lagos, Nigeria</span></li>
                </ul>
              </div>
            </div>

            <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-fernwood-slate text-sm">
                © 2026 Fernwood Systems. All rights reserved.
              </p>
              <div className="flex items-center gap-6">
                <a href="#" className="text-fernwood-slate hover:text-white text-sm transition-colors">Privacy Policy</a>
                <a href="#" className="text-fernwood-slate hover:text-white text-sm transition-colors">Terms of Service</a>
                <a href="#" className="text-fernwood-slate hover:text-white text-sm transition-colors">Code of Conduct</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
