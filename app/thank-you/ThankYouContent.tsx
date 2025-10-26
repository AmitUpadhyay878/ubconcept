'use client';
import React, { useEffect } from 'react'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation';
import { CheckCircle, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'

export default function ThankYouContent() {
       const router = useRouter();
   const searchParams = useSearchParams();
 
   useEffect(() => {
     // Check if param 'from' is present and is 'contact'
     if (searchParams.get('from') != 'contact') {
       router.replace('/');
     }
   }, []);

  return (
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-6">
            <CheckCircle className="w-10 h-10 text-amber-400" />
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Thank{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-amber-500">
              You
            </span>
          </h1>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 mb-12">
            <p className="text-gray-300 text-lg mb-6">
              We've received your message and appreciate your interest in UBConcept. Our team will review your inquiry and get back to you within 1-2 business days.
            </p>
            <p className="text-gray-300 text-lg">
              While you wait, feel free to explore our services or check out our recent projects to learn more about how we can help bring your ideas to life.
            </p>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-white mb-8 text-center">Next Steps</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 transition-all hover:bg-white/10">
            <Link href="/services" className="block">
              <div className="flex items-center mb-4">
                <div className="bg-blue-700/20 p-3 rounded-lg mr-4">
                  <CheckCircle className="h-6 w-6 text-amber-400" />
                </div>
                <h3 className="text-xl font-semibold text-white">Explore Services</h3>
              </div>
              <p className="text-gray-300">
                Discover our comprehensive range of product development and consulting services.
              </p>
            </Link>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 transition-all hover:bg-white/10">
            <Link href="/portfolio" className="block">
              <div className="flex items-center mb-4">
                <div className="bg-blue-700/20 p-3 rounded-lg mr-4">
                  <CheckCircle className="h-6 w-6 text-amber-400" />
                </div>
                <h3 className="text-xl font-semibold text-white">View Portfolio</h3>
              </div>
              <p className="text-gray-300">
                See how we've helped other clients transform their ideas into successful products.
              </p>
            </Link>
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
          <h2 className="text-xl font-semibold text-white mb-6 text-center">Connect With Us</h2>
          <div className="flex flex-wrap justify-center gap-4">
             <Link
              href="https://linkedin.com/company/ubconcept"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-700/20 p-3 rounded-lg hover:bg-blue-700/40 transition-colors group"
            >
              <Linkedin className="h-6 w-6 text-gray-300 group-hover:text-amber-400" />
            </Link>
            <span
            //   href="https://facebook.com/ubconcept"
            //   target="_blank"
            //   rel="noopener noreferrer"
              className="bg-blue-700/20 p-3 rounded-lg hover:bg-blue-700/40 transition-colors group"
            >
              <Facebook className="h-6 w-6 text-gray-300 group-hover:text-amber-400" />
            </span>
            <span
            //   href="https://twitter.com/ubconcept"
            //   target="_blank"
            //   rel="noopener noreferrer"
              className="bg-blue-700/20 p-3 rounded-lg hover:bg-blue-700/40 transition-colors group"
            >
              <Twitter className="h-6 w-6 text-gray-300 group-hover:text-amber-400" />
            </span>
           
            <span
            //   href="https://instagram.com/ubconcept"
            //   target="_blank"
            //   rel="noopener noreferrer"
              className="bg-blue-700/20 p-3 rounded-lg hover:bg-blue-700/40 transition-colors group"
            >
              <Instagram className="h-6 w-6 text-gray-300 group-hover:text-amber-400" />
            </span>
          </div>
        </div>
      </div>
  );
}
