import React from 'react'

const AddEvent = () => {
    return (
        <div className="col-12 mt-3 p-3 shadow cardAdd bg-white rounded-3">
            <h2 className="text-center p-1">Add Event</h2>
            <div class="input-group mb-2">
                <span class="input-group-text" id="inputGroup-sizing-default">
                Title
                </span>
                <input
                type="text"
                class="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default"
                />
            </div>
            <div className="d-flex justify-content-center align-items-center">
                <div class="input-group mb-2 me-2">
                    <span class="input-group-text" id="inputGroup-sizing-default">
                    Location
                    </span>
                    <input
                    type="text"
                    class="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-default"
                    />
                </div>
                <div class="input-group mb-2 mx-2">
                    <span class="input-group-text" id="inputGroup-sizing-default">
                    Date
                    </span>
                    <input
                    type="text"
                    class="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-default"
                    />
                </div>
                <div class="input-group mb-2 ms-2">
                    <span class="input-group-text" id="inputGroup-sizing-default">
                    Time
                    </span>
                    <input
                    type="text"
                    class="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-default"
                    />
                </div>
            </div>
            <div className="d-flex justify-content-end">
                <div className="btn btn-primary px-5">Add</div>
            </div>
        </div>
    )
}

export default AddEvent