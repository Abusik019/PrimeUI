import Editor from "@monaco-editor/react";
import { useState, useEffect } from "react";

const CodeDisplay = ({ codeString }) => {
    const html = `<html>
        <body>
            <h1>Contact Us</h1>
            <form>
            <label>Name:</label>
            <input id="name" type="text" />
            <label>Email:</label>
            <input id="email" type="text" />
            </form>













        </body>
        </html>`;

    const [editorHeight, setEditorHeight] = useState('100px');

    function handleEditorValidation(markers) {
        // model markers
        markers.forEach((marker) => console.log("onValidate:", marker.message));
    }
    
    function handleSizeChange(editor, monaco) {
        const line = 20;
        const number = editor.split('\n').length;
        const height = Math.max(line * number, 200);

        console.log(number)
        
        setEditorHeight(height);
    }

    useEffect(() => {
        handleSizeChange(html)
    }, [])

    return (
        <Editor
            width="100%"
            height={editorHeight}
            defaultLanguage="javascript"
            defaultValue={html}
            onValidate={handleEditorValidation}
            theme="vs-dark"
            options={{
                readOnly: true,
                minimap: { enabled: false },
                scrollbar: {
                    vertical:"hidden",
                    horizontal: "hidden",
                    handleMouseWheel:false,
                },
                tabSize: 4,
                insertSpaces: true,
            }}    
            overviewRulerLanes={0}
            onChange={handleSizeChange}
        />
    );
};

export default CodeDisplay;
