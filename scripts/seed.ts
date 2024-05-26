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

        await db.insert(schema.courses).values({
            id: 1,
            title: "Korean",
            imageSrc: "/images/hero.png"
        })

        console.log("Seeding finished")
        
    } catch (error) {
        console.log(error)
        throw new Error("Failed to seed database")
    }
}

main()