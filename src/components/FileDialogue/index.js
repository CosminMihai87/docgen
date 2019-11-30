import React, { useRef, useEffect } from 'react';
import {
    Button
} from 'carbon-components-react';
import './FileDialogue.scss';

const FileDialogue = () => {

    const inputFile = useRef(null);

    const handleFileSelect = (event) => {
        event.preventDefault();
        inputFile.current.click();
    };

    useEffect(()=> {
        console.log(inputFile.current.files)
    },[inputFile]);

    return (
        <>
            <input
                type='file'
                id='file'
                ref={inputFile}
                style={{display: 'none'}}
            />
            <Button
                className="test"
                disabled={false}
                kind="primary"
                onClick={(event) => handleFileSelect(event)}
                tabIndex={0}
                type="submit"
            >
                Select files
            </Button>
        </>
    );
};

export default FileDialogue;
