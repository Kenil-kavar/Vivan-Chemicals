import beakerImage from "@/assets/beaker-real.png";
import chemicalCompound from "@/assets/chemical-compound-real.png";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const Product = () => {
  const applications = [
    "Polishing agent in Ceramic Industry",
    "Binder in investment casting of high-quality metals and alloys (used in moulds, high temperature tolerance 1500°C)",
    "Surface treatment in paper and fibre Industry",
    "Abrasive for silicon wafers polishing",
    "Moisture absorbent",
    "Free flow agent of medicine tablet powder",
    "Additive for varnishes, coatings and paints to improve weather and abrasion resistance",
    "Common additive in cosmetics and food industry",
    "Construction industry, concrete densifier, finishing aid, concrete masonry surface water repellent",
  ];

  const analysisData = [
    { 
      parameter: "Silicon dioxide value %", 
      specification: "29.0 ~ 31.0", 
      value: "30.02" 
    },
    { 
      parameter: "Sodium oxide value %", 
      specification: "≤ 0.5", 
      value: "0.37" 
    },
    { 
      parameter: "pH value", 
      specification: "9.0 ~ 10.5", 
      value: "10.20" 
    },
    { 
      parameter: "Viscosity (27°C) B4 Cup Seconds", 
      specification: "11.0 ~ 13.0", 
      value: "11.83" 
    },
    { 
      parameter: "Density (27°C) g/m³", 
      specification: "1.19 ~ 1.21", 
      value: "1.20" 
    },
    { 
      parameter: "Specific Area (m²/g)", 
      specification: "225–340", 
      value: "258" 
    },
    { 
      parameter: "Average Particle Size (nm)", 
      specification: "7.0 ~ 12", 
      value: "10.92" 
    },
    { 
      parameter: "Appearance", 
      specification: "Milky, translucent or slightly turbid solution", 
      value: "Confirmed" 
    },
    { 
      parameter: "Composition", 
      specification: "Colloidal Silica 29 ~ 31 %, Distilled Water 69 ~ 71 %", 
      value: "" 
    },
  ];

  return (
    <>
      <SEO
        title="Product - HCS-30 Colloidal Silica"
        description="High-quality HCS-30 Colloidal Silica for investment casting, paper industry, cosmetics, food processing, and semiconductor applications. Technical specifications, COA report, and safety data available."
        keywords="HCS-30, colloidal silica product, silica sol specifications, investment casting binder, paper coating, semiconductor polishing, food grade silica"
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
              Colloidal Silica Suspension{" "}
              <span className="text-primary">(HCS-30)</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Nano Amorphous Silica Sol – A Premium Quality Chemical Solution
            </p>
          </motion.div>
        </div>
      </section>

      {/* Technical Data Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Technical Data Sheet
            </h2>
            <p className="text-lg text-muted-foreground">
              Colloidal Silica Suspension - HCS-30
            </p>
          </motion.div>

          {/* Product and Company Identification */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Product and Company Identification
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-card p-6 rounded-xl border border-border space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Product Name:</h4>
                  <p className="text-muted-foreground">Colloidal Silica Suspension</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">CAS No:</h4>
                  <p className="text-muted-foreground">7631-86-9</p>
                </div>
              </div>
              <div className="bg-card p-6 rounded-xl border border-border space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Synonym:</h4>
                  <p className="text-muted-foreground">Colloidal Silica Solution, Nano Amorphous silica sol</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Molecular Formula:</h4>
                  <p className="text-muted-foreground">SiO₂</p>
                </div>
              </div>
              <div className="bg-card p-6 rounded-xl border border-border md:col-span-2">
                <h4 className="font-semibold text-foreground mb-2">Manufacturer / Supplier:</h4>
                <p className="text-muted-foreground mb-2">Hansgold Chemdiscoveries Private Limited</p>
                <p className="text-sm text-muted-foreground">
                  12th Floor, 1241 RK World Tower, Near Sheetal Park BRTS Circle<br />
                  150 Feet Ring Road, Rajkot 360006, Gujarat, India.
                </p>
                <div className="mt-3 space-y-1 text-sm">
                  <p className="text-muted-foreground">Website: www.hansgold.co.in</p>
                  <p className="text-muted-foreground">Email: info@hansgold.co.in</p>
                  <p className="text-muted-foreground">Phone: (+91) 98250 98052</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Introduction of Colloidal Silica */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Introduction of Colloidal Silica
            </h3>
            <div className="bg-card p-8 rounded-xl border border-border">
              <p className="text-muted-foreground leading-relaxed mb-4">
                Colloidal silicas are suspensions of fine amorphous, nonporous, and typically spherical and uneven shape silica particles in a liquid phase. Hansgold colloidal silica (HCS-30) is an alkaline, nanosized, aqueous dispersion of colloidal silica that is approximately 30% solids by weight. It is chemically known as Silicone dioxide (SiO₂). The silica dispersion is alkali metal stabilized and the amorphous silica particles carry a negative surface charge. The physical appearance of the dispersion is a translucent liquid, slightly more viscous than water.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The surface of colloidal silica in contact with water is covered by siloxane bonds (Si–O–Si) and silanol groups (Si–OH). This makes colloidal silica very hydrophilic and capable of forming numerous hydrogen bonds.
              </p>
            </div>
          </motion.div>

          {/* Structure of Colloidal Silica */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
              Structure of Colloidal Silica
            </h3>
            <div className="flex justify-center">
              <img
                src={chemicalCompound}
                alt="Molecular structure representation of Colloidal Silica"
                className="w-full max-w-3xl rounded-2xl shadow-lg"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-16 bg-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Applications of Colloidal Silica
            </h2>
            <div className="bg-card p-8 rounded-xl border border-border mb-6">
              <p className="text-muted-foreground leading-relaxed mb-6">
                Colloidal Silica is a stable suspension of spherical silicon dioxide (SiO₂) nanoparticles in a liquid, that are hydroxylated on the surface. Colloidal silica is found in almost all industrial sectors. Typical sizes range from 1 nm to 100 nm.
              </p>
              <ul className="space-y-3">
                {applications.map((application, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05, duration: 0.4 }}
                    className="flex items-start space-x-3"
                  >
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{application}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Storage Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-card p-8 rounded-xl border border-border h-full">
                <h3 className="text-2xl font-bold text-foreground mb-6">Storage</h3>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Colloidal Silica should preferably be stored at a temperature of 5-35°C (40-95°F). It is recommended that the product is agitated/mixed to ensure a good dispersion of the product.
                  </p>
                  <p>
                    For bulk storage, the tank should be sealed and constructed of plastic, fiberglass reinforced plastic, or stainless steel. For packaged goods, any translucent packages should be stored out of direct sunlight or bright light.
                  </p>
                  <p className="font-semibold text-foreground">
                    Shelf life: Six months after production under recommended conditions.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-card p-8 rounded-xl border border-border h-full">
                <h3 className="text-2xl font-bold text-foreground mb-6">Packaging & Transport</h3>
                <div className="space-y-4 text-muted-foreground">
                  <p className="mb-4">Colloidal Silica is available in:</p>
                  <ul className="space-y-2 ml-6">
                    <li className="flex items-center space-x-2">
                      <span className="h-2 w-2 bg-primary rounded-full"></span>
                      <span>Bulk quantities</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="h-2 w-2 bg-primary rounded-full"></span>
                      <span>50 liters plastic drum</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="h-2 w-2 bg-primary rounded-full"></span>
                      <span>250 liters plastic drum</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Safety and Handling Section */}
      <section className="py-16 bg-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-foreground mb-6">Safety and Handling</h3>
            <div className="bg-card p-8 rounded-xl border border-border">
              <p className="text-muted-foreground leading-relaxed mb-6">
                Before handling this material, review the corresponding Material Safety Data Sheet. Colloidal silica products are aqueous dispersions of amorphous silica. Colloidal silica is not classified as harmful, but as mildly irritating.
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start space-x-3">
                  <span className="h-2 w-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span>Protective gloves should always be used as the products can have a drying effect on the skin</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="h-2 w-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span>In case of skin contact, wash the area with plenty of water</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="h-2 w-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span>Safety glasses are always recommended</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="h-2 w-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span>In case of eye contact, rinse with large amounts of water and seek professional medical advice</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Certificate of Analysis Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Certificate of Analysis (CoA) Report of HCS-30
            </h2>
            <div className="bg-card rounded-2xl border border-border overflow-hidden shadow-lg">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-primary text-primary-foreground">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold">Physico-Chemical Analysis</th>
                      <th className="px-6 py-4 text-left font-semibold">Eligible Specifications</th>
                      <th className="px-6 py-4 text-left font-semibold">Analysis Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    {analysisData.map((row, index) => (
                      <tr
                        key={index}
                        className={index % 2 === 0 ? "bg-secondary/20" : "bg-background"}
                      >
                        <td className="px-6 py-4 font-medium text-foreground">
                          {row.parameter}
                        </td>
                        <td className="px-6 py-4 text-muted-foreground">{row.specification}</td>
                        <td className="px-6 py-4 text-muted-foreground">{row.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tyndall Effect Section */}
      <section className="py-16 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <img
                src={beakerImage}
                alt="Tyndall Effect Demonstration"
                className="w-full max-w-md mx-auto rounded-2xl shadow-xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2"
            >
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Light Transmission Test of HCS-30
              </h2>
              <div className="bg-card p-6 rounded-xl border border-border">
                <p className="text-muted-foreground leading-relaxed">
                  When beam of light passed through the sample of colloidal silica in beaker, the light scatters. The phenomenon is known as <span className="font-semibold text-foreground">Tyndall effect</span>. The scattered light illuminates the path of the beam, making it visible.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default Product;
