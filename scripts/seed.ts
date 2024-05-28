import { neon } from "@neondatabase/serverless"
import * as schema from "../db/schema"
import { drizzle } from "drizzle-orm/neon-http"
import "dotenv/config"

const sql = neon(process.env.DRIZZLE_DATABASE_URL!)

const db = drizzle(sql, { schema })

const main = async () => {
    try {
        console.log("Seeding database")
        await db.delete(schema.courses);
        await db.delete(schema.userProgress);
        await db.delete(schema.units);
        await db.delete(schema.lessons);
        await db.delete(schema.challenges);
        await db.delete(schema.challengeOptions);
        await db.delete(schema.challengeProgress);


        await db.insert(schema.courses).values([
            {
            id: 1,
            title: "Korean",
            imageSrc: "/images/hero.png"
            },
            {
            id: 2,
            title: "Khmer",
            imageSrc: "/images/giraffe.png"
            },
            {
            id: 3,
            title: "English",
            imageSrc: "/images/cow.png"
            },
            {
            id: 4,
            title: "Chiness",
            imageSrc: "/images/dog.png"
            },
        ])

        await db.insert(schema.units).values([
            {
                id: 1,
                courseId: 1,
                title: "Unit 1",
                Description: "Learn the basics of Korean",
                order: 1
            },
        ])

        await db.insert(schema.lessons).values([
            {
                id: 1,
                unitId: 1,
                order: 1,
                title: "Nouns"
            },
            {
                id: 2,
                unitId: 1,
                order: 2,
                title: "Verbs"
            },
        ])

        await db.insert(schema.challenges).values([
            {
                id: 1,
                lessonId: 1,
                type: "SELECT",
                order: 1,
                question: 'Which one of these is the "The duck"?',
            },
            {
                id: 2,
                lessonId: 2,
                type: "SELECT",
                order: 2,
                question: 'Which one of these is the "The crocodile"?',
            },
        ])

        await db.insert(schema.challengeOptions).values([
            {
                id: 1,
                challengId: 1,
                imageSrc: "/images/duck.png",
                correct: true,
                text: "Duck",
                audioSrc: "/audios/audio1.ogg"
            },
            {
                id: 2,
                challengId: 1,
                imageSrc: "/images/cow.png",
                correct: false,
                text: "Cow",
                audioSrc: "/audios/audio2.ogg"
            },
            {
                id: 3,
                challengId: 1,
                imageSrc: "/images/crocodile.png",
                correct: false,
                text: "Crocodile",
                audioSrc: "/audios/audio2.ogg"
            },
        ])


        console.log("Seeding finished")
        
    } catch (error) {
        console.log(error)
        throw new Error("Failed to seed database")
    }
}

main()