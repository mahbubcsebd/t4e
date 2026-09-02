"use client";

import SectionHeading from "@/components/layout/SectionHeading";
import SectionCard from "@/components/layout/SectionCard";

import { useLanguage } from "@/context/LanguageContext";
import {
  Cpu,
  Database,
  Layers,
  Layout,
  RefreshCw,
  Workflow,
  Monitor,
  Route,
  Shield,
  ClipboardCheck,
  Plug,
  FileText,
  Network,
  Activity,
  Zap,
} from "lucide-react";
import CenterCarousel from "./CenterCarousel";

const carouselItems = [
  {
    title: "Screens & Navigation",
    description:
      "Every screen of your application on one visual map, with the navigation paths between them. Click any screen later to refine it or design its UI.",
    image: "/images/carousel/screens-navigation.png",
    icon: <Monitor className="w-5 h-5 text-primary" />,
  },
  {
    title: "Business Flows",
    description:
      "Step-by-step flows showing how work moves through your app — bookings, approvals, escalations — so everyone agrees on the process before it is built.",
    image: "/images/carousel/business-flows.png",
    icon: <Route className="w-5 h-5 text-primary" />,
  },
  {
    title: "Data Objects",
    description:
      "Your complete data model: every entity with its fields and the relationships between objects. This later becomes the real database.",
    image: "/images/carousel/data-objects.png",
    icon: <Database className="w-5 h-5 text-primary" />,
  },
  {
    title: "Roles & Permissions",
    description:
      "Who can see and do what — every user role with its access rights, mapped to screens and actions.",
    image: "/images/carousel/roles-permission.png",
    icon: <Shield className="w-5 h-5 text-primary" />,
  },
  {
    title: "Business Rules",
    description:
      "The policies and constraints your application enforces automatically — validations, limits, calculations and conditions.",
    image: "/images/carousel/business-rules.png",
    icon: <ClipboardCheck className="w-5 h-5 text-primary" />,
  },
  {
    title: "Integrations",
    description:
      "The external systems your app talks to — payments, email, messaging, third-party APIs — and where each one connects.",
    image: "/images/carousel/integrations.png",
    icon: <Plug className="w-5 h-5 text-primary" />,
  },
  {
    title: "Functional Architecture",
    description:
      "A one-poster overview document of the whole solution, built automatically right after your concept — ready to share with your team.",
    image: "/images/carousel/functional-architecture.png",
    icon: <FileText className="w-5 h-5 text-primary" />,
  },
  {
    title: "API Endpoints",
    description:
      "The service contract: every API endpoint with its method, path, request and response — the bridge between your screens and your data.",
    image: "/images/carousel/api-endpoints.png",
    icon: <Network className="w-5 h-5 text-primary" />,
  },
  {
    title: "State & Lifecycle",
    description:
      "How key objects move between states — a booking from requested to confirmed to completed — with the transitions and who can trigger them.",
    image: "/images/carousel/state-lifecycle.png",
    icon: <Activity className="w-5 h-5 text-primary" />,
  },
  {
    title: "Events & Jobs",
    description:
      "The background machinery: scheduled jobs, notifications and event-driven reactions that keep the app running without anyone clicking.",
    image: "/images/carousel/events-jobs.png",
    icon: <Zap className="w-5 h-5 text-primary" />,
  },
  {
    title: "Requirements",
    description:
      "Define your MVP (Minimum Viable Product) features and user roles.",
    image: "/images/carousel/requirements.png",
    icon: <ClipboardCheck className="w-5 h-5 text-primary" />,
  },
  {
    title: "Concept",
    description:
      "Breaks your requirements down into individual Concept Blocks.",
    image: "/images/carousel/concept.png",
    icon: <Layers className="w-5 h-5 text-primary" />,
  },
  {
    title: "UI Designs",
    description:
      "View and interact with generated UI designs for your concepts.",
    image: "/images/carousel/ui-design.png",
    icon: <Layout className="w-5 h-5 text-primary" />,
  },
  {
    title: "Concept Summary",
    description: "High level view of the System",
    image: "/images/carousel/concept-summery.png",
    icon: <FileText className="w-5 h-5 text-primary" />,
  },
  {
    title: "Environment & Config",
    description: "Environment and Configuration parameters of the System",
    image: "/images/carousel/environment-config.png",
    icon: <RefreshCw className="w-5 h-5 text-primary" />,
  },
  {
    title: "Software Documentation",
    description: "Manage requirements documentation for your project.",
    image: "/images/carousel/requirements-documents.png",
    icon: <FileText className="w-5 h-5 text-primary" />,
  },
  {
    title: "MCP Connect & Tools",
    description:
      "Connect AI clients to this platform over the Model Context Protocol",
    image: "/images/carousel/mcp-connects.png",
    icon: <Plug className="w-5 h-5 text-primary" />,
  },
  {
    title: "MCP — Tools & Test",
    description:
      "Connect AI clients to this platform over the Model Context Protocol",
    image: "/images/carousel/mcp-tools.png",
    icon: <Zap className="w-5 h-5 text-primary" />,
  },
  {
    title: "Project Structure Map",
    description: "Holistic view of the entire Project",
    image: "/images/carousel/structure-analysis.png",
    icon: <Workflow className="w-5 h-5 text-primary" />,
  },
];

export default function ProductModelSection() {
  const { t } = useLanguage();

  return (
    <section className="py-6 md:py-8 lg:py-12 " id="product">
      <SectionCard className="max-w-[1600px] mx-auto">
        <div className="bg-card rounded-xl p-5 sm:p-8 md:p-10 w-full relative z-10 border border-border/50">
          {/* Editorial Header */}
          <SectionHeading
            eyebrow={t("productModel.eyebrow")}
            title={t("productModel.title")}
            subtitle={t("productModel.subtitle")}
          />

          {/* The Blueprint Architecture Visual */}
          <div className="relative w-full mt-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center relative z-10">
              {/* Left Column (Perspectives 1 & 3) */}
              <div className="lg:col-span-4 flex flex-col justify-between gap-6 lg:gap-16 relative z-10 order-2 lg:order-1">
                {/* Perspective 1: Engineering */}
                <div className="gemini-card rounded-xl p-6  hover:-translate-y-1 transition-all duration-300 relative group h-full flex flex-col justify-center">
                  {/* Connecting Line to Center */}
                  <div className="absolute -right-[120px] top-1/2 w-[120px] border-t-2 border-dotted border-border/80 hidden lg:block z-[-1]"></div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-blue-50 rounded-xl text-primary border border-primary/20 shrink-0">
                      <Cpu className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-extrabold text-primary uppercase tracking-widest block mb-1">
                        {t("productModel.persp1Tag")}
                      </span>
                      <h3 className="text-sm font-bold text-foreground leading-snug">
                        {t("productModel.persp1Title")}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Perspective 3: Operations */}
                <div className="gemini-card rounded-xl p-6  hover:-translate-y-1 transition-all duration-300 relative group h-full flex flex-col justify-center">
                  {/* Connecting Line to Center */}
                  <div className="absolute -right-[120px] top-1/2 w-[120px] border-t-2 border-dotted border-border/80 hidden lg:block z-[-1]"></div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-blue-50 rounded-xl text-primary border border-primary/20 shrink-0">
                      <Workflow className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-extrabold text-primary uppercase tracking-widest block mb-1">
                        {t("productModel.persp3Tag")}
                      </span>
                      <h3 className="text-sm font-bold text-foreground leading-snug">
                        {t("productModel.persp3Title")}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>

              {/* Center Column (Universal Meta-Model Core) */}
              <div className="lg:col-span-4 flex justify-center relative z-20 order-1 lg:order-2 mb-8 lg:mb-0">
                <div className="relative w-full max-w-sm h-full flex flex-col">
                  {/* Glowing Background Effect */}
                  <div className="absolute inset-0 bg-primary blur-2xl opacity-10 rounded-xl"></div>

                  <div className="gemini-card rounded-xl p-8 relative overflow-hidden group flex-1 flex flex-col items-center justify-center min-h-[400px]">
                    <CenterCarousel items={carouselItems} />
                  </div>
                </div>
              </div>

              {/* Right Column (Perspectives 2 & 4) */}
              <div className="lg:col-span-4 flex flex-col justify-between gap-6 lg:gap-16 relative z-10 order-3">
                {/* Perspective 2: Product */}
                <div className="gemini-card rounded-xl p-6  hover:-translate-y-1 transition-all duration-300 relative group h-full flex flex-col justify-center">
                  {/* Connecting Line to Center */}
                  <div className="absolute -left-[120px] top-1/2 w-[120px] border-t-2 border-dotted border-border/80 hidden lg:block z-[-1]"></div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-blue-50 rounded-xl text-primary border border-primary/20 shrink-0">
                      <Layout className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-extrabold text-primary uppercase tracking-widest block mb-1">
                        {t("productModel.persp2Tag")}
                      </span>
                      <h3 className="text-sm font-bold text-foreground leading-snug">
                        {t("productModel.persp2Title")}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Perspective 4: Business */}
                <div className="gemini-card rounded-xl p-6  hover:-translate-y-1 transition-all duration-300 relative group h-full flex flex-col justify-center">
                  {/* Connecting Line to Center */}
                  <div className="absolute -left-[120px] top-1/2 w-[120px] border-t-2 border-dotted border-border/80 hidden lg:block z-[-1]"></div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-blue-50 rounded-xl text-primary border border-primary/20 shrink-0">
                      <Database className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-extrabold text-primary uppercase tracking-widest block mb-1">
                        {t("productModel.persp4Tag")}
                      </span>
                      <h3 className="text-sm font-bold text-foreground leading-snug">
                        {t("productModel.persp4Title")}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionCard>
    </section>
  );
}
