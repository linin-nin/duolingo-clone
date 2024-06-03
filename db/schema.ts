
import { relations } from "drizzle-orm";
import { boolean, integer, pgEnum, pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";


export const courses = pgTable("courses", {
    id: serial("id").primaryKey(),
    title: text("title").notNull(),
    imageSrc: text("image_src").notNull(),
})

export const courseRelations = relations(courses, ({many}) => ({
    userProgress: many(userProgress),
    units: many(units)
}))

export const units = pgTable("units", {
    id: serial("id").primaryKey(),
    title: text("title").notNull(),
    Description: text("description").notNull(),
    courseId: integer("course_id").references(() => courses.id, {onDelete: "cascade"}).notNull(),
    order: integer("order").notNull()
})
export const unitRelation = relations(units, ({many, one}) => ({
    course: one(courses, {
        fields: [units.courseId],
        references: [courses.id]
    }),
    lessons: many(lessons)
}))


export const lessons = pgTable("lessons", {
    id: serial("id").primaryKey(),
    title: text("title").notNull(),
    unitId: integer("unit_id").references(() => units.id, {onDelete: "cascade"}).notNull(),
    order: integer("order").notNull(),
})

export const lessonRelation = relations(lessons, ({one, many}) => ({
    unit: one(units, {
        fields: [lessons.unitId],
        references: [units.id],
    }),
    challenges: many(challenges)
}))


export const challengeEnum = pgEnum("type", ["SELECT", "ASSIST"])

export const challenges = pgTable("challenges", {
    id: serial("id").primaryKey(),
    lessonId: integer("lesson_id").references(() => lessons.id, {onDelete: "cascade"}).notNull(),
    type: challengeEnum("type").notNull(),
    question: text("question").notNull(),
    order: integer("order").notNull(),
})

export const challengesRelation = relations(challenges, ({one, many}) => ({
    lesson: one(lessons, {
        fields: [challenges.lessonId],
        references: [lessons.id]
    }),
    challengeOptions: many(challengeOptions),
    challengeProgress: many(challengeProgress)
}))


export const challengeOptions = pgTable("challenge_options", {
    id: serial("id").primaryKey(),
    challengId: integer("challeng_id").references(() => challenges.id, {onDelete: "cascade"}).notNull(),
    text: text("text").notNull(),
    correct: boolean("correct").notNull().default(false),
    imageSrc: text("image_src"),
    audioSrc: text("audio_src"),
})

export const challengOptionsRelation = relations(challengeOptions, ({one, many}) => ({
    challenges: one(challenges, {
        fields: [challengeOptions.challengId],
        references: [challenges.id],
    })
}))



export const challengeProgress = pgTable("challenge_progress", {
    id: serial("id").primaryKey(),
    userId: text("user_id").notNull(),
    challengeId: integer("challeng_id").references(() => challenges.id, {onDelete: "cascade"}).notNull(),
    completed: boolean("completed").notNull().default(false),
})

export const challengeProgressRelation = relations(challengeProgress, ({one, many}) => ({
    challenge: one(challenges, {
        fields: [challengeProgress.challengeId],
        references: [challenges.id]
    })
}))


export const userProgress = pgTable("user_progress", {
    userId: text("user_is").primaryKey(),
    userName: text("user_name").notNull().default("User"),
    userImageSrc: text("user_image_src").notNull().default("/images/hero.png"),
    activeCourseId: integer("active_courser_id").references(() => courses.id, {onDelete: "cascade"}),
    hearts: integer("hearts").notNull().default(5),
    points: integer("points").notNull().default(0)
})

export const userProgressRelationa = relations(userProgress, ({one}) => ({
    activeCourse: one(courses, {
        fields: [userProgress.activeCourseId],
        references: [courses.id]
    })
}))

export const userSubscription = pgTable("user_subscription", {
    id: serial("id").primaryKey(),
    userId: text("user_id").notNull().unique(),
    stripeCustomerId: text("stripe_customer_id").notNull().unique(),
    stripeSubscriptioinId: text("stripe_subscription_id").notNull().unique(),
    stripePriceId: text("stripe_price_id").notNull(),
    stripeCurrentPeriodEnd: timestamp("stripe_current_periot_end").notNull(),
})