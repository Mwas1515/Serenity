import { blogPosts } from '../data/blogPosts.js'

export default function Resources() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <p className="text-gold font-mono text-sm uppercase tracking-wide mb-3">Learn</p>
      <h1 className="text-4xl font-semibold text-teal mb-10">Resources & Articles</h1>

      <div className="grid sm:grid-cols-2 gap-6">
        {blogPosts.map((p) => (
          <article key={p.id} className="bg-white rounded-xl2 border border-sage-light/50 p-6">
            <div className="flex items-center gap-2 text-xs font-mono text-gold uppercase mb-2">
              <span>{p.category}</span>
              <span>·</span>
              <span>{p.readTime}</span>
            </div>
            <h2 className="font-semibold text-teal text-lg mb-2">{p.title}</h2>
            <p className="text-sm text-ink/60">{p.excerpt}</p>
          </article>
        ))}
      </div>
    </div>
  )
}
