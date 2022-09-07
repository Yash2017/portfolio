import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import inradiusHomePage from '../public/images/works/Inradius_Story_BG.jpg'
import pathFindingPage from '../public/images/works/pathfinding1080.png'
import thumbFourPainters from '../public/images/works/CCWProper.png'
import thumbMenkiki from '../public/images/works/bugMain.png'
import thumbMargelo from '../public/images/works/margelo_eyecatch.png'
import thumbModeTokyo from '../public/images/works/modetokyo_eyecatch.png'
import thumbStyly from '../public/images/works/styly_eyecatch.png'
import thumbPichu2 from '../public/images/works/pichu2_eyecatch.png'
import thumbFreeDBTagger from '../public/images/works/freedbtagger_eyecatch.png'
import thumbAmembo from '../public/images/works/amembo_eyecatch.png'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem
            id="inkdrop"
            title="InRadius"
            thumbnail={inradiusHomePage}
          >
            Hyperlocal job hunting platform
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="walknote"
            title="Path Finder"
            thumbnail={pathFindingPage}
          >
            Path finding algorithm visualizing website
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="fourpainters"
            title="Code Collaboration Website & Vim Clone"
            thumbnail={thumbFourPainters}
          >
            A website where you can code with a colleague while using some
            functionality of Vim
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem
            id="menkiki"
            thumbnail={thumbMenkiki}
            title="Bug Tracker"
          >
            A Bug Tracking Application that keeps tracks of all the bugs that
            are reported and resolved
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
