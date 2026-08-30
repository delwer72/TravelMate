import React from 'react';
import Image from 'next/image';
import { 
  MousePointerClick, 
  CreditCard, 
  Car, 
  Leaf, 
  Map, 
  Send, 
  Heart, 
  Building2 
} from 'lucide-react';

interface StepItem {
  id: number;
  icon: React.ElementType;
  iconBg: string;
  title: string;
  description: string;
}

const steps: StepItem[] = [
  {
    id: 1,
    icon: MousePointerClick,
    iconBg: 'bg-amber-500',
    title: 'Choose Destination',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.',
  },
  {
    id: 2,
    icon: CreditCard,
    iconBg: 'bg-orange-500',
    title: 'Make Payment',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.',
  },
  {
    id: 3,
    icon: Car,
    iconBg: 'bg-teal-600',
    title: 'Reach Airport on Selected Date',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.',
  },
];

export default function BookingSteps() {
  return (
    <section className="bg-slate-950 py-20 px-4 sm:px-6 lg:px-8 text-slate-100 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Title Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-100">
            Book Your Next Trip in 3 Easy Steps
          </h2>
          <p className="text-sm font-semibold uppercase tracking-wider text-slate-400 mt-2">
            Easy and Fast
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: 3 Steps */}
          <div className="lg:col-span-6 flex flex-col gap-8">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.id} className="flex items-start gap-5">
                  <div
                    className={`w-12 h-12 rounded-2xl ${step.iconBg} flex items-center justify-center text-white shrink-0 shadow-md`}
                  >
                    <Icon className="w-6 h-6 stroke-[2]" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-200">
                      {step.title}
                    </h3>
                    <p className="text-sm text-slate-400 leading-relaxed mt-1 max-w-sm">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Card & Overlay Card */}
          <div className="lg:col-span-6 relative flex justify-center lg:justify-end mt-6 lg:mt-0">
            {/* Background Blue/Cyan Blur Glow */}
            <div className="absolute -top-10 right-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

            {/* Main Destination Card */}
            <div className="bg-slate-900 border border-slate-800/80 rounded-3xl p-5 shadow-2xl shadow-black/50 w-full max-w-sm relative">
              {/* Trip Image */}
              <div className="relative w-full h-44 rounded-2xl overflow-hidden mb-5">
                <Image
                  src="https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=600&auto=format&fit=crop"
                  alt="Trip to Greece"
                  fill
                  sizes="(max-width: 640px) 100vw, 384px"
                  className="object-cover"
                />
              </div>

              {/* Trip Info */}
              <h3 className="text-lg font-bold text-slate-100">Trip To Greece</h3>
              <p className="text-xs font-medium text-slate-400 mt-1">
                14-29 June <span className="mx-1">|</span> by Robbin joseph
              </p>

              {/* Action Icons */}
              <div className="flex items-center gap-3 my-4">
                <button className="p-2.5 rounded-full bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors">
                  <Leaf className="w-4 h-4" />
                </button>
                <button className="p-2.5 rounded-full bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors">
                  <Map className="w-4 h-4" />
                </button>
                <button className="p-2.5 rounded-full bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors">
                  <Send className="w-4 h-4" />
                </button>
              </div>

              {/* Footer Stat */}
              <div className="flex items-center justify-between pt-2 text-xs font-medium text-slate-400">
                <div className="flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-slate-500" />
                  <span>24 people going</span>
                </div>
                <button className="text-slate-500 hover:text-rose-500 transition-colors">
                  <Heart className="w-5 h-5" />
                </button>
              </div>

              {/* Floating Overlay Card (Ongoing Trip) */}
              <div className="absolute -bottom-6 -right-2 sm:-right-8 bg-slate-900/95 backdrop-blur-md border border-slate-700/80 rounded-2xl p-4 shadow-2xl flex items-start gap-3.5 w-64">
                <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0 border border-slate-700">
                  <Image
                    src="https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=200&auto=format&fit=crop"
                    alt="Trip to Rome"
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <p className="text-[11px] font-medium text-slate-400">Ongoing</p>
                  <h4 className="text-sm font-bold text-slate-100 truncate">
                    Trip to rome
                  </h4>
                  <p className="text-xs font-semibold text-indigo-400 mt-1 mb-2">
                    40% <span className="text-slate-400 font-normal">completed</span>
                  </p>

                  {/* Progress Bar */}
                  <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                    <div className="w-[40%] h-full bg-indigo-500 rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}