import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/hooks/use-scroll-animation";
import { Shield, Server, Lock, Scale } from "lucide-react";
import homeCarousel from "@/assets/home-carousel.png";
import recordingCarousel from "@/assets/recording-carousel.png";
import downloadCarousel from "@/assets/download-carousel.png";
import FAQSchema from "@/components/FAQSchema";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

const homepageFAQs = [
  {
    question: "What is Lexoris and how does it help Australian lawyers?",
    answer: "Lexoris is an AI-powered legal transcription platform built exclusively for Australian legal professionals. It converts audio recordings into accurate, court-ready transcripts with legal terminology precision, all processed on Australian servers for complete data sovereignty.",
  },
  {
    question: "Is Lexoris transcription hosted in Australia?",
    answer: "Yes, Lexoris is 100% Australian-hosted. All audio files and transcripts are processed and stored exclusively on Australian servers, ensuring compliance with Australian privacy laws and professional obligations.",
  },
  {
    question: "How accurate is AI legal transcription for barristers and solicitors?",
    answer: "Lexoris uses AI specifically trained for Australian legal terminology, including case citations, statutory references, and court procedures. Combined with post-correction engines, it delivers highly accurate transcripts suitable for legal documentation.",
  },
  {
    question: "Is my legal dictation kept confidential with Lexoris?",
    answer: "Absolutely. Lexoris uses AES-256 encryption for all uploads and processing. Files are automatically deleted after download, and your data is never used for AI training, maintaining complete client confidentiality.",
  },
  {
    question: "Can I use Lexoris for secure dictation as a barrister?",
    answer: "Yes, Lexoris supports both dictation and transcription workflows. Barristers can dictate notes, record conferences, and transcribe mediations—all processed securely within Australia with automatic deletion after download.",
  },
];

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { src: homeCarousel, alt: "Welcome home screen" },
    { src: recordingCarousel, alt: "Record audio interface" },
    { src: downloadCarousel, alt: "Download transcript screen" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Layout>
      <FAQSchema faqs={homepageFAQs} />
      <BreadcrumbSchema />
      {/* Hero Section */}
      <section className="text-center pt-40 pb-32 px-5 md:px-8 bg-gradient-to-br from-lexoris-navy to-lexoris-navy-light text-primary-foreground">
        <h2 className="font-heading text-[32px] md:text-5xl font-bold mb-6 leading-[1.25] md:leading-[1.28] animate-fade-in" style={{ textShadow: '0 2px 6px rgba(0,0,0,0.35)' }}>
          <span className="block mb-2.5">Locally Hosted.</span>
          <span className="block mb-2.5">Legally Accurate.</span>
          <span className="block hero-accent">Transcription You Can Trust.</span>
        </h2>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10 opacity-90 animate-fade-in px-4" style={{ animationDelay: '0.1s' }}>
          The transcription platform built for legal professionals exclusively hosted on Australian servers.
        </p>
        <div className="mt-8">
          <Link to="/signup">
            <Button variant="hero" className="animate-fade-in w-full max-w-xs md:w-auto" style={{ animationDelay: '0.2s' }}>
              Start Free Trial
            </Button>
          </Link>
        </div>
      </section>

      {/* Screenshot Carousel */}
      <AnimatedSection className="py-16 px-5 bg-muted">
        <div className="max-w-4xl mx-auto">
          <div className="carousel-container">
            <div 
              className="carousel-track"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide, index) => (
                <div key={index} className="carousel-slide">
                  <img 
                    src={slide.src} 
                    alt={slide.alt} 
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center gap-2 mt-6">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentSlide === index ? 'bg-primary' : 'bg-muted-foreground/30'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Quick Features Preview */}
      <AnimatedSection className="py-24 px-5 max-w-6xl mx-auto">
        <h2 className="section-title">Why Choose Lexoris?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="feature-card text-center">
            <Server className="w-10 h-10 text-lexoris-red mx-auto mb-4" />
            <h4 className="font-heading text-xl font-bold text-foreground mb-3">Australian Data Residency</h4>
            <p className="text-muted-foreground leading-relaxed">
              Your data is hosted on Australian servers — ensuring compliance and peace of mind.
            </p>
          </div>
          <div className="feature-card text-center">
            <Scale className="w-10 h-10 text-lexoris-red mx-auto mb-4" />
            <h4 className="font-heading text-xl font-bold text-foreground mb-3">AI Legal Accuracy</h4>
            <p className="text-muted-foreground leading-relaxed">
              Trained for Australian legal terminology for precise transcripts.
            </p>
          </div>
          <div className="feature-card text-center">
            <Lock className="w-10 h-10 text-lexoris-red mx-auto mb-4" />
            <h4 className="font-heading text-xl font-bold text-foreground mb-3">No Data Storage</h4>
            <p className="text-muted-foreground leading-relaxed">
              Once downloaded, transcripts and audio are automatically deleted.
            </p>
          </div>
        </div>
        <div className="text-center mt-12">
          <Link to="/why-lexoris">
            <Button variant="outline" size="lg">Learn More About Lexoris →</Button>
          </Link>
        </div>
      </AnimatedSection>


      {/* Product Video Section */}
      <AnimatedSection className="py-24 px-5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="section-title">See Lexoris in Action</h2>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <video 
              controls 
              className="w-full h-auto"
              poster=""
              preload="metadata"
            >
              <source src="/Lexoris_Product_Video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="py-20 px-5 bg-muted text-center">
        <h2 className="section-title">Ready to get started?</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
          Create your Lexoris account and begin your 21-day free trial with 60 minutes included.
        </p>
        <Link to="/signup">
          <Button variant="hero">Start Free Trial</Button>
        </Link>
      </AnimatedSection>

      {/* Sticky CTA */}
      <Link to="/signup" className="sticky-cta">
        Start Free Trial
      </Link>
    </Layout>
  );
};

export default Index;
