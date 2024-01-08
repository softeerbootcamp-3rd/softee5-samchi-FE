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