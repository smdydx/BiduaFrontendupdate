// import { motion } from "framer-motion";
// import { Button } from "@/components/ui/button";
// import Link from "next/link";
// import Head from "next/head";

// export default function About() {
//   const values = [
//     { name: "Innovation", desc: "Constantly pushing boundaries and embracing new technologies" },
//     { name: "Excellence", desc: "Maintaining the highest standards in everything we do" },
//     { name: "Integrity", desc: "Operating with transparency and ethical business practices" },
//     { name: "Customer Focus", desc: "Putting our customers' needs at the heart of our decisions" },
//     { name: "Sustainability", desc: "Ensuring our operations benefit future generations" },
//     { name: "Collaboration", desc: "Working together to achieve common goals" },
//   ];

//   const milestones = [
//     { year: "2020", event: "Founded BIDUA Industries" },
//     { year: "2021", event: "Launched IT Connect Division" },
//     { year: "2022", event: "Expanded to Beauty Care" },
//     { year: "2023", event: "Introduced Cloud Drive Solutions" },
//   ];

//   return (
//     <>
//       <Head>
//         <title>About BIDUA Industries</title>
//         <meta name="description" content="Discover our story, vision, mission, and values" />
//       </Head>

//       <section className="py-20 bg-background">
//         <div className="container mx-auto px-4">
//           {/* Hero Section */}
//           <motion.div
//             className="max-w-4xl mx-auto"
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//           >
//             <div className="text-center mb-16">
//               <h1 className="text-3xl md:text-4xl font-bold mb-6">About BIDUA Industries</h1>
//               <div className="w-24 h-1 bg-secondary mx-auto mb-8"></div>
//               <p className="text-lg leading-relaxed mb-8">
//                 BIDUA Industries is a multi-division company committed to innovation and excellence across various sectors.
//               </p>
//               <Link href="/">
//                 <Button variant="default" className="cta-button">
//                   Back to Home
//                 </Button>
//               </Link>
//             </div>
//           </motion.div>

//           {/* Story, Vision & Mission */}
//           <div className="grid md:grid-cols-2 gap-8 mb-20">
//             <motion.div
//               className="bg-card p-8 rounded-lg shadow-sm"
//               initial={{ opacity: 0, x: -50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true, margin: "-100px" }}
//               transition={{ duration: 0.5, delay: 0.2 }}
//             >
//               <h2 className="text-2xl font-bold mb-4 text-primary">Our Story</h2>
//               <p className="text-muted-foreground">
//                 BIDUA Industries is a multi-division company committed to innovation and excellence across various sectors.
//               </p>
//             </motion.div>

//             <motion.div
//               className="bg-card p-8 rounded-lg shadow-sm"
//               initial={{ opacity: 0, x: 50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true, margin: "-100px" }}
//               transition={{ duration: 0.5, delay: 0.2 }}
//             >
//               <h2 className="text-2xl font-bold mb-4 text-primary">Our Vision</h2>
//               <p className="text-muted-foreground">
//                 To become a global leader in innovative solutions across multiple industries, creating value for our customers, employees, and society.
//               </p>
//             </motion.div>

//             <motion.div
//               className="md:col-span-2 bg-card p-8 rounded-lg shadow-sm"
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, margin: "-100px" }}
//               transition={{ duration: 0.5, delay: 0.3 }}
//             >
//               <h2 className="text-2xl font-bold mb-4 text-primary">Our Mission</h2>
//               <p className="text-muted-foreground">
//                 To deliver exceptional products and services that empower businesses and individuals, while maintaining the highest standards of quality and customer satisfaction.
//               </p>
//             </motion.div>
//           </div>

//           {/* Our Values */}
//           <motion.div
//             className="mb-20"
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             viewport={{ once: true, margin: "-100px" }}
//             transition={{ duration: 0.6, delay: 0.4 }}
//           >
//             <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
//             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//               {values.map((value, index) => (
//                 <div key={index} className="bg-card p-6 rounded-lg shadow-sm border-l-4 border-primary">
//                   <h3 className="text-xl font-semibold mb-2">{value.name}</h3>
//                   <p className="text-muted-foreground">{value.desc}</p>
//                 </div>
//               ))}
//             </div>
//           </motion.div>

//           {/* Our Journey */}
//           <motion.div
//             className="mb-20"
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             viewport={{ once: true, margin: "-100px" }}
//             transition={{ duration: 0.6, delay: 0.4 }}
//           >
//             <h2 className="text-3xl font-bold text-center mb-12">Our Journey</h2>
//             <div className="relative max-w-2xl mx-auto">
//               <div className="absolute left-1/2 h-full w-0.5 bg-primary/20 transform -translate-x-1/2"></div>
              
//               <div className="space-y-12">
//                 {milestones.map((milestone, index) => (
//                   <motion.div
//                     key={index}
//                     className={`relative flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
//                     initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
//                     whileInView={{ opacity: 1, x: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ duration: 0.5, delay: index * 0.1 }}
//                   >
//                     <div className={`w-full md:w-5/12 p-6 rounded-lg shadow-sm bg-card ${index % 2 === 0 ? 'text-left' : 'text-right'}`}>
//                       <div className="absolute top-1/2 w-4 h-4 rounded-full bg-primary transform -translate-y-1/2" 
//                            style={index % 2 === 0 ? {right: '-2.1rem'} : {left: '-2.1rem'}}></div>
//                       <h3 className="text-xl font-bold text-primary">{milestone.year}</h3>
//                       <p className="text-muted-foreground">{milestone.event}</p>
//                     </div>
//                   </motion.div>
//                 ))}
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </section>
//     </>
//   );
// }