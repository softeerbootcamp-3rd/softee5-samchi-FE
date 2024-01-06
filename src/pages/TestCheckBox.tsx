import React, {useState} from "react";
import { CheckBox } from "../Checkbox";

export const TestCheckBox = () => {
    const [selectedGroup, setSelectedGroup] = useState<Array<boolean>>([]);

    return(
        <>
        <li>
            <ul><CheckBox index={0} selected={selectedGroup} onSelect={setSelectedGroup} text={'1번 관심사'} ></CheckBox></ul>
            <ul><CheckBox index={1} selected={selectedGroup} onSelect={setSelectedGroup} text={'2번 관심사'} ></CheckBox></ul>
            <ul><CheckBox index={2} selected={selectedGroup} onSelect={setSelectedGroup} text={'3번 관심사'} ></CheckBox></ul>
            <ul><CheckBox index={3} selected={selectedGroup} onSelect={setSelectedGroup} text={'4번 관심사'} ></CheckBox></ul>
        </li>
        </>
    );
}