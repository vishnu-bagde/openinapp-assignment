import React, { useEffect, useRef, useState } from 'react'
import Button from '../../core/Button'
import Icon from '../../core/Icon'
import './upload.scss'
import { isEmpty } from '../../../service/commonServices'
import { parse } from 'papaparse'
import UploadList from './UploadList'

const Upload = () => {

    const [fileValue, setFileValue] = useState(null)
    const [error, setError] = useState()
    const [showUpload, setShowUpload] = useState(false)
    const [uploadArr, setUploadArr] = useState([])
    const fileRef = useRef()

    useEffect(() => {
        if (isEmpty(fileValue)) {
            fileRef.current.value = ""
        }
        return () => {
            // Cleanup function when component is unmounted or when the timeout completes
            clearTimeout();
        };
    }, [fileValue])

    const onFileChange = () => {
        if (!isEmpty(fileRef.current.files)) {
            const selectedFile = fileRef.current.files[0];
            setError("")
            setShowUpload(false)
            setFileValue(selectedFile.name)
            
            const allowedExtensions = ['csv'];
            const fileExtension = selectedFile.name.slice(((selectedFile.name.lastIndexOf(".") - 1) >>> 0) + 2);
            
            if (!allowedExtensions.includes(fileExtension.toLowerCase())) {
                setError("Only CSV files are allowed.")
                setFileValue(null)
                fileRef.current.value = ""
            }
        }
    };

    const fileHandler = (e) => {
        e.preventDefault();

        if (!isEmpty(fileValue)) {
            setError("")

            setShowUpload("loading")
            setTimeout(() => {
                setShowUpload(true)
            }, 1000);

            parse(fileRef.current.files[0], {
                skipEmptyLines: true,
                escapeFormulae: true,
                error: function (err, file, inputElem, reason) {
                    setError(reason)
                },
                complete: function (results) {
                    setFileValue(null)
                    // console.log(results.data);
                    setUploadArr(results.data);
                }
            });

        } else {
            setError("Please attach a CSV file")
        }
    }

    return (
        <>
            <form onSubmit={(e) => fileHandler(e)} className="upload--form margin--auto margin--auto-vertical flex flex--direction-column pd--15 bg--white bg--radius-10">
                <div className="flex flex--align-items-center flex--justify-content-center upload--form-group width--column-flex position--relative bg--radius-10">
                    <div className='upload--form-container font--center'>
                        <Icon icoName="excel" paths={11} size={40} className="display--block mb--15" />
                        {
                            isEmpty(fileValue) ?
                                <>
                                    <label htmlFor="dropExcel" className="cursor--pointer display--block fs--16 mb--10 font--family-figtree font--normal color--grey font--center position--relative">
                                        Drop your excel sheet here or <span className="color--blue">browse</span>
                                    </label>
                                    {
                                        !isEmpty(error) ?
                                            <span className="fs--14 font--family font--normal color--error mt--15">{error}</span>
                                            : ''
                                    }
                                </>
                                :
                                <>
                                    <span className="display--block fs--16 font--family-figtree font--normal color--grey">
                                        {fileValue}
                                    </span>
                                    {
                                        !isEmpty(error) ?
                                            <span className="fs--14 display--block font--family font--normal color--error mt--15">{error}</span>
                                            : ''
                                    }
                                    <button className="fs--14 font--family-figtree font--normal color--error mt--15 position--relative" onClick={() => setFileValue(null)}>
                                        Remove
                                    </button>
                                </>
                        }
                    </div>
                    <input onChange={(e) => onFileChange(e)} ref={fileRef} type="file" className="position--absolute file--input width--column-one" name="dropExcel" id="dropExcel" accept=".csv" />
                </div>

                <Button className={`${showUpload == "loading" ? 'loading' : ''} upload--form-submit font--family-figtree bg--blue color--white width--column-one mt--20`} type="submit" disabled={showUpload}>
                    {
                        showUpload == "loading" ?
                            <span></span>
                            :
                            <>
                                <Icon icoName="upload-arrow" size={20} color="white" className="mr--15 font--normal" />
                                Upload
                            </>
                    }
                </Button>
            </form>

            {
                showUpload == true ?
                    <UploadList uploadData={uploadArr} />
                    : ''
            }

        </>
    )
}

export default Upload