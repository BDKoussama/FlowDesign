const withTM = require("next-transpile-modules")(["gsap"]);

module.exports = withTM({
    images: {
        domains: ['cdn.sanity.io'],
        dangerouslyAllowSVG: true,
        contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    },
});
