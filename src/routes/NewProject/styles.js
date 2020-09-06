import styled from 'styled-components';

const Wrapper = styled.div`
.project-title{
    text-align: center;
    margin-top: 40px;
}

.content{
    display: flex;
    padding: 10px;
    .editor-container{
        flex: 1;
        display: flex;
        justify-content: center;
    }
    .canvas-container{
        flex: 1;
        display: flex;
        justify-content: center;
    }
}

`

export default Wrapper;