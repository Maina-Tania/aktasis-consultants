import React from 'react';
import { motion } from 'framer-motion';
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Bar, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';
import { useIsMobile } from '@/hooks/use-mobile';

const ModernStatisticsSection = () => {
  const isMobile = useIsMobile();
  
  const barData = [
    { name: 'Gemstones', value: 65 },
    { name: 'Coltan', value: 85 },
    { name: 'Gold', value: 60 },
    { name: 'Cinnabar', value: 40 },
    { name: 'Copper', value: 70 },
  ];

  const pieData = [
    { name: 'Coltan', value: 40 },
    { name: 'Copper', value: 30 },
    { name: 'Gemstones', value: 15 },
    { name: 'Gold', value: 10 },
    { name: 'Cinnabar', value: 5 },
  ];

  const COLORS = ['#F7CA18', '#1A1F2C', '#D946EF', '#F97316', '#0EA5E9'];

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
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-milgen-yellow/10 rounded-full blur-3xl"></div>
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
            Market <span className="text-milgen-yellow">Insights</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Explore the growing demand and market share of our diverse mineral portfolio.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div 
            variants={itemVariants}
            className="bg-white/70 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300"
          >
            <h3 className="text-xl font-bold mb-6 text-center">Projected Demand Growth (%)</h3>
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
                    cursor={{ fill: 'rgba(247, 202, 24, 0.1)' }}
                    contentStyle={{ 
                      borderRadius: '8px', 
                      border: 'none', 
                      boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
                      backgroundColor: 'rgba(255,255,255,0.95)'
                    }}
                  />
                  <Bar 
                    dataKey="value" 
                    fill="#F7CA18" 
                    radius={[4, 4, 0, 0]}
                    animationDuration={1500}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <p className="text-center text-sm text-gray-500 mt-6">
              Coltan shows the highest projected demand growth in the coming years.
            </p>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="bg-white/70 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300"
          >
            <h3 className="text-xl font-bold mb-6 text-center">Global Export Market Share (%)</h3>
            <div className="h-80 flex justify-center">
              <ResponsiveContainer width={isMobile ? "100%" : "80%"} height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    outerRadius={isMobile ? 80 : 100}
                    fill="#8884d8"
                    dataKey="value"
                    animationDuration={1500}
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip 
                    formatter={(value) => `${value}%`}
                    contentStyle={{ 
                      borderRadius: '8px', 
                      border: 'none', 
                      boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
                      backgroundColor: 'rgba(255,255,255,0.95)'
                    }}
                  />
                  <Legend layout="horizontal" verticalAlign="bottom" align="center" />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <p className="text-center text-sm text-gray-500 mt-6">
              Coltan and copper represent our largest export market segments.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ModernStatisticsSection; 