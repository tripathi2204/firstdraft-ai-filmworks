import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import businessPlanImage from "@/assets/business-plan.jpg";

const FilmBusinessPlan = () => {
  const features = [
    "Comparable Film Analysis in detail",
    "Market Analysis In-Depth for your movie",
    "SWOT Analysis included in the plan",
    "Revenue & Distribution strategy highlighted",
    "Editable Source File provided as well",
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
            Film Business Plan
          </h1>
          <p className="text-xl text-accent font-body mb-8">
            Business strategies for your film
          </p>
          
          <img 
            src={businessPlanImage}
            alt="Professional film business plan document"
            className="w-full max-w-4xl mx-auto rounded-2xl shadow-glow mb-12"
          />
          
          <p className="text-lg font-body text-foreground/90 leading-relaxed max-w-4xl mx-auto">
            I create comprehensive film business plans that combine creative vision with practical feasibility, 
            offering a clear blueprint for launching and executing your project. Using AI-powered workflows and 
            detailed script analysis, each plan outlines financial, operational, and marketing strategies — 
            including target audience insights, distribution plans, and projected returns on investment. Designed 
            to guide production and attract investors, these plans demonstrate their potential for success to 
            stakeholders.
          </p>
        </div>
      </section>

      {/* Behind the Scenes Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground text-center mb-16">
            Behind the Scenes
          </h2>
          
          <div className="space-y-16 max-w-4xl mx-auto">
            {[
              {
                step: "1",
                title: "AI Script Analysis Flow",
                description: "I apply Script Analysis Workflow that integrates the complete screenplay into advanced LLMs using RAG processes. This approach significantly expands the effective context window, enabling the model to accurately extract nuanced narrative, thematic, and structural elements for the film business plan."
              },
              {
                step: "2", 
                title: "AI-Powered Research Agents",
                description: "The Research AI Agents I created leverage state-of-the-art models to analyze comparable films' financial, operational, and marketing strategies. This process delivers data-driven insights for the film business plan ensuring it's rooted in real-world performance metrics and market intelligence."
              },
              {
                step: "3",
                title: "Integrated Plan Creation", 
                description: "The final Film Business Plan, synthesizes the analytical depth of the Script Analysis Workflow with the market intelligence from AI-Powered Research Agents. This document serves as a clear, actionable blueprint for launching and executing the film project, aligning creative vision with financial viability and investor expectations."
              }
            ].map((item, index) => (
              <div key={index} className="flex gap-8 items-center">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-2xl font-heading font-bold">
                    {item.step}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-heading font-bold text-foreground mb-4">
                    {item.title}
                  </h3>
                  <p className="text-foreground/80 font-body leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
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
                  The Big Picture
                </h2>
                <p className="text-lg text-accent font-body">
                  Close-up on highlights
                </p>
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
              Tell us about your film business plan needs
            </p>
          </div>
          
          <Card className="bg-card/40 backdrop-blur-sm border-border">
            <CardContent className="p-8">
              <ContactForm 
                subject="I am interested in getting a Film Business Plan made"
                showService={false}
                projectFields={true}
              />
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
          
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
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
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FilmBusinessPlan;