export interface Props{
    page:number,
    setPage:React.Dispatch<React.SetStateAction<number>>
    className?:string,
    style?:React.CSSProperties,
}

export type User = {
    uid:number,
    nickname:string,
    before:number,
    topic:number[],
}

export type Guest = User &{
    phone:string,
}

export type Driver = User & {
    end:string,
    start:string,
    expire:Date
}

export type TopicClass = {
    class:string,
    subclass:Array<Topic>,
}

export type GPS = google.maps.LatLngLiteral

export type Topic = string;

export const Topics:Array<TopicClass> = [
    {class:'일상생활', subclass: ['가족', '일상', '취미', '여가활동', '건강']},
    {class:'교육', subclass: ['학교', '학습방법', '언어 학습', '자격증', '진로 상담']},
    {class:'업무 및 경제', subclass: ['직장 문제', '경영', '마케팅', '투자', '재테크']},
    {class:'과학기술', subclass: ['컴퓨터', 'IT', '인공지능', '과학적 발견']},
    {class:'엔터테이먼트', subclass: ['영화', '드라마', '음악', '게임', '스포츠']},
    {class:'사회 및 정치', subclass: ['사회이슈', '정치적 현안', '법률 문제']},
    {class:'문화 및 예술', subclass: ['문학', '미술', '공연', '전통문화']},
    {class:'여행', subclass: ['여행지', '여행 팁', '문화 탐방', '여행준비']},
    {class:'건강과 의학', subclass: ['의학정보', '건강관리', '운동방법']},
    {class:'심리', subclass: ['인간관계', '감정관리', '스트레스 해소']},
]