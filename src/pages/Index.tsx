import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { 
  Calendar, 
  FileText, 
  Calculator, 
  Presentation, 
  Building, 
  Video,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Check,
  Star,
  User
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import heroImage from "@/assets/hero-filmmaking.jpg";
import shootingScheduleImage from "@/assets/shooting-schedule.jpg";
import scriptBreakdownImage from "@/assets/script-breakdown.jpg";
import filmBudgetingImage from "@/assets/film-budgeting.jpg";
import pitchDeckImage from "@/assets/pitch-deck.jpg";
import businessPlanImage from "@/assets/business-plan.jpg";
import aiTrailerImage from "@/assets/ai-trailer.jpg";

const Index = () => {
  const [activeService, setActiveService] = useState(0);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const services = [
    {
      id: "shooting-schedule",
      icon: Calendar,
      title: "Shooting Schedule",
      tagline: "Colored shooting stripboard", 
      description: "Using AI-assisted sorting and industry-standard software, I create accurate, cost-effective, and color-coded stripboard schedules optimized for shooting order and time. Leveraging my years of expertise, I tighten timelines to ensure a smooth production flow that maximizes budget efficiency.",
      image: shootingScheduleImage,
      link: "/services/shooting-schedule"
    },
    {
      id: "script-breakdown",
      icon: FileText,
      title: "Script Breakdown",
      tagline: "Scene-by-scene script breakdown",
      description: "Using AI-powered workflows and expert oversight, I deliver detailed, scene-by-scene script breakdowns that identify every key production element — including cast and extras, props, wardrobe and costumes, makeup and hair, sets and set dressing, special effects (SFX) and visual effects (VFX), vehicles, animals, and more. I also provide precise one-liners to ensure nothing is overlooked, giving your team everything they need to stay on budget, on schedule, and fully prepared for production.",
      image: scriptBreakdownImage,
      link: "/services/script-breakdown"
    },
    {
      id: "film-budgeting", 
      icon: Calculator,
      title: "Film Budgeting",
      tagline: "Preliminary Budgets with topsheet",
      description: "Using AI-powered workflows and industry-standard software, I create detailed, investor-ready budgets that cover every aspect of your production — from Above-the-Line (ATL) costs like script development and key talent, to Below-the-Line (BTL) production costs like crew, locations, and equipment, and post-production expenses such as editing and VFX. Incorporating the latest union and non-union rates, each budget provides a clear, comprehensive financial plan that minimizes surprises and ensures funding covers your entire project.",
      image: filmBudgetingImage,
      link: "/services/film-budgeting"
    },
    {
      id: "ai-pitch-deck",
      icon: Presentation,
      title: "AI Pitch Deck", 
      tagline: "Visually eye-catching presentations",
      description: "I create high-impact pitch materials — including film pitch decks (video or static), TV-show bibles, visual treatments, electronic press kits (EPKs), director's treatments, and TVC treatments — designed to capture the attention of film executives and investors. Using AI-generated imagery matched to your project's tone and storyline, each presentation delivers a concise, visually engaging showcase of your concept, ensuring your idea makes a strong and lasting impression.",
      image: pitchDeckImage,
      link: "/services/ai-pitch-deck"
    },
    {
      id: "film-business-plan",
      icon: Building,
      title: "Film Business Plan",
      tagline: "Business strategies for your film", 
      description: "I create comprehensive film business plans that combine creative vision with practical feasibility, offering a clear blueprint for launching and executing your project. Using AI-powered workflows and detailed script analysis, each plan outlines financial, operational, and marketing strategies — including target audience insights, distribution plans, and projected returns on investment. Designed to guide production and attract investors, these plans demonstrate their potential for success to stakeholders.",
      image: businessPlanImage,
      link: "/services/film-business-plan"
    },
    {
      id: "ai-film-trailer",
      icon: Video,
      title: "AI Film Trailer",
      tagline: "High-quality cinematic trailers",
      description: "I turn your scripts into high-quality cinematic trailers. Traditional trailer production often demands substantial time and resources, but with my AI-powered workflow, the process becomes super-efficient. I craft professional-grade AI trailers with precision and ease. Whether it's a film, ad, or game, it helps you bring your vision to life.",
      image: aiTrailerImage,
      link: "/services/ai-film-trailer"
    }
  ];

  const testimonials = [
    {
      text: "....he has created numerous budgets for Riveting River Entertainment and we couldn't be more satisfied! We are most pleased with his attention to detail....",
      author: "Roger Margulies",
      company: "Riveting River Ent. Inc."
    },
    {
      text: "First Draft Filmworks does first-rate work that equals and often exceeds industry standards, and we consider them part of our team.",
      author: "Spencer Lord", 
      company: "The Brain Mechanic"
    },
    {
      text: "....a fantastic collaborative experience, he was efficient, creative & worked fast. I am very happy with the work he did on the budget as well as the Script deck....",
      author: "Stogie Kenyatta",
      company: "Actor, Writer,& Comedian"
    },
    {
      text: "....very communicative from the very beginning in wanting to understand what I wanted. Followed up with pertinent questions and took on my ideas/concerns....",
      author: "Nkem Ifejika",
      company: "Producer & Presenter"
    },
    {
      text: "I have been working with Shubham on many of my projects. He always delivers above and beyond my expectations! Highly recommend!",
      author: "Kenneth Brown",
      company: "South Beach Ent. Group"
    },
    {
      text: "Perfect! His work is precise, creative, and executed in a timely fashion. He is also sensitive to my work and vision. In fact First Draft Filmworks makes me much, much better.",
      author: "Frank Rojas",
      company: "Village Nation Productions"
    }
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
      <section className="relative pt-24 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-90" />
        <div className="relative container mx-auto text-center">
          <Badge variant="outline" className="mb-8 text-sm font-body border-film-violet/30 text-muted-foreground">
            Lower costs - Quicker turnarounds - Winning pitches
          </Badge>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-foreground mb-6">
            <span className="block">Empowering your stories through</span>
            <span className="block bg-gradient-accent bg-clip-text text-transparent">
              smarter Pre-Production
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-body font-light">
            Powered by AI, refined by industry expert
          </p>
          
          <p className="text-lg text-foreground/80 mb-12 max-w-2xl mx-auto font-body">
            Your go-to ally in Film & TV development, preparing you to seize every pitch and production opportunity.
          </p>
          
          <Button variant="cta" size="xl" asChild>
            <a href="#contact">
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
        
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          {/* Service Navigation */}
          <div className="flex flex-wrap justify-center gap-2 mb-16 md:flex-row grid grid-cols-2 md:grid-cols-6 md:gap-2 gap-1">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                  <Button
                    key={service.id}
                    variant={activeService === index ? "hero" : "service"}
                    size="lg"
                    onClick={() => setActiveService(index)}
                    className="flex items-center gap-2 text-xs md:text-base font-nav font-semibold md:px-4 px-2"
                  >
                  <Icon className="h-4 w-4" />
                  {service.title}
                </Button>
              );
            })}
          </div>

          {/* Active Service Display */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setActiveService(activeService > 0 ? activeService - 1 : services.length - 1)}
                >
                  <ChevronLeft className="h-5 w-5" />
                </Button>
                <div className="flex-1">
                  <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-2">
                    {services[activeService].title}
                  </h2>
                  <p className="text-lg text-accent font-body">
                    {services[activeService].tagline}
                  </p>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setActiveService(activeService < services.length - 1 ? activeService + 1 : 0)}
                >
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </div>
              
              <p className="text-foreground/80 font-body leading-relaxed">
                {services[activeService].description}
              </p>
              
              <Button variant="outline" asChild>
                <Link to={services[activeService].link}>
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            
            <div className="relative">
              <img 
                src={services[activeService].image}
                alt={services[activeService].title}
                className="w-full rounded-xl shadow-card"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Me Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Why choose me
          </h2>
          <p className="text-xl text-accent font-body mb-12">
            My Hybrid Approach Works Best
          </p>
          
          <div className="overflow-x-auto relative">
            <div className="md:hidden absolute bottom-0 right-0 bg-gradient-to-l from-card to-transparent w-8 h-full pointer-events-none flex items-center justify-end pr-2">
              <span className="text-accent text-xs">→</span>
            </div>
            <table className="w-full bg-card/40 backdrop-blur-sm border border-border rounded-xl">
              <thead>
                <tr className="border-b border-border">
                  <th className="p-6 text-left font-nav font-bold text-foreground">Feature</th>
                  <th className="p-6 text-center font-nav font-bold text-muted-foreground">Industry Hire</th>
                  <th className="p-6 text-center font-nav font-bold text-muted-foreground">AI Platforms</th>
                  <th className="p-6 text-center font-nav font-bold text-accent bg-accent/10">My Hybrid Approach</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    feature: "Scope",
                    industry: "Hire different specialists for each task",
                    ai: "Pay for multiple AI subscriptions", 
                    hybrid: "✅ All pre-production services under one roof"
                  },
                  {
                    feature: "Collaboration & Flexibility",
                    industry: "Flexible with direct coordination",
                    ai: "Limited or none",
                    hybrid: "✅ Fully collaborative and adaptable"
                  },
                  {
                    feature: "Source Files",
                    industry: "Only with a clear contract",
                    ai: "Editable only while subscription is active",
                    hybrid: "✅ Editable, industry-format files delivered ready for production"
                  },
                  {
                    feature: "Delivery Time",
                    industry: "2–3 weeks per service",
                    ai: "Instant, but searching a suitable platform takes time",
                    hybrid: "✅ 2–5 days for the complete process"
                  },
                  {
                    feature: "Pricing",
                    industry: "Monthly salary plus benefits",
                    ai: "Monthly subscription per tool",
                    hybrid: "✅ Simple, transparent pay-per-service"
                  },
                  {
                    feature: "Support & Revisions",
                    industry: "Only while employed",
                    ai: "Limited or unavailable",
                    hybrid: "✅ Revisions included within scope"
                  }
                ].map((row, index) => (
                  <tr key={index} className="border-b border-border last:border-b-0">
                    <td className="p-6 font-nav font-semibold text-foreground">{row.feature}</td>
                    <td className="p-6 text-center text-muted-foreground">{row.industry}</td>
                    <td className="p-6 text-center text-muted-foreground">{row.ai}</td>
                    <td className="p-6 text-center text-foreground bg-accent/5 font-medium">
                      {row.hybrid.replace('✅', '✅')}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
            {[
              {
                stat: "98% Workflow Accuracy",
                description: "AI-powered workflows with Human-In-The-Loop approach delivers unmatched precision, refined by expert human oversight."
              },
              {
                stat: "1/5th The Industry Cost", 
                description: "High-quality pre-production at just a 20% of traditional pricing, without compromising quality."
              },
              {
                stat: "5-Star Reviews",
                description: "Hundreds of verified ratings from happy clients worldwide."
              }
            ].map((item, index) => (
              <div key={index} className="text-center max-w-xs relative">
                <div className="w-32 h-32 bg-gradient-accent rounded-2xl flex flex-col items-center justify-center mx-auto mb-4 p-4">
                  <h3 className="text-sm font-heading font-bold text-accent-foreground text-center leading-tight">
                    {item.stat}
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground font-body">
                  {item.description}
                </p>
                {index < 2 && (
                  <div className="hidden md:block absolute top-16 -right-8 w-16 h-0.5 bg-accent/30" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Excellence Delivered, Every Time.
          </h2>
          <p className="text-xl text-accent font-body mb-12">
            What clients are saying…
          </p>
          
          <div className="relative max-w-4xl mx-auto">
            <Card className="bg-card/40 backdrop-blur-sm border-border">
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setActiveTestimonial(activeTestimonial > 0 ? activeTestimonial - 1 : testimonials.length - 1)}
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </Button>
                  
                  <div className="flex-1 mx-8">
                    <blockquote className="text-lg font-body text-foreground/90 italic mb-6">
                      "{testimonials[activeTestimonial].text}"
                    </blockquote>
                    <div className="flex items-center justify-center space-x-2">
                      <User className="h-5 w-5 text-accent" />
                      <cite className="font-nav font-semibold text-foreground">
                        {testimonials[activeTestimonial].author}
                      </cite>
                      <span className="text-muted-foreground">
                        ({testimonials[activeTestimonial].company})
                      </span>
                    </div>
                  </div>
                  
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setActiveTestimonial(activeTestimonial < testimonials.length - 1 ? activeTestimonial + 1 : 0)}
                  >
                    <ChevronRight className="h-5 w-5" />
                  </Button>
                </div>
                
                <div className="flex justify-center space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === activeTestimonial ? 'bg-accent' : 'bg-muted'
                      }`}
                      onClick={() => setActiveTestimonial(index)}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge variant="outline" className="mb-4 text-sm font-body border-film-violet/30 text-muted-foreground">
                My Process
              </Badge>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-8">
                My 4-Step AI-Powered Pre-Production Process
              </h2>
              <Button variant="cta" size="lg" asChild>
                <a href="#contact">
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
            
            <div className="space-y-8">
              {[
                {
                  title: "Order",
                  description: "Choose your service, share the requested project details, and complete payment to get started."
                },
                {
                  title: "AI Workflow",
                  description: "Your project runs through my custom-built AI pipelines, designed to generate high-quality, production-ready material."
                },
                {
                  title: "Expert Touch",
                  description: "I review every output, verify details, and fill any gaps to ensure your results meet industry standards."
                },
                {
                  title: "Deliver & Revise",
                  description: "Receive your finalized files, with the option to request revisions."
                }
              ].map((step, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-nav font-bold">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-bold text-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="text-foreground/80 font-body">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
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

export default Index;
