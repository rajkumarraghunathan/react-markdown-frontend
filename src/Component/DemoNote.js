import React from 'react'

const DemoNote = () => {
    return (
        <>
            <button type="button" className="btn bg-warning text-white" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Markdown CheatSheat
            </button>


            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Markdown CheatSheat</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <a href='https://www.markdownguide.org/cheat-sheet/'>https://www.markdownguide.org/cheat-sheet/</a>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DemoNote