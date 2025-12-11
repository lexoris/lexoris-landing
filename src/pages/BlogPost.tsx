import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { AnimatedSection } from "@/hooks/use-scroll-animation";
import { Calendar, ArrowLeft } from "lucide-react";

const blogPostsData: Record<string, { title: string; date: string; content: string }> = {
  "ai-transcription-australian-lawyers": {
    title: "AI Transcription for Australian Lawyers",
    date: "2025-11-10",
    content: `AI transcription has become one of the most time-saving tools available to Australian lawyers. With rising file loads and constant pressure to deliver matters efficiently, modern firms are shifting from manual typing to AI-powered solutions.

Unlike generic consumer transcription tools, legal transcription must handle case citations, statutory references, speaker turns, and sensitive information. Accuracy and confidentiality are critical — and that's where purpose-built legal AI systems stand out.

**AI transcription offers:**

• Faster turnaround than traditional dictation typing
• Consistent formatting aligned with legal style guides
• Secure, encrypted processing
• Cost-effective workflows for sole practitioners and large chambers alike

When paired with human-level post-correction engines, AI can deliver highly accurate, court-ready output in minutes. As the technology evolves, Australian lawyers who adopt AI transcription today gain a significant efficiency edge tomorrow.

**Start simplifying your workflow with Lexoris — Australia's locally hosted, legally accurate transcription platform. Try it free for 21 days.**`,
  },
  "legal-dictation-vs-transcription": {
    title: "Legal Dictation vs Transcription: What's Faster?",
    date: "2025-11-15",
    content: `Many lawyers wonder which workflow ultimately saves more time: dictation or transcription. The truth is, both have strengths — but choosing the right approach depends on your practice style.

**Dictation is fastest for:**

• Drafting emails, memos, instructions and file notes on the go
• Capturing thought-process quickly without structure
• Working hands-free while reviewing briefs or evidence

**Transcription is fastest for:**

• Converting client interviews, conferences and mediations into clean text
• Preparing court-ready summaries
• Ensuring multi-speaker accuracy and consistency

The most efficient workflow is often a hybrid: dictate quick notes, record longer matters, and let AI transcription handle the heavy lifting. With the right tool, lawyers can reduce documentation time by 50–70% while improving accuracy and billing traceability.

**Lexoris supports both dictation and transcription — all processed securely within Australia. Try Lexoris free and experience the faster workflow firsthand.**`,
  },
  "legal-transcription-confidentiality": {
    title: "How to Keep Legal Transcription Confidential",
    date: "2025-11-20",
    content: `Confidentiality is the backbone of legal practice — which means transcription workflows must be airtight. Whether you're a sole practitioner or a national firm, these are the essential steps for maintaining confidentiality:

**1. Use Australian-hosted servers**
Files should never leave Australian borders, especially when they contain client admissions, personal information or privileged material.

**2. Ensure encrypted upload and storage**
AES-256 encryption in transit and at rest is now the minimum standard.

**3. Avoid consumer-grade apps**
Free or overseas tools often store data indefinitely or use files for model training.

**4. Implement automatic deletion**
Files should be removed within a defined retention period (e.g., 7 days), with clear logs available.

**5. Choose tools with legal-specific accuracy**
Mis-transcriptions can change meaning — which creates unnecessary risk.

When confidentiality is treated as a design requirement, not an afterthought, legal transcription becomes both safe and efficient.

**Lexoris keeps all data securely stored in Australia with strict non-training guarantees. Your files never leave the country. Try it free today.**`,
  },
  "australian-data-residency": {
    title: "Why Australian Data Residency Matters",
    date: "2025-12-01",
    content: `For Australian law firms, where data is stored is just as important as how it is stored. Data residency has become a major compliance issue, especially as cloud platforms and AI tools proliferate.

**Why it matters:**

• Professional obligations — Solicitors must take reasonable steps to protect client information.
• Privacy Act compliance — Overseas storage may trigger additional APP requirements.
• Client expectations — Many corporate and government clients now mandate Australian hosting.
• Risk management — Offshore servers can sit under foreign jurisdictions and disclosure laws.

**The solution**

Using platforms with 100% Australian data residency eliminates cross-border risk and simplifies compliance. Combined with encryption and strict non-training guarantees, lawyers can safely integrate AI into everyday workflows without compromising professional standards.

**Lexoris is proudly hosted in Australia, giving legal professionals complete control over their data. Try Lexoris free and see the difference local hosting makes.**`,
  },
  "best-tools-barristers-2025": {
    title: "Best Tools for Barristers in 2025",
    date: "2025-12-07",
    content: `Barristers are adopting technology at a rapid pace — not to replace advocacy, but to streamline preparation, research and communication. Here are the standout tools for 2025:

**1. AI-Powered Legal Transcription**
Fast, confidential transcription is now essential for conferences, mediations and dictation. Tools with Australian servers are preferred for privacy and compliance.

**2. Brief and Bundle Management Software**
Modern chambers increasingly rely on digital brief platforms to organise court books, exhibits and annotations.

**3. Secure Messaging & Collaboration Tools**
Encrypted chat and document-sharing reduce reliance on email while maintaining privilege.

**4. Automated Time Tracking**
Hands-free tracking ensures accurate billing without interrupting workflow.

**5. Research Assistants Powered by AI**
Used properly, AI research tools help identify issues, cases and authorities faster — especially when paired with professional judgment.

By adopting the right technology stack, barristers can significantly reduce administrative time and focus on what matters most: preparation, persuasion and advocacy.

**Lexoris gives barristers fast, confidential transcription with Australian data residency and legal-grade accuracy. Start your free trial today.**`,
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
      const formattedParagraph = paragraph.replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground font-semibold">$1</strong>');
      
      // Check if it's a bullet list (• or -)
      if (paragraph.match(/^[•\-] /m)) {
        const items = paragraph.split('\n').filter(line => line.match(/^[•\-] /));
        return (
          <ul key={index} className="space-y-3 mb-8 ml-1">
            {items.map((item, i) => (
              <li 
                key={i} 
                className="flex items-start gap-3 text-muted-foreground leading-relaxed"
              >
                <span className="text-lexoris-red mt-1.5 text-sm">●</span>
                <span dangerouslySetInnerHTML={{ __html: item.replace(/^[•\-] /, '').replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground font-semibold">$1</strong>') }} />
              </li>
            ))}
          </ul>
        );
      }
      
      return (
        <p 
          key={index} 
          className="text-muted-foreground leading-relaxed mb-6 text-lg"
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
            className="inline-flex items-center gap-2 text-lexoris-red font-semibold mb-10 hover:underline"
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
