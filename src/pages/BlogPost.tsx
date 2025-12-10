import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { AnimatedSection } from "@/hooks/use-scroll-animation";
import { Calendar, ArrowLeft } from "lucide-react";

const blogPostsData: Record<string, { title: string; date: string; content: string }> = {
  "ai-transcription-australian-lawyers": {
    title: "AI Transcription for Australian Lawyers",
    date: "2025-01-08",
    content: `AI transcription has become one of the most time-saving tools available to Australian lawyers. With rising file loads and pressure to deliver matters efficiently, modern firms are moving from manual typing to AI-powered tools.

Legal transcription must handle citations, statutes, speaker turns and sensitive info — accuracy and confidentiality are critical.

**Benefits:**
- Faster turnaround
- Legal formatting
- Secure processing
- Cost-effective workflows

With post-correction engines, AI can deliver court-ready output in minutes.

**Try Lexoris free for 21 days.**`,
  },
  "legal-dictation-vs-transcription": {
    title: "Legal Dictation vs Transcription: What's Faster?",
    date: "2025-01-05",
    content: `**Dictation** is fastest for:
- Quick notes
- Emails
- File instructions
- Hands-free drafting

**Transcription** is fastest for:
- Interviews
- Conferences
- Mediations
- Court-ready summaries

The most efficient workflow is a hybrid: dictate short notes, record long matters, use AI transcription to reduce documentation time by 50–70%.

**Lexoris supports both dictation and transcription securely within Australia.**`,
  },
  "legal-transcription-confidentiality": {
    title: "How to Keep Legal Transcription Confidential",
    date: "2025-01-02",
    content: `**Key confidentiality requirements:**

- Australian-hosted servers
- Encrypted upload and storage
- Avoid consumer-grade tools
- Automatic deletion
- Legal-specific accuracy

Proper confidentiality design makes transcription safe and efficient.

**Lexoris keeps all data in Australia with strict non-training guarantees.**`,
  },
  "australian-data-residency": {
    title: "Why Australian Data Residency Matters",
    date: "2024-12-28",
    content: `Data location affects:
- Compliance
- Privacy Act obligations
- Client expectations
- Risk

Australian hosting eliminates cross-border issues and foreign jurisdiction exposure.

Combined with encryption and non-training guarantees, firms can use AI safely.

**Lexoris is fully hosted in Australia.**`,
  },
  "best-tools-barristers-2025": {
    title: "Best Tools for Barristers in 2025",
    date: "2024-12-22",
    content: `**Key tools:**

- AI legal transcription
- Digital brief/bundle software
- Encrypted messaging
- Automated time tracking
- AI legal research

These tools streamline preparation and admin time.

**Lexoris gives barristers fast, confidential transcription with Australian data residency. Free trial available.**`,
  },
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? blogPostsData[slug] : null;

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-AU", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  const renderContent = (content: string) => {
    return content.split('\n\n').map((paragraph, index) => {
      // Handle bold text
      const formattedParagraph = paragraph.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
      
      // Check if it's a list item
      if (paragraph.startsWith('- ')) {
        const items = paragraph.split('\n').filter(line => line.startsWith('- '));
        return (
          <ul key={index} className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
            {items.map((item, i) => (
              <li key={i} dangerouslySetInnerHTML={{ __html: item.replace('- ', '').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
            ))}
          </ul>
        );
      }
      
      return (
        <p 
          key={index} 
          className="text-muted-foreground leading-relaxed mb-6"
          dangerouslySetInnerHTML={{ __html: formattedParagraph }}
        />
      );
    });
  };

  if (!post) {
    return (
      <Layout>
        <section className="text-center pt-40 pb-16 px-5 md:px-8 bg-gradient-to-br from-lexoris-navy to-lexoris-navy-light text-primary-foreground">
          <h1 className="font-heading text-[32px] md:text-5xl font-bold mb-4">
            Post Not Found
          </h1>
        </section>
        <AnimatedSection className="py-16 md:py-24 px-5 bg-background">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-muted-foreground mb-8">The blog post you're looking for doesn't exist.</p>
            <Link to="/blog" className="text-primary font-semibold hover:underline">
              ← Back to Blog
            </Link>
          </div>
        </AnimatedSection>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero Section */}
      <section className="text-center pt-40 pb-16 px-5 md:px-8 bg-gradient-to-br from-lexoris-navy to-lexoris-navy-light text-primary-foreground">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-2 text-primary-foreground/80 text-sm mb-4">
            <Calendar className="w-4 h-4" />
            <time dateTime={post.date}>{formatDate(post.date)}</time>
          </div>
          <h1 className="font-heading text-[28px] md:text-4xl lg:text-5xl font-bold leading-[1.25] md:leading-[1.28] animate-fade-in" style={{ textShadow: '0 2px 6px rgba(0,0,0,0.35)' }}>
            {post.title}
          </h1>
        </div>
      </section>

      {/* Content */}
      <AnimatedSection className="py-16 md:py-24 px-5 bg-background">
        <div className="max-w-3xl mx-auto">
          <Link 
            to="/blog" 
            className="inline-flex items-center gap-2 text-primary font-semibold mb-10 hover:underline"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
          
          <article className="prose prose-lg max-w-none">
            {renderContent(post.content)}
          </article>
        </div>
      </AnimatedSection>
    </Layout>
  );
};

export default BlogPost;
