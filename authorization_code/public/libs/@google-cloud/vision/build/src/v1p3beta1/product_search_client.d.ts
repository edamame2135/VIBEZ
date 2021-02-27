/// <reference types="node" />
import * as gax from 'google-gax';
import { Callback, CallOptions, Descriptors, ClientOptions, LROperation, PaginationCallback } from 'google-gax';
import { Transform } from 'stream';
import * as protos from '../../protos/protos';
/**
 *  Manages Products and ProductSets of reference images for use in product
 *  search. It uses the following resource model:
 *
 *  - The API has a collection of {@link google.cloud.vision.v1p3beta1.ProductSet|ProductSet} resources, named
 *  `projects/* /locations/* /productSets/*`, which acts as a way to put different
 *  products into groups to limit identification.
 *
 *  In parallel,
 *
 *  - The API has a collection of {@link google.cloud.vision.v1p3beta1.Product|Product} resources, named
 *    `projects/* /locations/* /products/*`
 *
 *  - Each {@link google.cloud.vision.v1p3beta1.Product|Product} has a collection of {@link google.cloud.vision.v1p3beta1.ReferenceImage|ReferenceImage} resources, named
 *    `projects/* /locations/* /products/* /referenceImages/*`
 * @class
 * @memberof v1p3beta1
 */
export declare class ProductSearchClient {
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
    pathTemplates: {
        [name: string]: gax.PathTemplate;
    };
    operationsClient: gax.OperationsClient;
    productSearchStub?: Promise<{
        [name: string]: Function;
    }>;
    /**
     * Construct an instance of ProductSearchClient.
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
    createProductSet(request: protos.google.cloud.vision.v1p3beta1.ICreateProductSetRequest, options?: CallOptions): Promise<[protos.google.cloud.vision.v1p3beta1.IProductSet, protos.google.cloud.vision.v1p3beta1.ICreateProductSetRequest | undefined, {} | undefined]>;
    createProductSet(request: protos.google.cloud.vision.v1p3beta1.ICreateProductSetRequest, options: CallOptions, callback: Callback<protos.google.cloud.vision.v1p3beta1.IProductSet, protos.google.cloud.vision.v1p3beta1.ICreateProductSetRequest | null | undefined, {} | null | undefined>): void;
    createProductSet(request: protos.google.cloud.vision.v1p3beta1.ICreateProductSetRequest, callback: Callback<protos.google.cloud.vision.v1p3beta1.IProductSet, protos.google.cloud.vision.v1p3beta1.ICreateProductSetRequest | null | undefined, {} | null | undefined>): void;
    getProductSet(request: protos.google.cloud.vision.v1p3beta1.IGetProductSetRequest, options?: CallOptions): Promise<[protos.google.cloud.vision.v1p3beta1.IProductSet, protos.google.cloud.vision.v1p3beta1.IGetProductSetRequest | undefined, {} | undefined]>;
    getProductSet(request: protos.google.cloud.vision.v1p3beta1.IGetProductSetRequest, options: CallOptions, callback: Callback<protos.google.cloud.vision.v1p3beta1.IProductSet, protos.google.cloud.vision.v1p3beta1.IGetProductSetRequest | null | undefined, {} | null | undefined>): void;
    getProductSet(request: protos.google.cloud.vision.v1p3beta1.IGetProductSetRequest, callback: Callback<protos.google.cloud.vision.v1p3beta1.IProductSet, protos.google.cloud.vision.v1p3beta1.IGetProductSetRequest | null | undefined, {} | null | undefined>): void;
    updateProductSet(request: protos.google.cloud.vision.v1p3beta1.IUpdateProductSetRequest, options?: CallOptions): Promise<[protos.google.cloud.vision.v1p3beta1.IProductSet, protos.google.cloud.vision.v1p3beta1.IUpdateProductSetRequest | undefined, {} | undefined]>;
    updateProductSet(request: protos.google.cloud.vision.v1p3beta1.IUpdateProductSetRequest, options: CallOptions, callback: Callback<protos.google.cloud.vision.v1p3beta1.IProductSet, protos.google.cloud.vision.v1p3beta1.IUpdateProductSetRequest | null | undefined, {} | null | undefined>): void;
    updateProductSet(request: protos.google.cloud.vision.v1p3beta1.IUpdateProductSetRequest, callback: Callback<protos.google.cloud.vision.v1p3beta1.IProductSet, protos.google.cloud.vision.v1p3beta1.IUpdateProductSetRequest | null | undefined, {} | null | undefined>): void;
    deleteProductSet(request: protos.google.cloud.vision.v1p3beta1.IDeleteProductSetRequest, options?: CallOptions): Promise<[protos.google.protobuf.IEmpty, protos.google.cloud.vision.v1p3beta1.IDeleteProductSetRequest | undefined, {} | undefined]>;
    deleteProductSet(request: protos.google.cloud.vision.v1p3beta1.IDeleteProductSetRequest, options: CallOptions, callback: Callback<protos.google.protobuf.IEmpty, protos.google.cloud.vision.v1p3beta1.IDeleteProductSetRequest | null | undefined, {} | null | undefined>): void;
    deleteProductSet(request: protos.google.cloud.vision.v1p3beta1.IDeleteProductSetRequest, callback: Callback<protos.google.protobuf.IEmpty, protos.google.cloud.vision.v1p3beta1.IDeleteProductSetRequest | null | undefined, {} | null | undefined>): void;
    createProduct(request: protos.google.cloud.vision.v1p3beta1.ICreateProductRequest, options?: CallOptions): Promise<[protos.google.cloud.vision.v1p3beta1.IProduct, protos.google.cloud.vision.v1p3beta1.ICreateProductRequest | undefined, {} | undefined]>;
    createProduct(request: protos.google.cloud.vision.v1p3beta1.ICreateProductRequest, options: CallOptions, callback: Callback<protos.google.cloud.vision.v1p3beta1.IProduct, protos.google.cloud.vision.v1p3beta1.ICreateProductRequest | null | undefined, {} | null | undefined>): void;
    createProduct(request: protos.google.cloud.vision.v1p3beta1.ICreateProductRequest, callback: Callback<protos.google.cloud.vision.v1p3beta1.IProduct, protos.google.cloud.vision.v1p3beta1.ICreateProductRequest | null | undefined, {} | null | undefined>): void;
    getProduct(request: protos.google.cloud.vision.v1p3beta1.IGetProductRequest, options?: CallOptions): Promise<[protos.google.cloud.vision.v1p3beta1.IProduct, protos.google.cloud.vision.v1p3beta1.IGetProductRequest | undefined, {} | undefined]>;
    getProduct(request: protos.google.cloud.vision.v1p3beta1.IGetProductRequest, options: CallOptions, callback: Callback<protos.google.cloud.vision.v1p3beta1.IProduct, protos.google.cloud.vision.v1p3beta1.IGetProductRequest | null | undefined, {} | null | undefined>): void;
    getProduct(request: protos.google.cloud.vision.v1p3beta1.IGetProductRequest, callback: Callback<protos.google.cloud.vision.v1p3beta1.IProduct, protos.google.cloud.vision.v1p3beta1.IGetProductRequest | null | undefined, {} | null | undefined>): void;
    updateProduct(request: protos.google.cloud.vision.v1p3beta1.IUpdateProductRequest, options?: CallOptions): Promise<[protos.google.cloud.vision.v1p3beta1.IProduct, protos.google.cloud.vision.v1p3beta1.IUpdateProductRequest | undefined, {} | undefined]>;
    updateProduct(request: protos.google.cloud.vision.v1p3beta1.IUpdateProductRequest, options: CallOptions, callback: Callback<protos.google.cloud.vision.v1p3beta1.IProduct, protos.google.cloud.vision.v1p3beta1.IUpdateProductRequest | null | undefined, {} | null | undefined>): void;
    updateProduct(request: protos.google.cloud.vision.v1p3beta1.IUpdateProductRequest, callback: Callback<protos.google.cloud.vision.v1p3beta1.IProduct, protos.google.cloud.vision.v1p3beta1.IUpdateProductRequest | null | undefined, {} | null | undefined>): void;
    deleteProduct(request: protos.google.cloud.vision.v1p3beta1.IDeleteProductRequest, options?: CallOptions): Promise<[protos.google.protobuf.IEmpty, protos.google.cloud.vision.v1p3beta1.IDeleteProductRequest | undefined, {} | undefined]>;
    deleteProduct(request: protos.google.cloud.vision.v1p3beta1.IDeleteProductRequest, options: CallOptions, callback: Callback<protos.google.protobuf.IEmpty, protos.google.cloud.vision.v1p3beta1.IDeleteProductRequest | null | undefined, {} | null | undefined>): void;
    deleteProduct(request: protos.google.cloud.vision.v1p3beta1.IDeleteProductRequest, callback: Callback<protos.google.protobuf.IEmpty, protos.google.cloud.vision.v1p3beta1.IDeleteProductRequest | null | undefined, {} | null | undefined>): void;
    createReferenceImage(request: protos.google.cloud.vision.v1p3beta1.ICreateReferenceImageRequest, options?: CallOptions): Promise<[protos.google.cloud.vision.v1p3beta1.IReferenceImage, (protos.google.cloud.vision.v1p3beta1.ICreateReferenceImageRequest | undefined), {} | undefined]>;
    createReferenceImage(request: protos.google.cloud.vision.v1p3beta1.ICreateReferenceImageRequest, options: CallOptions, callback: Callback<protos.google.cloud.vision.v1p3beta1.IReferenceImage, protos.google.cloud.vision.v1p3beta1.ICreateReferenceImageRequest | null | undefined, {} | null | undefined>): void;
    createReferenceImage(request: protos.google.cloud.vision.v1p3beta1.ICreateReferenceImageRequest, callback: Callback<protos.google.cloud.vision.v1p3beta1.IReferenceImage, protos.google.cloud.vision.v1p3beta1.ICreateReferenceImageRequest | null | undefined, {} | null | undefined>): void;
    deleteReferenceImage(request: protos.google.cloud.vision.v1p3beta1.IDeleteReferenceImageRequest, options?: CallOptions): Promise<[protos.google.protobuf.IEmpty, (protos.google.cloud.vision.v1p3beta1.IDeleteReferenceImageRequest | undefined), {} | undefined]>;
    deleteReferenceImage(request: protos.google.cloud.vision.v1p3beta1.IDeleteReferenceImageRequest, options: CallOptions, callback: Callback<protos.google.protobuf.IEmpty, protos.google.cloud.vision.v1p3beta1.IDeleteReferenceImageRequest | null | undefined, {} | null | undefined>): void;
    deleteReferenceImage(request: protos.google.cloud.vision.v1p3beta1.IDeleteReferenceImageRequest, callback: Callback<protos.google.protobuf.IEmpty, protos.google.cloud.vision.v1p3beta1.IDeleteReferenceImageRequest | null | undefined, {} | null | undefined>): void;
    getReferenceImage(request: protos.google.cloud.vision.v1p3beta1.IGetReferenceImageRequest, options?: CallOptions): Promise<[protos.google.cloud.vision.v1p3beta1.IReferenceImage, (protos.google.cloud.vision.v1p3beta1.IGetReferenceImageRequest | undefined), {} | undefined]>;
    getReferenceImage(request: protos.google.cloud.vision.v1p3beta1.IGetReferenceImageRequest, options: CallOptions, callback: Callback<protos.google.cloud.vision.v1p3beta1.IReferenceImage, protos.google.cloud.vision.v1p3beta1.IGetReferenceImageRequest | null | undefined, {} | null | undefined>): void;
    getReferenceImage(request: protos.google.cloud.vision.v1p3beta1.IGetReferenceImageRequest, callback: Callback<protos.google.cloud.vision.v1p3beta1.IReferenceImage, protos.google.cloud.vision.v1p3beta1.IGetReferenceImageRequest | null | undefined, {} | null | undefined>): void;
    addProductToProductSet(request: protos.google.cloud.vision.v1p3beta1.IAddProductToProductSetRequest, options?: CallOptions): Promise<[protos.google.protobuf.IEmpty, (protos.google.cloud.vision.v1p3beta1.IAddProductToProductSetRequest | undefined), {} | undefined]>;
    addProductToProductSet(request: protos.google.cloud.vision.v1p3beta1.IAddProductToProductSetRequest, options: CallOptions, callback: Callback<protos.google.protobuf.IEmpty, protos.google.cloud.vision.v1p3beta1.IAddProductToProductSetRequest | null | undefined, {} | null | undefined>): void;
    addProductToProductSet(request: protos.google.cloud.vision.v1p3beta1.IAddProductToProductSetRequest, callback: Callback<protos.google.protobuf.IEmpty, protos.google.cloud.vision.v1p3beta1.IAddProductToProductSetRequest | null | undefined, {} | null | undefined>): void;
    removeProductFromProductSet(request: protos.google.cloud.vision.v1p3beta1.IRemoveProductFromProductSetRequest, options?: CallOptions): Promise<[protos.google.protobuf.IEmpty, (protos.google.cloud.vision.v1p3beta1.IRemoveProductFromProductSetRequest | undefined), {} | undefined]>;
    removeProductFromProductSet(request: protos.google.cloud.vision.v1p3beta1.IRemoveProductFromProductSetRequest, options: CallOptions, callback: Callback<protos.google.protobuf.IEmpty, protos.google.cloud.vision.v1p3beta1.IRemoveProductFromProductSetRequest | null | undefined, {} | null | undefined>): void;
    removeProductFromProductSet(request: protos.google.cloud.vision.v1p3beta1.IRemoveProductFromProductSetRequest, callback: Callback<protos.google.protobuf.IEmpty, protos.google.cloud.vision.v1p3beta1.IRemoveProductFromProductSetRequest | null | undefined, {} | null | undefined>): void;
    importProductSets(request: protos.google.cloud.vision.v1p3beta1.IImportProductSetsRequest, options?: CallOptions): Promise<[LROperation<protos.google.cloud.vision.v1p3beta1.IImportProductSetsResponse, protos.google.cloud.vision.v1p3beta1.IBatchOperationMetadata>, protos.google.longrunning.IOperation | undefined, {} | undefined]>;
    importProductSets(request: protos.google.cloud.vision.v1p3beta1.IImportProductSetsRequest, options: CallOptions, callback: Callback<LROperation<protos.google.cloud.vision.v1p3beta1.IImportProductSetsResponse, protos.google.cloud.vision.v1p3beta1.IBatchOperationMetadata>, protos.google.longrunning.IOperation | null | undefined, {} | null | undefined>): void;
    importProductSets(request: protos.google.cloud.vision.v1p3beta1.IImportProductSetsRequest, callback: Callback<LROperation<protos.google.cloud.vision.v1p3beta1.IImportProductSetsResponse, protos.google.cloud.vision.v1p3beta1.IBatchOperationMetadata>, protos.google.longrunning.IOperation | null | undefined, {} | null | undefined>): void;
    /**
     * Check the status of the long running operation returned by `importProductSets()`.
     * @param {String} name
     *   The operation name that will be passed.
     * @returns {Promise} - The promise which resolves to an object.
     *   The decoded operation object has result and metadata field to get information from.
     *   Please see the
     *   [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#long-running-operations)
     *   for more details and examples.
     * @example
     * const decodedOperation = await checkImportProductSetsProgress(name);
     * console.log(decodedOperation.result);
     * console.log(decodedOperation.done);
     * console.log(decodedOperation.metadata);
     */
    checkImportProductSetsProgress(name: string): Promise<LROperation<protos.google.cloud.vision.v1p3beta1.ImportProductSetsResponse, protos.google.cloud.vision.v1p3beta1.BatchOperationMetadata>>;
    listProductSets(request: protos.google.cloud.vision.v1p3beta1.IListProductSetsRequest, options?: CallOptions): Promise<[protos.google.cloud.vision.v1p3beta1.IProductSet[], protos.google.cloud.vision.v1p3beta1.IListProductSetsRequest | null, protos.google.cloud.vision.v1p3beta1.IListProductSetsResponse]>;
    listProductSets(request: protos.google.cloud.vision.v1p3beta1.IListProductSetsRequest, options: CallOptions, callback: PaginationCallback<protos.google.cloud.vision.v1p3beta1.IListProductSetsRequest, protos.google.cloud.vision.v1p3beta1.IListProductSetsResponse | null | undefined, protos.google.cloud.vision.v1p3beta1.IProductSet>): void;
    listProductSets(request: protos.google.cloud.vision.v1p3beta1.IListProductSetsRequest, callback: PaginationCallback<protos.google.cloud.vision.v1p3beta1.IListProductSetsRequest, protos.google.cloud.vision.v1p3beta1.IListProductSetsResponse | null | undefined, protos.google.cloud.vision.v1p3beta1.IProductSet>): void;
    /**
     * Equivalent to `method.name.toCamelCase()`, but returns a NodeJS Stream object.
     * @param {Object} request
     *   The request object that will be sent.
     * @param {string} request.parent
     *   Required. The project from which ProductSets should be listed.
     *
     *   Format is `projects/PROJECT_ID/locations/LOC_ID`.
     * @param {number} request.pageSize
     *   The maximum number of items to return. Default 10, maximum 100.
     * @param {string} request.pageToken
     *   The next_page_token returned from a previous List request, if any.
     * @param {object} [options]
     *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
     * @returns {Stream}
     *   An object stream which emits an object representing [ProductSet]{@link google.cloud.vision.v1p3beta1.ProductSet} on 'data' event.
     *   The client library will perform auto-pagination by default: it will call the API as many
     *   times as needed. Note that it can affect your quota.
     *   We recommend using `listProductSetsAsync()`
     *   method described below for async iteration which you can stop as needed.
     *   Please see the
     *   [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#auto-pagination)
     *   for more details and examples.
     */
    listProductSetsStream(request?: protos.google.cloud.vision.v1p3beta1.IListProductSetsRequest, options?: CallOptions): Transform;
    /**
     * Equivalent to `listProductSets`, but returns an iterable object.
     *
     * `for`-`await`-`of` syntax is used with the iterable to get response elements on-demand.
     * @param {Object} request
     *   The request object that will be sent.
     * @param {string} request.parent
     *   Required. The project from which ProductSets should be listed.
     *
     *   Format is `projects/PROJECT_ID/locations/LOC_ID`.
     * @param {number} request.pageSize
     *   The maximum number of items to return. Default 10, maximum 100.
     * @param {string} request.pageToken
     *   The next_page_token returned from a previous List request, if any.
     * @param {object} [options]
     *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
     * @returns {Object}
     *   An iterable Object that allows [async iteration](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols).
     *   When you iterate the returned iterable, each element will be an object representing
     *   [ProductSet]{@link google.cloud.vision.v1p3beta1.ProductSet}. The API will be called under the hood as needed, once per the page,
     *   so you can stop the iteration when you don't need more results.
     *   Please see the
     *   [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#auto-pagination)
     *   for more details and examples.
     * @example
     * const iterable = client.listProductSetsAsync(request);
     * for await (const response of iterable) {
     *   // process response
     * }
     */
    listProductSetsAsync(request?: protos.google.cloud.vision.v1p3beta1.IListProductSetsRequest, options?: CallOptions): AsyncIterable<protos.google.cloud.vision.v1p3beta1.IProductSet>;
    listProducts(request: protos.google.cloud.vision.v1p3beta1.IListProductsRequest, options?: CallOptions): Promise<[protos.google.cloud.vision.v1p3beta1.IProduct[], protos.google.cloud.vision.v1p3beta1.IListProductsRequest | null, protos.google.cloud.vision.v1p3beta1.IListProductsResponse]>;
    listProducts(request: protos.google.cloud.vision.v1p3beta1.IListProductsRequest, options: CallOptions, callback: PaginationCallback<protos.google.cloud.vision.v1p3beta1.IListProductsRequest, protos.google.cloud.vision.v1p3beta1.IListProductsResponse | null | undefined, protos.google.cloud.vision.v1p3beta1.IProduct>): void;
    listProducts(request: protos.google.cloud.vision.v1p3beta1.IListProductsRequest, callback: PaginationCallback<protos.google.cloud.vision.v1p3beta1.IListProductsRequest, protos.google.cloud.vision.v1p3beta1.IListProductsResponse | null | undefined, protos.google.cloud.vision.v1p3beta1.IProduct>): void;
    /**
     * Equivalent to `method.name.toCamelCase()`, but returns a NodeJS Stream object.
     * @param {Object} request
     *   The request object that will be sent.
     * @param {string} request.parent
     *   Required. The project OR ProductSet from which Products should be listed.
     *
     *   Format:
     *   `projects/PROJECT_ID/locations/LOC_ID`
     * @param {number} request.pageSize
     *   The maximum number of items to return. Default 10, maximum 100.
     * @param {string} request.pageToken
     *   The next_page_token returned from a previous List request, if any.
     * @param {object} [options]
     *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
     * @returns {Stream}
     *   An object stream which emits an object representing [Product]{@link google.cloud.vision.v1p3beta1.Product} on 'data' event.
     *   The client library will perform auto-pagination by default: it will call the API as many
     *   times as needed. Note that it can affect your quota.
     *   We recommend using `listProductsAsync()`
     *   method described below for async iteration which you can stop as needed.
     *   Please see the
     *   [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#auto-pagination)
     *   for more details and examples.
     */
    listProductsStream(request?: protos.google.cloud.vision.v1p3beta1.IListProductsRequest, options?: CallOptions): Transform;
    /**
     * Equivalent to `listProducts`, but returns an iterable object.
     *
     * `for`-`await`-`of` syntax is used with the iterable to get response elements on-demand.
     * @param {Object} request
     *   The request object that will be sent.
     * @param {string} request.parent
     *   Required. The project OR ProductSet from which Products should be listed.
     *
     *   Format:
     *   `projects/PROJECT_ID/locations/LOC_ID`
     * @param {number} request.pageSize
     *   The maximum number of items to return. Default 10, maximum 100.
     * @param {string} request.pageToken
     *   The next_page_token returned from a previous List request, if any.
     * @param {object} [options]
     *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
     * @returns {Object}
     *   An iterable Object that allows [async iteration](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols).
     *   When you iterate the returned iterable, each element will be an object representing
     *   [Product]{@link google.cloud.vision.v1p3beta1.Product}. The API will be called under the hood as needed, once per the page,
     *   so you can stop the iteration when you don't need more results.
     *   Please see the
     *   [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#auto-pagination)
     *   for more details and examples.
     * @example
     * const iterable = client.listProductsAsync(request);
     * for await (const response of iterable) {
     *   // process response
     * }
     */
    listProductsAsync(request?: protos.google.cloud.vision.v1p3beta1.IListProductsRequest, options?: CallOptions): AsyncIterable<protos.google.cloud.vision.v1p3beta1.IProduct>;
    listReferenceImages(request: protos.google.cloud.vision.v1p3beta1.IListReferenceImagesRequest, options?: CallOptions): Promise<[protos.google.cloud.vision.v1p3beta1.IReferenceImage[], protos.google.cloud.vision.v1p3beta1.IListReferenceImagesRequest | null, protos.google.cloud.vision.v1p3beta1.IListReferenceImagesResponse]>;
    listReferenceImages(request: protos.google.cloud.vision.v1p3beta1.IListReferenceImagesRequest, options: CallOptions, callback: PaginationCallback<protos.google.cloud.vision.v1p3beta1.IListReferenceImagesRequest, protos.google.cloud.vision.v1p3beta1.IListReferenceImagesResponse | null | undefined, protos.google.cloud.vision.v1p3beta1.IReferenceImage>): void;
    listReferenceImages(request: protos.google.cloud.vision.v1p3beta1.IListReferenceImagesRequest, callback: PaginationCallback<protos.google.cloud.vision.v1p3beta1.IListReferenceImagesRequest, protos.google.cloud.vision.v1p3beta1.IListReferenceImagesResponse | null | undefined, protos.google.cloud.vision.v1p3beta1.IReferenceImage>): void;
    /**
     * Equivalent to `method.name.toCamelCase()`, but returns a NodeJS Stream object.
     * @param {Object} request
     *   The request object that will be sent.
     * @param {string} request.parent
     *   Required. Resource name of the product containing the reference images.
     *
     *   Format is
     *   `projects/PROJECT_ID/locations/LOC_ID/products/PRODUCT_ID`.
     * @param {number} request.pageSize
     *   The maximum number of items to return. Default 10, maximum 100.
     * @param {string} request.pageToken
     *   A token identifying a page of results to be returned. This is the value
     *   of `nextPageToken` returned in a previous reference image list request.
     *
     *   Defaults to the first page if not specified.
     * @param {object} [options]
     *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
     * @returns {Stream}
     *   An object stream which emits an object representing [ReferenceImage]{@link google.cloud.vision.v1p3beta1.ReferenceImage} on 'data' event.
     *   The client library will perform auto-pagination by default: it will call the API as many
     *   times as needed. Note that it can affect your quota.
     *   We recommend using `listReferenceImagesAsync()`
     *   method described below for async iteration which you can stop as needed.
     *   Please see the
     *   [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#auto-pagination)
     *   for more details and examples.
     */
    listReferenceImagesStream(request?: protos.google.cloud.vision.v1p3beta1.IListReferenceImagesRequest, options?: CallOptions): Transform;
    /**
     * Equivalent to `listReferenceImages`, but returns an iterable object.
     *
     * `for`-`await`-`of` syntax is used with the iterable to get response elements on-demand.
     * @param {Object} request
     *   The request object that will be sent.
     * @param {string} request.parent
     *   Required. Resource name of the product containing the reference images.
     *
     *   Format is
     *   `projects/PROJECT_ID/locations/LOC_ID/products/PRODUCT_ID`.
     * @param {number} request.pageSize
     *   The maximum number of items to return. Default 10, maximum 100.
     * @param {string} request.pageToken
     *   A token identifying a page of results to be returned. This is the value
     *   of `nextPageToken` returned in a previous reference image list request.
     *
     *   Defaults to the first page if not specified.
     * @param {object} [options]
     *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
     * @returns {Object}
     *   An iterable Object that allows [async iteration](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols).
     *   When you iterate the returned iterable, each element will be an object representing
     *   [ReferenceImage]{@link google.cloud.vision.v1p3beta1.ReferenceImage}. The API will be called under the hood as needed, once per the page,
     *   so you can stop the iteration when you don't need more results.
     *   Please see the
     *   [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#auto-pagination)
     *   for more details and examples.
     * @example
     * const iterable = client.listReferenceImagesAsync(request);
     * for await (const response of iterable) {
     *   // process response
     * }
     */
    listReferenceImagesAsync(request?: protos.google.cloud.vision.v1p3beta1.IListReferenceImagesRequest, options?: CallOptions): AsyncIterable<protos.google.cloud.vision.v1p3beta1.IReferenceImage>;
    listProductsInProductSet(request: protos.google.cloud.vision.v1p3beta1.IListProductsInProductSetRequest, options?: CallOptions): Promise<[protos.google.cloud.vision.v1p3beta1.IProduct[], protos.google.cloud.vision.v1p3beta1.IListProductsInProductSetRequest | null, protos.google.cloud.vision.v1p3beta1.IListProductsInProductSetResponse]>;
    listProductsInProductSet(request: protos.google.cloud.vision.v1p3beta1.IListProductsInProductSetRequest, options: CallOptions, callback: PaginationCallback<protos.google.cloud.vision.v1p3beta1.IListProductsInProductSetRequest, protos.google.cloud.vision.v1p3beta1.IListProductsInProductSetResponse | null | undefined, protos.google.cloud.vision.v1p3beta1.IProduct>): void;
    listProductsInProductSet(request: protos.google.cloud.vision.v1p3beta1.IListProductsInProductSetRequest, callback: PaginationCallback<protos.google.cloud.vision.v1p3beta1.IListProductsInProductSetRequest, protos.google.cloud.vision.v1p3beta1.IListProductsInProductSetResponse | null | undefined, protos.google.cloud.vision.v1p3beta1.IProduct>): void;
    /**
     * Equivalent to `method.name.toCamelCase()`, but returns a NodeJS Stream object.
     * @param {Object} request
     *   The request object that will be sent.
     * @param {string} request.name
     *   Required. The ProductSet resource for which to retrieve Products.
     *
     *   Format is:
     *   `projects/PROJECT_ID/locations/LOC_ID/productSets/PRODUCT_SET_ID`
     * @param {number} request.pageSize
     *   The maximum number of items to return. Default 10, maximum 100.
     * @param {string} request.pageToken
     *   The next_page_token returned from a previous List request, if any.
     * @param {object} [options]
     *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
     * @returns {Stream}
     *   An object stream which emits an object representing [Product]{@link google.cloud.vision.v1p3beta1.Product} on 'data' event.
     *   The client library will perform auto-pagination by default: it will call the API as many
     *   times as needed. Note that it can affect your quota.
     *   We recommend using `listProductsInProductSetAsync()`
     *   method described below for async iteration which you can stop as needed.
     *   Please see the
     *   [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#auto-pagination)
     *   for more details and examples.
     */
    listProductsInProductSetStream(request?: protos.google.cloud.vision.v1p3beta1.IListProductsInProductSetRequest, options?: CallOptions): Transform;
    /**
     * Equivalent to `listProductsInProductSet`, but returns an iterable object.
     *
     * `for`-`await`-`of` syntax is used with the iterable to get response elements on-demand.
     * @param {Object} request
     *   The request object that will be sent.
     * @param {string} request.name
     *   Required. The ProductSet resource for which to retrieve Products.
     *
     *   Format is:
     *   `projects/PROJECT_ID/locations/LOC_ID/productSets/PRODUCT_SET_ID`
     * @param {number} request.pageSize
     *   The maximum number of items to return. Default 10, maximum 100.
     * @param {string} request.pageToken
     *   The next_page_token returned from a previous List request, if any.
     * @param {object} [options]
     *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
     * @returns {Object}
     *   An iterable Object that allows [async iteration](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols).
     *   When you iterate the returned iterable, each element will be an object representing
     *   [Product]{@link google.cloud.vision.v1p3beta1.Product}. The API will be called under the hood as needed, once per the page,
     *   so you can stop the iteration when you don't need more results.
     *   Please see the
     *   [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#auto-pagination)
     *   for more details and examples.
     * @example
     * const iterable = client.listProductsInProductSetAsync(request);
     * for await (const response of iterable) {
     *   // process response
     * }
     */
    listProductsInProductSetAsync(request?: protos.google.cloud.vision.v1p3beta1.IListProductsInProductSetRequest, options?: CallOptions): AsyncIterable<protos.google.cloud.vision.v1p3beta1.IProduct>;
    /**
     * Return a fully-qualified location resource name string.
     *
     * @param {string} project
     * @param {string} location
     * @returns {string} Resource name string.
     */
    locationPath(project: string, location: string): string;
    /**
     * Parse the project from Location resource.
     *
     * @param {string} locationName
     *   A fully-qualified path representing Location resource.
     * @returns {string} A string representing the project.
     */
    matchProjectFromLocationName(locationName: string): string | number;
    /**
     * Parse the location from Location resource.
     *
     * @param {string} locationName
     *   A fully-qualified path representing Location resource.
     * @returns {string} A string representing the location.
     */
    matchLocationFromLocationName(locationName: string): string | number;
    /**
     * Return a fully-qualified product resource name string.
     *
     * @param {string} project
     * @param {string} location
     * @param {string} product
     * @returns {string} Resource name string.
     */
    productPath(project: string, location: string, product: string): string;
    /**
     * Parse the project from Product resource.
     *
     * @param {string} productName
     *   A fully-qualified path representing Product resource.
     * @returns {string} A string representing the project.
     */
    matchProjectFromProductName(productName: string): string | number;
    /**
     * Parse the location from Product resource.
     *
     * @param {string} productName
     *   A fully-qualified path representing Product resource.
     * @returns {string} A string representing the location.
     */
    matchLocationFromProductName(productName: string): string | number;
    /**
     * Parse the product from Product resource.
     *
     * @param {string} productName
     *   A fully-qualified path representing Product resource.
     * @returns {string} A string representing the product.
     */
    matchProductFromProductName(productName: string): string | number;
    /**
     * Return a fully-qualified productSet resource name string.
     *
     * @param {string} project
     * @param {string} location
     * @param {string} product_set
     * @returns {string} Resource name string.
     */
    productSetPath(project: string, location: string, productSet: string): string;
    /**
     * Parse the project from ProductSet resource.
     *
     * @param {string} productSetName
     *   A fully-qualified path representing ProductSet resource.
     * @returns {string} A string representing the project.
     */
    matchProjectFromProductSetName(productSetName: string): string | number;
    /**
     * Parse the location from ProductSet resource.
     *
     * @param {string} productSetName
     *   A fully-qualified path representing ProductSet resource.
     * @returns {string} A string representing the location.
     */
    matchLocationFromProductSetName(productSetName: string): string | number;
    /**
     * Parse the product_set from ProductSet resource.
     *
     * @param {string} productSetName
     *   A fully-qualified path representing ProductSet resource.
     * @returns {string} A string representing the product_set.
     */
    matchProductSetFromProductSetName(productSetName: string): string | number;
    /**
     * Return a fully-qualified referenceImage resource name string.
     *
     * @param {string} project
     * @param {string} location
     * @param {string} product
     * @param {string} reference_image
     * @returns {string} Resource name string.
     */
    referenceImagePath(project: string, location: string, product: string, referenceImage: string): string;
    /**
     * Parse the project from ReferenceImage resource.
     *
     * @param {string} referenceImageName
     *   A fully-qualified path representing ReferenceImage resource.
     * @returns {string} A string representing the project.
     */
    matchProjectFromReferenceImageName(referenceImageName: string): string | number;
    /**
     * Parse the location from ReferenceImage resource.
     *
     * @param {string} referenceImageName
     *   A fully-qualified path representing ReferenceImage resource.
     * @returns {string} A string representing the location.
     */
    matchLocationFromReferenceImageName(referenceImageName: string): string | number;
    /**
     * Parse the product from ReferenceImage resource.
     *
     * @param {string} referenceImageName
     *   A fully-qualified path representing ReferenceImage resource.
     * @returns {string} A string representing the product.
     */
    matchProductFromReferenceImageName(referenceImageName: string): string | number;
    /**
     * Parse the reference_image from ReferenceImage resource.
     *
     * @param {string} referenceImageName
     *   A fully-qualified path representing ReferenceImage resource.
     * @returns {string} A string representing the reference_image.
     */
    matchReferenceImageFromReferenceImageName(referenceImageName: string): string | number;
    /**
     * Terminate the gRPC channel and close the client.
     *
     * The client will no longer be usable and all future behavior is undefined.
     * @returns {Promise} A promise that resolves when the client is closed.
     */
    close(): Promise<void>;
}
