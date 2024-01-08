import React, {useState} from "react";
import Button from "../../fixtures/Button";
import { BottomSheetWrapper } from "../../BottomSheetWrapper";

export const TestBottomSheet = () => {
    const [openBottomSheet, setOpenBottomSheet] = useState(false);

    return(
        <>
        <div>
            <Button onClick={()=>setOpenBottomSheet(true)}>OPEN BOTTOM SHEET</Button>
        </div>
            <BottomSheetWrapper open={openBottomSheet} setOpen={setOpenBottomSheet}> </BottomSheetWrapper>
        </>
    );
}