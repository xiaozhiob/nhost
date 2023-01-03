import FormData from 'form-data'

// TODO shared with other packages
export type ErrorPayload = {
  error: string
  status: number
  message: string
}

// TODO shared with other packages
export interface ActionErrorState {
  /**
   * @return `true` if an error occurred
   * @depreacted use `!isSuccess` or `!!error` instead
   * */
  isError: boolean
  /** Provides details about the error */
  error: ErrorPayload | null
}

// * Avoid circular references and broken links in docusaurus generated docs
export interface FileUploadConfig {
  accessToken?: string
  url: string
  adminSecret?: string
}

// works only in browser. Used for for hooks
export interface StorageUploadFileParams {
  file: File
  id?: string
  name?: string
  bucketId?: string
}

// works in browser and server
export interface StorageUploadFormDataParams {
  formData: FormData
  id?: string
  name?: string
  bucketId?: string
}

// works in browser and server
export type StorageUploadParams = StorageUploadFileParams | StorageUploadFormDataParams

export type StorageUploadResponse =
  | { fileMetadata: FileResponse; error: null }
  | { fileMetadata: null; error: Error }

export interface StorageImageTransformationParams {
  width?: number
  height?: number
  quality?: number
  blur?: number
  radius?: number
}
export interface StorageGetUrlParams extends StorageImageTransformationParams {
  fileId: string
}

export interface StorageGetPresignedUrlParams extends StorageImageTransformationParams {
  fileId: string
}

export type StorageGetPresignedUrlResponse =
  | { presignedUrl: { url: string; expiration: number }; error: null }
  | { presignedUrl: null; error: Error }

export interface StorageDeleteParams {
  fileId: string
}

export interface StorageDeleteResponse {
  error: Error | null
}

interface FileResponse {
  id: string
  name: string
  size: number
  mimeType: string
  etag: string
  createdAt: string
  bucketId: string
}

export interface ApiUploadParams {
  formData: FormData
  id?: string
  name?: string
  bucketId?: string
}

export type ApiUploadResponse =
  | { fileMetadata: FileResponse; error: null }
  | { fileMetadata: null; error: Error }

export interface ApiGetPresignedUrlParams extends StorageImageTransformationParams {
  fileId: string
}

export type ApiGetPresignedUrlResponse =
  | { presignedUrl: { url: string; expiration: number }; error: null }
  | { presignedUrl: null; error: Error }

export interface ApiDeleteParams {
  fileId: string
}

export interface ApiDeleteResponse {
  error: Error | null
}

export interface UploadHeaders {
  'x-nhost-bucket-id'?: string
  'x-nhost-file-id'?: string
  'x-nhost-file-name'?: string
}
