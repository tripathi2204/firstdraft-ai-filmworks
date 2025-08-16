import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import filmBudgetingImage from "@/assets/film-budgeting.jpg";

const FilmBudgeting = () => {
  const features = [
    "Topsheet will overall budget details",
    "ATL & BTL costs listed out",
    "Categories Categorized as per departments",
    "Fringe applied as per union rules",
    "Editable Source File provided in Industry-Format",
    "PDF Export for easy sharing"
  ];

  const faqs = [
    {
      question: "How can you help filmmakers?",
      answer: "I offer a complete suite of pre-production services designed to give your project a competitive edge—film pitch decks, TV show bibles, business plans, budgets, schedule, and more. By integrating advanced AI-powered workflows, I make these services significantly faster, more accurate, and cost-effective without sacrificing quality. Whether you're seeking funding, pitching to studios, or preparing for production, I ensure your materials are industry-ready and compelling enough to grab attention."
    },
    {
      question: "Is my intellectual property safe with you?",
      answer: "All workflows are secured with password protection and handled with strict confidentiality. But still I recommend that all creators register their work with the Writers Guild of America West (WGAW) Registry, which is the industry standard for creating legal evidence of authorship. This extra step safeguards your creative rights, whether or not you choose to proceed with my services."
    },
    {
      question: "In what format will I receive my deliveries?",
      answer: "All final materials are delivered in industry-standard formats, complete with source files, making them fully compatible with any production workflow. This ensures your project can seamlessly transition from pre-production into the filming stage without reformatting delays. If you have specific format or software requirements, you can discuss them before placing your order."
    },
    {
      question: "Are there exceptions to the turnaround time?",
      answer: "While the majority of projects are completed within 2–5 business days, turnaround times can vary based on the complexity, scope, and number of deliverables required. Projects with more intricate research, multiple creative elements, or large asset requirements may take longer."
    },
    {
      question: "What if I don't like the final work?",
      answer: "Your satisfaction is central to my process. After delivering the first draft, you'll have up to three days to review it and request changes. Depending on the package selected, you can receive up to two free revisions, during which I will make all necessary corrections, refinements, and creative adjustments to align with your vision."
    },
    {
      question: "Who can use your services?",
      answer: "My services are ideal for anyone in the film and television industry who needs polished, professional pre-production materials. This includes screenwriters pitching to networks or development executives, studios seeking to attach agents or talent, and independent filmmakers aiming to reduce costs with remote production support. Whether you're in early concept development or on the verge of production, I can help you present your project in the strongest possible way."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-hero">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Film Budgeting
          </h1>
          <p className="text-xl text-accent font-body mb-8">
            Preliminary Budgets with topsheet
          </p>
          
          <img 
            src={filmBudgetingImage}
            alt="Professional film budgeting spreadsheet"
            className="w-full max-w-4xl mx-auto rounded-2xl shadow-glow mb-12"
          />
          
          <p className="text-lg font-body text-foreground/90 leading-relaxed max-w-4xl mx-auto">
            Using AI-powered workflows and industry-standard software, I create detailed, investor-ready budgets 
            that cover every aspect of your production — from Above-the-Line (ATL) costs like script development 
            and key talent, to Below-the-Line (BTL) production costs like crew, locations, and equipment, and 
            post-production expenses such as editing and VFX. Incorporating the latest union and non-union rates, 
            each budget provides a clear, comprehensive financial plan that minimizes surprises and ensures funding 
            covers your entire project.
          </p>
        </div>
      </section>

      {/* Service Workflow Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                Service Workflow
              </h2>
              <p className="text-lg text-accent font-body mb-8">
                Behind the Scenes
              </p>
            </div>
          
            
            <div className="space-y-8">
              {[
                {
                  step: "1",
                  title: "Perfect Workflow Selection",
                  description: "Based on the expected budget range and other project parameters, the most suitable AI-driven budgeting workflow is identified and selected from my catalogue."
                },
                {
                  step: "2", 
                  title: "AI Script Processing",
                  description: "The screenplay is processed through the selected AI workflow, which extracts key production parameters and data points for use in budget creation."
                },
                {
                  step: "3",
                  title: "Final Budget Preparation", 
                  description: "A comprehensive budget is developed by me in industry-standard software with all key production parameters and data points applied."
                }
              ].map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-nav font-bold">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-bold text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-foreground/80 font-body">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <Card className="bg-card/40 backdrop-blur-sm border-border">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-2">
                  Key Highlights
                </h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-foreground font-body">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Quote Form Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Get free quote
            </h2>
            <p className="text-lg text-muted-foreground font-body">
              Tell us about your film budgeting needs
            </p>
          </div>
          
          <Card className="bg-card/40 backdrop-blur-sm border-border">
            <CardContent className="p-8">
              <form className="space-y-6">
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
                  <Label htmlFor="shootLocation">Shoot Location</Label>
                  <Select name="shootLocation">
                    <SelectTrigger>
                      <SelectValue placeholder="Select shoot location" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="united-states">United States</SelectItem>
                      <SelectItem value="united-kingdom">United Kingdom</SelectItem>
                      <SelectItem value="canada">Canada</SelectItem>
                      <SelectItem value="australia">Australia</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                    <Label htmlFor="budgetRange">Expected Budget Range</Label>
                    <Select name="budgetRange">
                      <SelectTrigger>
                        <SelectValue placeholder="Select budget range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="under-3m">Under $3,000,000</SelectItem>
                        <SelectItem value="3m-6.25m">$3,000,001 - $6,250,000</SelectItem>
                        <SelectItem value="6.25m-9m">$6,250,001 - $9,000,000</SelectItem>
                        <SelectItem value="9m-12.5m">$9,000,001 - $12,500,000</SelectItem>
                        <SelectItem value="12.5m-15m">$12,500,001 - $15,000,000</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
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

                <Button type="submit" variant="cta" size="lg" className="w-full">
                  Submit
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground text-center mb-12">
            Frequently asked questions
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.slice(0, 3).map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-card/40 backdrop-blur-sm border border-border rounded-lg px-6"
                >
                  <AccordionTrigger className="font-nav font-semibold text-foreground hover:text-accent">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="font-body text-foreground/80 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.slice(3).map((faq, index) => (
                <AccordionItem 
                  key={index + 3} 
                  value={`item-${index + 3}`}
                  className="bg-card/40 backdrop-blur-sm border border-border rounded-lg px-6"
                >
                  <AccordionTrigger className="font-nav font-semibold text-foreground hover:text-accent">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="font-body text-foreground/80 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FilmBudgeting;