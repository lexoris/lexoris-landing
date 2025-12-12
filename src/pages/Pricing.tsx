import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/hooks/use-scroll-animation";
import freeLogo from "@/assets/free-logo.png";
import standardLogo from "@/assets/standard-logo.png";
import professionalLogo from "@/assets/professional-logo.png";
import FAQSchema from "@/components/FAQSchema";

const pricingFAQs = [
  {
    question: "How much does Lexoris legal transcription cost?",
    answer: "Lexoris offers a free 21-day trial with 60 minutes included. Paid plans start at $29 for 100 minutes (Standard) and $49 for 300 minutes (Professional). Overage is charged at $0.25 per minute with no setup fees.",
  },
  {
    question: "Can I cancel my Lexoris subscription anytime?",
    answer: "Yes, you can cancel your Lexoris subscription at any time with no cancellation fees. Your account will remain active until the end of your current billing period.",
  },
  {
    question: "What happens if I exceed my transcription minutes?",
    answer: "If you exceed your plan's included minutes, additional usage is billed at $0.25 per minute. There are no surprise charges—overage is clearly tracked in your account dashboard.",
  },
  {
    question: "Is my data secure on paid Lexoris plans?",
    answer: "All Lexoris plans, including the free trial, use the same enterprise-grade security: AES-256 encryption, Australian-only servers, automatic file deletion, and strict non-training guarantees for your data.",
  },
  {
    question: "Which Lexoris plan is best for sole practitioners?",
    answer: "The Standard plan at $29 for 100 minutes is ideal for sole practitioners with moderate transcription needs. For higher volume practices, the Professional plan offers better value at $49 for 300 minutes.",
  },
];

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
      <FAQSchema faqs={pricingFAQs} />
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
