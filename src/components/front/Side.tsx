import Link from 'next/link'
import style from '@/components/front/Side.module.scss'
const Side = () => {
    const sideNavs = [
        {
            id: 1,
            icon: '/images/dummy_icon2.png',
            name: 'フロントエンド',
            path: '/'
        },
        {
            id: 2,
            icon: '/images/dummy_icon1.png',
            name: 'バックエンド',
            path: '/'
        },
        {
            id: 3,
            icon: '/images/dummy_icon3.png',
            name: 'Tips',
            path: '/'
        },
        {
            id: 4,
            icon: '/images/dummy_icon4.png',
            name: '勉強',
            path: '/'
        },
        {
            id: 5,
            icon: '/images/dummy_icon5.png',
            name: 'その他',
            path: '/'
        },
    ]
    return (
        <aside className={style.side_nav}>
            <h3 className={style.nav_title}>Category</h3>
            <ul className={style.nav_items}>
                {sideNavs && sideNavs.map((s) => 
                    <li className={style.nav_list} key={s.id}>
                        <Link href={s.path}>
                            <a>
                                <div className={style.img_container}>
                                    <img src={s.icon} alt="" />
                                </div>
                                <h4 className="txt">{s.name}</h4>
                            </a>
                        </Link>
                    </li>
                )}
            </ul>

        </aside>
    )
}

export default Side