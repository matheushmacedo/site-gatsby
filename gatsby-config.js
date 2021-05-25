module.exports = {
  siteMetadata: {
    title: `Luiz Felipe Baggio - Hipnose, Hipnoterapia e Hipnose Clínica`,
    description: `Tratamento para depressão, traumas, fobias, síndrome do pânico. Fale comigo! `,
    author: `Matheus Macedo`,
    copyright: `© Copyright - Todos os direitos reservados`,
    siteUrl: `https://matheusmacedo.com.br`,
    socialMedia: {
      facebook: `https://www.facebook.com/institutoesfera/?hc_ref=ARRXz8cna6Ij51E1O9QlF0sGQVRthOPf4fH6iZGDdYxbzG3fNfeDJeYc7EGcjoqtXsI&fref=nf&__tn__=kC-R`,
      instagram: `https://www.instagram.com/luizfelipebaggiohipnose/`,
      youtube: `https://www.youtube.com/channel/UCjiE0sb-O7tsCrCwtQKYF5g`
    },
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-smoothscroll`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Luiz F. Baggio - Hipnoterapia`,
        short_name: `LFBH`,
        start_url: `/`,
        background_color: `#009888`,
        theme_color: `#009888`,
        display: `minimal-ui`,
        icon: `src/images/logo3.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
