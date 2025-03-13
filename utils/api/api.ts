interface FetchOptions {
    headers?: Record<string, string>;
    params?: Record<string, any>;

    [key: string]: any;
}

// Options typées pour les requêtes API
interface ApiOptions<T = any> {
    immediate?: boolean;
    watch?: boolean;
    options?: FetchOptions;
    body?: T;
}


// Fonction de base pour les appels API pendant le setup du composant
function useApiCall<T = any, R = any>(route: string, method: string, opts: ApiOptions = {}) {
    const config = useRuntimeConfig();

    return useFetch<R>(route, {
        method,
        baseURL: config.public.serverApiUrl,
        body: opts.body,
        immediate: opts.immediate,
        watch: opts.watch,
        ...opts.options
    });
}

// Fonction de base pour les appels API après le montage du composant
async function fetchApiCall<T = any, R = any>(route: string, method: string, opts: ApiOptions = {}) {
    const config = useRuntimeConfig();

    return await $fetch<R>(route, {
        method,
        baseURL: config.public.publicApiUrl,
        body: opts.body,
        ...opts.options
    });
}

// Pour utilisation pendant le setup du composant (useFetch)
export function useGet<R = any>(route: string, opts: Omit<ApiOptions, 'body'> = {}) {
    return useApiCall<never, R>(route, 'GET', opts);
}

export function usePost<T = any, R = any>(route: string, body?: T, opts: Omit<ApiOptions, 'body'> = {}) {
    return useApiCall<T, R>(route, 'POST', {...opts, body});
}

export function usePatch<T = any, R = any>(route: string, body?: T, opts: Omit<ApiOptions, 'body'> = {}) {
    return useApiCall<T, R>(route, 'PATCH', {...opts, body});
}

export function useRemove<R = any>(route: string, opts: Omit<ApiOptions, 'body'> = {}) {
    return useApiCall<never, R>(route, 'DELETE', opts);
}

// Pour utilisation après montage du composant ($fetch)
export function get<R = any>(route: string, opts: Omit<ApiOptions, 'body'> = {}) {
    return fetchApiCall<never, R>(route, 'GET', opts);
}

export function post<T = any, R = any>(route: string, body?: T, opts: Omit<ApiOptions, 'body'> = {}) {
    return fetchApiCall<T, R>(route, 'POST', {...opts, body});
}

export function patch<T = any, R = any>(route: string, body?: T, opts: Omit<ApiOptions, 'body'> = {}) {
    return fetchApiCall<T, R>(route, 'PATCH', {...opts, body});
}

export function remove<R = any>(route: string, opts: Omit<ApiOptions, 'body'> = {}) {
    return fetchApiCall<never, R>(route, 'DELETE', opts);
}