import React, {useState} from "react";
import { RuleButton } from "../RuleButton";

export const TestRadioButton = () => {
    const [selectedButton, setSelectedButton] = useState(-1);
    return(
        <li>
        <ul><RuleButton groupID={1} selected={selectedButton} onSelect={setSelectedButton} imageSource={`${process.env.PUBLIC_URL}/image/ImageHolderCar.png`} text={'운전자'}></RuleButton></ul>
        <ul><RuleButton groupID={2} selected={selectedButton} onSelect={setSelectedButton} imageSource={`${process.env.PUBLIC_URL}/image/ImageHolderPerson.png`} text={'동승자'}></RuleButton></ul>
        </li>
    );
}