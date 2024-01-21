export const CheckButton = ({id = undefined, name, text}) =>
    `
    <input name='${name}' type='checkbox' class='box button check-button' ${id?`id='${id}'` : ''}>${text}</input>
    `;

export const CheckRequestButton = ({id=undefined, name, text}) =>
    `
    <input name='${name}' type='checkbox' class='box button check-request-button' ${id?`id='${id}'` : ''}>${text}</input>
    `;