import React, {useState} from "react";
import Button from "../../fixtures/Button";
import { useTransition } from 'react-spring';
import { Modal } from "../../Modal";

export const TestModal = () => {
    const [openModal, setOpenModal] = useState(false);
    const transitions = useTransition(openModal, null, {
      from: { opacity: 0, transform: "translateY(-40px)" },
      enter: { opacity: 1, transform: "translateY(0px)" },
      leave: { opacity: 0, transform: "translateY(-40px)" }
    });

    return(
        <>
        <li>
            <ul><Button onClick={()=>setOpenModal(true)}>OPEN MODAL</Button></ul>
        </li>
        {transitions.map(
        ({ item, key, props: transStyle }) =>
          item && (
            <Modal
              style={transStyle}
              closeModal={() => setOpenModal(false)}
              key={key}
            />
          )
      )}
        </>
    );
}