import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const SERVICE_OPTIONS = [
  "Shooting Schedule",
  "Script Breakdown",
  "Film Budgeting",
  "AI Pitch Deck",
  "Film Business Plan",
  "AI Film Trailer",
];

const PROJECT_TYPE_OPTIONS = [
  "Short Film",
  "Feature",
  "Series",
];

const BUDGET_OPTIONS = [
  "Under $3,000,000",
  "$3,000,001 - $6,250,000",
  "$6,250,001 - $9,000,000",
  "$9,000,001 - $12,500,000",
  "$12,500,001 - $15,000,000",
  "Over $15,000,000",
];

const WEBHOOK_URL = "https://n8n.n8n.in.net/webhook/50a824c3-a87c-493f-922e-80ecbbdfaed4";

const ContactForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm();

  const [submitError, setSubmitError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data: any) => {
    // Honeypot: If filled, block submission
    if (data.middleName) {
      setSubmitError("Spam detected.");
      return;
    }

    setSubmitError("");
    setIsSubmitting(true);
    
    try {
      const res = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error(await res.text());
      reset();
    } catch (e: any) {
      setSubmitError(e.message || "Submission failed.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6"
      autoComplete="off"
    >
      {/* Honeypot field */}
      <input
        type="text"
        {...register("middleName")}
        tabIndex={-1}
        autoComplete="off"
        style={{ display: "none" }}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name">Name *</Label>
          <Input
            id="name"
            type="text"
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && <p className="text-destructive text-sm">{String(errors.name.message)}</p>}
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email *</Label>
          <Input
            id="email"
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i,
                message: "Invalid email address"
              }
            })}
          />
          {errors.email && <p className="text-destructive text-sm">{String(errors.email.message)}</p>}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="productionHouse">Production House</Label>
        <Input
          id="productionHouse"
          type="text"
          {...register("productionHouse")}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="country">Country *</Label>
        <Input
          id="country"
          type="text"
          {...register("country", { required: "Country is required" })}
        />
        {errors.country && <p className="text-destructive text-sm">{String(errors.country.message)}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="service">Service of Interest *</Label>
        <select
          id="service"
          {...register("service", { required: "Select a service" })}
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          defaultValue=""
        >
          <option value="" disabled>Select a service</option>
          {SERVICE_OPTIONS.map(opt => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
        {errors.service && <p className="text-destructive text-sm">{String(errors.service.message)}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="projectType">Project Type</Label>
        <select
          id="projectType"
          {...register("projectType")}
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          defaultValue=""
        >
          <option value="" disabled>Select project type</option>
          {PROJECT_TYPE_OPTIONS.map(opt => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="scriptLength">Script Length</Label>
        <Input
          id="scriptLength"
          type="text"
          {...register("scriptLength")}
          placeholder="Please describe the page length of your script"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="projectBudgetRange">Project Budget Range *</Label>
        <select
          id="projectBudgetRange"
          {...register("projectBudgetRange", { required: "Select a budget range" })}
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          defaultValue=""
        >
          <option value="" disabled>Select budget range</option>
          {BUDGET_OPTIONS.map(opt => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
        {errors.projectBudgetRange && <p className="text-destructive text-sm">{String(errors.projectBudgetRange.message)}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Your Message</Label>
        <Textarea
          id="message"
          {...register("message")}
          rows={6}
          placeholder="Tell us about your project..."
        />
      </div>

      {submitError && <p className="text-destructive">{submitError}</p>}
      {isSubmitSuccessful && (
        <p className="text-green-600">Thank you! We'll reply soon.</p>
      )}

      <Button 
        type="submit" 
        variant="cta" 
        size="lg" 
        className="w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Submitting..." : "Send"}
      </Button>
    </form>
  );

};

export default ContactForm;