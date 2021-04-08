import Head from 'next/head'
import Link from 'next/link'
import Footer from '../comps/Footer'
import Navbar from '../comps/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas"/>
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>Lorem ninja ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut ninja wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit ninja lobortis nisl ut aliquip ex ea commodo consequat. Duis ninja autem vel eum iriure dolor in hendrerit in vulputate ninja velit esse molestie consequat, vel illum dolore eu feugiat nulla ninja facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam ninja ipsum liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi ninja non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes ninja demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas ninja est etiam processus dynamicus, qui ninja sequitur mutationem consuetudium lectorum. Mirum ninja est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima. Eodem ninja ipsum modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in ninja futurum.</p>
        <p className={styles.text}>Lorem ninja ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut ninja wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit ninja lobortis nisl ut aliquip ex ea commodo consequat. Duis ninja autem vel eum iriure dolor in hendrerit in vulputate ninja velit esse molestie consequat, vel illum dolore eu feugiat nulla ninja facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam ninja ipsum liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi ninja non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes ninja demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas ninja est etiam processus dynamicus, qui ninja sequitur mutationem consuetudium lectorum. Mirum ninja est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima. Eodem ninja ipsum modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in ninja futurum.</p>
        <Link href="/ninjas">
          <a className={styles.btn}>See Ninja Listing</a>
        </Link>
      </div>
    </>
  )
}
