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
            title: "English for Beginner",
            imageSrc: "/images/usa.svg"
            },
            // {
            // id: 2,
            // title: "Korean for Beginner",
            // imageSrc: "/images/kr.svg"
            // },

        ])

        await db.insert(schema.units).values(
            [
                {
                    "id": 1,
                    "title": "Unit 1: Basics",
                    "Description": "Introduction to basic English concepts.",
                    "courseId": 1,
                    "order": 1
                },
                {
                    "id": 2,
                    "title": "Unit 2: Greetings",
                    "Description": "Learning how to greet people.",
                    "courseId": 1,
                    "order": 2
                },
                {
                    "id": 3,
                    "title": "Unit 3: Numbers and Time",
                    "Description": "Understanding numbers and telling time.",
                    "courseId": 1,
                    "order": 3
                },
                {
                    "id": 4,
                    "title": "Unit 4: Everyday Conversations",
                    "Description": "Common phrases used in daily conversations.",
                    "courseId": 1,
                    "order": 4
                }
            ]
            
            
        )

        await db.insert(schema.lessons).values(
            [
                {
                    "id": 1,
                    "title": "Lesson 1: Alphabet",
                    "unitId": 1,
                    "order": 1
                },
                {
                    "id": 2,
                    "title": "Lesson 2: Basic Vocabulary",
                    "unitId": 1,
                    "order": 2
                },
                {
                    "id": 3,
                    "title": "Lesson 3: Simple Sentences",
                    "unitId": 1,
                    "order": 3
                },
                {
                    "id": 4,
                    "title": "Lesson 4: Pronunciation",
                    "unitId": 1,
                    "order": 4
                },
                {
                    "id": 5,
                    "title": "Lesson 1: Formal Greetings",
                    "unitId": 2,
                    "order": 1
                },
                {
                    "id": 6,
                    "title": "Lesson 2: Informal Greetings",
                    "unitId": 2,
                    "order": 2
                },
                {
                    "id": 7,
                    "title": "Lesson 3: Introducing Yourself",
                    "unitId": 2,
                    "order": 3
                },
                {
                    "id": 8,
                    "title": "Lesson 4: Saying Goodbye",
                    "unitId": 2,
                    "order": 4
                },
                {
                    "id": 9,
                    "title": "Lesson 1: Counting Numbers",
                    "unitId": 3,
                    "order": 1
                },
                {
                    "id": 10,
                    "title": "Lesson 2: Telling Time",
                    "unitId": 3,
                    "order": 2
                },
                {
                    "id": 11,
                    "title": "Lesson 3: Days of the Week",
                    "unitId": 3,
                    "order": 3
                },
                {
                    "id": 12,
                    "title": "Lesson 4: Months of the Year",
                    "unitId": 3,
                    "order": 4
                },
                {
                    "id": 13,
                    "title": "Lesson 1: Asking for Directions",
                    "unitId": 4,
                    "order": 1
                },
                {
                    "id": 14,
                    "title": "Lesson 2: Shopping Phrases",
                    "unitId": 4,
                    "order": 2
                },
                {
                    "id": 15,
                    "title": "Lesson 3: Ordering Food",
                    "unitId": 4,
                    "order": 3
                },
                {
                    "id": 16,
                    "title": "Lesson 4: Making Appointments",
                    "unitId": 4,
                    "order": 4
                }
            ]
            
            
        )


        await db.insert(schema.challenges).values(
            [
                {
                    "id": 1,
                    "lessonId": 1,
                    "question": "What is the first letter of the English alphabet?",
                    "type": "ASSIST",
                    "order": 1
                },
                {
                    "id": 2,
                    "lessonId": 1,
                    "question": "Which letter comes after 'B'?",
                    "type": "ASSIST",
                    "order": 2
                },
                {
                    "id": 3,
                    "lessonId": 1,
                    "question": "What is the last letter of the alphabet?",
                    "type": "ASSIST",
                    "order": 3
                },
                {
                    "id": 4,
                    "lessonId": 1,
                    "question": "How many vowels are there in the English alphabet?",
                    "type": "ASSIST",
                    "order": 4
                },
                {
                    "id": 5,
                    "lessonId": 2,
                    "question": "What is the English word for 'ផ្ទះ'?",
                    "type": "ASSIST",
                    "order": 1
                },
                {
                    "id": 6,
                    "lessonId": 2,
                    "question": "What is the English word for 'ឆ្កែ'?",
                    "type": "ASSIST",
                    "order": 2
                },
                {
                    "id": 7,
                    "lessonId": 2,
                    "question": "What is the English word for 'ឆ្មា'?",
                    "type": "ASSIST",
                    "order": 3
                },
                {
                    "id": 8,
                    "lessonId": 2,
                    "question": "What is the English word for 'សៀវភៅ'?",
                    "type": "ASSIST",
                    "order": 4
                },
                {
                    "id": 9,
                    "lessonId": 3,
                    "question": "Translate the sentence: 'I am a student.'",
                    "type": "ASSIST",
                    "order": 1
                },
                {
                    "id": 10,
                    "lessonId": 3,
                    "question": "Translate the sentence: 'She is a teacher.'",
                    "type": "ASSIST",
                    "order": 2
                },
                {
                    "id": 11,
                    "lessonId": 3,
                    "question": "Translate the sentence: 'He is happy.'",
                    "type": "ASSIST",
                    "order": 3
                },
                {
                    "id": 12,
                    "lessonId": 3,
                    "question": "Translate the sentence: 'They are friends.'",
                    "type": "ASSIST",
                    "order": 4
                },
                {
                    "id": 13,
                    "lessonId": 4,
                    "question": "How do you pronounce the letter 'C'?",
                    "type": "ASSIST",
                    "order": 1
                },
                {
                    "id": 14,
                    "lessonId": 4,
                    "question": "How do you pronounce the letter 'R'?",
                    "type": "ASSIST",
                    "order": 2
                },
                {
                    "id": 15,
                    "lessonId": 4,
                    "question": "How do you pronounce the letter 'S'?",
                    "type": "ASSIST",
                    "order": 3
                },
                {
                    "id": 16,
                    "lessonId": 4,
                    "question": "How do you pronounce the letter 'T'?",
                    "type": "ASSIST",
                    "order": 4
                },
                {
                    "id": 17,
                    "lessonId": 5,
                    "question": "How do you greet someone formally in English?",
                    "type": "ASSIST",
                    "order": 1
                },
                {
                    "id": 18,
                    "lessonId": 5,
                    "question": "How do you address a stranger formally?",
                    "type": "ASSIST",
                    "order": 2
                },
                {
                    "id": 19,
                    "lessonId": 5,
                    "question": "How do you ask 'How are you?' formally?",
                    "type": "ASSIST",
                    "order": 3
                },
                {
                    "id": 20,
                    "lessonId": 5,
                    "question": "What is the formal way to say 'Goodbye'?",
                    "type": "ASSIST",
                    "order": 4
                },
                {
                    "id": 21,
                    "lessonId": 6,
                    "question": "How do you greet a friend in English?",
                    "type": "ASSIST",
                    "order": 1
                },
                {
                    "id": 22,
                    "lessonId": 6,
                    "question": "What is an informal way to say 'Hello'?",
                    "type": "ASSIST",
                    "order": 2
                },
                {
                    "id": 23,
                    "lessonId": 6,
                    "question": "How do you ask 'What's up?' informally?",
                    "type": "ASSIST",
                    "order": 3
                },
                {
                    "id": 24,
                    "lessonId": 6,
                    "question": "What is the informal way to say 'See you later'?",
                    "type": "ASSIST",
                    "order": 4
                },
                {
                    "id": 25,
                    "lessonId": 7,
                    "question": "How do you say 'My name is...' in English?",
                    "type": "ASSIST",
                    "order": 1
                },
                {
                    "id": 26,
                    "lessonId": 7,
                    "question": "How do you ask someone 'What is your name?'",
                    "type": "ASSIST",
                    "order": 2
                },
                {
                    "id": 27,
                    "lessonId": 7,
                    "question": "How do you introduce yourself to someone?",
                    "type": "ASSIST",
                    "order": 3
                },
                {
                    "id": 28,
                    "lessonId": 7,
                    "question": "What is the polite way to introduce yourself?",
                    "type": "ASSIST",
                    "order": 4
                },
                {
                    "id": 29,
                    "lessonId": 8,
                    "question": "How do you say 'Goodbye' informally?",
                    "type": "ASSIST",
                    "order": 1
                },
                {
                    "id": 30,
                    "lessonId": 8,
                    "question": "What is a casual way to say 'Good night'?",
                    "type": "ASSIST",
                    "order": 2
                },
                {
                    "id": 31,
                    "lessonId": 8,
                    "question": "How do you say 'See you soon' informally?",
                    "type": "ASSIST",
                    "order": 3
                },
                {
                    "id": 32,
                    "lessonId": 8,
                    "question": "What is another way to say 'Take care'?",
                    "type": "ASSIST",
                    "order": 4
                },
                {
                    "id": 33,
                    "lessonId": 9,
                    "question": "តើម៉ោងប៉ុន្មាន?",
                    "type": "ASSIST",
                    "order": 1
                },
                {
                    "id": 34,
                    "lessonId": 9,
                    "question": "វាគឺម៉ោងដប់។",
                    "type": "ASSIST",
                    "order": 2
                },
                {
                    "id": 35,
                    "lessonId": 9,
                    "question": "តើអ្នកចូលចិត្តពណ៌អ្វី?",
                    "type": "ASSIST",
                    "order": 3
                },
                {
                    "id": 36,
                    "lessonId": 9,
                    "question": "ខ្ញុំចូលចិត្តពណ៌ខៀវ។",
                    "type": "ASSIST",
                    "order": 4
                },
                {
                    "id": 37,
                    "lessonId": 10,
                    "question": "How do you Greeting people in English?",
                    "type": "ASSIST",
                    "order": 1
                },
                {
                    "id": 38,
                    "lessonId": 10,
                    "question": "How do you answer someone question 'How are you?'",
                    "type": "ASSIST",
                    "order": 2
                },
                {
                    "id": 39,
                    "lessonId": 10,
                    "question": "How do you ask about someone plece?",
                    "type": "ASSIST",
                    "order": 3
                },
                {
                    "id": 40,
                    "lessonId": 10,
                    "question": "How do you answer the question 'Where do you live'?",
                    "type": "ASSIST",
                    "order": 4
                },
                {
                    "id": 41,
                    "lessonId": 11,
                    "question": "How do you ask someone's name?",
                    "type": "ASSIST",
                    "order": 1
                },
                {
                    "id": 42,
                    "lessonId": 11,
                    "question": "How do you answer the question What is your name?",
                    "type": "ASSIST",
                    "order": 2
                },
                {
                    "id": 43,
                    "lessonId": 11,
                    "question": "HOw do you ask someone's favorite food?",
                    "type": "ASSIST",
                    "order": 3
                },
                {
                    "id": 44,
                    "lessonId": 11,
                    "question": "What is the English word for 'jueves'?",
                    "type": "ASSIST",
                    "order": 4
                },
                {
                    "id": 45,
                    "lessonId": 12,
                    "question": "Ho to answer the question 'What is your favirite food?'?",
                    "type": "ASSIST",
                    "order": 1
                },
                {
                    "id": 46,
                    "lessonId": 12,
                    "question": "How to ask which country where someone from?",
                    "type": "ASSIST",
                    "order": 2
                },
                {
                    "id": 47,
                    "lessonId": 12,
                    "question": "How to answe the question 'Where are you from?'",
                    "type": "ASSIST",
                    "order": 3
                },
                {
                    "id": 48,
                    "lessonId": 12,
                    "question": "What is the question to ask someone's job?",
                    "type": "ASSIST",
                    "order": 4
                },
                {
                    "id": 49,
                    "lessonId": 13,
                    "question": "How do you ask for directions to a place?",
                    "type": "ASSIST",
                    "order": 1
                },
                {
                    "id": 50,
                    "lessonId": 13,
                    "question": "How to answer the question 'How old are you?'?",
                    "type": "ASSIST",
                    "order": 2
                },
                {
                    "id": 51,
                    "lessonId": 13,
                    "question": "What question do you ask for answering 'I like reading books.'?",
                    "type": "ASSIST",
                    "order": 3
                },
                {
                    "id": 52,
                    "lessonId": 13,
                    "question": "How to answer question 'Do you like watching movies?'",
                    "type": "ASSIST",
                    "order": 4
                },
                {
                    "id": 53,
                    "lessonId": 14,
                    "question": "How do you ask for the price of an item?",
                    "type": "ASSIST",
                    "order": 1
                },
                {
                    "id": 54,
                    "lessonId": 14,
                    "question": "How do you say 'I would like to buy this'?",
                    "type": "ASSIST",
                    "order": 2
                },
                {
                    "id": 55,
                    "lessonId": 14,
                    "question": "how to ask 'What is the weather like today?'?",
                    "type": "ASSIST",
                    "order": 3
                },
                {
                    "id": 56,
                    "lessonId": 14,
                    "question": "How do you say 'I need a receipt'?",
                    "type": "ASSIST",
                    "order": 4
                },
                {
                    "id": 57,
                    "lessonId": 15,
                    "question": "How do you ask for a menu in a restaurant?",
                    "type": "ASSIST",
                    "order": 1
                },
                {
                    "id": 58,
                    "lessonId": 15,
                    "question": "How do you say 'I would like to order'?",
                    "type": "ASSIST",
                    "order": 2
                },
                {
                    "id": 59,
                    "lessonId": 15,
                    "question": "What is the English phrase for greeting?",
                    "type": "ASSIST",
                    "order": 3
                },
                // {
                //     "id": 60,
                //     "lessonId": 15,
                //     "question": "How do you ask for the bill?",
                //     "type": "ASSIST",
                //     "order": 4
                // },
                {
                    "id": 61,
                    "lessonId": 16,
                    "question": "How do you make an appointment with a doctor?",
                    "type": "ASSIST",
                    "order": 1
                },
                {
                    "id": 62,
                    "lessonId": 16,
                    "question": "How to answe 'How the weather today?'",
                    "type": "ASSIST",
                    "order": 2
                },
                {
                    "id": 63,
                    "lessonId": 16,
                    "question": "How do you ask for the available time slots?",
                    "type": "ASSIST",
                    "order": 3
                },
                {
                    "id": 64,
                    "lessonId": 16,
                    "question": "How to answe question 'Do you have a dog?'",
                    "type": "ASSIST",
                    "order": 4
                }
            ]                                 
        )

        await db.insert(schema.challengeOptions).values(
            [
                {
                    "id": 1,
                    "challengId": 1,
                    "text": "A",
                    "correct": true
                },
                {
                    "id": 2,
                    "challengId": 1,
                    "text": "B",
                    "correct": false
                },
                {
                    "id": 3,
                    "challengId": 1,
                    "text": "C",
                    "correct": false
                },
                {
                    "id": 4,
                    "challengId": 1,
                    "text": "D",
                    "correct": false
                },
                {
                    "id": 5,
                    "challengId": 2,
                    "text": "A",
                    "correct": false
                },
                {
                    "id": 6,
                    "challengId": 2,
                    "text": "B",
                    "correct": false
                },
                {
                    "id": 7,
                    "challengId": 2,
                    "text": "C",
                    "correct": true
                },
                {
                    "id": 8,
                    "challengId": 2,
                    "text": "D",
                    "correct": false
                },
                {
                    "id": 9,
                    "challengId": 3,
                    "text": "X",
                    "correct": false
                },
                {
                    "id": 10,
                    "challengId": 3,
                    "text": "Y",
                    "correct": false
                },
                {
                    "id": 11,
                    "challengId": 3,
                    "text": "Z",
                    "correct": true
                },
                {
                    "id": 12,
                    "challengId": 3,
                    "text": "W",
                    "correct": false
                },
                {
                    "id": 13,
                    "challengId": 4,
                    "text": "3",
                    "correct": false
                },
                {
                    "id": 14,
                    "challengId": 4,
                    "text": "6",
                    "correct": false
                },
                {
                    "id": 15,
                    "challengId": 4,
                    "text": "4",
                    "correct": false
                },
                {
                    "id": 16,
                    "challengId": 4,
                    "text": "5",
                    "correct": true
                },
                {
                    "id": 17,
                    "challengId": 5,
                    "text": "house",
                    "correct": true
                },
                {
                    "id": 18,
                    "challengId": 5,
                    "text": "car",
                    "correct": false
                },
                {
                    "id": 19,
                    "challengId": 5,
                    "text": "book",
                    "correct": false
                },
                {
                    "id": 20,
                    "challengId": 5,
                    "text": "cat",
                    "correct": false
                },
                {
                    "id": 21,
                    "challengId": 6,
                    "text": "cat",
                    "correct": false
                },
                {
                    "id": 22,
                    "challengId": 6,
                    "text": "dog",
                    "correct": true
                },
                {
                    "id": 23,
                    "challengId": 6,
                    "text": "bird",
                    "correct": false
                },
                {
                    "id": 24,
                    "challengId": 6,
                    "text": "fish",
                    "correct": false
                },
                {
                    "id": 25,
                    "challengId": 7,
                    "text": "dog",
                    "correct": false
                },
                {
                    "id": 26,
                    "challengId": 7,
                    "text": "cat",
                    "correct": true
                },
                {
                    "id": 27,
                    "challengId": 7,
                    "text": "rabbit",
                    "correct": false
                },
                {
                    "id": 28,
                    "challengId": 7,
                    "text": "hamster",
                    "correct": false
                },
                {
                    "id": 29,
                    "challengId": 8,
                    "text": "book",
                    "correct": true
                },
                {
                    "id": 30,
                    "challengId": 8,
                    "text": "pen",
                    "correct": false
                },
                {
                    "id": 31,
                    "challengId": 8,
                    "text": "notebook",
                    "correct": false
                },
                {
                    "id": 32,
                    "challengId": 8,
                    "text": "desk",
                    "correct": false
                },
                {
                    "id": 33,
                    "challengId": 9,
                    "text": "ខ្ញុំ​ជា​សិស្ស​ម្នាក់។",
                    "correct": true
                },
                {
                    "id": 34,
                    "challengId": 9,
                    "text": "ខ្ញុំ​ជា​គ្រូ​បង្រៀន​។",
                    "correct": false
                },
                {
                    "id": 35,
                    "challengId": 9,
                    "text": "នាង​គឺជា​សិស្ស។",
                    "correct": false
                },
                {
                    "id": 36,
                    "challengId": 9,
                    "text": "គាត់​ជា​សិស្ស។",
                    "correct": false
                },
                {
                    "id": 37,
                    "challengId": 10,
                    "text": "នាង​គឺជា​គ្រូបង្រៀន។",
                    "correct": true
                },
                {
                    "id": 38,
                    "challengId": 10,
                    "text": "នាង​គឺជា​សិស្ស។",
                    "correct": false
                },
                {
                    "id": 39,
                    "challengId": 10,
                    "text": "នាងសប្បាយចិត្ត។",
                    "correct": false
                },
                {
                    "id": 40,
                    "challengId": 10,
                    "text": "នាងគឺជាមិត្តម្នាក់។",
                    "correct": false
                },
                {
                    "id": 41,
                    "challengId": 11,
                    "text": "គាត់សប្បាយចិត្ត។",
                    "correct": true
                },
                {
                    "id": 42,
                    "challengId": 11,
                    "text": "គាត់​ជា​សិស្ស។",
                    "correct": false
                },
                {
                    "id": 43,
                    "challengId": 11,
                    "text": "នាងសប្បាយចិត្ត។",
                    "correct": false
                },
                {
                    "id": 44,
                    "challengId": 11,
                    "text": "ពួកគេជាមិត្ត។",
                    "correct": false
                },
                {
                    "id": 45,
                    "challengId": 12,
                    "text": "ពួកគេជាមិត្ត។",
                    "correct": true
                },
                {
                    "id": 46,
                    "challengId": 12,
                    "text": "ពួកគេ​ជា​សិស្ស។",
                    "correct": false
                },
                {
                    "id": 47,
                    "challengId": 12,
                    "text": "ពួកគេជាគ្រូបង្រៀន។",
                    "correct": false
                },
                {
                    "id": 48,
                    "challengId": 12,
                    "text": "ពួកគេសប្បាយចិត្ត។",
                    "correct": false
                },
                {
                    "id": 49,
                    "challengId": 13,
                    "text": "See",
                    "correct": false
                },
                {
                    "id": 50,
                    "challengId": 13,
                    "text": "Kay",
                    "correct": false
                },
                {
                    "id": 51,
                    "challengId": 13,
                    "text": "Cee",
                    "correct": true
                },
                {
                    "id": 52,
                    "challengId": 13,
                    "text": "Ess",
                    "correct": false
                },
                {
                    "id": 53,
                    "challengId": 14,
                    "text": "Ar",
                    "correct": true
                },
                {
                    "id": 54,
                    "challengId": 14,
                    "text": "Ess",
                    "correct": false
                },
                {
                    "id": 55,
                    "challengId": 14,
                    "text": "Tee",
                    "correct": false
                },
                {
                    "id": 56,
                    "challengId": 14,
                    "text": "Cee",
                    "correct": false
                },
                {
                    "id": 57,
                    "challengId": 15,
                    "text": "Ess",
                    "correct": true
                },
                {
                    "id": 58,
                    "challengId": 15,
                    "text": "Ar",
                    "correct": false
                },
                {
                    "id": 59,
                    "challengId": 15,
                    "text": "Tee",
                    "correct": false
                },
                {
                    "id": 60,
                    "challengId": 15,
                    "text": "Cee",
                    "correct": false
                },
                {
                    "id": 61,
                    "challengId": 16,
                    "text": "Tee",
                    "correct": true
                },
                {
                    "id": 62,
                    "challengId": 16,
                    "text": "Ess",
                    "correct": false
                },
                {
                    "id": 63,
                    "challengId": 16,
                    "text": "Ar",
                    "correct": false
                },
                {
                    "id": 64,
                    "challengId": 16,
                    "text": "Cee",
                    "correct": false
                },
                {
                    "id": 65,
                    "challengId": 17,
                    "text": "Good morning",
                    "correct": true
                },
                {
                    "id": 66,
                    "challengId": 17,
                    "text": "Hi",
                    "correct": false
                },
                {
                    "id": 67,
                    "challengId": 17,
                    "text": "What's up?",
                    "correct": false
                },
                {
                    "id": 68,
                    "challengId": 17,
                    "text": "Bye",
                    "correct": false
                },
                {
                    "id": 69,
                    "challengId": 18,
                    "text": "Sir",
                    "correct": true
                },
                {
                    "id": 70,
                    "challengId": 18,
                    "text": "Buddy",
                    "correct": false
                },
                {
                    "id": 71,
                    "challengId": 18,
                    "text": "Pal",
                    "correct": false
                },
                {
                    "id": 72,
                    "challengId": 18,
                    "text": "Mate",
                    "correct": false
                },
                {
                    "id": 73,
                    "challengId": 19,
                    "text": "How do you do?",
                    "correct": true
                },
                {
                    "id": 74,
                    "challengId": 19,
                    "text": "What's up?",
                    "correct": false
                },
                {
                    "id": 75,
                    "challengId": 19,
                    "text": "Hey",
                    "correct": false
                },
                {
                    "id": 76,
                    "challengId": 19,
                    "text": "Yo",
                    "correct": false
                },
                {
                    "id": 77,
                    "challengId": 20,
                    "text": "See you later",
                    "correct": true
                },
                {
                    "id": 78,
                    "challengId": 20,
                    "text": "Goodbye",
                    "correct": false
                },
                {
                    "id": 79,
                    "challengId": 20,
                    "text": "Bye",
                    "correct": false
                },
                {
                    "id": 80,
                    "challengId": 20,
                    "text": "Take care",
                    "correct": false
                },
                {
                    "id": 81,
                    "challengId": 21,
                    "text": "My name is...",
                    "correct": true
                },
                {
                    "id": 82,
                    "challengId": 21,
                    "text": "I am...",
                    "correct": false
                },
                {
                    "id": 83,
                    "challengId": 21,
                    "text": "Call me...",
                    "correct": false
                },
                {
                    "id": 84,
                    "challengId": 21,
                    "text": "You can call me...",
                    "correct": false
                },
                {
                    "id": 85,
                    "challengId": 22,
                    "text": "What is your name?",
                    "correct": false
                },
                {
                    "id": 86,
                    "challengId": 22,
                    "text": "Who are you?",
                    "correct": false
                },
                {
                    "id": 87,
                    "challengId": 22,
                    "text": "How do you do?",
                    "correct": true
                },
                {
                    "id": 88,
                    "challengId": 22,
                    "text": "Can I know your name?",
                    "correct": false
                },
                {
                    "id": 89,
                    "challengId": 23,
                    "text": "Hey!",
                    "correct": true
                },
                {
                    "id": 90,
                    "challengId": 23,
                    "text": "You can call me...",
                    "correct": false
                },
                {
                    "id": 91,
                    "challengId": 23,
                    "text": "My name is...",
                    "correct": false
                },
                {
                    "id": 92,
                    "challengId": 23,
                    "text": "I'm known as...",
                    "correct": false
                },
                {
                    "id": 93,
                    "challengId": 24,
                    "text": "See you soon!",
                    "correct": true
                },
                {
                    "id": 94,
                    "challengId": 24,
                    "text": "Hi, I am...",
                    "correct": false
                },
                {
                    "id": 95,
                    "challengId": 24,
                    "text": "Greetings, I am...",
                    "correct": false
                },
                {
                    "id": 96,
                    "challengId": 24,
                    "text": "Hey, call me...",
                    "correct": false
                },
                {
                    "id": 97,
                    "challengId": 25,
                    "text": "Goodbye",
                    "correct": false
                },
                {
                    "id": 98,
                    "challengId": 25,
                    "text": "I'm Kitty.",
                    "correct": true
                },
                {
                    "id": 99,
                    "challengId": 25,
                    "text": "Take care",
                    "correct": false
                },
                {
                    "id": 100,
                    "challengId": 25,
                    "text": "Later",
                    "correct": false
                },
                {
                    "id": 101,
                    "challengId": 26,
                    "text": "May I ask your name?",
                    "correct": true
                },
                {
                    "id": 102,
                    "challengId": 26,
                    "text": "Hello, my name is...",
                    "correct": false
                },
                {
                    "id": 103,
                    "challengId": 26,
                    "text": "See you later",
                    "correct": false
                },
                {
                    "id": 104,
                    "challengId": 26,
                    "text": "Take care",
                    "correct": false
                },
                {
                    "id": 105,
                    "challengId": 27,
                    "text": "Hello, my name is...",
                    "correct": true
                },
                {
                    "id": 106,
                    "challengId": 27,
                    "text": "Goodbye",
                    "correct": false
                },
                {
                    "id": 107,
                    "challengId": 27,
                    "text": "Later",
                    "correct": false
                },
                {
                    "id": 108,
                    "challengId": 27,
                    "text": "Take care",
                    "correct": false
                },
                {
                    "id": 109,
                    "challengId": 28,
                    "text": "My name is ...",
                    "correct": true
                },
                {
                    "id": 110,
                    "challengId": 28,
                    "text": "Goodbye",
                    "correct": false
                },
                {
                    "id": 111,
                    "challengId": 28,
                    "text": "Nice to meet you!",
                    "correct": false
                },
                {
                    "id": 112,
                    "challengId": 28,
                    "text": "Good morning",
                    "correct": false
                },
                {
                    "id": 113,
                    "challengId": 29,
                    "text": "Catch you later!",
                    "correct": true
                },
                {
                    "id": 114,
                    "challengId": 29,
                    "text": "Yo!",
                    "correct": false
                },
                {
                    "id": 115,
                    "challengId": 29,
                    "text": "Hello everyone!",
                    "correct": false
                },
                {
                    "id": 116,
                    "challengId": 29,
                    "text": "Four",
                    "correct": false
                },
                {
                    "id": 117,
                    "challengId": 30,
                    "text": "See you in the morning!",
                    "correct": true
                },
                {
                    "id": 118,
                    "challengId": 30,
                    "text": "Well, I better get going.",
                    "correct": false
                },
                {
                    "id": 119,
                    "challengId": 30,
                    "text": "Greetings.",
                    "correct": false
                },
                {
                    "id": 120,
                    "challengId": 30,
                    "text": "What's your name?",
                    "correct": false
                },
                {
                    "id": 121,
                    "challengId": 31,
                    "text": "Talk to you soon!",
                    "correct": true
                },
                {
                    "id": 122,
                    "challengId": 31,
                    "text": "Greetings.",
                    "correct": false
                },
                {
                    "id": 123,
                    "challengId": 31,
                    "text": "Two",
                    "correct": false
                },
                {
                    "id": 124,
                    "challengId": 31,
                    "text": "what's pretty!",
                    "correct": false
                },
                {
                    "id": 125,
                    "challengId": 32,
                    "text": "Can't wait for movie night!",
                    "correct": false
                },
                {
                    "id": 126,
                    "challengId": 32,
                    "text": "Be well",
                    "correct": true
                },
                {
                    "id": 127,
                    "challengId": 32,
                    "text": "See ya!",
                    "correct": false
                },
                {
                    "id": 128,
                    "challengId": 32,
                    "text": "Three",
                    "correct": false
                },
                {
                    "id": 129,
                    "challengId": 33,
                    "text": "What time is it?",
                    "correct": true
                },
                {
                    "id": 130,
                    "challengId": 33,
                    "text": "What day is it?",
                    "correct": false
                },
                {
                    "id": 131,
                    "challengId": 33,
                    "text": "What year is it?",
                    "correct": false
                },
                {
                    "id": 132,
                    "challengId": 33,
                    "text": "What month is it?",
                    "correct": false
                },
                {
                    "id": 133,
                    "challengId": 34,
                    "text": "It is 10 o'clock.",
                    "correct": true
                },
                {
                    "id": 134,
                    "challengId": 34,
                    "text": "It is Monday.",
                    "correct": false
                },
                {
                    "id": 135,
                    "challengId": 34,
                    "text": "It is June.",
                    "correct": false
                },
                {
                    "id": 136,
                    "challengId": 34,
                    "text": "It is 2024.",
                    "correct": false
                },
                {
                    "id": 137,
                    "challengId": 35,
                    "text": "What is your favorite color?",
                    "correct": true
                },
                {
                    "id": 138,
                    "challengId": 35,
                    "text": "What is your favorite food?",
                    "correct": false
                },
                {
                    "id": 139,
                    "challengId": 35,
                    "text": "What is your favorite movie?",
                    "correct": false
                },
                {
                    "id": 140,
                    "challengId": 35,
                    "text": "What is your favorite sport?",
                    "correct": false
                },
                {
                    "id": 141,
                    "challengId": 36,
                    "text": "My favorite color is blue.",
                    "correct": true
                },
                {
                    "id": 142,
                    "challengId": 36,
                    "text": "My favorite food is pizza.",
                    "correct": false
                },
                {
                    "id": 143,
                    "challengId": 36,
                    "text": "My favorite movie is Inception.",
                    "correct": false
                },
                {
                    "id": 144,
                    "challengId": 36,
                    "text": "My favorite sport is soccer.",
                    "correct": false
                },
                {
                    "id": 145,
                    "challengId": 37,
                    "text": "How are you?",
                    "correct": true
                },
                {
                    "id": 146,
                    "challengId": 37,
                    "text": "Where are you from?",
                    "correct": false
                },
                {
                    "id": 147,
                    "challengId": 37,
                    "text": "What do you do?",
                    "correct": false
                },
                {
                    "id": 148,
                    "challengId": 37,
                    "text": "How old are you?",
                    "correct": false
                },
                {
                    "id": 149,
                    "challengId": 38,
                    "text": "I am fine, thank you.",
                    "correct": true
                },
                {
                    "id": 150,
                    "challengId": 38,
                    "text": "I am from the USA.",
                    "correct": false
                },
                {
                    "id": 151,
                    "challengId": 38,
                    "text": "I am a teacher.",
                    "correct": false
                },
                {
                    "id": 152,
                    "challengId": 38,
                    "text": "I am 25 years old.",
                    "correct": false
                },
                {
                    "id": 153,
                    "challengId": 39,
                    "text": "Where do you live?",
                    "correct": true
                },
                {
                    "id": 154,
                    "challengId": 39,
                    "text": "What do you like to do?",
                    "correct": false
                },
                {
                    "id": 155,
                    "challengId": 39,
                    "text": "How is the weather?",
                    "correct": false
                },
                {
                    "id": 156,
                    "challengId": 39,
                    "text": "What is your job?",
                    "correct": false
                },
                {
                    "id": 157,
                    "challengId": 40,
                    "text": "I live in New York.",
                    "correct": true
                },
                {
                    "id": 158,
                    "challengId": 40,
                    "text": "I like to read.",
                    "correct": false
                },
                {
                    "id": 159,
                    "challengId": 40,
                    "text": "It is sunny.",
                    "correct": false
                },
                {
                    "id": 160,
                    "challengId": 40,
                    "text": "I am a student.",
                    "correct": false
                },
                {
                    "id": 161,
                    "challengId": 41,
                    "text": "What's your name?",
                    "correct": true
                },
                {
                    "id": 162,
                    "challengId": 41,
                    "text": "Where do you live?",
                    "correct": false
                },
                {
                    "id": 163,
                    "challengId": 41,
                    "text": "What is your job?",
                    "correct": false
                },
                {
                    "id": 164,
                    "challengId": 41,
                    "text": "How are you?",
                    "correct": false
                },
                {
                    "id": 165,
                    "challengId": 42,
                    "text": "My name is John.",
                    "correct": true
                },
                {
                    "id": 166,
                    "challengId": 42,
                    "text": "I live in New York.",
                    "correct": false
                },
                {
                    "id": 167,
                    "challengId": 42,
                    "text": "I am a teacher.",
                    "correct": false
                },
                {
                    "id": 168,
                    "challengId": 42,
                    "text": "I am fine, thank you.",
                    "correct": false
                },
                {
                    "id": 169,
                    "challengId": 43,
                    "text": "What is your favorite food?",
                    "correct": true
                },
                {
                    "id": 170,
                    "challengId": 43,
                    "text": "What is your favorite color?",
                    "correct": false
                },
                {
                    "id": 171,
                    "challengId": 43,
                    "text": "What is your favorite movie?",
                    "correct": false
                },
                {
                    "id": 172,
                    "challengId": 43,
                    "text": "What is your favorite sport?",
                    "correct": false
                },
                {
                    "id": 173,
                    "challengId": 44,
                    "text": "My favorite food is pizza.",
                    "correct": true
                },
                {
                    "id": 174,
                    "challengId": 44,
                    "text": "My favorite color is blue.",
                    "correct": false
                },
                {
                    "id": 175,
                    "challengId": 44,
                    "text": "My favorite movie is Inception.",
                    "correct": false
                },
                {
                    "id": 176,
                    "challengId": 44,
                    "text": "My favorite sport is soccer.",
                    "correct": false
                },
                {
                    "id": 177,
                    "challengId": 45,
                    "text": "Where are you from?",
                    "correct": true
                },
                {
                    "id": 178,
                    "challengId": 45,
                    "text": "How old are you?",
                    "correct": false
                },
                {
                    "id": 179,
                    "challengId": 45,
                    "text": "What is your job?",
                    "correct": false
                },
                {
                    "id": 180,
                    "challengId": 45,
                    "text": "How are you?",
                    "correct": false
                },
                {
                    "id": 181,
                    "challengId": 46,
                    "text": "I am from the USA.",
                    "correct": true
                },
                {
                    "id": 182,
                    "challengId": 46,
                    "text": "I am 25 years old.",
                    "correct": false
                },
                {
                    "id": 183,
                    "challengId": 46,
                    "text": "I am a teacher.",
                    "correct": false
                },
                {
                    "id": 184,
                    "challengId": 46,
                    "text": "I am fine, thank you.",
                    "correct": false
                },
                {
                    "id": 185,
                    "challengId": 47,
                    "text": "What is your job?",
                    "correct": true
                },
                {
                    "id": 186,
                    "challengId": 47,
                    "text": "Where are you from?",
                    "correct": false
                },
                {
                    "id": 187,
                    "challengId": 47,
                    "text": "How old are you?",
                    "correct": false
                },
                {
                    "id": 188,
                    "challengId": 47,
                    "text": "How are you?",
                    "correct": false
                },
                {
                    "id": 189,
                    "challengId": 48,
                    "text": "I am a teacher.",
                    "correct": true
                },
                {
                    "id": 190,
                    "challengId": 48,
                    "text": "I am 25 years old.",
                    "correct": false
                },
                {
                    "id": 191,
                    "challengId": 48,
                    "text": "I am from the USA.",
                    "correct": false
                },
                {
                    "id": 192,
                    "challengId": 48,
                    "text": "I am fine, thank you.",
                    "correct": false
                },
                {
                    "id": 193,
                    "challengId": 49,
                    "text": "How old are you?",
                    "correct": false
                },
                {
                    "id": 194,
                    "challengId": 49,
                    "text": "I apologize for bothering you, but could you direct me to",
                    "correct": true
                },
                {
                    "id": 195,
                    "challengId": 49,
                    "text": "Where are you from?",
                    "correct": false
                },
                {
                    "id": 196,
                    "challengId": 49,
                    "text": "How are you?",
                    "correct": false
                },
                {
                    "id": 197,
                    "challengId": 50,
                    "text": "I am 25 years old.",
                    "correct": true
                },
                {
                    "id": 198,
                    "challengId": 50,
                    "text": "I am a teacher.",
                    "correct": false
                },
                {
                    "id": 199,
                    "challengId": 50,
                    "text": "I am from the USA.",
                    "correct": false
                },
                {
                    "id": 200,
                    "challengId": 50,
                    "text": "I am fine, thank you.",
                    "correct": false
                },
                {
                    "id": 201,
                    "challengId": 51,
                    "text": "What do you like to do?",
                    "correct": true
                },
                {
                    "id": 202,
                    "challengId": 51,
                    "text": "What is your favorite color?",
                    "correct": false
                },
                {
                    "id": 203,
                    "challengId": 51,
                    "text": "What is your favorite food?",
                    "correct": false
                },
                {
                    "id": 204,
                    "challengId": 51,
                    "text": "What is your job?",
                    "correct": false
                },
                {
                    "id": 205,
                    "challengId": 52,
                    "text": "I like to read.",
                    "correct": false
                },
                {
                    "id": 206,
                    "challengId": 52,
                    "text": "I like to swim.",
                    "correct": false
                },
                {
                    "id": 207,
                    "challengId": 52,
                    "text": "I like to play soccer.",
                    "correct": false
                },
                {
                    "id": 208,
                    "challengId": 52,
                    "text": "Yes, I do.",
                    "correct": true
                },
                {
                    "id": 209,
                    "challengId": 53,
                    "text": "What is your favorite book?",
                    "correct": false
                },
                {
                    "id": 210,
                    "challengId": 53,
                    "text": "What is your favorite movie?",
                    "correct": false
                },
                {
                    "id": 211,
                    "challengId": 53,
                    "text": "How much is it?",
                    "correct": true
                },
                {
                    "id": 212,
                    "challengId": 53,
                    "text": "What is your favorite color?",
                    "correct": false
                },
                {
                    "id": 213,
                    "challengId": 54,
                    "text": "I would like to purchase this item, please.",
                    "correct": true
                },
                {
                    "id": 214,
                    "challengId": 54,
                    "text": "My favorite movie is Inception.",
                    "correct": false
                },
                {
                    "id": 215,
                    "challengId": 54,
                    "text": "My favorite food is pizza.",
                    "correct": false
                },
                {
                    "id": 216,
                    "challengId": 54,
                    "text": "My favorite color is blue.",
                    "correct": false
                },
                {
                    "id": 217,
                    "challengId": 55,
                    "text": "How is the weather?",
                    "correct": true
                },
                {
                    "id": 218,
                    "challengId": 55,
                    "text": "What is your job?",
                    "correct": false
                },
                {
                    "id": 219,
                    "challengId": 55,
                    "text": "How old are you?",
                    "correct": false
                },
                {
                    "id": 220,
                    "challengId": 55,
                    "text": "Where are you from?",
                    "correct": false
                },
                {
                    "id": 221,
                    "challengId": 56,
                    "text": "It is sunny.",
                    "correct": false
                },
                {
                    "id": 222,
                    "challengId": 56,
                    "text": "It is Monday.",
                    "correct": false
                },
                {
                    "id": 223,
                    "challengId": 56,
                    "text": "I need a receipt with this, please.",
                    "correct": true
                },
                {
                    "id": 224,
                    "challengId": 56,
                    "text": "It is 2024.",
                    "correct": false
                },
                {
                    "id": 225,
                    "challengId": 57,
                    "text": "Can I have a menu, please?",
                    "correct": true
                },
                {
                    "id": 226,
                    "challengId": 57,
                    "text": "What do you like to do?",
                    "correct": false
                },
                {
                    "id": 227,
                    "challengId": 57,
                    "text": "How old are you?",
                    "correct": false
                },
                {
                    "id": 228,
                    "challengId": 57,
                    "text": "Where are you from?",
                    "correct": false
                },
                {
                    "id": 229,
                    "challengId": 58,
                    "text": "What's the weather like?",
                    "correct": false
                },
                {
                    "id": 230,
                    "challengId": 58,
                    "text": "Can I get an ice cream, please?",
                    "correct": false
                },
                {
                    "id": 231,
                    "challengId": 58,
                    "text": "I am from the USA.",
                    "correct": false
                },
                {
                    "id": 232,
                    "challengId": 58,
                    "text": "How are you?",
                    "correct": false
                },
                {
                    "id": 233,
                    "challengId": 59,
                    "text": "How are you?",
                    "correct": true
                },
                {
                    "id": 234,
                    "challengId": 59,
                    "text": "Where do you live?",
                    "correct": false
                },
                {
                    "id": 235,
                    "challengId": 59,
                    "text": "What is your job?",
                    "correct": false
                },
                {
                    "id": 236,
                    "challengId": 59,
                    "text": "How old are you?",
                    "correct": false
                },
                // {
                //     "id": 237,
                //     "challengId": 60,
                //     "text": "Are we ready to order?",
                //     "correct": false
                // },
                // {
                //     "id": 238,
                //     "challengId": 60,
                //     "text": "I live in New York.",
                //     "correct": false
                // },
                // {
                //     "id": 239,
                //     "challengId": 60,
                //     "text": "Could we get the check, please?",
                //     "correct": true
                // },
                // {
                //     "id": 240,
                //     "challengId": 60,
                //     "text": "I am from the USA.",
                //     "correct": false
                // },
                {
                    "id": 241,
                    "challengId": 61,
                    "text": "I'd prefer an appointment for a physical exam...",
                    "correct": true
                },
                {
                    "id": 242,
                    "challengId": 61,
                    "text": "I'd like to order...",
                    "correct": false
                },
                {
                    "id": 243,
                    "challengId": 61,
                    "text": "I would like to purchase this...",
                    "correct": false
                },
                {
                    "id": 244,
                    "challengId": 61,
                    "text": "I'll take this, please.",
                    "correct": false
                },
                {
                    "id": 245,
                    "challengId": 62,
                    "text": "It is 3 o'clock.",
                    "correct": false
                },
                {
                    "id": 246,
                    "challengId": 62,
                    "text": "It is sunny.",
                    "correct": true
                },
                {
                    "id": 247,
                    "challengId": 62,
                    "text": "It is Monday.",
                    "correct": false
                },
                {
                    "id": 248,
                    "challengId": 62,
                    "text": "It is 2024.",
                    "correct": false
                },
                {
                    "id": 249,
                    "challengId": 63,
                    "text": "Do you have any available time ..... ?",
                    "correct": true
                },
                {
                    "id": 250,
                    "challengId": 63,
                    "text": "What is your favorite color?",
                    "correct": false
                },
                {
                    "id": 251,
                    "challengId": 63,
                    "text": "What is your favorite food?",
                    "correct": false
                },
                {
                    "id": 252,
                    "challengId": 63,
                    "text": "What is your job?",
                    "correct": false
                },
                {
                    "id": 253,
                    "challengId": 64,
                    "text": "Yes, I have a dog.",
                    "correct": true
                },
                {
                    "id": 254,
                    "challengId": 64,
                    "text": "Yes, I have a cat.",
                    "correct": false
                },
                {
                    "id": 255,
                    "challengId": 64,
                    "text": "Yes, I have a fish.",
                    "correct": false
                },
                {
                    "id": 256,
                    "challengId": 64,
                    "text": "No, I don't have a pet.",
                    "correct": false
                },               
            ]                
        )


        console.log("Seeding finished")
        
    } catch (error) {
        console.log(error)
        throw new Error("Failed to seed database")
    }
}

main()