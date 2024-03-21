module.exports = {
    entry: {
        index: "./scripts/index.js",
        films: "./scripts/createMovie.js"
    },
    output: {
        path: __dirname + "/public",
        filename: "[name].js",
    },
};