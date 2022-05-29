import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight';
import Document from '@tiptap/extension-document';
import Dropcursor from '@tiptap/extension-dropcursor';
import Image from '@tiptap/extension-image';
import Paragraph from '@tiptap/extension-paragraph';
import Text from '@tiptap/extension-text';
import TextAlign from '@tiptap/extension-text-align';
// import TextStyle from '@tiptap/extension-text-style'
import { useEditor, EditorContent, ReactNodeViewRenderer } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import lowlight from 'lowlight';
import { AppEditorButton } from './AppEditorButton';
import styles from './AppEditorButton/style.module.scss';
import { codeBlockComponent } from './CodeBlock/CodeBlock';
import 'remixicon/fonts/remixicon.css';
// import { Color } from '@tiptap/extension-color'

const MenuBar = ({ editor }: any) => {
    if (!editor) {
        return null;
    }
    const addImage = () => {
        const url = window.prompt('URL');

        if (url) {
            editor.chain().focus().setImage({ src: url }).run();
        }
    };

    return (
        <>
            <AppEditorButton
                onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
                isActive={editor.isActive('heading', { level: 1 })}
            >
                <i className='ri-h-1'></i>
            </AppEditorButton>
            <AppEditorButton
                onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
                isActive={editor.isActive('heading', { level: 2 })}
            >
                <i className='ri-h-2'></i>
            </AppEditorButton>
            <AppEditorButton
                onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
                isActive={editor.isActive('heading', { level: 3 })}
            >
                <i className='ri-h-3'></i>
            </AppEditorButton>
            <AppEditorButton
                onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
                isActive={editor.isActive('heading', { level: 3 })}
            >
                <i className='ri-h-4'></i>
            </AppEditorButton>
            <AppEditorButton
                onClick={() => editor.chain().focus().toggleBold().run()}
                isActive={editor.isActive('bold')}
            >
                <i className='ri-bold'></i>
            </AppEditorButton>
            <AppEditorButton
                onClick={() => editor.chain().focus().toggleItalic().run()}
                isActive={editor.isActive('italic')}
            >
                <i className='ri-italic'></i>
            </AppEditorButton>
            <AppEditorButton
                onClick={() => editor.chain().focus().toggleCode().run()}
                isActive={editor.isActive('code')}
            >
                <i className='ri-code-line'></i>
            </AppEditorButton>
            <AppEditorButton
                onClick={() => editor.chain().focus().toggleCodeBlock().run()}
                isActive={editor.isActive('codeBlock')}
            >
                <i className='ri-code-box-line'></i>
            </AppEditorButton>
            <AppEditorButton
                onClick={() => editor.chain().focus().toggleBulletList().run()}
                isActive={editor.isActive('bulletList')}
            >
                <i className='ri-list-unordered'></i>
            </AppEditorButton>
            <AppEditorButton
                onClick={() => editor.chain().focus().toggleOrderedList().run()}
                isActive={editor.isActive('orderedList')}
            >
                <i className='ri-list-ordered'></i>
            </AppEditorButton>
            <AppEditorButton
                onClick={() => editor.chain().focus().setTextAlign('left').run()}
                isActive={editor.isActive({ textAlign: 'left' })}
            >
                <i className='ri-align-left'></i>
            </AppEditorButton>
            <AppEditorButton
                onClick={() => editor.chain().focus().setTextAlign('center').run()}
                isActive={editor.isActive({ textAlign: 'center' })}
            >
                <i className='ri-align-center'></i>
            </AppEditorButton>
            <AppEditorButton
                onClick={() => editor.chain().focus().setTextAlign('right').run()}
                isActive={editor.isActive({ textAlign: 'right' })}
            >
                <i className='ri-align-right'></i>
            </AppEditorButton>
            <AppEditorButton
                onClick={() => editor.chain().focus().setTextAlign('justify').run()}
                isActive={editor.isActive({ textAlign: 'justify' })}
            >
                <i className='ri-align-justify'></i>
            </AppEditorButton>
            <AppEditorButton
                onClick={() => editor.chain().focus().setTextAlign('justify').run()}
                isActive={editor.isActive({ textAlign: 'justify' })}
            >
                <i className='ri-align-justify'></i>
            </AppEditorButton>
            <AppEditorButton onClick={addImage}>
                <i className='ri-image-line'></i>
            </AppEditorButton>
            <AppEditorButton
                onClick={() => editor.chain().focus().toggleBlockquote().run()}
                isActive={editor.isActive('blockquote')}
            >
                <i className='ri-double-quotes-l'></i>
            </AppEditorButton>
            <AppEditorButton onClick={() => editor.chain().focus().setHorizontalRule().run()}>
                <i className='ri-separator'></i>
            </AppEditorButton>
            <AppEditorButton onClick={() => editor.chain().focus().setHardBreak().run()}>
                <i className='ri-text-wrap'></i>
            </AppEditorButton>
            <AppEditorButton onClick={() => editor.chain().focus().undo().run()}>
                <i className='ri-arrow-go-back-line'></i>
            </AppEditorButton>
            <AppEditorButton onClick={() => editor.chain().focus().redo().run()}>
                <i className='ri-arrow-go-forward-line'></i>
            </AppEditorButton>
            <AppEditorButton onClick={() => editor.chain().focus().unsetAllMarks().run()}>
                <i className='ri-format-clear'></i>
            </AppEditorButton>
            <EditorContent className={styles.AppEditor} editor={editor} />
        </>
    );
};

export default () => {
    const editor = useEditor({
        extensions: [
            StarterKit,
            TextAlign.configure({
                types: ['heading', 'paragraph'],
            }),
            Document,
            Paragraph,
            Text,
            CodeBlockLowlight.extend({
                addNodeView() {
                    return ReactNodeViewRenderer(codeBlockComponent);
                },
            }).configure({ lowlight }),
            Image,
            Dropcursor,
        ],
        content: ``,
    });

    return (
        <div>
            <MenuBar editor={editor} />
            <EditorContent editor={editor} />
        </div>
    );
};
