
import React, { useEffect } from 'react';
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Bar, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';
import { useIsMobile } from '@/hooks/use-mobile';

const StatisticsSection = () => {
  const isMobile = useIsMobile();
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-on-scroll').forEach(element => {
      observer.observe(element);
    });

    return () => {
      document.querySelectorAll('.animate-on-scroll').forEach(element => {
        observer.unobserve(element);
      });
    };
  }, []);

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

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-on-scroll">
            Market <span className="text-milgen-yellow">Insights</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto animate-on-scroll">
            Explore the growing demand and market share of our diverse mineral portfolio.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-on-scroll bg-milgen-light p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4 text-center">Projected Demand Growth (%)</h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={barData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 40 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" angle={-45} textAnchor="end" height={60} />
                  <YAxis />
                  <Tooltip cursor={{ fill: 'rgba(247, 202, 24, 0.1)' }} />
                  <Bar dataKey="value" fill="#F7CA18" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <p className="text-center text-sm text-gray-500 mt-4">Coltan shows the highest projected demand growth in the coming years.</p>
          </div>

          <div className="animate-on-scroll bg-milgen-light p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4 text-center">Global Export Market Share (%)</h3>
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
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => `${value}%`} />
                  <Legend layout="horizontal" verticalAlign="bottom" align="center" />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <p className="text-center text-sm text-gray-500 mt-4">Coltan and copper represent our largest export market segments.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
