/*
userDataList - 유저 데이터 리스트
key : uid
value : userData
*/
const userDataList = {};


/*
matchList - 매칭 데이터 리스트
key : matchID
value : Array<uid>
*/
const matchList = {};

/*
userData - 개별 유저 데이터
number                      uid             : 유저 아이디
string                      nickname        : 유저 닉네임
number                      usedBefore      : 이전에 사용했던 횟수
string                      typedid         : 유저 타입
number                      typedid         : 타입별 유저 아이디
Array<string>               interests       : 유저 관심사
{lat:number, lng:number}    startLocation   : 출발지
string                      startLocName    : 출발지 이름
number                      matchID         : 매칭 아이디
*/
let userData = {
    nickname,
    usedBefore,
    type,
    typedid,
    interests,
    startLocation,
    startLocName,
    matchID,
    endLocation,
    startTime,
}

export const setUserData = ({uid, newUserData}) => {
    userData[uid] = newUserData;
}

export const getUserData = ({uid}) => {
    return userData[uid];
}