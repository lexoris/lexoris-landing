import { useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Scale, Clock, Shield, Sparkles } from "lucide-react";
import { DEMO_BOOKING_URL, DEMO_BOOKING_LABEL, DEMO_BOOKING_ARIA_LABEL } from "@/lib/constants";

const TranscriptionForBarristers = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Is Lexoris suitable for court-related and advisory work?",
      answer: "Yes. Lexoris is designed to support transcription of dictation, hearings, and recorded discussions for review and preparation purposes.",
    },
    {
      question: "Can I use Lexoris for advice and submissions?",
      answer: "Lexoris is commonly used to transcribe dictated advice, notes, and preparatory drafts. Final review and responsibility always remain with the barrister.",
    },
    {
      question: "Where is my data stored?",
      answer: "Lexoris is hosted exclusively on Australian (Sydney) servers and is aligned with GDPR principles.",
    },
    {
      question: "Do I need special equipment or training?",
      answer: "No. You can either record directly in the browser or use your existing recording methods. Lexoris is deliberately designed to be simple and intuitive requiring little to no training.",
    },
  ];

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <Layout>
      <section className="pt-32 pb-20 px-5">
        <div className="max-w-4xl mx-auto">
          <h1 className="section-title mb-8">Built for Barristers Who Rely on Dictation</h1>
          
          <p className="text-lg text-muted-foreground mb-6">
            Lexoris is transcription software designed for barristers who rely on dictation to work efficiently, accurately, and independently.
          </p>
          
          <p className="text-lg text-muted-foreground mb-6">
            Whether you are preparing advice, drafting submissions, or recording notes between matters, Lexoris converts dictated audio into clear, usable text without disrupting how you already work.
          </p>
          
          <p className="text-lg text-muted-foreground mb-16">
            There is no complex setup, no training, and no unnecessary features — just reliable transcription designed for legal practice.
          </p>

          {/* Designed Around the Way Barristers Work */}
          <div className="mb-16">
            <h2 className="text-2xl font-semibold text-foreground mb-6 text-center">Designed Around the Way Barristers Work</h2>
            
            <p className="text-muted-foreground mb-6">
              Barristers often work under time pressure, across multiple matters, and outside traditional firm structures. Lexoris is designed with that reality in mind.
            </p>
            
            <p className="text-muted-foreground mb-4">Lexoris supports barristers who:</p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
              <li>Dictate advice, opinions, and notes</li>
              <li>Need fast turnaround from audio to text</li>
              <li>Require accuracy in legal terminology</li>
              <li>Handle confidential and sensitive material</li>
            </ul>
            
            <p className="text-muted-foreground">
              The platform fits around your existing workflow rather than forcing a new one.
            </p>
          </div>

          {/* Dictation-First, Not Software-First */}
          <div className="mb-16">
            <h2 className="text-2xl font-semibold text-foreground mb-6 text-center">Dictation-First, Not Software-First</h2>
            
            <p className="text-muted-foreground mb-6">
              Lexoris is built for professionals who think and work out loud.
            </p>
            
            <p className="text-muted-foreground mb-4">You can dictate:</p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
              <li>Advice and opinions</li>
              <li>Case notes and file summaries</li>
              <li>Draft submissions or outlines</li>
              <li>Preparatory notes after hearings</li>
            </ul>
            
            <p className="text-muted-foreground">
              Upload your recording and receive an editable transcript suitable for review, refinement, and use in your legal work.
            </p>
          </div>

          {/* Why Barristers Choose Lexoris */}
          <div className="mb-16">
            <h2 className="text-2xl font-semibold text-foreground mb-8 text-center">Why Barristers Choose Lexoris</h2>
            
            <div className="grid gap-8 md:grid-cols-2">
              <div className="feature-card">
                <div className="mb-4">
                  <Scale className="w-10 h-10 text-primary" />
                </div>
                <h4 className="font-heading text-xl font-bold text-foreground mb-3">
                  Accurate legal transcription
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  Lexoris is tuned for legal terminology and post processed for increased accuracy producing transcripts that are practical for professional use.
                </p>
              </div>
              
              <div className="feature-card">
                <div className="mb-4">
                  <Clock className="w-10 h-10 text-primary" />
                </div>
                <h4 className="font-heading text-xl font-bold text-foreground mb-3">
                  Fast turnaround
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  Lexoris is designed to reduce the time between dictation and usable text. A Lexoris transcript is delivered in approximately half the real time audio length.
                </p>
              </div>
              
              <div className="feature-card">
                <div className="mb-4">
                  <Shield className="w-10 h-10 text-primary" />
                </div>
                <h4 className="font-heading text-xl font-bold text-foreground mb-3">
                  Confidential handling of recordings
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  All recordings and transcripts are handled with confidentiality in mind, supporting professional obligations and client privacy. All data is exclusively hosted on Australian servers.
                </p>
              </div>
              
              <div className="feature-card">
                <div className="mb-4">
                  <Sparkles className="w-10 h-10 text-primary" />
                </div>
                <h4 className="font-heading text-xl font-bold text-foreground mb-3">
                  No training or setup
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  Lexoris is browser-based and intuitive. You can start using it immediately without changing how you work.
                </p>
              </div>
            </div>
          </div>

          {/* Common Questions from Barristers */}
          <div className="mb-16">
            <h2 className="text-2xl font-semibold text-foreground mb-6 text-center">Common Questions from Barristers</h2>
            
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

          {/* See Lexoris in Action */}
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-semibold text-foreground mb-4">See Lexoris in Action</h2>
            
            <p className="text-muted-foreground mb-8">
              The best way to understand whether Lexoris fits your practice is to see it in use.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-6 justify-center">
              <Button asChild size="lg">
                <a 
                  href={DEMO_BOOKING_URL} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label={DEMO_BOOKING_ARIA_LABEL}
                >
                  {DEMO_BOOKING_LABEL}
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/signup">Start free trial</Link>
              </Button>
            </div>
            
            <p className="text-sm text-muted-foreground">
              We'll show you how Lexoris works, answer your questions, and help you get started — no obligation.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TranscriptionForBarristers;
