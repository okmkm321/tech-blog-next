import Head from 'next/head'
import Link from 'next/link'
import style from '@/components/front/Layout.module.scss'

type LayoutProps = Required<{
    readonly children?: React.ReactNode
    readonly title?: string
}>

const Layout = ({ children, title = 'tech-blog' }: LayoutProps) => {
    const navigation = [
        {
            name: 'PORTFOLIO',
            path: '/portfolio',
        },
        {
            name: 'CONTACT',
            path: '/contact',
        },
    ]

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name='robots' content='index follow' />
                <link
                    href='https://fonts.googleapis.com/css2?family=DotGothic16&display=swap'
                    rel='stylesheet'
                />
            </Head>
            <header className={style.header}>
                <div className={style.nav_block}>
                    <nav>
                        <Link href='/'>
                            <h1 className={style.title}>jancode</h1>
                        </Link>
                        <div className={style.right_nav}>
                            <ul className={style.nav_items}>
                                {navigation.map((n) => (
                                    <Link href={n.path} key={n.name}>
                                        <li className={style.nav_list}>{n.name}</li>
                                    </Link>
                                ))}
                            </ul>
                            <div className={style.search_input}>
                                <input type='text' />
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
            <main className={style.main}>{children}</main>
        </>
    )
}

export default Layout
