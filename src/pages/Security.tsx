import Layout from "@/components/Layout";
import { AnimatedSection } from "@/hooks/use-scroll-animation";
import { Shield, Lock, Server, Scale } from "lucide-react";
import FAQSchema from "@/components/FAQSchema";

const securityFAQs = [
  {
    question: "How does Lexoris encrypt legal transcription files?",
    answer: "Lexoris uses AES-256 encryption, the industry gold standard, for all files in transit and at rest. Your audio uploads and transcripts are encrypted from the moment they leave your device until they are downloaded and deleted.",
  },
  {
    question: "Does Lexoris store transcription data on Australian servers only?",
    answer: "Yes, Lexoris exclusively uses Australian-hosted servers. Your data never leaves Australian borders, ensuring compliance with the Privacy Act and professional obligations for Australian legal practitioners.",
  },
  {
    question: "Is legal professional privilege protected when using Lexoris?",
    answer: "Yes. Lexoris is designed with legal confidentiality in mind. All data is encrypted, automatically deleted after download, and never accessed by staff or used for AI training, preserving legal professional privilege.",
  },
  {
    question: "Does Lexoris use my files to train AI models?",
    answer: "Never. Lexoris has a strict non-training policy. Your audio files and transcripts are never used to train AI models, ensuring complete confidentiality and data sovereignty for your legal practice.",
  },
  {
    question: "What happens to my files after transcription is complete?",
    answer: "Once you download your transcript, all associated files (audio and text) are automatically and permanently deleted from Lexoris servers. We maintain a zero-retention policy for maximum security.",
  },
  {
    question: "Is Lexoris compliant with Australian privacy regulations?",
    answer: "Yes. Lexoris is designed for compliance with the Australian Privacy Act and the Australian Privacy Principles (APPs). With 100% Australian data residency and automatic deletion, Lexoris meets the highest standards for privacy-compliant transcription.",
  },
];

const Security = () => {
  return (
    <Layout>
      <FAQSchema faqs={securityFAQs} />
      <AnimatedSection className="pt-40 pb-24 px-5 bg-background">
        <div className="max-w-6xl mx-auto">
          <h1 className="section-title">Security & Compliance</h1>
          
          <p className="text-center max-w-3xl mx-auto mb-16 text-lg text-muted-foreground">
            Lexoris is built for Australian legal practice. Your data is exclusively hosted on Australian servers, is encrypted end-to-end, and is never used for AI training.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="feature-card text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h4 className="font-heading text-lg font-bold text-foreground mb-2">End-to-End Encryption</h4>
              <p className="text-muted-foreground text-sm">
                All data encrypted in transit and at rest using AES-256.
              </p>
            </div>
            <div className="feature-card text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lock className="w-8 h-8 text-primary" />
              </div>
              <h4 className="font-heading text-lg font-bold text-foreground mb-2">No Data Retention</h4>
              <p className="text-muted-foreground text-sm">
                Files automatically deleted after download. Zero storage policy.
              </p>
            </div>
            <div className="feature-card text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Server className="w-8 h-8 text-primary" />
              </div>
              <h4 className="font-heading text-lg font-bold text-foreground mb-2">Australian Data Residency</h4>
              <p className="text-muted-foreground text-sm">
                100% Australian-hosted infrastructure for compliance.
              </p>
            </div>
            <div className="feature-card text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Scale className="w-8 h-8 text-primary" />
              </div>
              <h4 className="font-heading text-lg font-bold text-foreground mb-2">Built for Legal Practice</h4>
              <p className="text-muted-foreground text-sm">
                Designed to meet legal industry security standards.
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </Layout>
  );
};

export default Security;
