import React, { useState, useRef, useEffect } from 'react'
import Wrapper from './styles';

const Canvas = ({ js }) => {
    const [canvasSize, setCanvasSize] = useState(0)

    const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

    const containerRef = useRef();
    const iframeRef = useRef();

    const getCanvasContainerDimensions = () => {
        const clientWidth = containerRef.current?.parentElement?.clientWidth
        const clientHeight = containerRef.current?.parentElement?.clientHeight

        setDimensions({ width: clientWidth, height: clientHeight })
    }

    const getCanvasDimensions = () => {
        const { width, height } = dimensions;

        if (!width || !height) {
            return
        }

        const canvasDimensions = width > height
            ? height
            : width

        setCanvasSize(canvasDimensions);
    }

    const setCanvasProperties = () => {
        if (iframeRef.current && canvasSize) {
            const iframe = iframeRef.current;
            const document = iframe.contentDocument;
            console.log({iframe})
            const documentContents = `
          <!DOCTYPE html>
          <html lang="en">
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>Document</title>
          </head>
          <body>
          <canvas id="myCanvas" width="${canvasSize}" height="${canvasSize}" style="border:1px solid #000000;">

            <script type="text/javascript">
              ${js}
            </script>
          </body>
          </html>
        `;

            try{
                document.open();
                document.write(documentContents);
                document.close();
            } catch (err){
                //do nothing
            }
        }
    }

    useEffect(() => {
        getCanvasContainerDimensions();
    }, [containerRef, iframeRef])

    useEffect(() => {
        getCanvasDimensions();
    }, [dimensions])

    useEffect(() => {
        setCanvasProperties()
    }, [canvasSize, js])


    return (
        <Wrapper ref={containerRef}>
            <iframe title="result" className="iframe" ref={iframeRef} />
        </Wrapper>
    )
}

export default Canvas
