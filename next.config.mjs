/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
        return [
            {
                source: "/api/(.*)",
                headers: [
                    {
                        key: "Access-Control-Allow-Orgin",
                        value: "*"
                    },
                    {
                        key: "Access-Control-Allow-Methods",
                        value: "GET, POST, PUT, DELETE< OPTIONS"
                    },
                    {
                        key: "Access-Control-Allow-Headers",
                        value: "Control-Type, Authorization"
                    },
                    {
                        key: "Content-Range",
                        value: "bytes : 0-9/*"
                    },
                ]
            }
        ]
    }
};

export default nextConfig;
