import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { 
  Check, 
  ShieldCheck, 
  Clock, 
  Star,
  Stars,
  Sparkles,
  Heart,
  Leaf,
  Sun,
  Moon,
  Award,
  ThumbsUp,
  FlaskConical,
  Droplet,
  PackageCheck,
  Hand,
  Shield
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function BeautyCarePage() {
  return (
    <>
      <Helmet>
        <title>BIDUA Beauty Care – Dark Circle & Dark Spot Removal Cream | BIDUA Industries</title>
        <meta name="description" content="Premium skincare products designed to deliver visible results safely and gently. Our Dark Circle & Dark Spot Removal Cream helps fade imperfections and illuminate your natural tone." />
        <meta name="keywords" content="BIDUA Beauty, dark circle cream, dark spot removal, skincare, natural skincare, beauty products" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-background to-primary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-secondary">BIDUA Beauty Care</span>
              </h1>
              <h2 className="text-xl md:text-2xl mb-8 font-light">
                Beauty That Heals Naturally. Confidence That Shines Bright.
              </h2>
              <p className="text-lg mb-8">
                At BIDUA Beauty, we are committed to enhancing your natural beauty through science, nature, and innovation.
              </p>
              <p className="text-lg mb-10">
                Our premium skincare range is designed to deliver visible results safely and gently — every single day.
              </p>
              <Button size="lg">Shop BIDUA Beauty</Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="rounded-xl overflow-hidden shadow-xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1612817288484-6f916006741a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                alt="BIDUA Beauty Care Products" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Product Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Featured Product</h2>
            <div className="w-24 h-1 bg-secondary mx-auto mb-8"></div>
            <p className="text-xl font-light max-w-3xl mx-auto">
              BIDUA Beauty Dark Circle & Dark Spot Removal Cream
            </p>
            <p className="mt-4 text-lg italic max-w-2xl mx-auto">
              "Fade Imperfections. Illuminate Your Natural Tone — Day and Night."
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-xl overflow-hidden"
            >
              <img 
                src="https://images.unsplash.com/photo-1567721913486-6585f069b332?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80" 
                alt="Dark Circle & Dark Spot Removal Cream" 
                className="w-full object-cover rounded-lg"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Product Details</CardTitle>
                  <CardDescription>BIDUA Beauty Dark Circle & Dark Spot Removal Cream</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-2">
                      <div className="font-semibold flex items-center gap-2">
                        <PackageCheck className="w-4 h-4 text-secondary" />
                        Size:
                      </div>
                      <div>50 Grams Jar</div>

                      <div className="font-semibold flex items-center gap-2">
                        <ThumbsUp className="w-4 h-4 text-secondary" />
                        MRP:
                      </div>
                      <div>₹1,499/- (Inclusive of All Taxes)</div>

                      <div className="font-semibold flex items-center gap-2">
                        <Clock className="w-4 h-4 text-secondary" />
                        Shelf Life:
                      </div>
                      <div>24 months</div>

                      <div className="font-semibold flex items-center gap-2">
                        <PackageCheck className="w-4 h-4 text-secondary" />
                        Packaging:
                      </div>
                      <div>Premium, Travel-Friendly Jar with Inner Seal Protection</div>
                    </div>

                    <div className="pt-2">
                      <p className="font-semibold flex items-center">
                        <Check className="text-secondary mr-2 h-5 w-5" />
                        Designed for 30–45 days of regular use (Day and Night).
                      </p>
                    </div>

                    <div className="pt-4">
                      <Button size="lg" className="w-full">
                        Shop Now
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-20 bg-gradient-to-b from-background to-primary">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Key Benefits</h2>
            <div className="w-24 h-1 bg-secondary mx-auto mb-8"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Reduces dark circles under the eyes",
              "Lightens dark spots and pigmentation",
              "Evens out skin tone by reducing melanin production",
              "Boosts hydration and skin nourishment",
              "Promotes natural brightness and glow",
              "Strengthens skin to reduce future damage"
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-card p-6 rounded-lg"
              >
                <div className="flex items-start bg-card/50 p-4 rounded-lg hover:bg-card/70 transition-colors">
                  <Sparkles className="text-secondary mr-3 mt-1 flex-shrink-0 w-5 h-5" />
                  <p className="text-lg">{benefit}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ingredients Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Key Ingredients</h2>
            <div className="w-24 h-1 bg-secondary mx-auto mb-8"></div>
            <p className="text-lg max-w-3xl mx-auto">
              Our formula combines scientifically proven ingredients to deliver visible results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                name: "Niacinamide (Vitamin B3)",
                description: "Evens out skin tone and fades pigmentation"
              },
              {
                name: "Kojic Acid",
                description: "Gently inhibits melanin production"
              },
              {
                name: "Vitamin C Extracts",
                description: "Brightens and revitalizes dull skin"
              },
              {
                name: "Hyaluronic Acid",
                description: "Deep hydration for plump, fresh skin"
              },
              {
                name: "Licorice Root Extract",
                description: "Natural soothing agent and complexion booster"
              },
              {
                name: "Aloe Vera & Cucumber Extracts",
                description: "Refreshes and calms tired skin"
              }
            ].map((ingredient, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-card bg-opacity-50 p-6 rounded-lg flex items-start"
              >
                <Leaf className="text-secondary mt-1 mr-3 flex-shrink-0 w-6 h-6" />
                <div>
                  <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                    {ingredient.name}
                    <FlaskConical className="w-4 h-4 text-secondary" />
                  </h3>
                  <p>{ingredient.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Usage Instructions Section */}
      <section className="py-20 bg-gradient-to-b from-background to-primary">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">How to Use</h2>
            <div className="w-24 h-1 bg-secondary mx-auto mb-8"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-card rounded-xl p-8"
            >
              <div className="flex items-start mb-6">
                <div className="w-12 h-12 bg-secondary bg-opacity-20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <Sun className="text-secondary w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                    <Sparkles className="text-secondary w-5 h-5" />
                    Morning (Day Use)
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Droplet className="text-secondary mr-2 mt-1 flex-shrink-0 h-5 w-5" />
                      <span>Cleanse your face.</span>
                    </li>
                    <li className="flex items-start">
                      <Heart className="text-secondary mr-2 mt-1 flex-shrink-0 h-5 w-5" />
                      <span>Apply a small amount of BIDUA Beauty Cream under the eyes and on dark spots.</span>
                    </li>
                    <li className="flex items-start">
                      <Hand className="text-secondary mr-2 mt-1 flex-shrink-0 h-5 w-5" />
                      <span>Massage gently until fully absorbed.</span>
                    </li>
                    <li className="flex items-start">
                      <Shield className="text-secondary mr-2 mt-1 flex-shrink-0 h-5 w-5" />
                      <span>Follow up with sunscreen for daytime protection.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-card rounded-xl p-8"
            >
              <div className="flex items-start mb-6">
                <div className="w-12 h-12 bg-secondary bg-opacity-20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <Moon className="text-secondary w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                    <Stars className="text-secondary w-5 h-5" />
                    Night (Night Use)
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Droplet className="text-secondary mr-2 mt-1 flex-shrink-0 h-5 w-5" />
                      <span>Cleanse your face.</span>
                    </li>
                    <li className="flex items-start">
                      <Heart className="text-secondary mr-2 mt-1 flex-shrink-0 h-5 w-5" />
                      <span>Apply a thin, even layer of cream over the targeted areas.</span>
                    </li>
                    <li className="flex items-start">
                      <Moon className="text-secondary mr-2 mt-1 flex-shrink-0 h-5 w-5" />
                      <span>Leave it overnight without washing.</span>
                    </li>
                    <li className="flex items-start">
                      <Sparkles className="text-secondary mr-2 mt-1 flex-shrink-0 h-5 w-5" />
                      <span>Wake up to nourished, rejuvenated skin.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex justify-center mt-10"
          >
            <div className="bg-primary bg-opacity-30 px-6 py-4 rounded-lg inline-flex items-center">
              <Clock className="text-secondary mr-3" />
              <p className="text-lg font-semibold">Daily Use Recommended — for best results, use morning and night continuously.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Results Timeline Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Expected Visible Results</h2>
            <div className="w-24 h-1 bg-secondary mx-auto mb-8"></div>
            <p className="text-lg max-w-3xl mx-auto">
              Results may vary slightly based on individual skin type.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute h-full w-0.5 bg-secondary left-1/2 transform -translate-x-1/2"></div>

              {/* Timeline Items */}
              {[
                {
                  time: "2 Weeks",
                  changes: "Improved hydration and softness"
                },
                {
                  time: "4 Weeks",
                  changes: "Noticeable fading of dark circles and dark spots"
                },
                {
                  time: "6–8 Weeks",
                  changes: "Balanced, even-toned skin and brighter complexion"
                },
                {
                  time: "10+ Weeks",
                  changes: "Naturally radiant, healthy-looking skin"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.2 }}
                  className="relative flex items-center mb-12 last:mb-0"
                >
                  <div className="w-1/2 pr-8 md:pr-16 text-right">
                    <h3 className="text-xl font-bold text-secondary">{item.time}</h3>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-10 h-10 bg-secondary rounded-full flex items-center justify-center z-10">
                    <div className="w-5 h-5 bg-background rounded-full"></div>
                  </div>
                  <div className="w-1/2 pl-8 md:pl-16">
                    <p className="text-lg">{item.changes}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Suitable For Section */}
      <section className="py-20 bg-gradient-to-b from-background to-primary">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Suitable For</h2>
            <div className="w-24 h-1 bg-secondary mx-auto mb-8"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-card rounded-xl p-8"
            >
              <h3 className="text-xl font-bold mb-6">Skin Types</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {["Normal", "Dry", "Oily", "Combination", "Sensitive"].map((type, index) => (
                  <li key={index} className="flex items-center">
                    <Check className="text-secondary mr-2 flex-shrink-0 h-5 w-5" />
                    <span>{type}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-card rounded-xl p-8"
            >
              <h3 className="text-xl font-bold mb-6">Skin Concerns</h3>
              <ul className="space-y-2">
                {[
                  "Dark circles under eyes",
                  "Acne marks, dark spots",
                  "Uneven skin tone",
                  "Stress-induced dullness",
                  "Post-sun exposure pigmentation"
                ].map((concern, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="text-secondary mr-2 mt-1 flex-shrink-0 h-5 w-5" />
                    <span>{concern}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-12 text-center"
          >
            <p className="text-lg mb-4">Suitable for men and women of all ages.</p>
          </motion.div>
        </div>
      </section>

      {/* Quality Commitment Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Quality Commitment</h2>
            <div className="w-24 h-1 bg-secondary mx-auto mb-8"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                label: "100% Dermatologist Tested",
                description: "Approved by skin experts"
              },
              {
                label: "No Parabens, No Sulphates, No Mineral Oil",
                description: "Free from harmful chemicals"
              },
              {
                label: "No Harsh Chemicals",
                description: "Gentle on all skin types"
              },
              {
                label: "Cruelty-Free",
                description: "Never tested on animals"
              },
              {
                label: "Proudly Made in India",
                description: "Supporting local production"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-card bg-opacity-50 p-6 rounded-lg flex items-start"
              >
                <ShieldCheck className="text-secondary mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-bold mb-1">{item.label}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Reveal Your True Glow?</h2>
            <p className="text-xl mb-10">
              Special Launch Offers: Buy 2, Get 1 Free – Limited Period
            </p>
            <Button size="lg" variant="secondary">Shop Now</Button>
            <p className="mt-12 text-lg font-semibold">
              BIDUA Beauty – Day and Night Care for Your Natural Glow.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}