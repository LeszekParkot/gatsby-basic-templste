module.exports = {
   plugins: [
      "gatsby-plugin-root-import",
      {
         resolve: `gatsby-plugin-page-creator`,
         options: {
            path: `${__dirname}/src/components/pages`,
         },
      },
   ]
}