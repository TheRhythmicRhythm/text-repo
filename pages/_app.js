import "../styles/globals.css";
import 'tailwindcss/tailwind.css'
import Layout from "../components/Layout";
import { motion } from 'framer-motion';6

function MyApp({ Component, pageProps,  router }) {
  return (
    <motion.div key={router.route}  initial="pageInitial" animate="pageAnimate" variants={{
      pageInitial: {
        opacity: 0, transition:{duration: 3}
      },
      pageAnimate: {
        opacity: 1, transition:{duration: 3}
      },
    }}>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </motion.div>
  );
}

export default MyApp;
