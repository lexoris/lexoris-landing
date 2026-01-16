import { useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Scale, Users, Shield, Server, Clock, Sparkles } from "lucide-react";
import { DEMO_BOOKING_URL, DEMO_BOOKING_LABEL, DEMO_BOOKING_ARIA_LABEL } from "@/lib/constants";

const LegalTranscriptionSoftwareAustralia = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Is Lexoris suitable for legal and court-related material?",
      answer: "Yes. Lexoris is designed specifically for legal professionals and supports transcription of legal dictation, hearings, and recorded discussions for review and preparation purposes.",
    },
    {
      question: "Where is my data stored?",
      answer: "Lexoris is hosted exclusively on Australian servers. Data handling practices are aligned with GDPR principles.",
    },
    {
      question: "What happens to my audio and transcripts after use?",
      answer: "Audio files and transcripts are automatically deleted after download. Lexoris does not retain data longer than necessary and does not store content unnecessarily.",
    },
    {
      question: "Do I need to install software or train staff?",
      answer: "No. Lexoris is browser-based and requires no installation or formal training.",
    },
    {
      question: "Is there a long-term contract?",
      answer: "No lock-in. You can try Lexoris with a 21-day free trial and decide if it fits your workflow. From there, monthly or yearly billing is available.",
    },
  ];

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <Layout>
      <section className="pt-32 pb-20 px-5">
        <div className="max-w-4xl mx-auto">
          <h1 className="section-title mb-8">Legal Transcription Software for Australian Law Firms</h1>
          
          <p className="text-lg text-muted-foreground mb-6">
            Lexoris is legal transcription software built specifically for Australian law firms, barristers, and legal professionals who need accurate, secure transcription — without complex setup or training.
          </p>
          
          <p className="text-lg text-muted-foreground mb-16">
            Designed for legal workflows, Lexoris converts dictation, hearings, and client recordings into clear, usable transcripts that fit seamlessly into everyday practice.
          </p>

          {/* Built for Australian Legal Professionals */}
          <div className="mb-16">
            <h2 className="text-2xl font-semibold text-foreground mb-6 text-center">Built for Australian Legal Professionals</h2>
            
            <p className="text-muted-foreground mb-6">
              Generic transcription tools aren't designed for the realities of legal work. Lexoris is purpose-built for professionals who require precision, confidentiality, and reliability.
            </p>
            
            <p className="text-muted-foreground mb-4">Lexoris is used by:</p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
              <li>Law firms of all sizes</li>
              <li>Barristers and chambers</li>
              <li>Legal secretaries and practice managers</li>
            </ul>
            
            <p className="text-muted-foreground">
              Whether you're dictating file notes, reviewing recorded hearings, or transcribing client meetings, Lexoris is designed to support legal accuracy and efficiency.
            </p>
          </div>

          {/* Why Law Firms Choose Lexoris */}
          <div className="mb-16">
            <h2 className="text-2xl font-semibold text-foreground mb-8 text-center">Why Law Firms Choose Lexoris</h2>
            
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="feature-card">
                <div className="mb-4">
                  <Scale className="w-10 h-10 text-primary" />
                </div>
                <h4 className="font-heading text-xl font-bold text-foreground mb-3">
                  Legal-specific transcription
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  Lexoris goes beyond raw speech-to-text. Transcripts are post-processed and tuned for Australian legal terminology, formal legal writing styles, and professional drafting conventions.
                </p>
              </div>
              
              <div className="feature-card">
                <div className="mb-4">
                  <Users className="w-10 h-10 text-primary" />
                </div>
                <h4 className="font-heading text-xl font-bold text-foreground mb-3">
                  Structured for real legal audio
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  Lexoris supports both single-speaker and multi-speaker recordings, including hearings, conferences, and dictation. Speaker changes are handled cleanly.
                </p>
              </div>
              
              <div className="feature-card">
                <div className="mb-4">
                  <Shield className="w-10 h-10 text-primary" />
                </div>
                <h4 className="font-heading text-xl font-bold text-foreground mb-3">
                  Secure handling of confidential material
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  All audio files and transcripts are handled with confidentiality in mind, supporting professional obligations and client privacy.
                </p>
              </div>
              
              <div className="feature-card">
                <div className="mb-4">
                  <Server className="w-10 h-10 text-primary" />
                </div>
                <h4 className="font-heading text-xl font-bold text-foreground mb-3">
                  Australian-hosted infrastructure
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  Lexoris is exclusively hosted on Australian servers, aligning with local expectations around data residency and professional standards.
                </p>
              </div>
              
              <div className="feature-card">
                <div className="mb-4">
                  <Clock className="w-10 h-10 text-primary" />
                </div>
                <h4 className="font-heading text-xl font-bold text-foreground mb-3">
                  Fast, practical turnaround
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  Upload audio and receive a usable transcript promptly, without manual formatting or unnecessary post-editing.
                </p>
              </div>
              
              <div className="feature-card">
                <div className="mb-4">
                  <Sparkles className="w-10 h-10 text-primary" />
                </div>
                <h4 className="font-heading text-xl font-bold text-foreground mb-3">
                  No training required
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  Lexoris is browser-based and intuitive. Legal professionals can begin using the platform immediately.
                </p>
              </div>
            </div>
          </div>

          {/* Common Questions from Law Firms */}
          <div className="mb-16">
            <h2 className="text-2xl font-semibold text-foreground mb-6 text-center">Common Questions from Law Firms</h2>
            
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
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4 text-center">See Lexoris in Action</h2>
            
            <p className="text-muted-foreground mb-8">
              The best way to understand whether Lexoris fits your practice is to see it in use.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-6">
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

export default LegalTranscriptionSoftwareAustralia;
