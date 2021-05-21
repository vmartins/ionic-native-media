import { IonicNativePlugin } from '@ionic-native/core';
import { Observable } from 'rxjs';

export declare class MediaObject {
    private _objectInstance;

    /**
     * An observable that notifies you on actions success
     */
    onSuccess: Observable<any>;

    /**
     * An observable that notifies you when an error occurs
     */
    onError: Observable<MEDIA_ERROR>;

    /**
     * An observable that notifies you when the file status changes
     */
    onStatusUpdate: Observable<MEDIA_STATUS>;

    /**
     * @hidden
     */
    successCallback: Function;

    /**
     * @hidden
     */
    errorCallback: Function;

    /**
     * @hidden
     */
    statusCallback: Function;
    constructor(_objectInstance: any);

    /**
     * Get the current amplitude of the current recording.
     * @returns {Promise<any>} Returns a promise with the amplitude of the current recording
     */
    getCurrentAmplitude(): Promise<any>;

    /**
     * Get the current position within an audio file. Also updates the Media object's position parameter.
     * @returns {Promise<any>} Returns a promise with the position of the current recording
     */
    getCurrentPosition(): Promise<any>;

    /**
     * Get the duration of an audio file in seconds. If the duration is unknown, it returns a value of -1.
     * @returns {number} Returns a promise with the duration of the current recording
     */
    getDuration(): number;

    getId(): string;

    /**
     * Starts or resumes playing an audio file.
     */
    play(iosOptions?: {
        numberOfLoops?: number;
        playAudioWhenScreenIsLocked?: boolean;
    }): void;

    /**
     * Pauses playing an audio file.
     */
    pause(): void;

    /**
     * Releases the underlying operating system's audio resources. This is particularly important for Android, since there are a finite amount of OpenCore instances for media playback. Applications should call the release function for any Media resource that is no longer needed.
     */
    release(): void;

    /**
     * Sets the current position within an audio file.
     * @param {number} milliseconds The time position you want to set for the current audio file
     */
    seekTo(milliseconds: number): void;

    /**
     * Set the volume for an audio file.
     * @param volume {number} The volume to set for playback. The value must be within the range of 0.0 to 1.0.
     */
    setVolume(volume: number): void;
    
    setRate(speedRate: number): void;

    /**
     * Starts recording an audio file.
     */
    startRecord(): void;

    /**
     * Stops recording
     */
    stopRecord(): void;

    /**
     * Pauses recording
     */
    pauseRecord(): void;

    /**
     * Resumes recording
     */
    resumeRecord(): void;

    /**
     * Stops playing an audio file.
     */
    stop(): void;
}

export declare type MediaStatusUpdateCallback = (statusCode: number) => void;

export interface MediaError {
    /**
     * Error message
     */
    message: string;

    /**
     * Error code
     */
    code: number;
}

export declare enum MEDIA_STATUS {
    NONE = 0,
    STARTING = 1,
    RUNNING = 2,
    PAUSED = 3,
    STOPPED = 4
}

export declare enum MEDIA_ERROR {
    ABORTED = 1,
    NETWORK = 2,
    DECODE = 3,
    SUPPORTED = 4
}

export declare type MediaErrorCallback = (error: MediaError) => void;

/**
 * @name Media
 * @premier media
 * @description
 * This plugin provides the ability to record and play back audio files on a device.
 *
 * @classes
 * MediaObject
 * @interfaces
 * MediaError
 */
export declare class MediaOriginal extends IonicNativePlugin {
    /**
     * @hidden
     */
    MEDIA_NONE: number;

    /**
     * @hidden
     */
    MEDIA_STARTING: number;

    /**
     * @hidden
     */
    MEDIA_RUNNING: number;

    /**
     * @hidden
     */
    MEDIA_PAUSED: number;

    /**
     * @hidden
     */
    MEDIA_STOPPED: number;

    /**
     * @hidden
     */
    MEDIA_ERR_ABORTED: number;

    /**
     * @hidden
     */
    MEDIA_ERR_NETWORK: number;

    /**
     * @hidden
     */
    MEDIA_ERR_DECODE: number;

    /**
     * @hidden
     */
    MEDIA_ERR_NONE_SUPPORTED: number;

    /**
     * Open a media file
     * @param src {string} A URI containing the audio content.
     * @return {MediaObject}
     */
    create(src: string): MediaObject;

    getIds(): Promise<any>;

    /**
     * Releases all the underlying operating system's audio resources. This is particularly important for Android, since there are a finite amount of OpenCore instances for media playback. Applications should call the release function for any Media resource that is no longer needed.
     */
    releaseAll(): void;

    get(id: string): MediaObject;
}

export declare const Media: MediaOriginal;