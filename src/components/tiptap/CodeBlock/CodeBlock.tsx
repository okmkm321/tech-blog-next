import { NodeViewWrapper, NodeViewContent } from '@tiptap/react'
import React from 'react'
import styles from './CodeBlock.module.scss'

export const codeBlockComponent = () => ({
    node: {
        attrs: { language: defaultLanguage },
    },
    updateAttributes,
    extension,
}: any) => (
    <NodeViewWrapper className={styles.codeBlock}>
        <select
            contentEditable={false}
            defaultValue={defaultLanguage}
            onChange={(event) => updateAttributes({ language: event.target.value })}
        >
            <option value='null'>auto</option>
            <option disabled>—</option>
            {extension.options.lowlight.listLanguages().map((lang: string, index: number) => (
                <option key={index} value={lang}>
                    {lang}
                </option>
            ))}
        </select>
        <pre>
            <NodeViewContent as='code' />
        </pre>
    </NodeViewWrapper>
)
