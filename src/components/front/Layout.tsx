import Head from 'next/head'
import Image from 'next/image'
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

    const tags = [
        {
            name: "Node.js",
            path: "/",
            image: "/images/dummy_icon1.png"
        },
        {
            name: "Nuxt",
            path: "/",
            image: "/images/dummy_icon1.png"
        },
        {
            name: "JavaScript",
            path: "/",
            image: "/images/dummy_icon1.png"
        },
        {
            name: "Vue",
            path: "/",
            image: "/images/dummy_icon1.png"
        },
        {
            name: "React",
            path: "/",
            image: "/images/dummy_icon1.png"
        },
        {
            name: "CSS",
            path: "/",
            image: "/images/dummy_icon1.png"
        },
        {
            name: "jQuery",
            path: "/",
            image: "/images/dummy_icon1.png"
        },
        {
            name: "Docker",
            path: "/",
            image: "/images/dummy_icon1.png"
        },
    ]

    const categories = [
        {
            id: 1,
            name: 'バックエンド',
            path: '/',
        },
        {
            id: 2,
            name: 'フロントエンド',
            path: '/',
        },
        {
            id: 3,
            name: '便利機能',
            path: '/',
        },
        {
            id: 4,
            name: 'インフラ',
            path: '/',
        },
        {
            id: 5,
            name: '勉強',
            path: '/',
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
            <footer className={style.footer}>
                <div className={style.footer_wrapper}>
                    <div className={style.robo1_block}>
                        <div className={`${style.body} ${style.parts}`}>
                            <img src="/images/front/robot/robo1/robo1_body.png" alt="" />
                        </div>
                        <div className={`${style.right_arm} ${style.parts}`}>
                            <img src="/images/front/robot/robo1/robo1_right_arm.png" alt="" />
                        </div>
                        <div className={`${style.left_arm} ${style.parts}`}>
                            <img src="/images/front/robot/robo1/robo1_left_arm.png" alt="" />
                        </div>
                        <div className={`${style.hip} ${style.parts}`}>
                            <img src="/images/front/robot/robo1/robo1_hip.png" alt="" />
                        </div>
                        <div className={`${style.right_reg} ${style.parts}`}>
                            <img src="/images/front/robot/robo1/robo1_right_reg.png" alt="" />
                        </div>
                        <div className={`${style.left_reg} ${style.parts}`}>
                            <img src="/images/front/robot/robo1/robo1_left_reg.png" alt="" />
                        </div>
                        <div className={`${style.face} ${style.parts}`}>
                            <img src="/images/front/robot/robo1/robo1_face.png" alt="" />
                        </div>
                        <div className={`${style.bg} ${style.parts}`}>
                            
                        </div>
                    </div>
                    <div className={style.footer_inner}>
                        <div className={style.tags_block}>
                            <h3 className={style.title}>Tag</h3>
                            <ul className={style.tag_items}>
                                {tags && tags.map((t) => 
                                <li className={style.tag_list} key={t.name}>
                                    <Link href={t.path}>
                                        <a>
                                            {/* <Image src={t.image} width={30} height={30}></Image> */}
                                            <Image src={t.image} layout="fill" objectFit='contain' objectPosition={"0% 50%"}></Image>
                                            <h4 className={style.txt}>{t.name}</h4>
                                        </a>
                                    </Link>
                                </li>
                                )}
                            </ul>
                        </div>
                        <div className={style.category_block}>
                            <h3 className={style.title}>Category</h3>
                            <ul className={style.category_items}>
                                {categories && categories.map((c) => 
                                <li className={style.category_list} key={c.name}>
                                    <Link href={c.path}>
                                        <a>
                                            <h4 className={`${style.name}`}>{c.name}</h4>
                                            <div className={style.img_container}>
                                                <img src={`/images/front/footer/category_robo${c.id}.png`} alt="" />
                                            </div>
                                        </a>
                                    </Link>
                                </li>
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Layout
