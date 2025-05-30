import { useState } from 'react'
import Modal from '../components/Modal'

const Post = () => {
    const [mode, setMode] = useState(null)
    return (
        <div className="post-page">
            <div className="post-page-container">
                <div className="info-container">
                    <div className="title-container">
                        <h1>xxx</h1>
                        <h4>xxx</h4>
                        <p>xxx</p>
                    </div>
                    <div className="button-container">
                        <button>x</button>
                        <button onClick={()=> setMode('edit')}>✎</button>
                    </div>
                </div>
                {mode && <Modal mode={mode} setMode={setMode} />}
            </div>
        </div>

    )
}

export default Post