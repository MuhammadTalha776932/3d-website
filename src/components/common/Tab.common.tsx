import { useSnapshot } from 'valtio';
import { ITabs } from '../../config/constants'

import state from '../../store/index.store';
import React, { MouseEventHandler } from 'react'


interface ITabProps {
    tab: ITabs;
    handleClick: MouseEventHandler<HTMLDivElement>;
    isFilterTab?: boolean;
    isActiveTab?: string ;
}

const Tab = ({ handleClick, tab, isActiveTab, isFilterTab }: ITabProps) => {

    const snap = useSnapshot(state);

    const activeStyles = isFilterTab && isActiveTab ? {
        backgroundColor: snap.color, opacity: 0.5
    } : { backgroundColor: 'transparent', opacity: 1 }
    return (
        <div
            key={tab.name}
            className={`tab-btn ${isFilterTab ? `rounded-full glassmorhism` : `rounded-4`}`}
            onClick={handleClick}
            style={activeStyles}
        >
            <img
                src={tab.icon}
                alt={tab.name}
                className={`${isFilterTab ? `w-2/3 h-2/3` : `w-11/12 h-11/12 object-contain`}`}
            />
        </div>
    )
}

export default Tab