import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { API_URL } from '../API/api';
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'
import Header from './Header';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const TextArea = () => {


    const [content, setContent] = useState();



    useEffect(() => {
        const fetchData = async () => {
            try {
                await axios.get(`${API_URL}/getContent`, { withCredentials: true }).then((response) => {
                    const data = response.data.content;
                    const value = data.map((data) => {
                        return data.content
                    })
                    const contentString = value.join('')
                    const modifiedString = contentString.replace(/\/n/g, "")

                    setContent(modifiedString)
                })
            } catch (error) {
                console.error('Failed to fetch content:', error);
            }
        };

        fetchData();
    }, []);



    const handleInput = async () => {

        await axios.post(`${API_URL}/content`, {
            content: content
        }, { withCredentials: true }).then((response) => {
            if (response.data.content.message === "No Content") {
                return toast("No Content");
            }
            toast('Content Added Successfully....')
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
                <ToastContainer />
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