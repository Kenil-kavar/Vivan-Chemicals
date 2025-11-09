import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import investmentCasting from "@/assets/investment-casting-real.jpg";
import paperIndustry from "@/assets/paper-industry-real.jpg";
import dailyCosmetics from "@/assets/daily-cosmetics-real.png";
import foodIndustry from "@/assets/food-industry-real.png";
import grindingPolishing from "@/assets/grinding-polishing-real.jpg";
import coating from "@/assets/coating-real.jpeg";
import SEO from "@/components/SEO";

interface Application {
  title: string;
  description: string;
  recommendedProducts: string[];
  image: string;
  fullDescription: string;
}

const ApplicationCard = ({ application }: { application: Application }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-card rounded-2xl overflow-hidden border border-border hover:shadow-xl transition-all duration-300"
      style={{
        backdropFilter: "blur(10px)",
        background: "hsl(var(--glass-bg) / 0.7)",
      }}
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={application.image}
          alt={application.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent" />
        <h3 className="absolute bottom-4 left-6 text-2xl font-bold text-foreground">
          {application.title}
        </h3>
      </div>

      <div className="p-6">
        <p className="text-muted-foreground mb-4">
          {isExpanded ? application.fullDescription : application.description}
        </p>

        <div className="mb-4">
          <h4 className="text-sm font-semibold text-foreground mb-2">
            Recommended Products:
          </h4>
          <div className="flex flex-wrap gap-2">
            {application.recommendedProducts.map((product, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-lg"
              >
                {product}
              </span>
            ))}
          </div>
        </div>

        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full mt-2"
        >
          {isExpanded ? (
            <>
              Show Less <ChevronUp className="ml-2 h-4 w-4" />
            </>
          ) : (
            <>
              See More <ChevronDown className="ml-2 h-4 w-4" />
            </>
          )}
        </Button>
      </div>
    </motion.div>
  );
};

const Applications = () => {
  const applications: Application[] = [
    {
      title: "Investment Casting",
      description:
        "Enhances surface quality, heat resistance, and demoulding efficiency.",
      fullDescription:
        "Colloidal silica plays a crucial role in investment casting by creating high-quality ceramic shells. It significantly improves surface finish, dimensional accuracy, and thermal stability. The fine particle size ensures excellent coating properties and superior demoulding characteristics, making it ideal for precision casting applications in aerospace, automotive, and industrial sectors.",
      recommendedProducts: ["HS-830", "HS-1430", "SKP27-3", "HS-830G"],
      image: investmentCasting,
    },
    {
      title: "Paper Industry",
      description:
        "Improves fiber retention, drainage, and paper print quality.",
      fullDescription:
        "In paper manufacturing, colloidal silica serves as an effective retention aid and drainage improver. It enhances fiber bonding, improves paper strength, and provides better ink receptivity for superior print quality. The product increases production efficiency by accelerating water removal during the papermaking process while maintaining optimal fiber distribution throughout the sheet.",
      recommendedProducts: ["HS-515", "HS-1430", "HS-1430A", "HSD-5040"],
      image: paperIndustry,
    },
    {
      title: "Daily Cosmetics",
      description: "Enhances formulation texture, stability, and performance.",
      fullDescription:
        "Colloidal silica is widely used in cosmetic formulations to improve texture, stability, and sensory properties. It acts as a thickening agent, mattifying agent, and absorbent in various personal care products. The nano-sized particles provide a smooth, silky feel while enhancing product spreadability and absorption. It's particularly valuable in foundations, sunscreens, and anti-aging products.",
      recommendedProducts: ["HS-830", "HS-1430", "HS-1430A"],
      image: dailyCosmetics,
    },
    {
      title: "Food Industry",
      description:
        "Used as clarifier and stabilizer in beverages and food products.",
      fullDescription:
        "Food-grade colloidal silica serves as an effective clarifying agent in beverage production, particularly for wine, beer, and fruit juices. It removes unwanted proteins and polyphenols, resulting in crystal-clear, stable beverages. The product is also used as an anti-caking agent in powdered foods and as a carrier for flavors and nutrients, meeting all food safety regulations and standards.",
      recommendedProducts: ["HS-1430B", "HSD-5040", "HSWD-3030"],
      image: foodIndustry,
    },
    {
      title: "Grinding & Polishing",
      description:
        "Delivers smooth surface finishing in semiconductor wafer polishing.",
      fullDescription:
        "High-purity colloidal silica is essential for chemical mechanical polishing (CMP) of silicon wafers and other precision optical components. The uniform particle size distribution ensures consistent removal rates and exceptional surface smoothness. It's the gold standard in semiconductor manufacturing for achieving nanometer-level surface finishes required for advanced chip production.",
      recommendedProducts: ["HSD-10040", "HSD-12040", "HS-1430A"],
      image: grindingPolishing,
    },
    {
      title: "Coating",
      description:
        "Improves coating hardness, durability, and anti-static performance.",
      fullDescription:
        "Colloidal silica enhances coating formulations by improving hardness, abrasion resistance, and anti-reflective properties. It provides excellent binding properties and helps create durable, protective surfaces. The product is particularly valuable in architectural coatings, industrial protective coatings, and specialty applications requiring enhanced surface properties such as anti-graffiti or anti-static characteristics.",
      recommendedProducts: ["HS-1430A", "HS-1430B"],
      image: coating,
    },
  ];

  return (
    <>
      <SEO
        title="Industry Applications"
        description="Discover diverse applications of Vivan Chemicals' colloidal silica in investment casting, paper industry, cosmetics, food processing, grinding & polishing, and coating industries. Expert solutions for every sector."
        keywords="colloidal silica applications, investment casting binder, paper coating silica, cosmetic grade silica, food processing chemicals, grinding polishing agent, coating additives"
      />
      <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-secondary/30 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Industry <span className="text-primary">Applications</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Discover how our Colloidal Silica solutions transform industries worldwide
            </p>
          </motion.div>
        </div>
      </section>

      {/* Applications Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {applications.map((application, index) => (
              <ApplicationCard key={index} application={application} />
            ))}
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default Applications;
