import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/hooks/use-scroll-animation";

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
