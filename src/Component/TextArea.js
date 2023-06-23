import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { API_URL } from '../API/api';
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'
import Header from './Header';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MdDarkMode } from 'react-icons/md';
import { BsSun } from 'react-icons/bs';
import DemoNote from './DemoNote';

const TextArea = () => {


    const [content, setContent] = useState();
    const [mode, setMode] = useState(false);


    const isDark = () => {
        setMode(false)
    }

    const isLight = () => {
        setMode(true)
    }


    useEffect(() => {
        const fetchData = async () => {
            try {
                await axios.get(`${API_URL}/getContent`, {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true,
                    // credentials: "include"
                }).then((response) => {
                    const data = response.data.content;
                    console.log(data);
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
        <div className={mode ? ('darkMode') : ('lightMode')}>
            <div className=''>
                <Header />
            </div>
            <div className='d-flex justify-content-around'>
                <span className='mt-2'><DemoNote /></span>
                <sapn className='mt-2'>
                    <button type='button' className='btn save-button' onClick={handleInput}>Save</button>
                </sapn>
                {mode ? (<div className='mt-2'><button className='btn btn-light' onClick={isDark}><BsSun /></button></div>) : (<div className='mt-2 '><button className='btn btn-dark border' onClick={isLight}><MdDarkMode /></button></div>)}
            </div>
            <div className='py-3'>
                <ToastContainer />
            </div>
            <div className="row">
                <div className="col">
                    <h4>TextArea</h4>
                    <div className="form-floating">
                        <textarea className={mode ? ("form-control darkMode") : ("form-control lightMode")} placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: "100vh" }}
                            value={content}
                            onChange={(e) => setContent(e.target.value)}></textarea>
                    </div>
                </div>
                <div className="col">
                    <div>
                        <h4>Markdown</h4>
                        <div className="form-floating">
                            <div style={{ height: "auto" }}>
                                <ReactMarkdown className='scroll-container ' children={content} remarkPlugins={[gfm]} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TextArea