import Head from 'next/head';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { TopNav, BottomNav } from '@/components/layout/Navigation';
import { TierLadder, MetricCard, LiveCounter, Button } from '@/components/ui';
import { FadeIn, StaggerChildren, ScaleIn, Bounce, SlideIn } from '@/components/animations/Animate';
import { CURRENT_YEAR } from '@/utils/year';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.3 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } }
};

export default function HomePage() {
  return (
    <>
      <Head>
        <title>NYAAY | The Sovereign Archive</title>
        <meta name="description" content="Make Inaction Costlier Than Action - India's End-to-End Public Accountability Engine" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>⚖️</text></svg>" />
      </Head>
      
      <div className="min-h-screen bg-background">
        <TopNav />
        
        <main>
          {/* Hero Section */}
          <section className="px-4 md:px-8 pt-16 pb-20 max-w-7xl mx-auto overflow-hidden">
            <motion.div 
              className="asymmetric-grid gap-16 items-start"
              initial="hidden"
              animate="visible"
              variants={containerVariants}
            >
              <motion.div className="space-y-12" variants={itemVariants}>
                <motion.div 
                  className="inline-block px-4 py-1.5 bg-saffron-100 text-saffron-800 border border-saffron-300 font-label text-sm font-bold tracking-widest uppercase rounded"
                  variants={itemVariants}
                >
                  Legal Doctrine {CURRENT_YEAR}
                </motion.div>
                
                <motion.h1 
                  className="text-7xl md:text-8xl font-headline font-bold leading-[0.9] tracking-tighter text-on-background"
                  variants={itemVariants}
                >
                  Make Inaction <br/>
                  <motion.span 
                    className="text-primary italic font-light font-label"
                    variants={itemVariants}
                  >
                    Costlier
                  </motion.span> <br/>
                  Than Action
                </motion.h1>
                
                <motion.p 
                  className="max-w-md text-lg text-secondary leading-relaxed font-body"
                  variants={itemVariants}
                >
                  The sovereign digital ledger for accountability. We transform static legal records into active instruments of justice.
                </motion.p>
                
                <motion.div className="flex gap-4 flex-wrap" variants={itemVariants}>
                  <motion.a 
                    href="/file-complaint" 
                    className="btn-primary"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Access The Archive
                    <span className="material-symbols-outlined">arrow_forward</span>
                  </motion.a>
                  <motion.button 
                    className="btn-outline"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Review Statutes
                  </motion.button>
                </motion.div>
              </motion.div>
              
              {/* Abstract India Heatmap Visual */}
              <motion.div className="relative mt-12 md:mt-0" variants={itemVariants}>
                <motion.div 
                  className="aspect-[4/5] bg-surface-container-high rounded-xl overflow-hidden relative shadow-2xl"
                  whileHover={{ scale: 1.01 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-saffron-500/20 to-transparent" />
                  <img 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvN0yt-Jf-b8k8BH_JxXKDJCUBMsBDUM9DkVwMoUc1dtedVkzh-QbII_M9VLR5e3x92bW6SmQiwgPmuc7tUxRtaeExYH9zlZvPGUUD2pSzxUHPU3Vvt-FsjDZyPj_WDEYKypc2ji7luGPItUQSbJKTOfgKTV9zkZxUB1N5HyykXuNhZqI3cjNX1g397lEuncTUWVwS2TN_ek0uZHydvSojT2Qcqz-okZle-OxAofHnxWwLYABJBLg10yWJQXepC1JuKzI_xQ0HpQ0"
                    alt="India Heatmap"
                    className="w-full h-full object-cover mix-blend-multiply opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
                  
                  {/* Overlay Data Points */}
                  <motion.div 
                    className="absolute bottom-8 left-8 right-8 p-6 bg-surface-bright/90 backdrop-blur shadow-lg rounded-lg border-l-4 border-primary"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                  >
                    <span className="font-label text-xs uppercase tracking-widest text-primary font-bold">Real-time Accountability Index</span>
                    <div className="flex items-end justify-between mt-2">
                      <motion.span 
                        className="text-3xl font-headline font-bold text-on-background"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                      >
                        84.2%
                      </motion.span>
                      <span className="text-error font-body text-xs flex items-center gap-1">
                        <span className="material-symbols-outlined text-sm">trending_up</span>
                        +2.4% Pressure
                      </span>
                    </div>
                  </motion.div>
                </motion.div>
                
                {/* Decorative Elements */}
                <motion.div 
                  className="absolute -top-6 -right-6 w-24 h-24 bg-primary/10 rounded-full blur-3xl"
                  animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                <motion.div 
                  className="absolute -bottom-10 -left-10 w-48 h-48 bg-primary-container/10 rounded-full blur-3xl"
                  animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
              </motion.div>
            </motion.div>
          </section>
          
          {/* Live Impact Counter Strip */}
          <motion.section 
            className="bg-navy-600 py-16 px-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="max-w-screen-2xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  <LiveCounter value={12847} label="Complaints Filed Today" />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <LiveCounter value={3892} label="Issues Resolved This Week" />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <LiveCounter value={45291} label="Officials Contacted" />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  <LiveCounter value={1823} label="Unresolved - Exposed" />
                </motion.div>
              </div>
            </div>
          </motion.section>
          
          {/* Three Pillars Section */}
          <section className="py-24 px-6 max-w-screen-2xl mx-auto">
            <FadeIn direction="down">
              <h2 className="text-4xl font-headline font-bold text-center mb-16">
                Three Pillars of Accountability
              </h2>
            </FadeIn>
            <StaggerChildren staggerDelay={0.15} className="grid md:grid-cols-3 gap-8">
              <motion.div 
                className="card-nyaay text-center"
                whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(160, 65, 0, 0.15)' }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <motion.div 
                  className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <span className="material-symbols-outlined text-4xl text-primary">description</span>
                </motion.div>
                <h3 className="text-2xl font-headline font-bold mb-4">DOCUMENT</h3>
                <p className="text-secondary font-body">
                  Geo-tag your evidence. Cryptographically timestamped. Court-admissible.
                </p>
              </motion.div>
              
              <motion.div 
                className="card-nyaay text-center"
                whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(160, 65, 0, 0.15)' }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <motion.div 
                  className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                >
                  <span className="material-symbols-outlined text-4xl text-primary">bolt</span>
                </motion.div>
                <h3 className="text-2xl font-headline font-bold mb-4">ESCALATE</h3>
                <p className="text-secondary font-body">
                  12 automated tiers. From Ward Councillor to PMO. Without lifting a finger.
                </p>
              </motion.div>
              
              <motion.div 
                className="card-nyaay text-center"
                whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(160, 65, 0, 0.15)' }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <motion.div 
                  className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6"
                  whileHover={{ scale: 1.1 }}
                >
                  <span className="material-symbols-outlined text-4xl text-primary">visibility</span>
                </motion.div>
                <h3 className="text-2xl font-headline font-bold mb-4">EXPOSE</h3>
                <p className="text-secondary font-body">
                  Unresponsive politicians get a permanent, Google-indexed public record.
                </p>
              </motion.div>
            </StaggerChildren>
          </section>
          
          {/* 12-Tier Escalation Ladder */}
          <section className="bg-surface-container-low py-24 px-6 overflow-hidden">
            <div className="max-w-screen-2xl mx-auto">
              <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                <div className="max-w-2xl">
                  <h2 className="text-4xl font-headline font-bold text-on-background mb-4">The Escalation Ladder</h2>
                  <p className="font-label italic text-secondary text-lg">A systematic progression of legal leverage, ensuring compliance through tiered procedural pressure.</p>
                </div>
                <div className="flex gap-4">
                  <span className="text-xs font-headline font-bold uppercase tracking-widest text-secondary opacity-50">Scale of Intensity</span>
                  <div className="w-32 h-1 bg-gradient-to-r from-secondary/20 to-primary mb-1.5" />
                </div>
              </div>
              
              <TierLadder />
            </div>
          </section>
          
          {/* Complaint Categories Grid */}
          <section className="py-24 px-6 max-w-screen-2xl mx-auto">
            <h2 className="text-4xl font-headline font-bold text-center mb-16">
              File a Complaint About
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {[
                { icon: 'edit_road', label: 'Roads & Potholes', count: 2847 },
                { icon: 'water_drop', label: 'Water Supply', count: 1923 },
                { icon: 'lightbulb', label: 'Electricity', count: 1456 },
                { icon: 'delete', label: 'Sanitation', count: 1234 },
                { icon: 'shield', label: 'Public Safety', count: 987 },
                { icon: 'gavel', label: 'Corruption', count: 856 },
                { icon: 'school', label: 'Education', count: 743 },
                { icon: 'health_and_safety', label: 'Healthcare', count: 698 },
                { icon: 'apartment', label: 'Encroachment', count: 612 },
                { icon: 'forest', label: 'Environment', count: 534 },
                { icon: 'transportation', label: 'Transport', count: 489 },
                { icon: 'more_horiz', label: 'Other', count: 1024 },
              ].map((cat) => (
                <a 
                  key={cat.label}
                  href={`/file-complaint?category=${cat.label.toLowerCase().replace(/\s+/g, '_')}`}
                  className="category-card hover:bg-primary hover:text-white group"
                >
                  <span className="material-symbols-outlined text-3xl mb-2 text-primary group-hover:text-white">{cat.icon}</span>
                  <span className="text-[11px] font-medium uppercase tracking-tight">{cat.label}</span>
                  <span className="text-[10px] text-secondary group-hover:text-white/70 mt-1">{cat.count.toLocaleString()}</span>
                </a>
              ))}
            </div>
          </section>
          
          {/* Politician Accountability Showcase */}
          <section className="py-24 px-6 max-w-screen-2xl mx-auto">
            <h2 className="text-4xl font-headline font-bold mb-12">
              Politician Accountability
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Most Responsive */}
              <div className="bg-surface-container-high p-8 rounded-xl">
                <div className="flex items-center gap-2 mb-6">
                  <span className="material-symbols-outlined text-gandhi-600">military_tech</span>
                  <h3 className="font-headline text-xl font-bold uppercase">Most Responsive</h3>
                </div>
                <div className="space-y-4">
                  {[
                    { name: 'Shri Rahul Khanna', role: 'Collector, Indore', score: 98.4 },
                    { name: 'Smt. Meera Joshi', role: 'SDM, Bengaluru', score: 95.1 },
                    { name: 'Shri Arvind K.', role: 'MLA, Kerala', score: 92.8 },
                  ].map((p, i) => (
                    <div key={p.name} className="flex items-center gap-4 bg-white/50 p-4 rounded-lg">
                      <span className="text-xl font-headline font-bold text-primary w-4">{String(i + 1).padStart(2, '0')}</span>
                      <div className="flex-1">
                        <p className="font-bold text-sm">{p.name}</p>
                        <p className="text-[10px] text-secondary uppercase tracking-widest">{p.role}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-headline font-bold text-gandhi-600">{p.score}</p>
                        <p className="text-[8px] text-secondary uppercase font-label">Response Score</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Most Unresponsive */}
              <div className="bg-surface-container-highest p-8 rounded-xl border border-republic-500/10">
                <div className="flex items-center gap-2 mb-6">
                  <span className="material-symbols-outlined text-republic-500">warning</span>
                  <h3 className="font-headline text-xl font-bold uppercase">Critical Attention</h3>
                </div>
                <div className="space-y-4">
                  {[
                    { name: 'Amitabh Deshmukh', role: 'MC Commissioner, Patna', score: 12.5 },
                    { name: 'Rajesh Kumar', role: 'Welfare Officer, Gwalior', score: 19.8 },
                    { name: 'Suresh P.', role: 'Collector, Varanasi', score: 24.2 },
                  ].map((p, i) => (
                    <div key={p.name} className="flex items-center gap-4 p-4">
                      <span className="text-xl font-headline font-bold text-republic-500 w-4">{String(i + 1).padStart(2, '0')}</span>
                      <div className="flex-1">
                        <p className="font-bold text-sm">{p.name}</p>
                        <p className="text-[10px] text-secondary uppercase tracking-widest">{p.role}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-headline font-bold text-republic-500">{p.score}</p>
                        <p className="text-[8px] text-secondary uppercase font-label">Resolution Rate</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </main>
        
        {/* Footer */}
        <footer className="bg-[#fef9f1] border-t border-outline-variant/15 pt-12 pb-8 px-4 md:px-6">
          <div className="max-w-screen-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
              <div className="space-y-6">
                <span className="text-3xl font-bold tracking-tight text-[#1d1c17] font-headline">NYAAY</span>
                <p className="text-secondary text-sm leading-relaxed font-label italic">
                  Established MMXXIII.<br/>
                  The Sovereign Archive for the Republic.<br/>
                  Built for the permanence of truth.
                </p>
              </div>
              
              <div>
                <h5 className="font-headline font-bold uppercase tracking-widest text-xs mb-6">Archive Channels</h5>
                <ul className="space-y-4 text-sm font-body text-secondary">
                  <li><Link href="/record" className="hover:text-primary transition-colors">The Record</Link></li>
                  <li><Link href="/statutes" className="hover:text-primary transition-colors">Statutes</Link></li>
                  <li><Link href="/community/petitions" className="hover:text-primary transition-colors">Public Petition Hub</Link></li>
                  <li><Link href="/constitution" className="hover:text-primary transition-colors">The Constitution 2.0</Link></li>
                </ul>
              </div>
              
              <div>
                <h5 className="font-headline font-bold uppercase tracking-widest text-xs mb-6">Protocols</h5>
                <ul className="space-y-4 text-sm font-body text-secondary">
                  <li><Link href="/escalation" className="hover:text-primary transition-colors">Escalation Logic</Link></li>
                  <li><Link href="/privacy" className="hover:text-primary transition-colors">Data Privacy Charter</Link></li>
                  <li><Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link></li>
                  <li><Link href="/help" className="hover:text-primary transition-colors">Help & FAQ</Link></li>
                </ul>
              </div>
              
              <div>
                <h5 className="font-headline font-bold uppercase tracking-widest text-xs mb-6">Correspondence</h5>
                <div className="bg-surface-container-high p-4 rounded-md">
                  <p className="text-xs font-label text-on-surface-variant mb-4">Stay notified on sovereign updates</p>
                  <div className="flex gap-2">
                    <input 
                      type="email" 
                      placeholder="Email" 
                      className="bg-background border-none text-xs rounded p-2 flex-grow focus:ring-1 focus:ring-primary"
                    />
                    <button className="bg-primary text-on-primary p-2 rounded">
                      <span className="material-symbols-outlined text-sm">send</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Trust Strip */}
            <div className="mt-12 pt-8 border-t border-outline-variant/10 flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex gap-6 text-xs font-headline uppercase tracking-widest text-secondary">
                <span className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">block</span> Zero Ads
                </span>
                <span className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">lock</span> Zero Data Sale
                </span>
                <span className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">account_balance</span> Zero Political Funding
                </span>
              </div>
              <p className="text-[10px] font-headline uppercase tracking-[0.2em] text-secondary opacity-60">
                © 2026 NYAAY DIGITAL LEDGER | ALL RIGHTS RESERVED BY THE REPUBLIC
              </p>
            </div>
          </div>
        </footer>
        
        <BottomNav />
      </div>
    </>
  );
}
