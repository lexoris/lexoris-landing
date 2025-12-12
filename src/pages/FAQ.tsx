import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/hooks/use-scroll-animation";
import FAQSchema from "@/components/FAQSchema";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

const faqPageFAQs = [
  {
    question: "What is the best AI transcription tool for Australian law firms?",
    answer: "Lexoris is purpose-built for Australian legal professionals, offering AI-powered transcription with Australian data residency, legal terminology accuracy, and automatic file deletion for maximum confidentiality.",
  },
  {
    question: "How does secure transcription for lawyers differ from consumer tools?",
    answer: "Secure legal transcription requires Australian-hosted servers, AES-256 encryption, no data retention, and strict non-training policies. Consumer tools often store data overseas and use files for AI training, creating confidentiality risks.",
  },
  {
    question: "Can barristers use Lexoris for conference transcription?",
    answer: "Yes, Lexoris is ideal for barristers needing fast, confidential transcription of conferences, mediations, and dictation. All processing occurs on Australian servers with automatic deletion after download.",
  },
  {
    question: "Is Australian hosted legal tech safer than overseas alternatives?",
    answer: "Yes. Australian-hosted platforms like Lexoris ensure your data stays within Australian jurisdiction, compliant with the Privacy Act and safe from foreign disclosure laws that may apply to overseas servers.",
  },
  {
    question: "What audio formats does Lexoris support for legal transcription?",
    answer: "Lexoris supports MP3 and WAV audio formats, covering the most common recording formats used by legal professionals, dictation devices, and smartphone recordings.",
  },
  {
    question: "How does Lexoris ensure privacy-compliant transcription?",
    answer: "Lexoris uses 100% Australian servers, AES-256 encryption, automatic file deletion, and a strict non-training policy. Your transcripts and audio are never stored or used beyond your immediate transcription needs.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [showContactMessage, setShowContactMessage] = useState(false);

  const faqs = [
    {
      question: "Is my data stored in Australia?",
      answer: "Yes — hosted exclusively on Australian servers, maintaining confidentiality compliance.",
    },
    {
      question: "Do you use my transcripts for training?",
      answer: "Never — your data remains private and encrypted, and never trains AI models.",
    },
    {
      question: "Do you store my data?",
      answer: "No — once you've downloaded your transcript, all data is deleted.",
    },
    {
      question: "What file formats can I upload?",
      answer: "MP3 and WAV are supported.",
    },
  ];

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <Layout>
      <FAQSchema faqs={faqPageFAQs} />
      <BreadcrumbSchema />
      <AnimatedSection className="pt-40 pb-24 px-5 bg-background">
        <div className="max-w-3xl mx-auto">
          <h1 className="section-title">FAQ</h1>
          
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

          <div className="text-center mt-16">
            <p className="text-lg text-muted-foreground mb-6">
              Still have questions? We're here to help.
            </p>
            <a href="mailto:admin@lexoris.com.au">
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => setShowContactMessage(true)}
              >
                Contact Us
              </Button>
            </a>
            {showContactMessage && (
              <div className="mt-4 p-4 bg-card border border-border rounded-lg max-w-md mx-auto animate-fade-in">
                <p className="text-sm text-muted-foreground">
                  Please send us an email at{" "}
                  <a 
                    href="mailto:admin@lexoris.com.au" 
                    className="text-primary font-medium hover:underline"
                  >
                    admin@lexoris.com.au
                  </a>{" "}
                  and we will endeavor to reply as soon as possible to your query.
                </p>
              </div>
            )}
          </div>
        </div>
      </AnimatedSection>
    </Layout>
  );
};

export default FAQ;
