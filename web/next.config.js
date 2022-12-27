
module.exports = {
    experimental: { images: { layoutRaw: true } },
    images: {
        domains: ['images.unsplash.com' ,
        'cdn0.iconfinder.com',
        'cdn1.iconfinder.com',
        'cdn2.iconfinder.com',
        'cdn3.iconfinder.com',
        'cdn4.iconfinder.com'
    ] ,
        dangerouslyAllowSVG: true,
        contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",   
    },
};  
