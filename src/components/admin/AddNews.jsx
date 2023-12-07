import React from 'react'

const AddNews = () => {
    return (
        <div className="col-12 mt-3 p-3 shadow cardAdd bg-white rounded-3">
            <h2 className="text-center p-1">Add News</h2>
            <div className="input-group mb-2">
                <span className="input-group-text" id="inputGroup-sizing-default">
                Title
                </span>
                <input
                type="text"
                className="form-control"
                />
            </div>
            <div className="input-group mb-2">
                <span className="input-group-text">description</span>
                <textarea
                    className="form-control"
                ></textarea>
            </div>
            <div className="d-flex justify-content-end">
                <div className="btn btn-primary px-5">Add News</div>
            </div>
        </div>
    )
}

export default AddNews