import React from "react";
import {PinDriverGoal, PinGuestDefault, PinGuestSelected} from './image/Svg'
import { Props } from "./Types";
interface PinProps extends Props{
    type: string;
    onClick: React.Dispatch<React.SetStateAction<Array<boolean>>>;
    clicked: Array<boolean>;
    index:number;
  }
export const Pin = (props : Props) => {
    
}