"use client";

import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from "recharts";
import { FiArrowUp, FiCheckCircle } from "react-icons/fi";

const expenseData = [
  { name: "Jan", amount: 120 }, { name: "Feb", amount: 200 },
  { name: "Mar", amount: 150 }, { name: "Apr", amount: 400 },
  { name: "May", amount: 300 }, { name: "Jun", amount: 550 },
  { name: "Jul", amount: 450 }, { name: "Aug", amount: 700 },
  { name: "Sep", amount: 350 }, { name: "Oct", amount: 200 },
  { name: "Nov", amount: 400 }, { name: "Dec", amount: 500 },
];

const DashboardPreview = () => {
  return (
    <div className="w-full max-w-7xl mx-auto mt-20 mb-32 p-6 bg-surface/30 backdrop-blur-md border border-border rounded-[2rem] shadow-2xl">
      
      {/* Top Stats Row */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
        {[
          { title: "TOTAL TRIPS", value: "24", increase: "12%" },
          { title: "PLACES VISITED", value: "86", increase: "8%" },
          { title: "TOTAL SPENT", value: "$4.2K", increase: "15%" },
          { title: "AVG RATING", value: "4.9", isStar: true },
          { title: "SAVED PLACES", value: "14", text: "Active" }
        ].map((stat, idx) => (
          <div key={idx} className="bg-background border border-border p-4 rounded-2xl flex flex-col justify-center">
            <span className="text-[10px] font-bold text-primary tracking-wider uppercase mb-2">{stat.title}</span>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold text-foreground">{stat.value}</span>
              {stat.increase && (
                <span className="text-xs text-foreground/60 flex items-center">
                  <FiArrowUp className="text-primary mr-1" /> {stat.increase}
                </span>
              )}
              {stat.isStar && <span className="text-primary text-sm">★</span>}
              {stat.text && <span className="text-xs text-foreground/60">{stat.text}</span>}
            </div>
          </div>
        ))}
      </div>

      {/* Main Content Area */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        
        {/* Left Side (Chart & Categories) */}
        <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Chart Section */}
          {/* Chart Section */}
          <div className="md:col-span-2 bg-background border border-border p-6 rounded-2xl flex flex-col">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-sm font-bold text-foreground">Monthly Expense Overview</h3>
              <div className="flex gap-2">
                <span className="text-xs px-3 py-1 bg-surface border border-border rounded-md text-foreground/70">30d</span>
                <span className="text-xs px-3 py-1 bg-primary/10 border border-primary text-primary rounded-md">12m</span>
              </div>
            </div>
            
            {/* এখানে h-64 এর জায়গায় h-72 এবং flex-grow ব্যবহার করা হয়েছে */}
            <div className="flex-grow w-full h-72">
              <ResponsiveContainer width="100%" height="100%">
                {/* গ্যাপ কমানোর জন্য bottom margin নেগেটিভ করা হয়েছে */}
                <BarChart data={expenseData} margin={{ top: 0, right: 0, left: 0, bottom: -15 }}>
                  <XAxis 
                    dataKey="name" 
                    stroke="#52525b" 
                    fontSize={12} 
                    tickLine={false} 
                    axisLine={false} 
                    tickMargin={10} 
                  />
                  <Tooltip 
                    cursor={{fill: '#27272a'}}
                    contentStyle={{ backgroundColor: '#18181b', borderColor: '#27272a', borderRadius: '8px' }}
                  />
                  <Bar dataKey="amount" radius={[4, 4, 0, 0]}>
                    {expenseData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={index === 7 ? "#FF6600" : "#ea580c"} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
          
          {/* Categories Section */}
          <div className="bg-background border border-border p-6 rounded-2xl flex flex-col justify-center">
            <h3 className="text-sm font-bold text-foreground mb-6">Top Spending Categories</h3>
            <div className="space-y-6">
              {[
                { name: "Flights & Travel", percent: "45%", color: "bg-primary" },
                { name: "Accommodation", percent: "25%", color: "bg-yellow-500" },
                { name: "Food & Dining", percent: "18%", color: "bg-blue-500" },
                { name: "Activities & Tours", percent: "12%", color: "bg-green-500" },
              ].map((cat, idx) => (
                <div key={idx}>
                  <div className="flex justify-between text-xs mb-2">
                    <span className="text-foreground/80">{cat.name}</span>
                    <span className="font-bold text-foreground">{cat.percent}</span>
                  </div>
                  <div className="w-full bg-surface rounded-full h-1.5">
                    <div className={`${cat.color} h-1.5 rounded-full`} style={{ width: cat.percent }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Sidebar (Itineraries) */}
        <div className="bg-background border border-border p-6 rounded-2xl flex flex-col">
          <h3 className="text-sm font-bold text-foreground mb-4">Upcoming Itineraries</h3>
          
          <div className="space-y-3 flex-grow">
            {[
              { title: "Sylhet Adventure", sub: "Sylhet, BD • 3 Nights", date: "Jul 15", color: "bg-green-500" },
              { title: "Bali Getaway", sub: "Bali, Indonesia • 5 Nights", date: "Aug 20", color: "bg-blue-500" },
              { title: "Cox's Bazar Trip", sub: "Chattogram, BD • 2 Nights", date: "Sep 12", color: "bg-purple-500" },
            ].map((trip, idx) => (
              <div key={idx} className="bg-surface/50 border border-border p-4 rounded-xl flex justify-between items-center hover:border-primary/50 transition-colors cursor-pointer">
                <div className="flex gap-3 items-start">
                  <div className={`w-2 h-2 mt-1.5 rounded-full ${trip.color}`}></div>
                  <div>
                    <h4 className="text-sm font-bold text-foreground">{trip.title}</h4>
                    <span className="text-xs text-foreground/60">{trip.sub}</span>
                  </div>
                </div>
                <span className="text-xs text-foreground/50">{trip.date}</span>
              </div>
            ))}
          </div>

          {/* Collaboration Support */}
          <div className="mt-6">
            <h3 className="text-sm font-bold text-foreground mb-3">Live Collaboration</h3>
            <div className="bg-surface/50 border border-border p-4 rounded-xl flex gap-3 items-center">
              <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                <FiCheckCircle className="text-green-500 text-xl" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-foreground">Sarah is online</h4>
                <span className="text-xs text-foreground/60">Ready to plan with you</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default DashboardPreview;