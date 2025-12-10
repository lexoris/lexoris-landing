import { useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { AnimatedSection } from "@/hooks/use-scroll-animation";

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/mnnlabpr", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Success!",
          description: "Thank you! Your free trial is ready to begin.",
        });
        setFormData({ firstName: "", lastName: "", email: "" });
      } else {
        toast({
          title: "Error",
          description: "Oops! Something went wrong. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Network Error",
        description: "Unable to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <AnimatedSection className="py-24 px-5 bg-background">
        <div className="max-w-md mx-auto">
          <h1 className="section-title">Start Your Free Trial</h1>
          
          <p className="text-center text-lg text-muted-foreground mb-10">
            Create your Lexoris account and begin your 21-day free trial with 60 minutes included.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <Input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="h-12"
            />
            <Input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="h-12"
            />
            <Input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="h-12"
            />
            <Button
              type="submit"
              variant="hero"
              className="mt-4"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Starting..." : "Start Free Trial"}
            </Button>
          </form>
        </div>
      </AnimatedSection>
    </Layout>
  );
};

export default Signup;
