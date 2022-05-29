import Image from 'next/image';
import Link from 'next/link';
import style from '@/components/front/top/Category.module.scss';

const Category = () => {
    const categories = [
        {
            name: 'フロントエンド',
            path: '/',
            robot: '/images/front/top/category/robo_red.png',
            gear: '/images/front/top/category/gear_red.png',
        },
        {
            name: 'バックエンド',
            path: '/',
            robot: '/images/front/top/category/robo_green.png',
            gear: '/images/front/top/category/gear_green.png',
        },
        {
            name: 'インフラ',
            path: '/',
            robot: '/images/front/top/category/robo_brown.png',
            gear: '/images/front/top/category/gear_brown.png',
        },
        {
            name: '便利機能',
            path: '/',
            robot: '/images/front/top/category/robo_blue.png',
            gear: '/images/front/top/category/gear_blue.png',
        },
        {
            name: 'Git',
            path: '/',
            robot: '/images/front/top/category/robo_beige.png',
            gear: '/images/front/top/category/gear_beige.png',
        },
    ];

    return (
        <section className={style.category}>
            <ul className={style.c_items}>
                {categories.map((c) => (
                    <Link href={c.path} key={c.name}>
                        <li className={style.c_list}>
                            <Image src={c.robot} width={260} height={330}></Image>
                            <h3 className={style.name_block}>
                                <Image src={c.gear} width={20} height={20}></Image>
                                <div className={style.text}>{c.name}</div>
                            </h3>
                        </li>
                    </Link>
                ))}
            </ul>
        </section>
    );
};

export default Category;
