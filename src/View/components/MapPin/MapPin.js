export const makeMapPin = ({id = undefined, interested = false, isEnd = false, top, left}) => 
`
<button class='mappin ${isEnd ? 'end' : ''} ${(!isEnd)&&interested ? 'interested' : ''}' ${id ? `id=${id}` : ''}></button>
`