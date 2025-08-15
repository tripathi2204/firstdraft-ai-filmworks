import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import founderPhoto from "@/assets/founder-photo.jpg";

const About = () => {
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
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground text-center mb-16">
            Who Am I
          </h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div className="order-2 lg:order-1">
              <img 
                src={founderPhoto}
                alt="Shubham - Founder of First Draft Filmworks"
                className="w-full max-w-md mx-auto rounded-2xl shadow-glow"
              />
            </div>
            
            <div className="order-1 lg:order-2 space-y-6">
              <p className="text-lg font-body text-foreground/90 leading-relaxed">
                I'm Shubham, an engineer by qualification who found his true calling in the world of filmmaking. 
                My journey began as an Assistant Director with major production houses, where I gained first-hand 
                experience in the art and craft of storytelling. Five years ago, I founded First Draft Filmworks 
                with the mission of providing filmmakers with top-tier pre-production and pitching services.
              </p>
              
              <p className="text-lg font-body text-foreground/90 leading-relaxed">
                As AI technology rapidly evolved, my deep, hands-on experience in the field inspired me to integrate 
                AI-powered workflows into my services—streamlining processes, reducing costs, and delivering faster 
                turnarounds. I believe AI-driven pre-production is a game changer for the industry, but at the heart 
                of it all, my passion remains the same: to be part of films that leave a real impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Work with Me Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-16">
            Why Work with Me
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                number: "5+",
                label: "years in Business",
                description: "Proven track record in film pre-production"
              },
              {
                number: "100+",
                label: "Verified Reviews",
                description: "Satisfied clients worldwide"
              },
              {
                number: "500+",
                label: "Projects Delivered",
                description: "Successfully completed productions"
              }
            ].map((stat, index) => (
              <Card key={index} className="bg-card/40 backdrop-blur-sm border-border">
                <CardContent className="p-8 text-center">
                  <div className="text-4xl md:text-5xl font-heading font-bold text-accent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-xl font-nav font-semibold text-foreground mb-2">
                    {stat.label}
                  </div>
                  <p className="text-muted-foreground font-body">
                    {stat.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Get in touch
            </h2>
            <p className="text-lg text-muted-foreground font-body">
              Drop us a line by filling the form below or email me at{" "}
              <a href="mailto:firstdraftfilmworks@gmail.com" className="text-accent hover:underline">
                firstdraftfilmworks@gmail.com
              </a>
            </p>
          </div>
          
          <Card className="bg-card/40 backdrop-blur-sm border-border">
            <CardContent className="p-8">
              <ContactForm />
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
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

export default About;