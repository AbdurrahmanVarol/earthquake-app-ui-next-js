/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.mos.cms.futurecdn.net',
                pathname: '/**',
            },
        ],
    }
}

module.exports = nextConfig
