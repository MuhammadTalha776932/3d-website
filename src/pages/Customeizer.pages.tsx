import React, { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useSnapshot } from 'valtio'
import { downloadCanvasToImage, reader } from '../config/helpers'
import { fadeAnimation, slideAnimation } from '../config/motion'
import { EditorTabs, FilterTabs, DecalTypes } from '../config/constants'
import { AIPicker, ColorPicker, FilePicker } from '../components/index.component'
import { CustomButton, Tab } from '../components/common/index.common'
import downloadImage from '../assets/download.png';
import config from '../config/config'
import state from '../store/index.store'

const Customeizer = () => {

    const snap = useSnapshot(state);
    return (
        <AnimatePresence>
            {
                !snap.intro && (
                    <React.Fragment>
                        <motion.div
                            key={'custome'}
                            className={`absolute top-0 left-0 z-10`}
                            {...slideAnimation('left')}
                        >
                            <div className={`flex items-center min-h-screen`}>
                                <div className={`editortabs-container tabs`}>
                                    {
                                        EditorTabs.map((tab) => (
                                            <Tab
                                                key={tab.name}
                                                tab={tab}
                                                handleClick={() => { }}
                                            />
                                        ))
                                    }
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            className={`absolute z-10 top-5 right-5`}
                            {...fadeAnimation}
                        >
                            <CustomButton
                                key={"custom"}
                                type='filled'
                                title='Go Back'
                                handleClick={() => state.intro = true}
                                customStyles={`w-fit px-4 py-2.5 font-bold text-sm`}
                            />

                        </motion.div>

                        <motion.div
                            className={`filtertabs-container`}
                            {...slideAnimation('up')}
                        >
                            {
                                FilterTabs.map((tab) => (
                                    <Tab
                                        key={tab.name}
                                        tab={tab}
                                        isFilterTab=''
                                        isActiveTab=''
                                        handleClick={() => { }}
                                    />
                                ))
                            }
                        </motion.div>
                    </React.Fragment>
                )
            }
        </AnimatePresence>
    )
}

export default Customeizer