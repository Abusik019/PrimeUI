import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useState } from "react";
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const CodeDisplay = ({ codeString }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div
            style={{
                padding: "20px",
                borderRadius: "5px",
                position: 'relative'
            }}
        >
            <SyntaxHighlighter
                language="javascript"
                style={atomOneDark}
                customStyle={{
                    backgroundColor: "#0E222E",
                    border: "1px solid #fff",
                    padding: '20px',
                    borderRadius: "5px",
                }}
            >
                {codeString}
            </SyntaxHighlighter>
            <CopyToClipboard text={codeString} onCopy={handleCopy}>
                <button
                    style={{
                        marginTop: "10px",
                        padding: "10px 20px",
                        borderRadius: "5px",
                        cursor: "pointer",
                        backgroundColor: "#fff",
                        position: 'absolute',
                        top: '40px',
                        right: '40px'
                    }}
                >
                    {copied ? "Copied!" : "Copy Code"}
                </button>
            </CopyToClipboard>
        </div>
    );
};
export default CodeDisplay;
