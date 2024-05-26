
import { relations } from "drizzle-orm";
import { integer, pgTable, serial, text } from "drizzle-orm/pg-core";


export const courses = pgTable("courses", {
    id: serial("id").primaryKey(),
    title: text("title").notNull(),
    imageSrc: text("image_src").notNull(),
})

export const courseRelations = relations(courses, ({many}) => ({
    userProgress: many(userProgress)
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