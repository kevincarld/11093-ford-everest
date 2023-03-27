
import Layout from "components/util/Layout"
// chakra
import { Box } from "@chakra-ui/react"
//
import Hero from "components/blocks/Hero"
import Intro from "components/blocks/Intro"
import SecondIntro from "components/blocks/SecondIntro"
import Car from "components/blocks/Car"
import Drive from "components/blocks/Drive"
import Camping from "components/blocks/Camping"
import Blue from "components/blocks/Blue"
import Travel from "components/blocks/Travel"
import Video from "components/blocks/Video"
import Footer from "components/blocks/Footer"

export default function Home() {
  return (
    // TODO: add accent lines

    <Layout>
      <Box bg='' pb={{lg:'54px'}}>
        <Hero />

        <Intro />

        <SecondIntro />

        <Car />

        <Drive />

        <Camping />

        <Blue />

        <Travel />

        <Video />

        <Footer />

        <footer></footer>
      </Box>

    </Layout>
  )
}
