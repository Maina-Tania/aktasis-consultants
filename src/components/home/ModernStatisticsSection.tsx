import React from 'react';
import { motion } from 'framer-motion';
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Bar, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';
import { useIsMobile } from '@/hooks/use-mobile';

const ModernStatisticsSection = () => {
  const isMobile = useIsMobile();
  
  const barData = [
    { name: 'Residential', value: 75 },
    { name: 'Commercial', value: 85 },
    { name: 'Hospitality', value: 60 },
    { name: 'Sustainable', value: 90 },
    { name: 'Interior', value: 70 },
  ];

  const pieData = [
    { name: 'Commercial', value: 35 },
    { name: 'Residential', value: 30 },
    { name: 'Hospitality', value: 20 },
    { name: 'Sustainable', value: 10 },
    { name: 'Interior', value: 5 },
  ];

  const COLORS = ['#3B82F6', '#1E293B', '#0EA5E9', '#10B981', '#64748B'];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-gray-100 opacity-60"></div>
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      
      <motion.div 
        className="container mx-auto px-4 relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Project <span className="text-blue-500">Insights</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Explore our diverse portfolio and the growing demand for innovative architectural solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div 
            variants={itemVariants}
            className="bg-white/70 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300"
          >
            <h3 className="text-xl font-bold mb-6 text-center">Project Success Rate (%)</h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={barData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 40 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#f5f5f5" />
                  <XAxis dataKey="name" angle={-45} textAnchor="end" height={60} />
                  <YAxis />
                  <Tooltip 
                    cursor={{ fill: 'rgba(59, 130, 246, 0.1)' }}
                    contentStyle={{ 
                      borderRadius: '8px', 
                      border: 'none', 
                      boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
                      backgroundColor: 'rgba(255,255,255,0.95)'
                    }}
                  />
                  <Bar 
                    dataKey="value" 
                    fill="#3B82F6" 
                    radius={[4, 4, 0, 0]}
                    animationDuration={1500}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="bg-white/70 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300"
          >
            <h3 className="text-xl font-bold mb-6 text-center">Portfolio Distribution</h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    animationDuration={1500}
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ 
                      borderRadius: '8px', 
                      border: 'none', 
                      boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
                      backgroundColor: 'rgba(255,255,255,0.95)'
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </div>

        {/* Key Metrics */}
        <motion.div 
          variants={itemVariants}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="text-center bg-white/50 backdrop-blur-sm p-6 rounded-xl border border-white/20">
            <div className="text-3xl font-bold text-blue-500 mb-2">150+</div>
            <div className="text-gray-600">Projects Completed</div>
          </div>
          <div className="text-center bg-white/50 backdrop-blur-sm p-6 rounded-xl border border-white/20">
            <div className="text-3xl font-bold text-blue-500 mb-2">95%</div>
            <div className="text-gray-600">Client Satisfaction</div>
          </div>
          <div className="text-center bg-white/50 backdrop-blur-sm p-6 rounded-xl border border-white/20">
            <div className="text-3xl font-bold text-blue-500 mb-2">20+</div>
            <div className="text-gray-600">Years Experience</div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ModernStatisticsSection; 