/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/lote-aqua-mdp',
        destination: 'https://docs.google.com/document/d/1aDnKb1Cfmt9X80xNuP3xvP81qNv3urrphG1eEJCywMM/edit?tab=t.0',
        permanent: false,
      },
    ]
  },
}
