import * as React from 'react';
import SvgIcon from './SVGImage';

const TabButton = (props: {
    iconUrl: string,
    iconUnselectedColor: string;
    iconSelectedColor: string;
    selected?: boolean;
    iconHeight: number;
    iconWidth: number;
    title: string;
}) => (
    <div style={{
        flex: 1,
        display: 'flex',
    }}><SvgIcon 
        color={props.selected ? props.iconSelectedColor : props.iconUnselectedColor}
        height={props.iconHeight}
        width={props.iconWidth}
        url={props.iconUrl}
    />
    <span>{props.title}</span>
    </div>
);

export default TabButton;