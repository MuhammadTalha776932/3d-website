import React from 'react'
import CustomButton from './common/CustomButton.common';



interface IFilePickerProps {
    file: File | null;
    setFile: React.Dispatch<React.SetStateAction<File | null>>;

    readFile: Function
}

const FilePicker = ({ file, setFile, readFile }: IFilePickerProps) => {
    return (
        <div className={`filepicker-container`}>
            <div className={`flex-1 flex flex-col`}>
                <input
                    type="file"
                    name="file"
                    id="file-upload"
                    accept='image/*'
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        const file = e.target.files?.[0];
                        if (file) {
                            setFile(file);
                        }
                    }}
                />
                <label htmlFor='file-upload' className={`filepicker-label`}>
                    Upload file
                </label>

                <p className={`mt-2 text-gray-500 text-xs truncate`}>
                    {file?.name === '' ? 'No file selected' : file?.name}
                </p>
            </div>
            <div className={`mt-4 flex flex-wrap gap-3`}>
                <CustomButton
                    type='outline'
                    title='Logo'
                    handleClick={() => readFile('logo')}
                    customStyles='text-sx'
                />
                <CustomButton
                    type='filled'
                    title='Full'
                    handleClick={() => readFile('full')}
                    customStyles='text-sx'
                />
            </div>
        </div>
    )
}

export default FilePicker