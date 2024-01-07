import React from "react";
import {BottomSheet} from 'react-spring-bottom-sheet';
import Button from './fixtures/Button'
//import Code from './fixtures/Code'
//import Container from './fixtures/Container'
//import Expandable from './fixtures/Expandable'
//import Kbd from './fixtures/Kbd'
import SheetContent from './fixtures/SheetContent'
import 'react-spring-bottom-sheet/dist/style.css'

//From https://react-spring.bottom-sheet.dev/


export interface BottomSheetWrapperProps{
    open:boolean,
    setOpen:React.Dispatch<React.SetStateAction<boolean>>,
    header?:JSX.Element,
    footer?:JSX.Element,
    style?:React.CSSProperties,
    children:React.ReactNode,
}

export const BottomSheetWrapper = (
    props:BottomSheetWrapperProps
    ) => {
    const onDismiss = ()=>props.setOpen(false);

    return (        
        <BottomSheet open={props.open}
            onDismiss={onDismiss}
            snapPoints={({minHeight}) => minHeight}
            style={props.style}
            >
                <SheetContent>
                    {props.children}
                </SheetContent>
        </BottomSheet>
    );
};
/*
<Button onClick={onDismiss} className="w-full">
    Dismiss
</Button>
*/