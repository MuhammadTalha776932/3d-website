import React, { } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useSnapshot } from 'valtio'
import { reader } from '../config/helpers'
import { fadeAnimation, slideAnimation } from '../config/motion'
import { EditorTabs, FilterTabs, DecalTypes, IDecalTypes, } from '../config/constants'
import { ColorPicker, FilePicker } from '../components/index.component'
import { CustomButton, Tab } from '../components/common/index.common'

import state, { IState } from '../store/index.store'

type StatePropsType = Exclude<PropertyKey, number | symbol>

type ActiveFilterTabType = { logoShirt: boolean, stylishShirt: boolean };

const Customeizer = () => {

    const snap = useSnapshot(state);
    // * handle the file state 
    const [file, setFile] = React.useState<File | null>(null);

    const [activeEditorTab, setActiveEditorTab] = React.useState<StatePropsType>('');

    const [activeFilterTab, setActiveFilterTab] = React.useState<ActiveFilterTabType>({
        logoShirt: true,
        stylishShirt: false,
    });




    // * show tab content depending on the activeTab
    const generateTabContent = () => {
        switch (activeEditorTab) {
            case 'colorpicker':
                return <ColorPicker />
            case 'filepicker':
                return <FilePicker
                    file={file}
                    setFile={setFile}
                    readFile={readFile}
                />
            // case 'aipicker':
            //     return <AIPicker
            //         prompt={prompt}
            //         setPrompt={setPrompt}
            //         generateingImg={generatingImg}
            //         handleSubmit={handleSubmit}
            //     />

            default:
                return null
        }
    }

    const handleActiveFilterTab = (tabName: string) => {

        switch (tabName) {
            case 'logoShirt':
                state.isLogoTexture = !activeFilterTab[tabName];
                break;
            case 'stylishShirt':
                state.isFullTexture = activeFilterTab[tabName];
                break;

            default:
                state.isLogoTexture = true;
                state.isFullTexture = false;
                break;
        }
        // ? after setting the state, activeFilterTab is updated

        setActiveFilterTab((prevState) => {
            return {
                ...prevState,
                [tabName as keyof ActiveFilterTabType]: !prevState[tabName as keyof ActiveFilterTabType]
            }
        })
    }

    const handleDecals = (type: string, result: never) => {
        const decalType = DecalTypes[type as keyof IDecalTypes];

        state[decalType.stateProperty as string as keyof IState] = result;

        if (!activeFilterTab[decalType.filterTab as keyof ActiveFilterTabType]) {
            handleActiveFilterTab(decalType.filterTab);
        }
    }

    const readFile = (type: string) => {
        reader(file)
            .then((result) => {
                handleDecals(type, result as never);
                setActiveEditorTab("");
            })
    }

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
                                                handleClick={() => setActiveEditorTab(tab.name)}
                                            />
                                        ))
                                    }
                                    {
                                        generateTabContent()
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
                                        isFilterTab
                                        isActiveTab={activeEditorTab[tab.name as keyof typeof activeEditorTab]?.toString()}
                                        handleClick={() => handleActiveFilterTab(tab.name)}
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