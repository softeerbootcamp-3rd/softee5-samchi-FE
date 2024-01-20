//NextButton과 그 파생형은 위치 잡을 필요 없음!
//이미 CSS에서 잡아둠!

export const NextButton = ({id = "", text}) => 
    `
    <button class='box button next-button' ${id === '' ? '': 'id=' + id}>
        <p>${text}</p>
    </button>
`

export const NextCircledNumberButton = ({id = "", text, number}) => 
    `
    <button class='box button next-button' ${id === '' ? '': 'id=' + id}>
        <p>${text}</p>
        <p class='button-in-number'>${number}</p>
    </button>
`

export const NextCancelButton = ({id = ""}) => 
    `
    <button class='box button next-button cancel-button' ${id === '' ? '': 'id=' + id}>
        <p>${text}</p>
    </button>
`