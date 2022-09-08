import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  UnorderedList
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Inkdrop">
    <Container>
      <Title>
        InRadius <Badge>2022-Present</Badge>
      </Title>
      <P>
        A hyperlocal job hunting platform based out of Mumbai which connects job
        seekers and employers within a defined radius. Its our core purpose is
        to help reduce the daily commute time to work. With reduced daily
        commute time the world can finally achieve a better work-life balance
        and will also improve the happiness index of the workforce.
      </P>
      <UnorderedList my={4}>
        <ListItem>
          Designed and engineered the Admin Panel for the platform in Next.js by
          writing over 3000 lines of code in TypeScript that fetches the data
          from the MongoDB Database and displays it in a table allowing users to
          perform operations including CRUD operations for advertising data,
          sending promotional emails to a profile group etc. Thus, increasing
          user retention by 20%.
        </ListItem>
        <ListItem>
          Developed the GraphQL server in NodeJS with Apollo-Express framework
          and used Redis to cache frequently accessed data. Integrated Bull-MQ
          queuing system for offloading heavy work like data updating from
          server to smaller workers which resulted in 45% increase in server
          performance.
        </ListItem>
        <ListItem>
          Deployed the server on AWS Elasticbeanstalk and setup application load
          balancing to ensure zero downtime during peak usage hours. Deployed
          the Admin Panel and the Client website on AWS Amplify and implemented
          CI/CD using AWS CodePipeline and GitHub for quick and fast deployment.
        </ListItem>
      </UnorderedList>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://dev.inradius.in/">
            https://www.inradius.in/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Website</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>NextJS, ExpressJS, MongoDB, GraphQL</span>
        </ListItem>
      </List>
      <WorkImage src="/images/works/inradius.png" alt="Inkdrop" />
      <WorkImage src="/images/works/inradius-login.png" alt="Inkdrop" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
