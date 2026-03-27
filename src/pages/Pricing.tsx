import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/hooks/use-scroll-animation";
import { Building2 } from "lucide-react";
import standardLogo from "@/assets/standard-logo.png";
import professionalLogo from "@/assets/professional-logo.png";
import FAQSchema from "@/components/FAQSchema";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import ProductSchema from "@/components/ProductSchema";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const pricingServices = [
  {
    name: "Lexoris Standard Plan",
    description: "100 minutes per month of secure, Australian-hosted legal transcription",
    price: 29,
    priceCurrency: "AUD",
    availability: "InStock",
  },
  {
    name: "Lexoris Professional Plan",
    description: "300 minutes per month of secure, Australian-hosted legal transcription",
    price: 49,
    priceCurrency: "AUD",
    availability: "InStock",
  },
  {
    name: "Lexoris Enterprise Plan",
    description: "High-volume custom legal transcription solution for large firms and chambers",
    availability: "InStock",
  },
];

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
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "annual">("monthly");
  const [enterpriseDialogOpen, setEnterpriseDialogOpen] = useState(false);

  const plans = [
    {
      name: "Standard",
      monthlyPrice: "$29",
      annualPrice: "$295",
      minutes: "100 minutes",
      annualMinutes: "1,200 minutes",
      cta: "Start Standard Plan",
      ctaLink: "https://app.lexoris.com.au/",
      logo: standardLogo,
      featured: true,
      bullets: [
        "Designed for individual moderate users",
        "Record and upload functionality",
        "Single speaker and multi speaker transcripts",
        "AGLC aligned citations",
      ],
    },
    {
      name: "Professional",
      monthlyPrice: "$49",
      annualPrice: "$500",
      minutes: "300 minutes",
      annualMinutes: "3,600 minutes",
      cta: "Start Professional Plan",
      ctaLink: "https://app.lexoris.com.au/",
      logo: professionalLogo,
      featured: false,
      bullets: [
        "Designed for individual frequent users",
        "Record and upload functionality",
        "Single speaker and multi speaker transcripts",
        "AGLC aligned citations",
      ],
    },
    {
      name: "Enterprise",
      monthlyPrice: "Custom",
      annualPrice: "Custom",
      minutes: undefined as string | undefined,
      annualMinutes: undefined as string | undefined,
      cta: "Contact Us",
      ctaLink: "/faq",
      logo: undefined as string | undefined,
      useIcon: true,
      featured: false,
      bullets: [
        "Designed for multiple users in firms and/or chambers",
        "Tailored seat solutions to suit your needs",
        "Dedicated technical support",
      ],
    },
  ];

  return (
    <Layout>
      <FAQSchema faqs={pricingFAQs} />
      <BreadcrumbSchema />
      <ProductSchema services={pricingServices} />
      <AnimatedSection className="pt-40 pb-24 px-5 bg-background">
        <div className="max-w-5xl mx-auto">
          <h1 className="section-title">Pricing</h1>

          <div className="max-w-2xl mx-auto mb-8 text-center space-y-2">
            <p className="text-lg text-muted-foreground">
              Every plan includes a 21-day complimentary trial with 60 minutes of transcription.
            </p>
            <p className="text-lg text-muted-foreground">
              You won't be charged until your trial ends. Cancel anytime.
            </p>
          </div>

          {/* Billing toggle */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <button
              onClick={() => setBillingPeriod("monthly")}
              className={`text-sm font-semibold px-4 py-2 rounded-md transition-colors ${
                billingPeriod === "monthly"
                  ? "bg-secondary text-secondary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingPeriod("annual")}
              className={`text-sm font-semibold px-4 py-2 rounded-md transition-colors ${
                billingPeriod === "annual"
                  ? "bg-secondary text-secondary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Annual (Save 15%)
            </button>
          </div>


          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto items-stretch">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`pricing-card relative ${
                  plan.featured
                    ? "border-t-[2px] border-primary bg-card shadow-[0_8px_24px_rgba(0,0,0,0.08)] z-10"
                    : ""
                }`}
              >
                {plan.featured && (
                  <div className="plan-badge">Most Popular</div>
                )}
                <div className="flex flex-col">
                  {plan.logo ? (
                    <img src={plan.logo} alt={`${plan.name} Logo`} className="plan-logo" />
                  ) : (plan as any).useIcon ? (
                    <Building2 className="w-12 h-12 mb-5 mx-auto" style={{ color: '#D2D3D3' }} />
                  ) : null}
                  <h3 className="font-heading text-2xl font-bold text-foreground mb-5">
                    {plan.name}
                  </h3>
                  <div className="mb-6">
                    <p className="text-2xl md:text-3xl font-semibold text-foreground font-heading">
                      {billingPeriod === "monthly" ? plan.monthlyPrice : plan.annualPrice}
                    </p>
                    {(billingPeriod === "monthly" ? plan.minutes : plan.annualMinutes) ? (
                      <p className="text-sm text-muted-foreground/70 mt-2">
                        {billingPeriod === "monthly" ? plan.minutes : plan.annualMinutes}
                      </p>
                    ) : (
                      <p className="text-sm mt-2">&nbsp;</p>
                    )}
                  </div>
                  <ul className="text-left text-sm text-muted-foreground space-y-3 mb-8 px-2 leading-relaxed">
                    {plan.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-primary mt-0.5">•</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                {(plan as any).useIcon ? (
                  <Button
                    variant="outline"
                    className="w-full mt-auto bg-[hsl(0,0%,96%)] text-[hsl(213,60%,11%)] border-[hsla(0,0%,20%,0.4)] shadow-[0_4px_14px_-3px_rgba(0,0,0,0.15)] hover:-translate-y-0.5 hover:shadow-[0_8px_25px_-5px_rgba(0,0,0,0.2)] hover:bg-[hsl(0,0%,90%)]"
                    onClick={() => setEnterpriseDialogOpen(true)}
                  >
                    {plan.cta}
                  </Button>
                ) : (
                  <a href={plan.ctaLink} target={plan.ctaLink.startsWith("http") ? "_blank" : undefined} rel={plan.ctaLink.startsWith("http") ? "noopener noreferrer" : undefined} className="mt-auto">
                    <Button
                      variant={plan.featured ? "default" : "outline"}
                      className={`w-full ${
                        !plan.featured
                          ? "bg-[hsl(0,0%,96%)] text-[hsl(213,60%,11%)] border-[hsla(0,0%,20%,0.4)] shadow-[0_4px_14px_-3px_rgba(0,0,0,0.15)] hover:-translate-y-0.5 hover:shadow-[0_8px_25px_-5px_rgba(0,0,0,0.2)] hover:bg-[hsl(0,0%,90%)]"
                          : ""
                      }`}
                    >
                      {plan.cta}
                    </Button>
                  </a>
                )}
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-muted-foreground mt-10 max-w-xl mx-auto">
            If you exceed your included minutes, additional transcription credits can be added instantly at $5 per 20 minutes, ensuring uninterrupted access when you need it.
          </p>


          <div className="text-center mt-10">
            <p className="text-lg text-foreground mb-4">Have questions about pricing?</p>
            <Link to="/faq">
              <Button variant="outline">View FAQ →</Button>
            </Link>
          </div>
        </div>
      </AnimatedSection>
      <Dialog open={enterpriseDialogOpen} onOpenChange={setEnterpriseDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="font-heading">Enterprise Pricing</DialogTitle>
            <DialogDescription className="text-base leading-relaxed pt-2">
              To discuss enterprise pricing options that best suit your business needs please email{" "}
              <a href="mailto:admin@lexoris.com.au" className="text-primary font-semibold hover:underline">
                admin@lexoris.com.au
              </a>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </Layout>
  );
};

export default Pricing;
