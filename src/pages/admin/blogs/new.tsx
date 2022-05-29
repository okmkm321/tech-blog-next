import { useState } from 'react';
import Layout from '@/components/admin/Layout';
import Tiptap from '@/components/tiptap/Tiptap';
import { getAllCategories } from '@/lib/admin/categories';
import { getAllTags } from '@/lib/admin/tags';
import { Category } from '@/types/admin/categories';
import { Tag } from '@/types/admin/tags';

type Props = {
    categories: Category[];
    tags: Tag[];
};

export default function AdminBlogNew({ categories, tags }: Props) {
    const [selectedTags, setTags] = useState<number[]>([]);
    const setTag = (id: number) => {
        if (selectedTags.includes(id)) {
            const changeTags = selectedTags.filter((t: number) => t !== id);
            setTags(changeTags);
        } else {
            setTags([...selectedTags, id]);
        }
    };
    return (
        <Layout title='ブログ新規作成'>
            <div className='flex mt-20 justify-start items-center mr-auto'>
                <h2 className='text-4xl'>ブログ新規作成</h2>
            </div>
            <div className='bg-white shadow overflow-hidden sm:rounded-lg my-10'>
                <div className='px-4 py-5 sm:px-6'>
                    <h3 className='text-lg leading-6 font-medium text-gray-900'>
                        新規登録フォーム
                    </h3>
                    {/* <p className='mt-1 max-w-2xl text-sm text-gray-500'>
                        Personal details and application.
                    </p> */}
                </div>
                <div className='flex justify-between mb-10'>
                    <div className='border-t border-gray-200 w-4/12'>
                        <dl>
                            <div className='bg-beige bg-opacity-20 px-4 py-5'>
                                {/* <dt className='text-sm font-medium text-gray-500'>タイトル</dt> */}
                                <div className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                                    <label
                                        htmlFor='countries'
                                        className='block mb-2 text-sm font-medium text-brown'
                                    >
                                        カテゴリー選択
                                    </label>
                                    <select
                                        id='countries'
                                        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                                    >
                                        <option>カテゴリーを選択</option>
                                        {categories &&
                                            categories.map((c: Category) => (
                                                <option key={c.id} value={c.id}>
                                                    {c.name}
                                                </option>
                                            ))}
                                    </select>
                                </div>
                            </div>
                            <div className='bg-white bg-opacity-20 px-4 py-5'>
                                {/* <dt className='text-sm font-medium text-gray-500'>タイトル</dt> */}
                                <label
                                    htmlFor='countries'
                                    className='block mb-2 text-sm font-medium text-brown'
                                >
                                    タグ選択
                                </label>
                                <div className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                                    {tags &&
                                        tags.map((t: Tag) => (
                                            <span
                                                key={t.id}
                                                onClick={() => setTag(t.id)}
                                                className={`${
                                                    !selectedTags.includes(t.id)
                                                        ? 'bg-opacity-30 text-opacity-30'
                                                        : ''
                                                } hover:bg-opacity-60 hover:text-opacity-60 bg-indigo-100 text-indigo-800 cursor-pointer text-sm font-medium mr-2 px-2.5 py-0.5 rounded`}
                                            >
                                                {t.name}
                                            </span>
                                        ))}
                                </div>
                            </div>
                            <div className='bg-beige bg-opacity-20 px-4 py-5'>
                                {/* <dt className='text-sm font-medium text-gray-500'>タイトル</dt> */}
                                <div className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                                    <div className='relative z-0'>
                                        <input
                                            type='text'
                                            id='floating_standard'
                                            className='block pt-4 pb-1 px-0 w-full text-lg text-gray-800 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-brown peer'
                                            placeholder=' '
                                        />
                                        <label
                                            htmlFor='floating_standard'
                                            className='absolute text-lg text-brown duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-brown peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
                                        >
                                            タイトル
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className='bg-white px-4 py-5'>
                                {/* <dt className='text-sm font-medium text-gray-500'>公開ステータス</dt> */}
                                <div className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                                    <div className='flex'>
                                        <div className='flex items-center mr-4'>
                                            <input
                                                id='inline-radio'
                                                type='radio'
                                                value={0}
                                                name='inline-radio-group'
                                                className='w-4 h-4 text-brown bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2'
                                            />
                                            <label
                                                htmlFor='inline-radio'
                                                className='ml-2 text-sm font-medium text-brown'
                                            >
                                                下書き
                                            </label>
                                        </div>
                                        <div className='flex items-center mr-4'>
                                            <input
                                                id='inline-2-radio'
                                                type='radio'
                                                value={1}
                                                name='inline-radio-group'
                                                className='w-4 h-4 text-brown bg-gray-100 border-gray-300 focus:ring-blue focus:ring-2'
                                            />
                                            <label
                                                htmlFor='inline-2-radio'
                                                className='ml-2 text-sm font-medium text-brown'
                                            >
                                                非公開
                                            </label>
                                        </div>
                                        <div className='flex items-center mr-4'>
                                            <input
                                                id='inline-checked-radio'
                                                type='radio'
                                                value={2}
                                                name='inline-radio-group'
                                                className='w-4 h-4 text-brown bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2'
                                            />
                                            <label
                                                htmlFor='inline-checked-radio'
                                                className='ml-2 text-sm font-medium text-brown'
                                            >
                                                公開
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='bg-beige bg-opacity-20 px-4 py-5'>
                                {/* <dt className='text-sm font-medium text-gray-500'>公開日</dt> */}
                                <div className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                                    <div className='relative z-0'>
                                        <input
                                            type='date'
                                            id='floating_standard'
                                            className='block pt-4 pb-1 px-0 w-full text-lg text-gray-800 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-brown peer'
                                            placeholder=' '
                                        />
                                        <label
                                            htmlFor='floating_standard'
                                            className='absolute text-lg text-brown duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-brown peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
                                        >
                                            公開日
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className='bg-white px-4 py-5'>
                                {/* <dt className='text-sm font-medium text-gray-500'>
                                    説明文
                                </dt> */}
                                <div className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                                    <div className='relative z-0'>
                                        <textarea
                                            rows={3}
                                            id='floating_standard'
                                            className='block pt-4 pb-1 px-0 w-full text-lg text-gray-800 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-brown peer'
                                            placeholder=' '
                                        />
                                        <label
                                            htmlFor='floating_standard'
                                            className='absolute text-lg text-brown duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-brown peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
                                        >
                                            説明文
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </dl>
                    </div>
                    <div className='w-8/12 mx-5'>
                        <Tiptap />
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export async function getStaticProps() {
    const tags = await getAllTags();
    const categories = await getAllCategories();
    return {
        props: { tags, categories },
        revalidate: 60 * 10,
    };
}
