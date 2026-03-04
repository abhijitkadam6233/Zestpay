import React from 'react';
import { motion } from 'motion/react';
import { Calendar, User, ArrowRight } from 'lucide-react';

const BlogPage = () => {
  const posts = [
    {
      id: 1,
      title: 'The Future of Digital Banking in Rural India',
      excerpt: 'How AEPS and Micro ATMs are transforming the way rural communities access financial services.',
      date: 'March 15, 2024',
      author: 'Zest Pay Team',
      image: 'https://picsum.photos/seed/ruralbanking/800/400'
    },
    {
      id: 2,
      title: '5 Ways Retailers Can Increase Their Monthly Income',
      excerpt: 'Discover how adding digital services to your shop can significantly boost your revenue and footfall.',
      date: 'February 28, 2024',
      author: 'Zest Pay Team',
      image: 'https://picsum.photos/seed/retailincome/800/400'
    },
    {
      id: 3,
      title: 'Understanding the Importance of Secure Transactions',
      excerpt: 'A deep dive into the security measures that protect your business and your customers.',
      date: 'February 10, 2024',
      author: 'Zest Pay Team',
      image: 'https://picsum.photos/seed/securetrans/800/400'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-20 pb-24 bg-slate-50 min-h-screen"
    >
      <div className="bg-slate-900 py-20 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Zest Pay Blog</h1>
        <p className="text-xl text-slate-300 max-w-3xl mx-auto">
          Insights, news, and updates from the world of digital finance and retail empowerment.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div key={post.id} className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-md transition-shadow">
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover" referrerPolicy="no-referrer" />
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                  <span className="flex items-center gap-1"><Calendar size={14} /> {post.date}</span>
                  <span className="flex items-center gap-1"><User size={14} /> {post.author}</span>
                </div>
                <h2 className="text-xl font-bold text-slate-900 mb-3">{post.title}</h2>
                <p className="text-slate-600 mb-6 line-clamp-3">{post.excerpt}</p>
                <a href="#" className="text-primary font-medium flex items-center gap-2 hover:gap-3 transition-all">
                  Read More <ArrowRight size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default BlogPage;
