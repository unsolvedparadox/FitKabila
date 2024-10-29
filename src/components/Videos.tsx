import React from 'react';
import { Play } from 'lucide-react';

export default function Videos() {
  return (
    <div id="videos" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Fitness Videos
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Check out my latest workout tutorials and tips
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="relative">
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                className="w-full h-64 rounded-lg shadow-lg"
                src="https://www.youtube.com/embed/YYFyL8hJcqY"
                title="Workout Tutorial"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <h3 className="mt-4 text-lg font-medium text-gray-900">Full Body HIIT Workout</h3>
            <p className="mt-2 text-gray-600">Intense cardio session for maximum calorie burn</p>
          </div>
          
          <div className="relative bg-gray-200 rounded-lg shadow-lg flex items-center justify-center h-64">
            <div className="text-center">
              <Play className="h-12 w-12 text-gray-400 mx-auto" />
              <p className="mt-4 text-gray-600">More videos coming soon</p>
            </div>
          </div>
          
          <div className="relative bg-gray-200 rounded-lg shadow-lg flex items-center justify-center h-64">
            <div className="text-center">
              <Play className="h-12 w-12 text-gray-400 mx-auto" />
              <p className="mt-4 text-gray-600">More videos coming soon</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}