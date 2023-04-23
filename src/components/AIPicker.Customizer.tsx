import React from 'react'
import CustomButton from './common/CustomButton.common';


interface IAIPickerProps {
    prompt: string;
    setPrompt: React.Dispatch<React.SetStateAction<string>>;
    generateingImg: boolean;
    handleSubmit: Function;
}
const AIPicker = ({ prompt, setPrompt, generateingImg, handleSubmit }: IAIPickerProps) => {
    return (
        <div className={`aipicker-container`}>
            <textarea
                placeholder={`Ask AI...`}
                rows={5}
                value={prompt}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setPrompt(e.target.value)}
                className={`aipicker-textarea`}
            />
            <div className={`flex flex-wrap gap-3`}>
                {
                    generateingImg ? (
                        <CustomButton
                            type='outline'
                            title='Asking AI...'
                            customStyles='text-xs'
                        />
                    ) : (
                        <React.Fragment>
                            <CustomButton
                                type='outline'
                                title='AI Logo'
                                handleClick={() => handleSubmit('logo')}
                                customStyles='text-sm'
                            />
                            <CustomButton
                                type='filled'
                                title='AI Full'
                                handleClick={() => handleSubmit('full')}
                                customStyles='text-sm'
                            />
                        </React.Fragment>
                    )
                }
            </div>
        </div>
    )
}

export default AIPicker;