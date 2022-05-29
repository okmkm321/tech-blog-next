import type { NextPage } from 'next';
import Image from 'next/image';
import { useState } from 'react';
import styles from './index.module.scss';
import Layout from '@/components/front/Layout';
import Category from '@/components/front/top/Category';

const Index: NextPage = () => {
    const buildStyle = {
        filter: 'drop-shadow(2px 4px 6px black)',
    };

    const [faceClassName, setFaceClassName] = useState<string>(`${styles.mv_face} ${styles._init}`);

    setTimeout(() => {
        setFaceClassName(styles.mv_face);
    }, 1000);

    return (
        <>
            <div className={styles.mv}>
                <div className={faceClassName}>
                    <Image
                        src='/images/front/mv/face.png'
                        width={818}
                        height={833}
                        alt='tech-blog'
                    ></Image>
                </div>
                <Image
                    src='/images/front/mv/buildings.png'
                    layout='fill'
                    objectFit='cover'
                    alt='tech-blog'
                    style={buildStyle}
                ></Image>
            </div>
            <Layout title='トップ'>
                <Category></Category>
            </Layout>
        </>
    );
};

export default Index;
