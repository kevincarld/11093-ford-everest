/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    imageSizes: [360,768,1024],
    deviceSizes: [360,768,1024],
    unoptimized: true,
  },
  assetPrefix: process.env.NODE_ENV === 'development' ? undefined : '.' ,
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
    }
  },
  env: {
    appMeta: {
      canonical: 'https://brandedcontent.smh.com.au/ford/built-last', // https://brandedcontent.[masthead].com.au/xxx/xxx"
      brand: 'Ford', // e.g Black Hawk
      title: 'Exploring hill end: A 4x4 adventure', // e.g Being a good pet parent starts at mealtime
      description: 'The Hill End region is only a half-day’s drive from Sydney or Canberra, but the urban environment couldn’t feel further away as you drive into rugged hills where silver wattles shimmer, streams run crystal-clear, and ruined gold mines make you feel you’ve been transported to another century.',
      siteName: 'The Sydney Morning Herald', // The Sydney Morning Herald, Good Food
      icon: 'smh', // smh, goodfood, nine, afr, traveller
      themeColour: '#000D5C', // hex
      ogImage: 'https://live-native-paid-content.pantheonsite.io/wp-content/uploads/2023/03/11093-FORD-Everest-SOCIAL-1920x1080-1.jpg',
      date: '27-03-23', // e.g 03-12-23
      year: '2023' // e.g 2023
    },
    jobCode: '11093-ford', // used for nine ga scripts
    guidelines: false, // shows or hides layout guideline bars
    activateMasthead: true, // shows or hides masthead
    mastheadOverride: 'smh', // overrides masthead that's pulling from hostname: e.g honey,style,travel,kitchen,you,parenting,coach,pets,celebrity
  }
}

module.exports = nextConfig