import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { API_URL } from '../API/api';
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'
import Header from './Header';



const TextArea = () => {

    // const [markdownCodes, setMarkdownCodes] = useState([]);
    const [content, setContent] = useState();
    const [message, setMessage] = useState();
    // const navigate = useNavigate();

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await axios.get(`${API_URL}/getContent`);
    //             setContent(response.data.content);
    //         } catch (error) {
    //             console.error('Failed to fetch content:', error);
    //         }
    //     };

    //     fetchData();
    // }, []);



    const handleInput = async () => {

        await axios.post(`${API_URL}/content`, {
            content: content
        }, { withCredentials: true }).then((response) => {
            console.log(response.data.content.content);
            if (response.data.content.message === "No Content") {
                return setMessage("No Content")
            }
            setMessage('Content Added Successfully....')
            console.log(content);
        }).catch((error) => {
            console.log(error.message);
        });

    }

    return (
        <>
            <Header />
            <div className='py-3'>
                <button type='button' className='btn btn-outline-success' onClick={handleInput}>Save</button>
            </div>
            <div className='py-3'>
                {message}
            </div>
            <div className='row'>
                <div className="col">
                    <h6>TextArea</h6>
                    <div className="form-floating">
                        <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: "100vh" }}
                            value={content}
                            onChange={(e) => setContent(e.target.value)}></textarea>
                    </div>
                </div>
                <div className="col">
                    <div>
                        <h6>Markdown</h6>
                        <div className="form-floating">
                            <div style={{ height: "auto" }}>
                                <ReactMarkdown children={content} remarkPlugins={[gfm]} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TextArea