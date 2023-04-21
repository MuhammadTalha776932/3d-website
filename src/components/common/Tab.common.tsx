import React from 'react'
import { ITabs } from '../../config/constants'


interface ITabProps {
    tab: ITabs;
    handleClick: Function;
    isFilterTab?: string;
    isActiveTab?: string;
}

const Tab = ({ }: ITabProps) => {
    return (
        <div>Tab</div>
    )
}

export default Tab