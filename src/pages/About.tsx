import { motion } from "framer-motion";
import { Target, Eye, Microscope, Award } from "lucide-react";
import SEO from "@/components/SEO";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description:
        "To provide innovative, high-quality colloidal silica solutions that empower industries worldwide to achieve excellence in their manufacturing processes.",
    },
    {
      icon: Eye,
      title: "Our Vision",
      description:
        "To be the global leader in specialty silica-based chemical solutions, recognized for our commitment to quality, innovation, and sustainable practices.",
    },
    {
      icon: Microscope,
      title: "Research & Development",
      description:
        "Continuous innovation through state-of-the-art research facilities, developing cutting-edge formulations that meet evolving industry demands.",
    },
    {
      icon: Award,
      title: "Quality Assurance",
      description:
        "Rigorous quality control at every stage of production, ensuring consistent excellence and compliance with international standards.",
    },
  ];

  return (
    <>
      <SEO
        title="About Us"
        description="Learn about Vivan Chemicals - a leading manufacturer of premium colloidal silica solutions with 10+ years of excellence serving 100+ companies worldwide. Our mission, vision, and commitment to quality."
        keywords="colloidal silica manufacturer, specialty chemicals company, silica solutions India, chemical manufacturing excellence"
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
              About <span className="text-primary">Vivan Chemicals</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Building Excellence in Chemical Manufacturing Since Over a Decade
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Founded with a vision to revolutionize the specialty chemicals industry,
                  Vivan Chemicals has grown to become a trusted name in colloidal silica
                  manufacturing. Our journey began with a simple yet powerful commitment: to
                  deliver uncompromising quality that our customers can rely on.
                </p>
                <p>
                  Over the years, we have established ourselves as pioneers in the field,
                  serving diverse industries including investment casting, paper manufacturing,
                  cosmetics, food processing, and advanced semiconductor applications. Our
                  state-of-the-art production facility in Morbi, Gujarat, operates with a
                  daily capacity exceeding 25,000 liters, ensuring we meet the growing demands
                  of our valued customers.
                </p>
                <p>
                  What sets us apart is our unwavering dedication to innovation and
                  sustainability. We continuously invest in research and development to refine
                  our formulations and processes, ensuring our products not only meet but
                  exceed industry standards. Our team of experienced chemists and engineers
                  works tirelessly to develop solutions that address the evolving needs of
                  modern industries.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-card p-8 rounded-2xl border border-border"
            >
              <h3 className="text-2xl font-bold text-foreground mb-6">Why Choose Us?</h3>
              <ul className="space-y-4">
                {[
                  "Premium quality products with consistent performance",
                  "State-of-the-art manufacturing facility",
                  "Experienced team with deep industry expertise",
                  "Comprehensive technical support and consultation",
                  "Flexible production capabilities for custom requirements",
                  "Commitment to sustainable and eco-friendly practices",
                  "Timely delivery and reliable supply chain",
                ].map((point, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="flex items-start space-x-3"
                  >
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">{point}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Our Values & Commitments
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-card p-8 rounded-2xl border border-border hover:shadow-lg transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-xl mb-4">
                  <value.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-3xl p-12 text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Ready to Partner with Us?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join hundreds of satisfied customers who trust Vivan Chemicals for their
              colloidal silica needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
              >
                Contact Us Today
              </a>
              <a
                href="/free-sample"
                className="inline-flex items-center justify-center px-6 py-3 bg-secondary text-secondary-foreground rounded-lg font-medium hover:bg-secondary/80 transition-colors"
              >
                Request Free Sample
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
    </>
  );
};

export default About;
