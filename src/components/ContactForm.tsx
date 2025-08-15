import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

interface ContactFormProps {
  subject?: string;
  showService?: boolean;
  projectFields?: boolean;
}

const ContactForm: React.FC<ContactFormProps> = ({ 
  subject = "General Inquiry", 
  showService = true,
  projectFields = false 
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const services = [
    "Shooting Schedule",
    "Script Breakdown", 
    "Film Budgeting",
    "AI Pitch Deck",
    "Film Business Plan",
    "AI Film Trailer"
  ];

  const countries = [
    "United States", "United Kingdom", "Canada", "Australia", "Germany", 
    "France", "Italy", "Spain", "Netherlands", "India", "Other"
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Message Sent!",
      description: "We will get back to you in 24 hours.",
    });

    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name">Name *</Label>
          <Input id="name" name="name" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email *</Label>
          <Input id="email" name="email" type="email" required />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="company">Production House</Label>
          <Input id="company" name="company" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="website">Website</Label>
          <Input id="website" name="website" type="url" />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="country">Country</Label>
        <Select name="country">
          <SelectTrigger>
            <SelectValue placeholder="Select your country" />
          </SelectTrigger>
          <SelectContent>
            {countries.map((country) => (
              <SelectItem key={country} value={country}>
                {country}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {showService && (
        <div className="space-y-2">
          <Label htmlFor="service">Service of Interest</Label>
          <Select name="service">
            <SelectTrigger>
              <SelectValue placeholder="Select a service" />
            </SelectTrigger>
            <SelectContent>
              {services.map((service) => (
                <SelectItem key={service} value={service}>
                  {service}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      )}

      {projectFields && (
        <>
          <div className="space-y-2">
            <Label htmlFor="projectType">Project Type</Label>
            <Select name="projectType">
              <SelectTrigger>
                <SelectValue placeholder="Select project type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="short-film">Short Film</SelectItem>
                <SelectItem value="feature">Feature</SelectItem>
                <SelectItem value="series">Series</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="scriptLength">Script Length</Label>
            <Textarea 
              id="scriptLength" 
              name="scriptLength" 
              placeholder="Please describe the page length of your script"
              rows={3}
            />
          </div>
        </>
      )}

      <div className="space-y-2">
        <Label htmlFor="message">Your Message *</Label>
        <Textarea 
          id="message" 
          name="message" 
          required 
          rows={6}
          placeholder="Tell us about your project..."
        />
      </div>

      <Button 
        type="submit" 
        variant="cta" 
        size="lg" 
        className="w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Submitting..." : "Submit"}
      </Button>
    </form>
  );
};

export default ContactForm;