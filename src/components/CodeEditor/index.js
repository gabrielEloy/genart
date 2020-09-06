import React from "react";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-javascript";
/* import "ace-builds/src-noconflict/theme-github"; */
import "ace-builds/src-noconflict/theme-dracula";


const CodeEditor = props => {
    return (
        <AceEditor
            mode="javascript"
            theme="dracula"
            onChange={props.onChange}
            name={props.name}
            value={props.value}
            showGutter={true}
            fontSize={14}
            highlightActiveLine={true}
            setOptions={{
                enableBasicAutocompletion: true,
                enableLiveAutocompletion: true,
                enableSnippets: false,
                showLineNumbers: true,
                tabSize: 2,
            }}
            {...props}
        />
    )
}
export default CodeEditor