import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import remarkGfm from 'remark-gfm';
import rehypeRaw from "rehype-raw";

export default function MarkdownRenderer({ content }) {
    return (
        <ReactMarkdown className="markdown--content"
            children={content}
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]} // Enable raw HTML processing
            components={{
                code({ node, inline, className, children, ...props }) {
                    const match = /language-(\w+)/.exec(className || "");
                    return !inline && match ? (
                        <pre className="markdown--code-block" {...props}>    
                            <SyntaxHighlighter
                                language={match[1]}
                                {...props}
                            >
                            {String(children).replace(/\n$/, "")}
                            </SyntaxHighlighter>
                        </pre>
                    ) : (
                        <code className={className} {...props}>
                            {children}
                        </code>
                    );
                },
            }}
        >
        </ReactMarkdown>
    );
}
