import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/hooks/use-scroll-animation";
import FAQSchema from "@/components/FAQSchema";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

const faqPageFAQs = [
  {
    question: "What makes Lexoris different from other transcription tools?",
    answer: "Lexoris is built specifically for legal and professional use. Beyond transcription, it focuses on accuracy, structured formatting, citation visibility, and review safeguards — making it suitable for legal environments where detail, accountability, and clarity matter.",
  },
  {
    question: "Is Lexoris accurate enough for legal or professional work?",
    answer: "Yes. Lexoris combines advanced speech recognition with structured post-processing to improve accuracy. All transcripts are designed to be reviewed before use, supporting professional standards rather than replacing them.",
  },
  {
    question: "Can Lexoris handle multiple speakers?",
    answer: "Yes. Lexoris supports both single-speaker and multi-speaker recordings, with automatic speaker detection and clear separation in the transcript.",
  },
  {
    question: "How does Lexoris handle citations?",
    answer: "Citations are formatted in AGLC style and clearly highlighted in every transcript. Each transcript also includes a reminder to review all highlighted citations for accuracy before use, reinforcing best practice and professional responsibility.",
  },
  {
    question: "Is my data secure?",
    answer: "Yes. Lexoris follows a privacy-first, data-minimisation approach. Once your transcript and audio file are downloaded, they are automatically deleted. Data is not retained longer than necessary. Lexoris is exclusively hosted on Australian servers and is aligned with GDPR principles.",
  },
  {
    question: "Is Lexoris difficult to use?",
    answer: "No. Lexoris is intentionally simple. You can record or upload audio, allow it to process, and download your transcript — no setup, no training, and no configuration required. Optional 10-minute onboarding video calls are available for users who prefer guided support.",
  },
  {
    question: "Can Lexoris fit into existing legal workflows?",
    answer: "Yes. Lexoris is designed to support existing workflows, not replace them. Most users treat it as a first-pass transcript that removes hours of manual work while retaining full review and control. Lexoris is browser-based and compatible with both desktop and mobile devices.",
  },
  {
    question: "Why should I use Lexoris instead of a free transcription tool?",
    answer: "Free tools are built for general use. Lexoris is built specifically for the Australian legal profession, where accuracy, structure, and review prompts matter. In legal and formal settings, quality and defensibility are more important than speed alone.",
  },
  {
    question: "Who is Lexoris for?",
    answer: "Lexoris is designed for Australian legal professionals and organisations that require accurate, structured transcription with clear accountability — including barristers, solicitors, consultants, students, and researchers.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [showContactMessage, setShowContactMessage] = useState(false);

  const faqs = [
    {
      question: "What makes Lexoris different from other transcription tools?",
      answer: "Lexoris is built specifically for legal and professional use. Beyond transcription, it focuses on accuracy, structured formatting, citation visibility, and review safeguards — making it suitable for legal environments where detail, accountability, and clarity matter.",
    },
    {
      question: "Is Lexoris accurate enough for legal or professional work?",
      answer: "Yes. Lexoris combines advanced speech recognition with structured post-processing to improve accuracy. All transcripts are designed to be reviewed before use, supporting professional standards rather than replacing them.",
    },
    {
      question: "Can Lexoris handle multiple speakers?",
      answer: "Yes. Lexoris supports both single-speaker and multi-speaker recordings, with automatic speaker detection and clear separation in the transcript.",
    },
    {
      question: "How does Lexoris handle citations?",
      answer: "Citations are formatted in AGLC style and clearly highlighted in every transcript. Each transcript also includes a reminder to review all highlighted citations for accuracy before use, reinforcing best practice and professional responsibility.",
    },
    {
      question: "Is my data secure?",
      answer: "Yes. Lexoris follows a privacy-first, data-minimisation approach. Once your transcript and audio file are downloaded, they are automatically deleted. Data is not retained longer than necessary. Lexoris is exclusively hosted on Australian servers and is aligned with GDPR principles.",
    },
    {
      question: "Is Lexoris difficult to use?",
      answer: "No. Lexoris is intentionally simple. You can record or upload audio, allow it to process, and download your transcript — no setup, no training, and no configuration required. Optional 10-minute onboarding video calls are available for users who prefer guided support.",
    },
    {
      question: "Can Lexoris fit into existing legal workflows?",
      answer: "Yes. Lexoris is designed to support existing workflows, not replace them. Most users treat it as a first-pass transcript that removes hours of manual work while retaining full review and control. Lexoris is browser-based and compatible with both desktop and mobile devices.",
    },
    {
      question: "Why should I use Lexoris instead of a free transcription tool?",
      answer: "Free tools are built for general use. Lexoris is built specifically for the Australian legal profession, where accuracy, structure, and review prompts matter. In legal and formal settings, quality and defensibility are more important than speed alone.",
    },
    {
      question: "Who is Lexoris for?",
      answer: "Lexoris is designed for Australian legal professionals and organisations that require accurate, structured transcription with clear accountability — including barristers, solicitors, consultants, students, and researchers.",
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
