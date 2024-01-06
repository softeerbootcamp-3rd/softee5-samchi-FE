import React from "react";
import { animated } from "react-spring";
import { AnimatedValue, ForwardedProps } from 'react-spring';
import "./Modal.css";

export interface ModalProps {
    style?:AnimatedValue<ForwardedProps<ForwardedProps<React.CSSProperties>>>,
    closeModal:()=>void,
    title?: string,
    key?:string,
    children?:React.ReactNode,
};

export const Modal = ( props:ModalProps ) => {

  return (
  <animated.div style={props.style} className="modal">
    <h3 className="modal-title">{props.title}</h3>
    {props.children}
    <button className="modal-close-button" onClick={()=>props.closeModal()}>
      취소
    </button>
  </animated.div>
  );
}