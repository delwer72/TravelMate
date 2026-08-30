import BestPackages from '@/components/home/BestPackages';
import BestServiceBanner from '@/components/home/BestServiceBanner';
import BookingSteps from '@/components/home/BookingSteps';
import HeroSection from '@/components/home/HeroSection';
import NewsletterSubscribe from '@/components/home/NewsletterSubscribe';
import PopularDestinations from '@/components/home/PopularDestinations';
import ServicesSection from '@/components/home/ServicesSection';
import StatsSection from '@/components/home/StatsSection';
import TestimonialSection from '@/components/home/TestimonialSection';
import React from 'react';

const page = () => {
  return (
    <div>
      <HeroSection/> 
      <ServicesSection/>
      <BestServiceBanner/>
      <StatsSection/>
      <PopularDestinations/>
      <BestPackages/>
      <BookingSteps/>
      <TestimonialSection/>
      <NewsletterSubscribe/>
    </div>
  );
};

export default page;