import Head from 'next/head'
import css from "./styles.less"

export default () =>
  <div>
    <Head>
      <title>My page title</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <p className={css.example}>Hello world!</p>
  </div>


  