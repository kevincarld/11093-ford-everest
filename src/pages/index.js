
import Layout from "components/util/Layout"
// chakra
import { Heading, Button } from "@chakra-ui/react"
//
import Intro from "components/blocks/Intro"
import SecondIntro from "components/blocks/SecondIntro"
import Car from "components/blocks/Car"
import Drive from "components/blocks/Drive"
import Camping from "components/blocks/Camping"
import Blue from "components/blocks/Blue"
import Travel from "components/blocks/Travel"
import Video from "components/blocks/Video"
import FooterSlider from "components/blocks/FooterSlider"

export default function Home() {
  return (
    <Layout>
      {/* TODO */}
      {/* <Hero /> */}

      <Intro />

      <SecondIntro />

      <Car />

      <Drive />

      <Camping />

      <Blue />

      <Travel />

      <Video />

      {/* TODO */}
      {/* <FooterSlider /> */}


    </Layout>
  )
}
