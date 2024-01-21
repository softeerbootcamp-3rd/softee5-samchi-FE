//NextButton과 그 파생형은 위치 잡을 필요 없음!
//이미 CSS에서 잡아둠!

export const NextButton = ({id = "", text, disabled = false}) => 
    `
    <button class='box button next-button' ${id === '' ? '': 'id=' + id} ${disabled ? 'disabled' : ''}>
        <p>${text}</p>
    </button>
`

export const NextCircledNumberButton = ({id = "", text, number, disabled = false}) => 
    `
    <button class='box button next-button' ${id === '' ? '': 'id=' + id} ${disabled ? 'disabled' : ''}>
        <p>${text}</p>
        <p class='button-in-number' id='number-circle'>${number}</p>
    </button>
`

export const NextCancelButton = ({id = "", disabled = false}) => 
    `
    <button class='box button next-button cancel-button' ${id === '' ? '': 'id=' + id} ${disabled ? 'disabled' : ''}>
        <p>${text}</p>
    </button>
`