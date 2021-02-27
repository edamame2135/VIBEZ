import * as gax from 'google-gax';
import { Callback, CallOptions, Descriptors, ClientOptions, LROperation } from 'google-gax';
import * as protos from '../../protos/protos';
/**
 *  Service that performs Google Cloud Vision API detection tasks over client
 *  images, such as face, landmark, logo, label, and text detection. The
 *  ImageAnnotator service returns detected entities from the images.
 * @class
 * @memberof v1p2beta1
 */
export declare class ImageAnnotatorClient {
    private _terminated;
    private _opts;
    private _gaxModule;
    private _gaxGrpc;
    private _protos;
    private _defaults;
    auth: gax.GoogleAuth;
    descriptors: Descriptors;
    innerApiCalls: {
        [name: string]: Function;
    };
    operationsClient: gax.OperationsClient;
    imageAnnotatorStub?: Promise<{
        [name: string]: Function;
    }>;
    /**
     * Construct an instance of ImageAnnotatorClient.
     *
     * @param {object} [options] - The configuration object.
     * The options accepted by the constructor are described in detail
     * in [this document](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#creating-the-client-instance).
     * The common options are:
     * @param {object} [options.credentials] - Credentials object.
     * @param {string} [options.credentials.client_email]
     * @param {string} [options.credentials.private_key]
     * @param {string} [options.email] - Account email address. Required when
     *     using a .pem or .p12 keyFilename.
     * @param {string} [options.keyFilename] - Full path to the a .json, .pem, or
     *     .p12 key downloaded from the Google Developers Console. If you provide
     *     a path to a JSON file, the projectId option below is not necessary.
     *     NOTE: .pem and .p12 require you to specify options.email as well.
     * @param {number} [options.port] - The port on which to connect to
     *     the remote host.
     * @param {string} [options.projectId] - The project ID from the Google
     *     Developer's Console, e.g. 'grape-spaceship-123'. We will also check
     *     the environment variable GCLOUD_PROJECT for your project ID. If your
     *     app is running in an environment which supports
     *     {@link https://developers.google.com/identity/protocols/application-default-credentials Application Default Credentials},
     *     your project ID will be detected automatically.
     * @param {string} [options.apiEndpoint] - The domain name of the
     *     API remote host.
     * @param {gax.ClientConfig} [options.clientConfig] - Client configuration override.
     *     Follows the structure of {@link gapicConfig}.
     * @param {boolean} [options.fallback] - Use HTTP fallback mode.
     *     In fallback mode, a special browser-compatible transport implementation is used
     *     instead of gRPC transport. In browser context (if the `window` object is defined)
     *     the fallback mode is enabled automatically; set `options.fallback` to `false`
     *     if you need to override this behavior.
     */
    constructor(opts?: ClientOptions);
    /**
     * Initialize the client.
     * Performs asynchronous operations (such as authentication) and prepares the client.
     * This function will be called automatically when any class method is called for the
     * first time, but if you need to initialize it before calling an actual method,
     * feel free to call initialize() directly.
     *
     * You can await on this method if you want to make sure the client is initialized.
     *
     * @returns {Promise} A promise that resolves to an authenticated service stub.
     */
    initialize(): Promise<{
        [name: string]: Function;
    }>;
    /**
     * The DNS address for this API service.
     * @returns {string} The DNS address for this service.
     */
    static get servicePath(): string;
    /**
     * The DNS address for this API service - same as servicePath(),
     * exists for compatibility reasons.
     * @returns {string} The DNS address for this service.
     */
    static get apiEndpoint(): string;
    /**
     * The port for this API service.
     * @returns {number} The default port for this service.
     */
    static get port(): number;
    /**
     * The scopes needed to make gRPC calls for every method defined
     * in this service.
     * @returns {string[]} List of default scopes.
     */
    static get scopes(): string[];
    getProjectId(): Promise<string>;
    getProjectId(callback: Callback<string, undefined, undefined>): void;
    batchAnnotateImages(request: protos.google.cloud.vision.v1p2beta1.IBatchAnnotateImagesRequest, options?: CallOptions): Promise<[protos.google.cloud.vision.v1p2beta1.IBatchAnnotateImagesResponse, (protos.google.cloud.vision.v1p2beta1.IBatchAnnotateImagesRequest | undefined), {} | undefined]>;
    batchAnnotateImages(request: protos.google.cloud.vision.v1p2beta1.IBatchAnnotateImagesRequest, options: CallOptions, callback: Callback<protos.google.cloud.vision.v1p2beta1.IBatchAnnotateImagesResponse, protos.google.cloud.vision.v1p2beta1.IBatchAnnotateImagesRequest | null | undefined, {} | null | undefined>): void;
    batchAnnotateImages(request: protos.google.cloud.vision.v1p2beta1.IBatchAnnotateImagesRequest, callback: Callback<protos.google.cloud.vision.v1p2beta1.IBatchAnnotateImagesResponse, protos.google.cloud.vision.v1p2beta1.IBatchAnnotateImagesRequest | null | undefined, {} | null | undefined>): void;
    asyncBatchAnnotateFiles(request: protos.google.cloud.vision.v1p2beta1.IAsyncBatchAnnotateFilesRequest, options?: CallOptions): Promise<[LROperation<protos.google.cloud.vision.v1p2beta1.IAsyncBatchAnnotateFilesResponse, protos.google.cloud.vision.v1p2beta1.IOperationMetadata>, protos.google.longrunning.IOperation | undefined, {} | undefined]>;
    asyncBatchAnnotateFiles(request: protos.google.cloud.vision.v1p2beta1.IAsyncBatchAnnotateFilesRequest, options: CallOptions, callback: Callback<LROperation<protos.google.cloud.vision.v1p2beta1.IAsyncBatchAnnotateFilesResponse, protos.google.cloud.vision.v1p2beta1.IOperationMetadata>, protos.google.longrunning.IOperation | null | undefined, {} | null | undefined>): void;
    asyncBatchAnnotateFiles(request: protos.google.cloud.vision.v1p2beta1.IAsyncBatchAnnotateFilesRequest, callback: Callback<LROperation<protos.google.cloud.vision.v1p2beta1.IAsyncBatchAnnotateFilesResponse, protos.google.cloud.vision.v1p2beta1.IOperationMetadata>, protos.google.longrunning.IOperation | null | undefined, {} | null | undefined>): void;
    /**
     * Check the status of the long running operation returned by `asyncBatchAnnotateFiles()`.
     * @param {String} name
     *   The operation name that will be passed.
     * @returns {Promise} - The promise which resolves to an object.
     *   The decoded operation object has result and metadata field to get information from.
     *   Please see the
     *   [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#long-running-operations)
     *   for more details and examples.
     * @example
     * const decodedOperation = await checkAsyncBatchAnnotateFilesProgress(name);
     * console.log(decodedOperation.result);
     * console.log(decodedOperation.done);
     * console.log(decodedOperation.metadata);
     */
    checkAsyncBatchAnnotateFilesProgress(name: string): Promise<LROperation<protos.google.cloud.vision.v1p2beta1.AsyncBatchAnnotateFilesResponse, protos.google.cloud.vision.v1p2beta1.OperationMetadata>>;
    /**
     * Terminate the gRPC channel and close the client.
     *
     * The client will no longer be usable and all future behavior is undefined.
     * @returns {Promise} A promise that resolves when the client is closed.
     */
    close(): Promise<void>;
}
import { FeaturesMethod } from '../helpers';
export interface ImageAnnotatorClient extends FeaturesMethod {
}
