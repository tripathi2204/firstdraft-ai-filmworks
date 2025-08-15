import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import aiTrailerImage from "@/assets/ai-trailer.jpg";

const AIFilmTrailer = () => {
  const features = [
    "AI Generated Visuals created based on the script",
    "Expert Editing with music and sound effects",
    "MP4 Export for easy sharing"
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
            AI Film Trailer
          </h1>
          <p className="text-xl text-accent font-body mb-8">
            High-quality cinematic trailers
          </p>
          
          <img 
            src={aiTrailerImage}
            alt="Professional AI film trailer production"
            className="w-full max-w-4xl mx-auto rounded-2xl shadow-glow mb-12"
          />
          
          <p className="text-lg font-body text-foreground/90 leading-relaxed max-w-4xl mx-auto">
            I turn your scripts into high-quality cinematic trailers. Traditional trailer production often demands 
            substantial time and resources, but with my AI-powered workflow, the process becomes super-efficient. 
            I craft professional-grade AI trailers with precision and ease. Whether it's a film, ad, or game, 
            it helps you bring your vision to life.
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
                title: "Script Analysis Workflow",
                description: "I have developed a custom Script Analysis workflow that feeds the complete screenplay into LLM using RAG processes to expand effectively the context window, enabling the model to craft a perfect script for your trailer."
              },
              {
                step: "2", 
                title: "AI-Generated Visuals",
                description: "Leveraging the trailer script and the unique tone of your screenplay, I utilize advanced AI prompt-to-video models to generate high-quality cinematic footage tailored specifically for your trailer."
              },
              {
                step: "3",
                title: "Expert Assembly", 
                description: "The curated visuals are meticulously edited using my years of professional experience. Through the seamless integration of titles, sound design, and music, I craft a final cinematic trailer that vividly conveys the visual and emotional potential of your project."
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
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
              Tell us about your AI film trailer needs
            </p>
          </div>
          
          <Card className="bg-card/40 backdrop-blur-sm border-border">
            <CardContent className="p-8">
              <ContactForm 
                subject="I am interested in getting a AI Film Trailer made"
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

export default AIFilmTrailer;