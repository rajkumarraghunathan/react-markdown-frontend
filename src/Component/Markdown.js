import React, { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'
import axios from 'axios'
import { API_URL } from '../API/api'

const Markdown = () => {

    const [content, setContent] = useState()


    useEffect(() => {

        getData()

    })
    const getData = async () => {
        axios.get(`${API_URL}/getContent`).then((data) => {
            setContent(data.data.content.content)
            console.log('get Call');
            console.log(data.data.content.content)
        }).catch(error => console.log(error))
    }


    console.log(content);
    return (
        <div>
            <h6>Markdown</h6>
            <div className="form-floating">
                <div style={{ height: "auto", border: 'solid 0.5px' }}>
                    <ReactMarkdown children={content} remarkPlugins={[gfm]} />
                </div>
            </div>
        </div>

    )
}

export default Markdown