import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  UnorderedList
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'

const Work = () => (
  <Layout title="walknote">
    <Container>
      <Title>
        Path Finder <Badge>2021</Badge>
      </Title>

      <UnorderedList my={4}>
        <ListItem>
          Designed and programmed an interactive website using React and
          Chart.js that visualizes Dijkstra’s path finding algorithm to help
          people better understand them.
        </ListItem>
        <ListItem>
          Visualization is achieved live and dynamically changes according to
          the “obstacles” created by the user which{' '}
        </ListItem>
      </UnorderedList>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://tender-spence-82d621.netlify.app/">
            Path Finding Algorithm Visualizer <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>GitHub</Meta>
          <Link href="https://github.com/Yash2017/path-visualizing">
            GitHub Link <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Website</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>ReactJS</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/pathfinding.png" alt="walknote" />
      <WorkImage src="/images/works/livedemo.png" alt="walknote" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
