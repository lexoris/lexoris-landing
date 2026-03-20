import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/hooks/use-scroll-animation";
import { Server, Scale, Layers, Clock, Shield, Users } from "lucide-react";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

const WhyLexoris = () => {
  const features = [
    {
      icon: <Server className="w-10 h-10 text-primary" />,
      title: "Australian Data Residency",
      description: "Your data is hosted on Australian servers — ensuring compliance and peace of mind.",
    },
    {
      icon: <Scale className="w-10 h-10 text-primary" />,
      title: "AI Legal Accuracy",
      description: "Trained for Australian legal terminology for precise transcripts.",
    },
    {
      icon: <Layers className="w-10 h-10 text-primary" />,
      title: "All-in-One Platform",
      description: "Upload, transcribe, post-correct, and export — all in one workflow.",
    },
    {
      icon: <Clock className="w-10 h-10 text-primary" />,
      title: "Transform Your Time",
      description: "Lexoris turns dictation into a structured first draft fast — giving you hours back for billable work or time outside of it.",
    },
    {
      icon: <Shield className="w-10 h-10 text-primary" />,
      title: "No Data Storage",
      description: "Once downloaded, transcripts and audio are automatically deleted.",
    },
    {
      icon: <Users className="w-10 h-10 text-primary" />,
      title: "Local Australian Support",
      description: "Australian-based team offering responsive support and expertise.",
    },
  ];

  const comparisonData = [
    { feature: "Australian Legal Vocabulary", lexoris: true, otter: false, dragon: true, microsoft: false },
    { feature: "Australian Servers & Data Residency", lexoris: true, otter: false, dragon: true, microsoft: false },
    { feature: "Your Data Is Not Stored", lexoris: true, otter: false, dragon: false, microsoft: false },
    { feature: "AI Post-Correction", lexoris: true, otter: false, dragon: false, microsoft: false },
    { feature: "Flexible Pricing (No Lock-In Contracts)", lexoris: true, otter: true, dragon: false, microsoft: false },
    { feature: "Microsoft & Apple Device Compatibility", lexoris: true, otter: true, dragon: false, microsoft: true },
    { feature: "Intuitive, Workflow-Aligned Usability", lexoris: true, otter: false, dragon: false, microsoft: false },
    { feature: "Australian Real-Time Support", lexoris: true, otter: false, dragon: true, microsoft: false },
    { feature: "AGLC Referencing Applied", lexoris: true, otter: false, dragon: false, microsoft: false },
    { feature: "Structured First Draft", lexoris: true, otter: false, dragon: false, microsoft: false },
  ];

  return (
    <Layout>
      <BreadcrumbSchema />
      <AnimatedSection className="pt-40 pb-24 px-5 bg-background">
        <div className="max-w-6xl mx-auto">
          <h1 className="section-title">Why Lexoris?</h1>
          
          <p className="text-center max-w-3xl mx-auto mb-16 text-lg text-muted-foreground">
            Built for Australian legal professionals, Lexoris transforms dictation with a streamlined, secure and Australian-hosted platform producing structured first drafts, ready for refinement.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="mb-4">{feature.icon}</div>
                <h4 className="font-heading text-xl font-bold text-foreground mb-3">
                  {feature.title}
                </h4>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Comparison Table */}
          <div className="comparison-wrapper">
            <h3 className="text-center font-heading text-2xl font-bold mb-6">How Lexoris Compares</h3>
            <table className="comparison-table">
              <thead>
                <tr>
                  <th></th>
                  <th>Lexoris</th>
                  <th>Otter.ai</th>
                  <th>Dragon Legal</th>
                  <th>Microsoft Dictate</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr key={index}>
                    <td>{row.feature}</td>
                    <td className="tick">{row.lexoris ? "✔" : "✘"}</td>
                    <td className={row.otter ? "tick" : "cross"}>{row.otter ? "✔" : "✘"}</td>
                    <td className={row.dragon ? "tick" : "cross"}>{row.dragon ? "✔" : "✘"}</td>
                    <td className={row.microsoft ? "tick" : "cross"}>{row.microsoft ? "✔" : "✘"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="text-center mt-16">
            <a href="https://app.lexoris.com.au/" target="_blank" rel="noopener noreferrer">
              <Button variant="hero">Start Your Free Trial</Button>
            </a>
          </div>
        </div>
      </AnimatedSection>
    </Layout>
  );
};

export default WhyLexoris;
