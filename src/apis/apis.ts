import { fetcher, ApiResponse } from ".";

/**
 * Request DTO
 */

export interface UserRegistrationRequestDto {
    username: string;
}

export interface DriverChatRegistrationRequestDto {
    userType: string;
    topicIds: number[];
    destinationAddress: string;
    estimateStartTime: string;
}

export interface DriveChatApplicationRequestDto {
    driverId: number;
}

export interface ConfirmMatchingRequestDto {
    matchingId: number;
}

export interface ConversationSummaryRequestDto {
    conversationText: string;
}

export interface ReviewRequestDto {
    userId: number;
    matchId: number;
    content: string;
}

/**
 * Response DTO
 */

export interface UserRegistrationResponseDto {
    success: boolean;
    userId: number;
}

export interface TopicsResponseDto {
  topicId: number;
  name: string;
}

export interface RecommandedTopicsResponseDto {
    content: string;
}

export interface AllMarkerIdListResponseDto {
    markerIdList: number[];
}

export interface FilteredMarkerIdListResponseDto {
    markerId: number;
    isRelated: boolean;
}

export interface DriverDetailInfo {
    driverId: number;
    driverNickname: string;
    driveChatCount: number;
    destination: string;
    startTime: string;
    driverTopics: string[];
}

export interface DriverChatRegistrationResponseDto {
    driverId: number;
    guestId: number;
    userType: string;
}

export interface DriveChatApplicationCheckResponseDto {
    isFound: boolean;
}

export interface ApplicationAcceptCheckResponseDto {
    isBoarding: boolean;
}

export interface ConfirmMatchingResponseDto {
    matchingId: number;
    guestId: number,
    driverId: number,
    content: string,
    driverCount: number
}

export interface ConversationSummaryResponseDto {
    contents: string;
}


/**
 * User 관련
 */
// User 최초 등록하기
export const registerUser = async (data: UserRegistrationRequestDto): ApiResponse<UserRegistrationResponseDto[]> => {
    const response = await fetcher.post(`/user/register`, data);
    return response.data;
};

/**
 * Topic 관련
 */
// topic 전체 id 리스트 조회하기
export const getTopics = async (): ApiResponse<TopicsResponseDto[]> => {
  const response = await fetcher.get(`/topics`);
  return response.data;
};

// topic 랜덤 주제 조회하기
export const getRandomTopic = async (params: number): ApiResponse<RecommandedTopicsResponseDto[]> => {
    const response = await fetcher.get(`/topics/content`, {
        params: {ids: params}
    });
    return response.data;
};

/**
 * Main map 관련
 */

// 운전자 마커 전체 조회하기
export const getAllDriverMarkers = async (): ApiResponse<AllMarkerIdListResponseDto[]> => {
    const response = await fetcher.get(`/main-map/all`);
    return response.data;
};

// 필터링된 운전자 마커 조회하기
export const getFilteredDriverMarkers = async (userId: number): ApiResponse<FilteredMarkerIdListResponseDto[]> => {
    const response = await fetcher.get(`/main-map/filter`, {
        headers: {
            userid: userId
        }
    });
    return response.data;
};

// 운전자 상세정보 조회하기
export const getDriverDetailInfo = async (userId: number, driverId: number): ApiResponse<FilteredMarkerIdListResponseDto[]> => {
    const response = await fetcher.get(`/main-map/detail/${driverId}`, {
        headers: {
            userid: userId
        }
    });
    return response.data;
};

// Drive Chat 시작하기
export const registerDriveChat = async (data: DriverChatRegistrationRequestDto, userId: number): ApiResponse<DriverChatRegistrationResponseDto[]> => {
    const response = await fetcher.post(`/main-map/registration`, data, {
        headers: {
            userid: userId
        }
    });
    return response.data;
};

/**
 * Match 관련
 */

// 드라이브 챗 신청이 들어왔는지 체크하는 api
export const driveChatApplicationCheck = async (driverId: number): ApiResponse<DriveChatApplicationCheckResponseDto[]> => {
    const response = await fetcher.get(`/match/driver/${driverId}`);
    return response.data;
}

// 운전자의 의해 동승 신청이 수락되었는지 체크
export const checkApplicationAccept = async (matchId: number): ApiResponse<ApplicationAcceptCheckResponseDto[]> => {
    const response = await fetcher.get(`/match/${matchId}`);
    return response.data;
}

// 운전자에게 동승 요청하기
export const applicationDriveChat = async (data: DriveChatApplicationRequestDto, userId: number): ApiResponse<ApplicationAcceptCheckResponseDto[]> => {
    const response = await fetcher.post(`/match/request`, data, {
        headers: {
            userid: userId
        }
    });
    return response.data;
}

// 매칭 확정하기
export const confirmMatching = async (data: ConfirmMatchingRequestDto, userId: number): ApiResponse<ConfirmMatchingResponseDto[]> => {
    const response = await fetcher.put(`/match/confirm`, data, {
        headers: {
            userid: userId
        }
    });
    return response.data;
}

// 동승 종료 후 대화 요약하기
export const converstationSummary = async (data: ConversationSummaryRequestDto, matchId: number): ApiResponse<ConversationSummaryResponseDto[]> => {
    const response = await fetcher.post(`/match/${matchId}/conversation`, data);
    return response.data;
}

/**
 * Review 관련 
 */

export const doReview = async (data: ReviewRequestDto): ApiResponse<[]> => {
    const response = await fetcher.post(`/review`, data);
    return response.data;
}