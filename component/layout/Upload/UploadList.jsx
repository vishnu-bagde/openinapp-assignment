import React, { useEffect, useState } from 'react'
import { isEmpty } from '../../../service/commonServices'
import Link from 'next/link'
import Select from '../../core/Select/Select'
import Tag from './Tag'
import useCheckMobileScreen from '../../../hooks/useCheckMobileScreen'

const UploadList = ({ uploadData }) => {
    const [tempArr, setTempArr] = useState([])
    const { isMobile, isIpad } = useCheckMobileScreen()

    useEffect(() => {
        const arr = uploadData

        for (let i = 0; i < arr.length; i++) {
            arr[i][3] = arr[i][3].split(', ')?.filter(item => item !== '')
            arr[i][4] = arr[i][4].split(', ')?.filter(item => item !== '')
            setTempArr(arr);
        }
    }, [uploadData])

    const tagHandler = (valueToRemove, valueIndex) => {
        const updatedDataArray = tempArr.map((row, index) => {
            if (index === 0) {
                // Skip header row
                return row;
            }

            if (valueIndex == index) {
                const selectedTagsArray = row[4];
                const indexToRemove = selectedTagsArray.indexOf(valueToRemove);

                if (indexToRemove !== -1) {
                    selectedTagsArray.splice(indexToRemove, 1);
                }
            }

            return [...row];
        });

        // Update the state with the modified data
        setTempArr(updatedDataArray);
    }

    const selectTagHandler = (valueToCopy, valueIndex) => {
        setTempArr((prevTempArr) => {
            return prevTempArr.map((row, index) => {
                if (row[4].includes(valueToCopy)) {
                    // Skip header row or rows with the value already included
                    return row;
                }

                if (valueIndex === index) {
                    // Copy the specific value to the end of the array at the 4th index
                    console.log(row[4]);
                    row[4].push(valueToCopy)
                }

                return row;
            });
        });
    };


    return (
        !isEmpty(uploadData) ?
            <div className={`${isMobile || isIpad ? 'mt--50' : 'container--fluid'} upload--list white--space-nowrap`}>
                <h2 className="fs--24 font--semibold font--family-figtree color--black">Uploads</h2>
                <ul className={`bg--grey-light upload--list-group pt--15 pb--15 bg--radius-10 mt--${isMobile || isIpad ? '20 white--space-nowrap' : 45}`}>
                    <li className='pl--15 pr--15 flex bg--grey-light'>
                        <h6 className="fs--16 font--family-figtree font--semibold color--black pl--15 pr--15 pb--20 bg--grey-light flex flex--align-items-center serialNumber">Sl No.</h6>
                        <h6 className="fs--16 font--family-figtree font--semibold color--black pl--15 pr--15 pb--20 bg--grey-light flex flex--align-items-center link">Links</h6>
                        <h6 className="fs--16 font--family-figtree font--semibold color--black pl--15 pr--15 pb--20 bg--grey-light flex flex--align-items-center prefix">Prefix</h6>
                        <h6 className="fs--16 font--family-figtree font--semibold color--black pl--15 pr--15 pb--20 bg--grey-light flex flex--align-items-center addTag">Add Tags</h6>
                        <h6 className="fs--16 font--family-figtree font--semibold color--black pl--15 pr--15 pb--20 bg--grey-light flex flex--align-items-center selectedTag">Selected Tags</h6>
                    </li>
                    {
                        tempArr.map((data, index) => (
                            index !== 0 ?
                                <li className={`bg--grey-light pl--15 pr--15 flex ${index !== 1 ? 'pt--15' : ''}`} key={`upload--${index}`}>
                                    {
                                        data.map((list, innerIndex) => (
                                            <React.Fragment key={`upload--${index}-${innerIndex}`}>
                                                {
                                                    innerIndex == 0 || innerIndex == 2 ?
                                                        <span className={`${innerIndex == 0 ? 'serialNumber' : 'prefix'} display--block pt--10 pb--10 pl--15 pr--15 bg--white flex flex--align-items-center  fs--16 font--family-figtree font--normal color--black`}>
                                                            {innerIndex == 0 ? parseInt(list) < 10 ? `0${list}` : list : list}
                                                        </span>
                                                        :
                                                        innerIndex == 1 ?
                                                            <Link href={`https://www.${list}`} target='_blank' className='fs--16 font--family-figtree font--normal color--blue-light link color--blue font--underline pt--10 pb--10 pl--15 pr--15 bg--white flex flex--align-items-center '>
                                                                {list}
                                                            </Link>
                                                            :
                                                            innerIndex == 3 ?
                                                                <div className="addTag pt--10 pb--10 pl--15 pr--15 bg--white flex flex--align-items-center ">
                                                                    <Select options={list} changeHandler={(id) => selectTagHandler(id, index)} selectedOptions={data[4]} value={"Select Tags"} />
                                                                </div>
                                                                :
                                                                <ul className='pt--10 pb--10 pl--15 pr--15 bg--white  selectedTag flex flex--wrap flex--aling-items-center'>
                                                                    {
                                                                        !isEmpty(list) ?
                                                                            list.map((tag, idx) => (
                                                                                <Tag tagName={tag} onClick={(tagID) => tagHandler(tag, index)} className="mr--10 mb--10" key={`upload--${index}-${innerIndex}-${idx}`} />
                                                                            ))
                                                                            : ''
                                                                    }
                                                                </ul>
                                                }
                                            </React.Fragment>
                                        ))
                                    }
                                </li>
                                : ''
                        ))
                    }
                </ul>
            </div>
            :
            <div>
                <h2 className="fs--24 font--center font--semibold font--family-figtree color--black">Your excel sheet is empty!</h2>
            </div>
    )
}

export default UploadList