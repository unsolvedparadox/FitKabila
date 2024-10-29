import React from 'react';
import { Award, Users, Clock, Code } from 'lucide-react';

export default function About() {
  return (
    <div id="about" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            About Preeta K
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Certified Personal Trainer and Fitness Nutrition Specialist
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="relative p-8 bg-white rounded-lg shadow-lg">
              <div className="text-center">
                <div className="flex justify-center">
                  <img
                    src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                    alt="Preeta K"
                    className="w-48 h-48 rounded-full object-cover"
                  />
                </div>
                <h3 className="mt-6 text-lg font-medium text-gray-900">Certifications</h3>
                <ul className="mt-4 text-gray-600 space-y-2">
                  <li>NASM Corrective Exercise Specialist</li>
                  <li>ACE CPT (Certification Number-T231839)</li>
                  <li>EREPS L4 (Membership Id- 65349)</li>
                  <li>Licenced ViPR LMT-2</li>
                  <li>TRX Certified</li>
                  <li>STRONG by Zumba Instructor</li>
                  <li>Zumba Instructor</li>
                </ul>
              </div>
            </div>

            <div className="relative p-8 bg-white rounded-lg shadow-lg">
              <div className="space-y-12">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <Award className="h-8 w-8 text-purple-500" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">Expert Trainer</h4>
                    <p className="mt-2 text-gray-600">
                      Over 5 years of experience in personal training and fitness nutrition
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <Users className="h-8 w-8 text-purple-500" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">Personalized Approach</h4>
                    <p className="mt-2 text-gray-600">
                      Customized training programs tailored to individual goals and needs
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <Clock className="h-8 w-8 text-purple-500" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">Flexible Schedule</h4>
                    <p className="mt-2 text-gray-600">
                      Convenient training sessions that fit your busy lifestyle
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <Code className="h-8 w-8 text-purple-500" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">Tech Background</h4>
                    <p className="mt-2 text-gray-600">
                      Former Amazonian & Software Developer bringing a unique analytical approach to fitness
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}