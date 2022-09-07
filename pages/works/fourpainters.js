import {
  Box,
  Container,
  Badge,
  Link,
  List,
  ListItem,
  UnorderedList,
  Heading,
  Center
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="The four painters">
    <Container>
      <Title>
        Code Collaboration Website & Vim Clone <Badge>2020</Badge>
      </Title>
      <UnorderedList my={4}>
        <ListItem>
          Collaborated with a web developer to design and develop an online code
          collaboration platform that emulates about 20% functionality of Vim
          Text Editor including several Normal and Edit mode commands like gg,
          yy, etc.
        </ListItem>
        <ListItem>
          Used SlateJS and Tailwind CSS to build a responsive and user-friendly
          frontend and Amazon Amplify and GraphQL API for backend to handle
          mutations and subscriptions for live collaboration.
        </ListItem>
      </UnorderedList>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://dev.dvizee12em8wt.amplifyapp.com/">
            Code Collaboration Website & Vim Clone <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>GitHub</Meta>
          <Link href="https://github.com/Yash2017/Online-Vim">
            GitHub Link <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>ReactJS, NodeJS, GraphqQL, AWSAmplify</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/plainText.png" alt="walknote" />
      <WorkImage src="/images/works/impText.png" alt="walknote" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
