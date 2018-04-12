/**
 * Interface for location provider component model
 */
export interface LocationModel {
    address: string;
    latitude: string;
    longitude: string;
}

/**
 * Interface for location service response
 */
export interface LocationResponse {
    latitude: string;
    longitude: string;
}
