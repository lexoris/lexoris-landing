import Layout from "@/components/Layout";
import { AnimatedSection } from "@/hooks/use-scroll-animation";
import { Shield, Lock, Server, Scale } from "lucide-react";

const Security = () => {
  return (
    <Layout>
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
