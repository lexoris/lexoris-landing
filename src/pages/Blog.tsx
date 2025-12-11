import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { AnimatedSection } from "@/hooks/use-scroll-animation";
import { Calendar } from "lucide-react";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "AI Transcription for Australian Lawyers",
      date: "2025-12-7",
      excerpt: "AI transcription has become one of the most time-saving tools available to Australian lawyers. With rising file loads and pressure to deliver matters efficiently, modern firms are moving from manual typing to AI-powered tools.",
      slug: "ai-transcription-australian-lawyers",
    },
    {
      id: 2,
      title: "Legal Dictation vs Transcription: What's Faster?",
      date: "2025-12-1",
      excerpt: "Dictation is fastest for quick notes, emails, file instructions and hands-free drafting. Transcription is fastest for interviews, conferences, mediations and court-ready summaries.",
      slug: "legal-dictation-vs-transcription",
    },
    {
      id: 3,
      title: "How to Keep Legal Transcription Confidential",
      date: "2025-11-20",
      excerpt: "Key confidentiality requirements: Australian-hosted servers; encrypted upload and storage; avoid consumer-grade tools; automatic deletion; legal-specific accuracy.",
      slug: "legal-transcription-confidentiality",
    },
    {
      id: 4,
      title: "Why Australian Data Residency Matters",
      date: "2025-11-15",
      excerpt: "Data location affects compliance, Privacy Act obligations, client expectations, and risk. Australian hosting eliminates cross-border issues and foreign jurisdiction exposure.",
      slug: "australian-data-residency",
    },
    {
      id: 5,
      title: "Best Tools for Barristers in 2025",
      date: "2025-11-10",
      excerpt: "Key tools: AI legal transcription, digital brief/bundle software, encrypted messaging, automated time tracking, AI legal research.",
      slug: "best-tools-barristers-2025",
    },
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-AU", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="text-center pt-40 pb-16 px-5 md:px-8 bg-gradient-to-br from-lexoris-navy to-lexoris-navy-light text-primary-foreground">
        <h1 className="font-heading text-[32px] md:text-5xl font-bold mb-4 leading-[1.25] md:leading-[1.28] animate-fade-in" style={{ textShadow: '0 2px 6px rgba(0,0,0,0.35)' }}>
          Blog
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90 animate-fade-in px-4" style={{ animationDelay: '0.1s' }}>
          Insights, updates, and resources for legal professionals.
        </p>
      </section>

      {/* Blog Grid */}
      <AnimatedSection className="py-16 md:py-24 px-5 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {blogPosts.map((post) => (
              <Link
                key={post.id}
                to={`/blog/${post.slug}`}
                className="bg-card rounded-xl border-t-4 border-primary overflow-hidden transition-all duration-300 hover:-translate-y-1 flex flex-col group"
                style={{ boxShadow: 'var(--shadow-card)' }}
              >
                <article className="p-6 md:p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                    <Calendar className="w-4 h-4" />
                    <time dateTime={post.date}>{formatDate(post.date)}</time>
                  </div>
                  <h2 className="font-heading text-lg md:text-xl font-bold text-foreground mb-3 leading-snug group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-muted-foreground text-sm md:text-base leading-relaxed flex-grow">
                    {post.excerpt}
                  </p>
                  <span className="inline-flex items-center text-primary font-semibold mt-4 group-hover:underline">
                    Read more →
                  </span>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </Layout>
  );
};

export default Blog;
