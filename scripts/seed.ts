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
        await db.delete(schema.userSubscription);


        await db.insert(schema.courses).values([
            {
            id: 1,
            title: "Korean",
            imageSrc: "/images/kr.svg"
            },
            // {
            // id: 2,
            // title: "Japaness",
            // imageSrc: "/images/jp.svg"
            // },
            // {
            // id: 3,
            // title: "Khmer",
            // imageSrc: "/images/cd.svg"
            // },
            {
            id: 4,
            title: "English",
            imageSrc: "/images/usa.svg"
            },
            // {
            // id: 5,
            // title: "Chiness",
            // imageSrc: "/images/ch.svg"
            // },
            // {
            // id: 6,
            // title: "France",
            // imageSrc: "/images/fr.svg"
            // },
        ])

        await db.insert(schema.units).values([
            {
                id: 1,
                courseId: 4,
                title: "Unit 1",
                Description: "Everthing about nouns",
                order: 1
            },
            {
                id: 2,
                courseId: 4,
                title: "Unit 2",
                Description: "Everthing about Verb",
                order: 2
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
                title: "Pronoune"
            },
            {
                id: 3,
                unitId: 1,
                order: 3,
                title: "Family Name"
            },
        ])

        await db.insert(schema.challenges).values([
            {
                id: 1,
                lessonId: 1,
                type: "SELECT",
                order: 1,
                question: 'Which one of these is the "a duck"?',
            },
            {
                id: 2,
                lessonId: 1,
                type: "SELECT",
                order: 2,
                question: 'Which one of these is "a crocodile"?',
            },
            {
                id: 3,
                lessonId: 1,
                type: "SELECT",
                order: 2,
                question: 'Which one of these is "a Human"?',
            },
            {
                id: 4,
                lessonId: 2,
                type: "SELECT",
                order: 2,
                question: 'Which one of these is "a Man"?',
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

            {
                id: 4,
                challengId: 2,
                imageSrc: "/images/crocodile.png",
                correct: false,
                text: "Crocodile",
                audioSrc: "/audios/audio2.ogg"
            },
            {
                id: 5,
                challengId: 2,
                imageSrc: "/images/duck.png",
                correct: false,
                text: "Duck",
                audioSrc: "/audios/audio2.ogg"
            },
            {
                id: 6,
                challengId: 2,
                imageSrc: "/images/cow.png",
                correct: true,
                text: "Cow",
                audioSrc: "/audios/audio2.ogg"
            },

            {
                id: 7,
                challengId: 3,
                imageSrc: "/images/crocodile.png",
                correct: false,
                text: "Crocodile",
                audioSrc: "/audios/audio2.ogg"
            },
            {
                id: 8,
                challengId: 3,
                imageSrc: "/images/duck.png",
                correct: false,
                text: "Duck",
                audioSrc: "/audios/audio2.ogg"
            },
            {
                id: 9,
                challengId: 3,
                imageSrc: "/images/cow.png",
                correct: true,
                text: "Cow",
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