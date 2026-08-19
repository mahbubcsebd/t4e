'use client';
import React from 'react';
import Link from 'next/link';

export const BlogRecommendations = ({ posts, currentPostId }) => {
  const recommendedPosts = posts
    .filter(p => p.id !== currentPostId)
    .slice(0, 2);

  return (
    <div className="mt-20">
      <h3 className="text-[20px] font-bold text-[#1f2937] mb-8">Recommended Reading</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {recommendedPosts.map((recommended) => (
          <Link 
            key={recommended.id} 
            href={`/blog/${recommended.slug}/`}
            className="group block bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <span className="text-[10px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#07A7E1] to-[#093cad] uppercase tracking-widest mb-4 block">
              {recommended.category}
            </span>
            <h4 className="text-[17px] font-bold text-[#1f2937] group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#07A7E1] group-hover:to-[#093cad] transition-all leading-snug">
              {recommended.title}
            </h4>
          </Link>
        ))}
      </div>
    </div>
  );
};
