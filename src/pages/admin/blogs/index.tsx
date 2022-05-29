import dayjs from 'dayjs';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '@/components/admin/Layout';
import { getAllBlogs } from '@/lib/admin/blogs';
import { Blog, BlogCategory, BlogTag } from '@/types/admin/blogs';
import { getStateName } from '@/utils/utils';
dayjs.locale('ja');

type Props = {
    blogs: Blog[];
};

export default function AdminBlogIndex({ blogs }: Props) {
    return (
        <Layout title='ブログ一覧'>
            <div className='flex mt-20 justify-start items-center mr-auto'>
                <h2 className='text-4xl'>ブログ一覧</h2>
                <Link href='/admin/blogs/new' passHref>
                    <a className='ml-5 focus:outline-none text-brown hover:text-beige bg-beige hover:bg-brown focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5'>
                        新規登録
                    </a>
                </Link>
            </div>
            <div className='mt-10 relative overflow-x-auto shadow-md sm:rounded-lg'>
                <table className='w-full text-sm text-left text-gray-500'>
                    <thead className='text-xs text-beige uppercase bg-brown'>
                        <tr>
                            <th scope='col' className='px-6 py-3'>
                                アイキャッチ
                            </th>
                            <th scope='col' className='px-6 py-3'>
                                タイトル
                            </th>
                            <th scope='col' className='px-6 py-3'>
                                カテゴリー
                            </th>
                            <th scope='col' className='px-6 py-3'>
                                タグ
                            </th>
                            <th scope='col' className='px-6 py-3'>
                                公開日
                            </th>
                            <th scope='col' className='px-6 py-3'>
                                ステータス
                            </th>
                            <th scope='col' className='px-6 py-3'>
                                <span className='sr-only'>編集</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {blogs &&
                            blogs.map((b: Blog) => (
                                <tr
                                    key={b.id}
                                    className='bg-white border-b hover:bg-beige hover:text-brown'
                                >
                                    <th
                                        scope='row'
                                        className='px-6 py-4 font-medium whitespace-nowrap'
                                    >
                                        <div className='w-150px h-100px'>
                                            <Image
                                                src={b.eye_catch || '/images/no_image.jpg'}
                                                width={150}
                                                height={100}
                                                alt='tech-blog'
                                            />
                                            {/* <img src={b.eye_catch || 'https://placehold.jp/24/cc9999/993333/150x100.png'} className="object-cover" alt="" /> */}
                                        </div>
                                    </th>
                                    <td className='px-6 py-4'>{b.title}</td>
                                    <td className='px-6 py-4'>
                                        {b.categories &&
                                            b.categories.map((c: BlogCategory) => (
                                                <div
                                                    key={c.name}
                                                    className='last:mt-1 bg-green-100 text-green-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-900'
                                                >
                                                    {c.name}
                                                </div>
                                            ))}
                                    </td>
                                    <td className='px-6 py-4'>
                                        {b.tags &&
                                            b.tags.map((t: BlogTag) => (
                                                <div
                                                    key={t.name}
                                                    className='last:mt-1 bg-indigo-100 text-indigo-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-indigo-200 dark:text-indigo-900'
                                                >
                                                    {t.name}
                                                </div>
                                            ))}
                                    </td>
                                    <td className='px-6 py-4'>
                                        {dayjs(b.publish_at).format('YYYY年MM月DD日')}
                                    </td>
                                    <td className='px-6 py-4'>{getStateName(b.state)}</td>
                                    <td className='px-6 py-4 text-right'>
                                        <Link href='/admin/blogs'>
                                            <a className='focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800'>
                                                編集
                                            </a>
                                        </Link>
                                        <button className='focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900'>
                                            削除
                                        </button>
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
        </Layout>
    );
}

export async function getStaticProps() {
    const blogs = await getAllBlogs();
    return {
        props: { blogs },
        revalidate: 60 * 10,
    };
}
