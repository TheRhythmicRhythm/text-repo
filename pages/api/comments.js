// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
/** *************************************************************
* Any file inside the folder pages/api is mapped to /api/* and  *
* will be treated as an API endpoint instead of a page.         *
*************************************************************** */
import { GraphQLClient, gql } from 'graphql-request';

const graphqlAPI = `https://api-eu-central-1.graphcms.com/v2/cky04z1a73ed301z2bh6bgerk/master`;
const graphcmsToken ='eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2NDE1NjkxNjcsImF1ZCI6WyJodHRwczovL2FwaS1ldS1jZW50cmFsLTEuZ3JhcGhjbXMuY29tL3YyL2NreTA0ejFhNzNlZDMwMXoyYmg2YmdlcmsvbWFzdGVyIiwiaHR0cHM6Ly9tYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiYThiZmE2YjgtNTViNi00YmEzLWJlMzctMmY2OTc4N2EzNmFjIiwianRpIjoiY2t5NGp3YndhMDlvdTAxejZoenduM3E0aSJ9.McgYGyG6LPdWdZVsFYisRZrvOI5INATjtsZDvnB07FUPSOGBA3sTThgx-6235-uree4cpdt9BoTfMBjNrpnJoskeytz1xvdY8N7j9PFp28Y8jjaicpwuotNe0pvpklpqy2U8uzm8p8nBurZzRYvHcikEYMktgZZYcHpzxUQ7U5Uji1GQ6tYXE29Jm97BAC1NHm6sD3mtJ-22kbCu8l2G3y5zCncE9kTRU1SLG9ADoiJDgeq5EGW1W-ajeTc2frJHeVkeH0eIM4n5-BpXJYjtfIL4oeL60KAIuR4StnitThNgKLWQSghc7d7M2uzgosO_7dLBupzJdnLxiNAqhId0z1zpYyYaXR1T7c0gC4N2E0bGsjdVoumdoSalgO8Ej02bkakQaDZ_xHOQapMLC5vIszztMT8dWw-wzsEMNveAh2J91PkWWbncBn-MYtsYTRI4jMTnrJBWQT6tD3boznDM1B37Ep3rolKLPtaa7s_SXl6S3PTL4Rr6lmSMD9QCsjMZPPG06Cf3AOYr0FeAak02P20i4rElZnZCWfNJ8sAKpvWlQOSj1fVBiBjgrMh59p0T79aMUTqv97heYvW3x5YDBkUKbw7ZCge8Aqyd-C9G2n7OouI5mOgboNqWbLlZQMZV7RCPohX1IFotjQU68iDPUQdjC_PCROlgby0OQQNMQkg'

export default async function comments(req, res) {
  console.log({graphcmsToken});
  
  const graphQLClient = new GraphQLClient(graphqlAPI, {
    headers: {
      authorization: `Bearer ${graphcmsToken}`
    }
  })

  const query = gql`
  mutation CreateComment($name: String!, $email: String!, $comment: String!, $slug: String!) {
    createComment(data: {name: $name, email: $email, comment: $comment, post: {connect: { slug: $slug } } } ) { id }
  }
 ` 
 
 try{
  const result = await graphQLClient.request(query, {
    name: req.body.name,
    email: req.body.email,
    comment: req.body.comment,
    slug: req.body.slug,
  });

  return res.status(200).send(result)
 }
 catch(error){
      console.log(error);
      return res.status(599).send(error);
 }
}