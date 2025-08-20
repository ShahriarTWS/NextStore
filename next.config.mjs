/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: [
            'images.samsung.com',
            'm.media-amazon.com',
            'example.com',
            'cdn.shopify.com',
            'bobtotusa.com',
            'cdn.mos.cms.futurecdn.net',
            'c1.neweggimages.com',
            'www.keychron.com',
            'lh3.googleusercontent.com',
            'static.gopro.com',
            'hydraulic-cdn.com',
            'img.us.news.samsung.com',
            'loyaltydrones.com',
            'img.freepik.com',
            't3.ftcdn.net' // add this
        ],
    },
};

export default nextConfig;
