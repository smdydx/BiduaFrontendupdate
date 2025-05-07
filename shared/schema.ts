import { pgTable, text, serial, integer, boolean, timestamp, jsonb, varchar } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";
import { relations } from "drizzle-orm";

// Users table with role
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
  email: text("email").notNull().unique(),
  fullName: text("full_name"),
  role: text("role").default("user").notNull(), // 'admin' or 'user'
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
  email: true,
  fullName: true,
  role: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

// Products table
export const products = pgTable("products", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description").notNull(),
  division: text("division").notNull(), // 'naploo', 'beauty-care', 'cloud-drive', 'oem-solutions', 'it-connect'
  price: integer("price"),
  imageUrl: text("image_url"),
  features: jsonb("features").$type<string[]>().default([]),
  isActive: boolean("is_active").default(true).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
  createdBy: integer("created_by").references(() => users.id),
});

// Products relations
export const productsRelations = relations(products, ({ one }) => ({
  creator: one(users, {
    fields: [products.createdBy],
    references: [users.id],
  }),
}));

export const insertProductSchema = createInsertSchema(products).pick({
  name: true,
  description: true,
  division: true,
  price: true,
  imageUrl: true,
  features: true,
  isActive: true,
  createdBy: true,
});

export type InsertProduct = z.infer<typeof insertProductSchema>;
export type Product = typeof products.$inferSelect;

// Divisions categories/settings
export const divisions = pgTable("divisions", {
  id: serial("id").primaryKey(),
  name: text("name").notNull().unique(),
  slug: varchar("slug", { length: 50 }).notNull().unique(),
  description: text("description").notNull(),
  imageUrl: text("image_url"),
  isActive: boolean("is_active").default(true).notNull(),
  content: jsonb("content").$type<Record<string, any>>().default({}),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const insertDivisionSchema = createInsertSchema(divisions).pick({
  name: true,
  slug: true,
  description: true,
  imageUrl: true,
  isActive: true,
  content: true,
});

export type InsertDivision = z.infer<typeof insertDivisionSchema>;
export type Division = typeof divisions.$inferSelect;

// Contact submissions table
export const contactSubmissions = pgTable("contact_submissions", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  archived: boolean("archived").default(false).notNull(),
  responded: boolean("responded").default(false).notNull(),
  respondedBy: integer("responded_by").references(() => users.id),
});

// Contact submissions relations
export const contactSubmissionsRelations = relations(contactSubmissions, ({ one }) => ({
  responder: one(users, {
    fields: [contactSubmissions.respondedBy],
    references: [users.id],
  }),
}));

export const insertContactSchema = createInsertSchema(contactSubmissions).pick({
  name: true,
  email: true,
  phone: true,
  message: true,
});

export type InsertContact = z.infer<typeof insertContactSchema>;
export type ContactSubmission = typeof contactSubmissions.$inferSelect;

// Investor inquiries table
export const investorInquiries = pgTable("investor_inquiries", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  investmentAmount: integer("investment_amount"),
  podType: text("pod_type"),
  message: text("message"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  contacted: boolean("contacted").default(false).notNull(),
  contactedBy: integer("contacted_by").references(() => users.id),
});

// Investor inquiries relations
export const investorInquiriesRelations = relations(investorInquiries, ({ one }) => ({
  contactedByUser: one(users, {
    fields: [investorInquiries.contactedBy],
    references: [users.id],
  }),
}));

export const insertInvestorSchema = createInsertSchema(investorInquiries).pick({
  name: true,
  email: true,
  phone: true,
  investmentAmount: true,
  podType: true,
  message: true,
});

export type InsertInvestorInquiry = z.infer<typeof insertInvestorSchema>;
export type InvestorInquiry = typeof investorInquiries.$inferSelect;
