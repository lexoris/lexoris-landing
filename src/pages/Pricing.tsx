import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/hooks/use-scroll-animation";
import freeLogo from "@/assets/free-logo.png";
import standardLogo from "@/assets/standard-logo.png";
import professionalLogo from "@/assets/professional-logo.png";

const Pricing = () => {
  const plans = [
    {
      name: "Free Trial",
      price: "21 days / 60 mins",
      cta: "Start Now",
      logo: freeLogo,
    },
    {
      name: "Standard",
      price: "$29 / 100 mins",
      cta: "Upgrade",
      logo: standardLogo,
    },
    {
      name: "Professional",
      price: "$49 / 300 mins",
      cta: "Upgrade",
      logo: professionalLogo,
    },
  ];

  return (
    <Layout>
      <AnimatedSection className="pt-40 pb-24 px-5 bg-background">
        <div className="max-w-5xl mx-auto">
          <h1 className="section-title">Pricing</h1>
          
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
            <div key={index} className={`pricing-card ${plan.name === "Standard" ? "relative" : ""}`}>
                {plan.name === "Standard" && (
                  <div className="plan-badge">Most Popular</div>
                )}
                <div>
                  <img src={plan.logo} alt={`${plan.name} Logo`} className="plan-logo" />
                  <h3 className="font-heading text-2xl font-bold text-foreground mb-4">
                    {plan.name}
                  </h3>
                  <p className="text-lg text-muted-foreground mb-8">{plan.price}</p>
                </div>
                <Link to="/signup">
                  <Button variant="default" className="w-full">
                    {plan.cta}
                  </Button>
                </Link>
              </div>
            ))}
          </div>

          <p className="text-center mt-16 italic text-muted-foreground">
            Overage rate $0.25 / min. No setup fees. Cancel anytime.
          </p>

          <div className="text-center mt-12">
            <p className="text-lg text-foreground mb-4">Have questions about pricing?</p>
            <Link to="/faq">
              <Button variant="outline">View FAQ →</Button>
            </Link>
          </div>
        </div>
      </AnimatedSection>
    </Layout>
  );
};

export default Pricing;
