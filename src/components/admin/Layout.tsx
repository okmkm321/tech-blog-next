import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

type LayoutProps = Required<{
    readonly children?: React.ReactNode;
    readonly title?: string;
}>;

const Layout = ({ children, title = 'tech-blog' }: LayoutProps) => {
    const router = useRouter();
    const pathName: string = router.pathname;
    let navBlog = 'hover:bg-brown hover:text-beige px-3 py-2 rounded';
    const navContact = 'hover:bg-brown hover:text-beige px-3 py-2 rounded';
    if (pathName.includes('/admin/blogs')) {
        navBlog = 'bg-brown text-beige px-3 py-2 rounded';
    }
    return (
        <div className=''>
            <Head>
                <title>{title}</title>
                <meta name='robots' content='noindex' />
                <link
                    href='https://fonts.googleapis.com/css2?family=Kaisei+Opti:wght@500&display=swap'
                    rel='stylesheet'
                />
            </Head>
            <header className='flex bg-beige w-full px-5 h-16'>
                <div className='relative w-36'>
                    <Image
                        src='/images/11324_color.png'
                        layout='fill'
                        objectFit='contain'
                        alt='tech-blog'
                    ></Image>
                </div>
                <nav className='flex pl-8 items-center'>
                    <div className='text-brown'>
                        <div className='flex space-x-4'>
                            <Link href='/admin/blogs'>
                                <a className={navBlog}>Blog</a>
                            </Link>
                            <Link href='/contact-page'>
                                <a className={navContact}>Contact</a>
                            </Link>
                        </div>
                    </div>
                </nav>
                <button
                    type='button'
                    className='ml-auto self-center text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-gray-600 dark:text-gray-600 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800'
                >
                    ログアウト
                </button>
            </header>
            <main className='flex flex-1 justify-center items-center w-screen flex-col max-w-screen-xl mx-auto'>
                {children}
            </main>
            <footer className='w-full h-6 flex justify-center items-center text-gray-500 text-sm'>
                @tech-blog 2022
            </footer>
        </div>
    );
};

export default Layout;
