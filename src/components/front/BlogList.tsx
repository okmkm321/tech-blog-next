import dayjs from 'dayjs'
import Link from 'next/link'
import Side from './Side'
import style from '@/components/front/BlogList.module.scss'
const BlogList = () => {
    const blogs = [
        {
            id: 1,
            eye_catch: "/images/dummy01.jpg",
            publish_at: '2022-05-09',
            title: 'Laravelアプリの雛形を作ってサーバを立ち上げるまで',
            tags: [
                {
                    name: 'JavaScript',
                },
                {
                    name: 'Laravel'
                }
            ]
        },
        {
            id: 2,
            eye_catch: "/images/dummy01.jpg",
            publish_at: '2022-05-12',
            title: 'JavaScriptとは何か？出来ることや勉強方法を詳しく解説',
            tags: [
                {
                    name: 'JavaScript',
                },
                {
                    name: 'Vue.js'
                }
            ]
        },
    ]
    return (
        <main className={style.blog_list_sec}>
            <ul className={style.blog_items}>
                {blogs && blogs.map((b) => 
                        <li className={style.blog_list} key={b.id}>
                            <Link href="/">
                                <a>
                                    <div className={style.img_container}>
                                        <img src={b.eye_catch} alt="" />
                                    </div>
                                    <div className={style.txt_block}>
                                        <time dateTime={dayjs(b.publish_at).format('YYYY-M-D')} itemProp="datepublished">{dayjs(b.publish_at).format('YYYY.MM.DD')}</time>
                                        <h2 className={style.blog_title}>{b.title}</h2>
                                        <ul className={style.tag_items}>
                                            {b.tags && b.tags.map((t) => 
                                                <li className={style.tag_list} key={t.name}>{t.name}</li>
                                                )}
                                        </ul>
                                    </div>

                                </a>
                            </Link>
                        </li>
                )}
            </ul>
            <Side></Side>
        </main>
    )
}

export default BlogList