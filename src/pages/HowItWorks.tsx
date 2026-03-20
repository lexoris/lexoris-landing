import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/hooks/use-scroll-animation";
import { Volume2, Activity, FileText } from "lucide-react";
import FAQSchema from "@/components/FAQSchema";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

const howItWorksFAQs = [
  {
    question: "How do I upload audio for legal transcription on Lexoris?",
    answer: "Simply click to upload your MP3 or WAV file, or use the built-in recorder to capture audio directly. All uploads are encrypted and processed securely on Australian servers.",
  },
  {
    question: "Can I record legal dictation directly in Lexoris?",
    answer: "Yes, Lexoris includes a secure in-browser recording feature. You can dictate notes, record client conferences, or capture mediations directly without needing external software.",
  },
  {
    question: "How long does Lexoris take to transcribe audio?",
    answer: "Lexoris delivers fast turnaround, typically completing transcriptions in minutes. A 30-minute recording is usually ready within 5-10 minutes, depending on audio quality and complexity.",
  },
  {
    question: "Does Lexoris correct legal terminology automatically?",
    answer: "Yes, Lexoris uses AI post-correction engines trained for Australian legal terminology. Case citations, statutory references, and court terminology are automatically refined for accuracy.",
  },
  {
    question: "What file formats can I export from Lexoris?",
    answer: "Lexoris exports transcripts directly to Microsoft Word (.docx) format, ready for editing, filing, or integration into your existing legal document workflows.",
  },
  {
    question: "Are my uploaded files automatically deleted after transcription?",
    answer: "Yes, once you download your completed transcript, all audio files and transcripts are automatically and permanently deleted from Lexoris servers, ensuring zero data retention.",
  },
];

const HowItWorks = () => {
  const steps = [
    {
      icon: <Volume2 className="w-12 h-12 text-primary" />,
      title: "Step 1: Record or Upload",
      description: "Record directly on the platform or securely upload your audio file.",
    },
    {
      icon: <Activity className="w-12 h-12 text-primary" />,
      title: "Step 2: AI Processes & Post-Corrects",
      description: "Lexoris processes your dictation using AI, structuring and refining it into a clear, usable first draft — not just a raw transcript. Formatting is applied and AGLC referencing included where appropriate.",
    },
    {
      icon: <FileText className="w-12 h-12 text-primary" />,
      title: "Step 3: Export to Word",
      description: "Export your draft to Word instantly, ready for review and refinement. Your audio file and transcript are automatically deleted once download is complete.",
    },
  ];

  return (
    <Layout>
      <FAQSchema faqs={howItWorksFAQs} />
      <BreadcrumbSchema />
      <AnimatedSection className="pt-40 pb-24 px-5 bg-background">
        <div className="max-w-3xl mx-auto">
          <h1 className="section-title">How It Works</h1>
          
          <div className="flex flex-col gap-10">
            {steps.map((step, index) => (
              <div key={index} className="how-step text-center">
                <div className="mb-4 flex justify-center">{step.icon}</div>
                <h3 className="font-heading text-2xl font-bold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-lg">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <p className="text-lg text-muted-foreground mb-6">
              Traditional transcription captures what you said. Lexoris structures it into something you can refine.
            </p>
            <a href="https://app.lexoris.com.au/" target="_blank" rel="noopener noreferrer">
              <Button variant="hero">Get Started Today</Button>
            </a>
          </div>
        </div>
      </AnimatedSection>
    </Layout>
  );
};

export default HowItWorks;
