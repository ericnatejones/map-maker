import React, {useState} from 'react'


export default function Uploader() {
    const [spriteMap, setSpriteMap] = useState("")
    const [uploading, setUploading] = useState(true)
    
    const onChange = e => {
        console.log(e.target.files)
        setUploading(true)
    
        fetch(`/image-upload`, {
            method: 'POST',
            body: e.target.files[0]
        })
        .then(res => res.json())
        .then(image => {
            setUploading(false) 
            setSpriteMap(image)
        })
    }

    const removeImage = () => {
        setSpriteMap("")
    }

    const content = () => {
        switch(true) {
            case uploading:
                return <div>uploading</div>
            case spriteMap.length > 0:
                return <button removeImage={removeImage}>Remove Image</button> 
            default:
                return <button onChange={onChange}>upload</button>
        }
    }

    return (
        <div>
            <div className='buttons'>
                {content()}
                <input type='file' id='single' onChange={onChange} /> 
                <img src={spriteMap.secure_url} alt='sprite-map' />
            </div>
        </div>
    )
}
