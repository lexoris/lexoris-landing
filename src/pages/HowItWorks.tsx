import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/hooks/use-scroll-animation";
import { Volume2, Activity, FileText } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: <Volume2 className="w-12 h-12 text-primary" />,
      title: "Step 1: Record or Upload",
      description: "Record or upload your audio file securely with one click and full encryption.",
    },
    {
      icon: <Activity className="w-12 h-12 text-primary" />,
      title: "Step 2: AI Transcribes",
      description: "Our advanced AI transcribes with legal precision and post-corrects for unmatched accuracy.",
    },
    {
      icon: <FileText className="w-12 h-12 text-primary" />,
      title: "Step 3: Export to Word",
      description: "Instantly export your completed document to Word — all processing occurs on Australian servers.",
    },
  ];

  return (
    <Layout>
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
              Ready to experience seamless legal transcription?
            </p>
            <Link to="/signup">
              <Button variant="hero">Get Started Today</Button>
            </Link>
          </div>
        </div>
      </AnimatedSection>
    </Layout>
  );
};

export default HowItWorks;
