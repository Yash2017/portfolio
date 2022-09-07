import {
  Box,
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid,
  UnorderedList,
  Image
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Menkiki (麺利き)">
    <Container>
      <Title>
        Bug Tracking Application <Badge>2020</Badge>
      </Title>
      <UnorderedList my={4}>
        <ListItem>
          Programmed a bug tracking and project management application with a
          simple user-interface that allowed users to report bugs directly to
          developers and developers can efficiently manage the issue fixing
          process through the progress tracker.
        </ListItem>
        <ListItem>
          Implement JWT for user authentication with React and Tailwind CSS to
          program the frontend, Python and GraphQL for the backend and a NoSQL
          database to store user information and bug fixing progress status.
        </ListItem>
      </UnorderedList>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://my-bug-tracker-application.herokuapp.com/login">
            Bug Tracker
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>GitHub</Meta>
          <Link href="https://github.com/Yash2017/bug-tracker">
            GitHub Link <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Website</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>ReactJS, ExpressJS, Heroku, MongoDB</span>
        </ListItem>
      </List>
      <WorkImage src="/images/works/btimg1.png" alt="menkiki" />
      <WorkImage src="/images/works/btimg2.png" alt="menkiki" />
      <WorkImage src="/images/works/btimg3.png" alt="menkiki" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
