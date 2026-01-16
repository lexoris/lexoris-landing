import { useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Sparkles, Globe, Scale, Workflow, Volume2, Activity, FileText } from "lucide-react";
import { DEMO_BOOKING_URL, DEMO_BOOKING_LABEL, DEMO_BOOKING_ARIA_LABEL } from "@/lib/constants";

const LegalDictationSoftware = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What types of dictation can I use Lexoris for?",
      answer: "Lexoris supports dictation for file notes, advice, internal documents, preparatory drafts, and other legal work.",
    },
    {
      question: "Is my dictation handled securely?",
      answer: "Yes. Lexoris is hosted exclusively on Australian servers, with data handling aligned to GDPR principles.",
    },
    {
      question: "Do I need special equipment?",
      answer: "No. You can use standard recording devices, existing dictation tools, or record directly in the browser.",
    },
  ];

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <Layout>
      <section className="pt-32 pb-20 px-5">
        <div className="max-w-4xl mx-auto">
          {/* H1 */}
          <h1 className="section-title mb-8">Legal Dictation Software for Law Firms</h1>

          {/* Intro / Positioning */}
          <div className="mb-16">
            <p className="text-lg text-muted-foreground mb-4">
              Lexoris is legal dictation software built for lawyers and law firms who rely on voice dictation to work efficiently.
            </p>
            <p className="text-lg text-muted-foreground">
              From file notes and advice to internal memos and case preparation, Lexoris converts dictated audio into clear, usable text that fits seamlessly into existing legal workflows.
            </p>
          </div>

          {/* Dictation in Everyday Legal Practice */}
          <div className="mb-16">
            <h2 className="text-2xl font-semibold text-foreground mb-6 text-center">Dictation in Everyday Legal Practice</h2>
            <p className="text-muted-foreground mb-4">Many legal professionals use dictation to:</p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>Record file notes</li>
              <li>Draft advice and correspondence</li>
              <li>Capture instructions and ideas</li>
              <li>Prepare matters efficiently</li>
            </ul>
            <p className="text-muted-foreground mt-4">
              Lexoris is designed to support these daily tasks without introducing complexity or disruption.
            </p>
          </div>

          {/* How Lexoris Fits into Your Workflow */}
          <div className="mb-16">
            <h2 className="text-2xl font-semibold text-foreground mb-8 text-center">How Lexoris Fits into Your Workflow</h2>
            <div className="flex flex-col gap-10">
              <div className="how-step text-center">
                <div className="mb-4 flex justify-center">
                  <Volume2 className="w-12 h-12 text-primary" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-foreground mb-3">
                  Step 1: Record or Upload
                </h3>
                <p className="text-muted-foreground text-lg">
                  Record directly in Lexoris or upload your existing audio file securely. All files are encrypted in transit and handled in line with professional confidentiality obligations.
                </p>
              </div>
              
              <div className="how-step text-center">
                <div className="mb-4 flex justify-center">
                  <Activity className="w-12 h-12 text-primary" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-foreground mb-3">
                  Step 2: AI Transcribes and Post-Processes
                </h3>
                <p className="text-muted-foreground text-lg">
                  Lexoris transcribes your audio using advanced AI that is post-processed for Australian legal terminology, formal legal writing styles, and structured readability. Where applicable, transcripts support single-speaker and multi-speaker formats and apply AGLC-aligned citation formatting.
                </p>
              </div>
              
              <div className="how-step text-center">
                <div className="mb-4 flex justify-center">
                  <FileText className="w-12 h-12 text-primary" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-foreground mb-3">
                  Step 3: Export to Word
                </h3>
                <p className="text-muted-foreground text-lg">
                  Export your completed transcript instantly to Microsoft Word. All processing occurs on Australian-hosted infrastructure, and audio and transcript data are automatically deleted after download.
                </p>
              </div>
            </div>
          </div>

          {/* Designed for Busy Legal Professionals */}
          <div className="mb-16">
            <h2 className="text-2xl font-semibold text-foreground mb-8 text-center">Designed for Busy Legal Professionals</h2>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="feature-card">
                <div className="mb-4">
                  <Sparkles className="w-10 h-10 text-primary" />
                </div>
                <h4 className="font-heading text-xl font-bold text-foreground mb-3">
                  No training required
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  Lexoris is intuitive and easy to use, allowing legal professionals to get started immediately.
                </p>
              </div>
              
              <div className="feature-card">
                <div className="mb-4">
                  <Globe className="w-10 h-10 text-primary" />
                </div>
                <h4 className="font-heading text-xl font-bold text-foreground mb-3">
                  Browser-based access
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  Access Lexoris securely through your browser, without installing additional software.
                </p>
              </div>
              
              <div className="feature-card">
                <div className="mb-4">
                  <Scale className="w-10 h-10 text-primary" />
                </div>
                <h4 className="font-heading text-xl font-bold text-foreground mb-3">
                  Legal-specific post-processing
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  Transcripts are post-processed for Australian legal terminology, formal drafting styles, and clarity.
                </p>
              </div>
              
              <div className="feature-card">
                <div className="mb-4">
                  <Workflow className="w-10 h-10 text-primary" />
                </div>
                <h4 className="font-heading text-xl font-bold text-foreground mb-3">
                  Works around your practice
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  Lexoris supports existing dictation habits and workflows rather than forcing a new system.
                </p>
              </div>
            </div>
          </div>

          {/* Common Questions */}
          <div className="mb-16">
            <h2 className="text-2xl font-semibold text-foreground mb-6 text-center">Common Questions</h2>
            <div className="bg-card rounded-xl shadow-card p-8">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className={`faq-item ${activeIndex === index ? "active" : ""}`}
                >
                  <div
                    className="faq-question"
                    onClick={() => toggleFaq(index)}
                  >
                    {faq.question}
                  </div>
                  <div className="faq-answer">
                    {faq.answer}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center py-12 border-t border-border">
            <h2 className="text-2xl font-semibold text-foreground mb-4">See Lexoris in Action</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              A short walkthrough is the easiest way to understand how Lexoris fits into your daily dictation workflow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild variant="hero" size="lg">
                <a 
                  href={DEMO_BOOKING_URL} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label={DEMO_BOOKING_ARIA_LABEL}
                >
                  {DEMO_BOOKING_LABEL}
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => window.open("https://app.lexoris.com.au/signup", "_blank")}
              >
                Start free trial
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default LegalDictationSoftware;
