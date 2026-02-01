import { useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Lock, FileCheck, Server, Trash2 } from "lucide-react";
import { DEMO_BOOKING_URL, DEMO_BOOKING_LABEL, DEMO_BOOKING_ARIA_LABEL } from "@/lib/constants";

const SecureLegalTranscription = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Is Lexoris suitable for confidential legal matters?",
      answer: "Yes. Lexoris is designed specifically for legal professionals handling sensitive and privileged information.",
    },
    {
      question: "Is data used to train AI models?",
      answer: "No. Lexoris does not use customer audio or transcripts to train models.",
    },
    {
      question: "Do I retain control over my data?",
      answer: "Yes. Legal professionals retain full responsibility and control over how transcripts are used and stored once downloaded. Once successfully downloaded, the audio and transcript files are automatically deleted.",
    },
  ];

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-42 pb-16 px-5">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="section-title mb-8">
            Secure Legal Transcription Software for Confidential Matters
          </h1>
        </div>
      </section>

      {/* Intro / Positioning */}
      <section className="pb-16 px-5">
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-muted-foreground mb-6">
            Lexoris is secure legal transcription software designed for legal professionals handling confidential and sensitive material.
          </p>
          <p className="text-lg text-muted-foreground">
            Legal data requires a higher standard of care than general business information. Lexoris is built with professional obligations and client confidentiality in mind.
          </p>
        </div>
      </section>

      {/* Why Security Matters */}
      <section className="pb-16 px-5">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold text-foreground mb-6 text-center">
            Why Security Matters in Legal Transcription
          </h2>
          <p className="text-muted-foreground mb-6">
            Legal recordings often contain:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
            <li>Client-confidential information</li>
            <li>Sensitive instructions and advice</li>
            <li>Privileged communications</li>
          </ul>
          <p className="text-muted-foreground">
            Using generic transcription tools can introduce unnecessary risk. Lexoris is designed to reduce that risk through responsible data handling practices.
          </p>
        </div>
      </section>

      {/* How Lexoris Approaches Security */}
      <section className="pb-16 px-5">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold text-foreground mb-8 text-center">
            How Lexoris Approaches Security
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="feature-card">
              <div className="mb-4">
                <Lock className="w-10 h-10 text-primary" />
              </div>
              <h4 className="font-heading text-xl font-bold text-foreground mb-3">
                Confidential handling by design
              </h4>
              <p className="text-muted-foreground leading-relaxed">
                Lexoris is built specifically for legal use cases where confidentiality and professional responsibility are essential.
              </p>
            </div>
            <div className="feature-card">
              <div className="mb-4">
                <FileCheck className="w-10 h-10 text-primary" />
              </div>
              <h4 className="font-heading text-xl font-bold text-foreground mb-3">
                Clear and responsible data handling
              </h4>
              <p className="text-muted-foreground leading-relaxed">
                Lexoris follows transparent data handling practices appropriate for legal environments, avoiding unnecessary retention of sensitive material.
              </p>
            </div>
            <div className="feature-card">
              <div className="mb-4">
                <Server className="w-10 h-10 text-primary" />
              </div>
              <h4 className="font-heading text-xl font-bold text-foreground mb-3">
                Australian data residency
              </h4>
              <p className="text-muted-foreground leading-relaxed">
                All infrastructure is hosted on Australian servers, aligning with local expectations around data sovereignty and professional standards.
              </p>
            </div>
            <div className="feature-card">
              <div className="mb-4">
                <Trash2 className="w-10 h-10 text-primary" />
              </div>
              <h4 className="font-heading text-xl font-bold text-foreground mb-3">
                Automatic deletion of content
              </h4>
              <p className="text-muted-foreground leading-relaxed">
                Audio files and transcripts are automatically deleted after download. Lexoris does not retain data longer than required and does not store content unnecessarily.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Common Questions */}
      <section className="pb-16 px-5">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold text-foreground mb-8 text-center">
            Common Questions
          </h2>
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
      </section>

      {/* Final CTA */}
      <section className="pb-20 px-5">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-semibold text-foreground mb-6 text-center">
            See Lexoris in Action
          </h2>
          <p className="text-muted-foreground mb-4">
            If security and confidentiality are critical to your practice, a short walkthrough is the best way to assess Lexoris.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
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
          </div>
          <p className="text-muted-foreground mt-4 mb-6">
            We'll explain how Lexoris handles data and supports professional legal use.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default SecureLegalTranscription;
