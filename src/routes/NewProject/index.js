import React, { useState } from 'react';
import Wrapper from './styles';

import CodeEditor from '../../components/CodeEditor'
import Canvas from '../../components/Canvas';

import jsInitialCode from '../../constants/initialCode/javascript'

const NewProject = () => {
    const [code, setCode] = useState(jsInitialCode);

    const handleCodeChange = typedCode => setCode(typedCode)
    
    return (
        <Wrapper>
            <h2 className="project-title">New Project</h2>
            <div className="content">
                <div className="editor-container">
                    <CodeEditor 
                        value={code}
                        onChange={handleCodeChange}
                    />
                </div>
                <div className="canvas-container" >
                    <Canvas js={code}/>
                </div>
            </div>
            <button>run</button>
        </Wrapper>
    )
}

export default NewProject
