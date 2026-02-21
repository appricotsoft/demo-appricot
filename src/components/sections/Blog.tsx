'use client';

const posts = [
  {
    id: 1,
    title: 'Tech Visionaries: Exploring Cutting-Edge Inspection Innovations',
    excerpt: 'Introduction Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi',
    date: 'October 24, 2023',
    category: 'Excellence',
  },
  {
    id: 2,
    title: 'Precision in Pixels: Unraveling the Future of Quality Control',
    excerpt: 'Home Precision in Pixels: Unraveling the Future of Quality Control Introduction Mi tincidunt elit,',
    date: 'October 24, 2023',
    category: 'Innovation',
  },
  {
    id: 3,
    title: 'Insights from the Tech Frontier: Revolutionizing Inspection Methods',
    excerpt: 'Home Insights from the Tech Frontier: Revolutionizing Inspection Methods Mi tincidunt elit, id quisque',
    date: 'October 24, 2023',
    category: 'Precision',
  },
];

export default function Blog() {
  return (
    <section className="py-20 bg-white animate-slideUp">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-12">
          <h2 className="text-[42px] leading-[1.2] font-semibold text-foreground">
            News & Updates
          </h2>
          <a href="#" className="inline-flex items-center gap-2 text-foreground font-medium hover:gap-3 transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
              <path d="M8.15685 4.96448L13.8137 10.6213L8.15685 16.2782" stroke="#222222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            View all
          </a>
        </div>

        {/* Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article key={post.id} className="group">
              {/* Image */}
              <a href="#" className="block mb-6 overflow-hidden rounded-2xl">
                <div className="bg-gray-200 aspect-[4/3] flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                  <span className="text-gray-500">Blog Image {post.id}</span>
                </div>
              </a>
              
              {/* Content */}
              <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                <a href="#">{post.title}</a>
              </h3>
              <p className="text-body mb-4">{post.excerpt}</p>
              
              {/* Meta */}
              <div className="flex items-center gap-4 text-sm text-body">
                <span>{post.date}</span>
                <a href="#" className="text-foreground hover:text-primary transition-colors">
                  {post.category}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
