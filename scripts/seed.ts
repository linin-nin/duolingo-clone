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
            {
            id: 2,
            title: "English",
            imageSrc: "/images/usa.svg"
            },
        ])

        await db.insert(schema.units).values([
            {
                id: 1,
                title: "Unit 1",
                Description: "Discuss traveling solo",
                courseId: 2,
                order: 1
            },
            // {
            //     id: 2,
            //     title: "Unit 2",
            //     Description: "Order food delivery",
            //     courseId: 2,
            //     order: 2
            // },
            // {
            //     id: 3,
            //     title: "Unit 3",
            //     Description: "Describe a day in college",
            //     courseId: 2,
            //     order: 3
            // },

            {
                id: 4,
                title: "Unit 1",
                Description: "Learn Korean vowels",
                courseId: 1,
                order: 1
            },
            // {
            //     id: 5,
            //     title: "Unit 2",
            //     Description: "Learn Korean consonants",
            //     courseId: 1,
            //     order: 2
            // },
            // {
            //     id: 6,
            //     title: "Unit 3",
            //     Description: "Learn basic phrases",
            //     courseId: 1,
            //     order: 3
            // },
            // {
            //     id: 7,
            //     title: "Unit 4",
            //     Description: "Name common objects",
            //     courseId: 1,
            //     order: 4
            // },
        ])

        await db.insert(schema.lessons).values([
            {
                id: 1,
                title: "lesson 1",
                unitId: 1,
                order: 1
            },
            {
                id: 2,
                title: "lesson 2",
                unitId: 1,
                order: 2
            },
            {
                id: 3,
                title: "lesson 3",
                unitId: 1,
                order: 3
            },
            {
                id: 4,
                title: "lesson 4",
                unitId: 1,
                order: 4
            },

            {
                id: 5,
                title: "lesson 1",
                unitId: 4,
                order: 1
            },
            {
                id: 6,
                title: "lesson 2",
                unitId: 4,
                order: 2
            }
            
        ])


        await db.insert(schema.challenges).values([
            {
                id: 1,
                lessonId: 5,
                question: 'What sound does "아" make?',
                type: "ASSIST",
                order: 1
            },
            {
                id: 2,
                lessonId: 5,
                question: 'Select the correct charater for "a"',
                type: "SELECT",
                order: 2
            },
            {
                id: 3,
                lessonId: 5,
                question: 'What sound does "나" make?',
                type: "ASSIST",
                order: 3
            },
            {
                id: 4,
                lessonId: 5,
                question: 'Select the correct charater for "na"',
                type: "SELECT",
                order: 4
            },
            {
                id: 5,
                lessonId: 5,
                question: 'What sound does "오" make?',
                type: "ASSIST",
                order: 5
            },
            {
                id: 6,
                lessonId: 5,
                question: 'What sound does "고" make?',
                type: "ASSIST",
                order: 6
            },
        ])

        await db.insert(schema.challengeOptions).values([
            {
                id: 1,
                challengId: 1,
                text: "o",
                correct: false,
            },
            {
                id: 2,
                challengId: 1,
                text: "e",
                correct: false,
            },
            {
                id: 3,
                challengId: 1,
                text: "a",
                correct: true,
            },

            {
                id: 4,
                challengId: 2,
                text: "고",
                correct: false,
            },
            {
                id: 5,
                challengId: 2,
                text: "아",
                correct: true,
            },
            {
                id: 6,
                challengId: 2,
                text: "이",
                correct: false,
            },
            {
                id: 7,
                challengId: 2,
                text: "ㅇㅓ",
                correct: false,
            },
            
            {
                id: 8,
                challengId: 3,
                text: "go",
                correct: false,
            },
            {
                id: 9,
                challengId: 3,
                text: "a",
                correct: false,
            },
            {
                id: 10,
                challengId: 3,
                text: "na",
                correct: true,
            },

            {
                id: 11,
                challengId: 4,
                text: "고",
                correct: false,
            },
            {
                id: 12,
                challengId: 4,
                text: "이",
                correct: false,
            },
            {
                id: 13,
                challengId: 4,
                text: "나",
                correct: true,
            },
            {
                id: 15,
                challengId: 4,
                text: "아",
                correct: false,
            },

            {
                id: 16,
                challengId: 5,
                text: "na",
                correct: false,
            },
            {
                id: 17,
                challengId: 5,
                text: "o",
                correct: true,
            },
            {
                id: 18,
                challengId: 5,
                text: "a",
                correct: false,
            },

            {
                id: 19,
                challengId: 6,
                text: "o",
                correct: false,
            },
            {
                id: 20,
                challengId: 6,
                text: "a",
                correct: false,
            },
            {
                id: 21,
                challengId: 6,
                text: "go",
                correct: true,
            },
        ])


        console.log("Seeding finished")
        
    } catch (error) {
        console.log(error)
        throw new Error("Failed to seed database")
    }
}

main()