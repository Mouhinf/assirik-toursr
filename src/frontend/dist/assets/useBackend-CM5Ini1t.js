var __typeError = (msg) => {
  throw TypeError(msg);
};
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);
var _client, _currentQuery, _currentQueryInitialState, _currentResult, _currentResultState, _currentResultOptions, _currentThenable, _selectError, _selectFn, _selectResult, _lastQueryWithDefinedData, _staleTimeoutId, _refetchIntervalId, _currentRefetchInterval, _trackedProps, _QueryObserver_instances, executeFetch_fn, updateStaleTimeout_fn, computeRefetchInterval_fn, updateRefetchInterval_fn, updateTimers_fn, clearStaleTimeout_fn, clearRefetchInterval_fn, updateQuery_fn, notify_fn, _a2, _client2, _currentResult2, _currentMutation, _mutateOptions, _MutationObserver_instances, updateResult_fn, notify_fn2, _b;
import { S as Subscribable, p as pendingThenable, a as resolveEnabled, s as shallowEqualObjects, b as resolveStaleTime, n as noop, e as environmentManager, i as isValidTimeout, t as timeUntilStale, c as timeoutManager, f as focusManager, d as fetchState, g as replaceData, h as notifyManager, k as hashKey, l as getDefaultState, r as reactExports, m as shouldThrowError, o as useQueryClient } from "./index-C-KlYw6s.js";
var QueryObserver = (_a2 = class extends Subscribable {
  constructor(client2, options) {
    super();
    __privateAdd(this, _QueryObserver_instances);
    __privateAdd(this, _client);
    __privateAdd(this, _currentQuery);
    __privateAdd(this, _currentQueryInitialState);
    __privateAdd(this, _currentResult);
    __privateAdd(this, _currentResultState);
    __privateAdd(this, _currentResultOptions);
    __privateAdd(this, _currentThenable);
    __privateAdd(this, _selectError);
    __privateAdd(this, _selectFn);
    __privateAdd(this, _selectResult);
    // This property keeps track of the last query with defined data.
    // It will be used to pass the previous data and query to the placeholder function between renders.
    __privateAdd(this, _lastQueryWithDefinedData);
    __privateAdd(this, _staleTimeoutId);
    __privateAdd(this, _refetchIntervalId);
    __privateAdd(this, _currentRefetchInterval);
    __privateAdd(this, _trackedProps, /* @__PURE__ */ new Set());
    this.options = options;
    __privateSet(this, _client, client2);
    __privateSet(this, _selectError, null);
    __privateSet(this, _currentThenable, pendingThenable());
    this.bindMethods();
    this.setOptions(options);
  }
  bindMethods() {
    this.refetch = this.refetch.bind(this);
  }
  onSubscribe() {
    if (this.listeners.size === 1) {
      __privateGet(this, _currentQuery).addObserver(this);
      if (shouldFetchOnMount(__privateGet(this, _currentQuery), this.options)) {
        __privateMethod(this, _QueryObserver_instances, executeFetch_fn).call(this);
      } else {
        this.updateResult();
      }
      __privateMethod(this, _QueryObserver_instances, updateTimers_fn).call(this);
    }
  }
  onUnsubscribe() {
    if (!this.hasListeners()) {
      this.destroy();
    }
  }
  shouldFetchOnReconnect() {
    return shouldFetchOn(
      __privateGet(this, _currentQuery),
      this.options,
      this.options.refetchOnReconnect
    );
  }
  shouldFetchOnWindowFocus() {
    return shouldFetchOn(
      __privateGet(this, _currentQuery),
      this.options,
      this.options.refetchOnWindowFocus
    );
  }
  destroy() {
    this.listeners = /* @__PURE__ */ new Set();
    __privateMethod(this, _QueryObserver_instances, clearStaleTimeout_fn).call(this);
    __privateMethod(this, _QueryObserver_instances, clearRefetchInterval_fn).call(this);
    __privateGet(this, _currentQuery).removeObserver(this);
  }
  setOptions(options) {
    const prevOptions = this.options;
    const prevQuery = __privateGet(this, _currentQuery);
    this.options = __privateGet(this, _client).defaultQueryOptions(options);
    if (this.options.enabled !== void 0 && typeof this.options.enabled !== "boolean" && typeof this.options.enabled !== "function" && typeof resolveEnabled(this.options.enabled, __privateGet(this, _currentQuery)) !== "boolean") {
      throw new Error(
        "Expected enabled to be a boolean or a callback that returns a boolean"
      );
    }
    __privateMethod(this, _QueryObserver_instances, updateQuery_fn).call(this);
    __privateGet(this, _currentQuery).setOptions(this.options);
    if (prevOptions._defaulted && !shallowEqualObjects(this.options, prevOptions)) {
      __privateGet(this, _client).getQueryCache().notify({
        type: "observerOptionsUpdated",
        query: __privateGet(this, _currentQuery),
        observer: this
      });
    }
    const mounted = this.hasListeners();
    if (mounted && shouldFetchOptionally(
      __privateGet(this, _currentQuery),
      prevQuery,
      this.options,
      prevOptions
    )) {
      __privateMethod(this, _QueryObserver_instances, executeFetch_fn).call(this);
    }
    this.updateResult();
    if (mounted && (__privateGet(this, _currentQuery) !== prevQuery || resolveEnabled(this.options.enabled, __privateGet(this, _currentQuery)) !== resolveEnabled(prevOptions.enabled, __privateGet(this, _currentQuery)) || resolveStaleTime(this.options.staleTime, __privateGet(this, _currentQuery)) !== resolveStaleTime(prevOptions.staleTime, __privateGet(this, _currentQuery)))) {
      __privateMethod(this, _QueryObserver_instances, updateStaleTimeout_fn).call(this);
    }
    const nextRefetchInterval = __privateMethod(this, _QueryObserver_instances, computeRefetchInterval_fn).call(this);
    if (mounted && (__privateGet(this, _currentQuery) !== prevQuery || resolveEnabled(this.options.enabled, __privateGet(this, _currentQuery)) !== resolveEnabled(prevOptions.enabled, __privateGet(this, _currentQuery)) || nextRefetchInterval !== __privateGet(this, _currentRefetchInterval))) {
      __privateMethod(this, _QueryObserver_instances, updateRefetchInterval_fn).call(this, nextRefetchInterval);
    }
  }
  getOptimisticResult(options) {
    const query = __privateGet(this, _client).getQueryCache().build(__privateGet(this, _client), options);
    const result = this.createResult(query, options);
    if (shouldAssignObserverCurrentProperties(this, result)) {
      __privateSet(this, _currentResult, result);
      __privateSet(this, _currentResultOptions, this.options);
      __privateSet(this, _currentResultState, __privateGet(this, _currentQuery).state);
    }
    return result;
  }
  getCurrentResult() {
    return __privateGet(this, _currentResult);
  }
  trackResult(result, onPropTracked) {
    return new Proxy(result, {
      get: (target, key) => {
        this.trackProp(key);
        onPropTracked == null ? void 0 : onPropTracked(key);
        if (key === "promise") {
          this.trackProp("data");
          if (!this.options.experimental_prefetchInRender && __privateGet(this, _currentThenable).status === "pending") {
            __privateGet(this, _currentThenable).reject(
              new Error(
                "experimental_prefetchInRender feature flag is not enabled"
              )
            );
          }
        }
        return Reflect.get(target, key);
      }
    });
  }
  trackProp(key) {
    __privateGet(this, _trackedProps).add(key);
  }
  getCurrentQuery() {
    return __privateGet(this, _currentQuery);
  }
  refetch({ ...options } = {}) {
    return this.fetch({
      ...options
    });
  }
  fetchOptimistic(options) {
    const defaultedOptions = __privateGet(this, _client).defaultQueryOptions(options);
    const query = __privateGet(this, _client).getQueryCache().build(__privateGet(this, _client), defaultedOptions);
    return query.fetch().then(() => this.createResult(query, defaultedOptions));
  }
  fetch(fetchOptions) {
    return __privateMethod(this, _QueryObserver_instances, executeFetch_fn).call(this, {
      ...fetchOptions,
      cancelRefetch: fetchOptions.cancelRefetch ?? true
    }).then(() => {
      this.updateResult();
      return __privateGet(this, _currentResult);
    });
  }
  createResult(query, options) {
    var _a3;
    const prevQuery = __privateGet(this, _currentQuery);
    const prevOptions = this.options;
    const prevResult = __privateGet(this, _currentResult);
    const prevResultState = __privateGet(this, _currentResultState);
    const prevResultOptions = __privateGet(this, _currentResultOptions);
    const queryChange = query !== prevQuery;
    const queryInitialState = queryChange ? query.state : __privateGet(this, _currentQueryInitialState);
    const { state } = query;
    let newState = { ...state };
    let isPlaceholderData = false;
    let data;
    if (options._optimisticResults) {
      const mounted = this.hasListeners();
      const fetchOnMount = !mounted && shouldFetchOnMount(query, options);
      const fetchOptionally = mounted && shouldFetchOptionally(query, prevQuery, options, prevOptions);
      if (fetchOnMount || fetchOptionally) {
        newState = {
          ...newState,
          ...fetchState(state.data, query.options)
        };
      }
      if (options._optimisticResults === "isRestoring") {
        newState.fetchStatus = "idle";
      }
    }
    let { error, errorUpdatedAt, status } = newState;
    data = newState.data;
    let skipSelect = false;
    if (options.placeholderData !== void 0 && data === void 0 && status === "pending") {
      let placeholderData;
      if ((prevResult == null ? void 0 : prevResult.isPlaceholderData) && options.placeholderData === (prevResultOptions == null ? void 0 : prevResultOptions.placeholderData)) {
        placeholderData = prevResult.data;
        skipSelect = true;
      } else {
        placeholderData = typeof options.placeholderData === "function" ? options.placeholderData(
          (_a3 = __privateGet(this, _lastQueryWithDefinedData)) == null ? void 0 : _a3.state.data,
          __privateGet(this, _lastQueryWithDefinedData)
        ) : options.placeholderData;
      }
      if (placeholderData !== void 0) {
        status = "success";
        data = replaceData(
          prevResult == null ? void 0 : prevResult.data,
          placeholderData,
          options
        );
        isPlaceholderData = true;
      }
    }
    if (options.select && data !== void 0 && !skipSelect) {
      if (prevResult && data === (prevResultState == null ? void 0 : prevResultState.data) && options.select === __privateGet(this, _selectFn)) {
        data = __privateGet(this, _selectResult);
      } else {
        try {
          __privateSet(this, _selectFn, options.select);
          data = options.select(data);
          data = replaceData(prevResult == null ? void 0 : prevResult.data, data, options);
          __privateSet(this, _selectResult, data);
          __privateSet(this, _selectError, null);
        } catch (selectError) {
          __privateSet(this, _selectError, selectError);
        }
      }
    }
    if (__privateGet(this, _selectError)) {
      error = __privateGet(this, _selectError);
      data = __privateGet(this, _selectResult);
      errorUpdatedAt = Date.now();
      status = "error";
    }
    const isFetching = newState.fetchStatus === "fetching";
    const isPending = status === "pending";
    const isError = status === "error";
    const isLoading = isPending && isFetching;
    const hasData = data !== void 0;
    const result = {
      status,
      fetchStatus: newState.fetchStatus,
      isPending,
      isSuccess: status === "success",
      isError,
      isInitialLoading: isLoading,
      isLoading,
      data,
      dataUpdatedAt: newState.dataUpdatedAt,
      error,
      errorUpdatedAt,
      failureCount: newState.fetchFailureCount,
      failureReason: newState.fetchFailureReason,
      errorUpdateCount: newState.errorUpdateCount,
      isFetched: query.isFetched(),
      isFetchedAfterMount: newState.dataUpdateCount > queryInitialState.dataUpdateCount || newState.errorUpdateCount > queryInitialState.errorUpdateCount,
      isFetching,
      isRefetching: isFetching && !isPending,
      isLoadingError: isError && !hasData,
      isPaused: newState.fetchStatus === "paused",
      isPlaceholderData,
      isRefetchError: isError && hasData,
      isStale: isStale(query, options),
      refetch: this.refetch,
      promise: __privateGet(this, _currentThenable),
      isEnabled: resolveEnabled(options.enabled, query) !== false
    };
    const nextResult = result;
    if (this.options.experimental_prefetchInRender) {
      const hasResultData = nextResult.data !== void 0;
      const isErrorWithoutData = nextResult.status === "error" && !hasResultData;
      const finalizeThenableIfPossible = (thenable) => {
        if (isErrorWithoutData) {
          thenable.reject(nextResult.error);
        } else if (hasResultData) {
          thenable.resolve(nextResult.data);
        }
      };
      const recreateThenable = () => {
        const pending = __privateSet(this, _currentThenable, nextResult.promise = pendingThenable());
        finalizeThenableIfPossible(pending);
      };
      const prevThenable = __privateGet(this, _currentThenable);
      switch (prevThenable.status) {
        case "pending":
          if (query.queryHash === prevQuery.queryHash) {
            finalizeThenableIfPossible(prevThenable);
          }
          break;
        case "fulfilled":
          if (isErrorWithoutData || nextResult.data !== prevThenable.value) {
            recreateThenable();
          }
          break;
        case "rejected":
          if (!isErrorWithoutData || nextResult.error !== prevThenable.reason) {
            recreateThenable();
          }
          break;
      }
    }
    return nextResult;
  }
  updateResult() {
    const prevResult = __privateGet(this, _currentResult);
    const nextResult = this.createResult(__privateGet(this, _currentQuery), this.options);
    __privateSet(this, _currentResultState, __privateGet(this, _currentQuery).state);
    __privateSet(this, _currentResultOptions, this.options);
    if (__privateGet(this, _currentResultState).data !== void 0) {
      __privateSet(this, _lastQueryWithDefinedData, __privateGet(this, _currentQuery));
    }
    if (shallowEqualObjects(nextResult, prevResult)) {
      return;
    }
    __privateSet(this, _currentResult, nextResult);
    const shouldNotifyListeners = () => {
      if (!prevResult) {
        return true;
      }
      const { notifyOnChangeProps } = this.options;
      const notifyOnChangePropsValue = typeof notifyOnChangeProps === "function" ? notifyOnChangeProps() : notifyOnChangeProps;
      if (notifyOnChangePropsValue === "all" || !notifyOnChangePropsValue && !__privateGet(this, _trackedProps).size) {
        return true;
      }
      const includedProps = new Set(
        notifyOnChangePropsValue ?? __privateGet(this, _trackedProps)
      );
      if (this.options.throwOnError) {
        includedProps.add("error");
      }
      return Object.keys(__privateGet(this, _currentResult)).some((key) => {
        const typedKey = key;
        const changed = __privateGet(this, _currentResult)[typedKey] !== prevResult[typedKey];
        return changed && includedProps.has(typedKey);
      });
    };
    __privateMethod(this, _QueryObserver_instances, notify_fn).call(this, { listeners: shouldNotifyListeners() });
  }
  onQueryUpdate() {
    this.updateResult();
    if (this.hasListeners()) {
      __privateMethod(this, _QueryObserver_instances, updateTimers_fn).call(this);
    }
  }
}, _client = new WeakMap(), _currentQuery = new WeakMap(), _currentQueryInitialState = new WeakMap(), _currentResult = new WeakMap(), _currentResultState = new WeakMap(), _currentResultOptions = new WeakMap(), _currentThenable = new WeakMap(), _selectError = new WeakMap(), _selectFn = new WeakMap(), _selectResult = new WeakMap(), _lastQueryWithDefinedData = new WeakMap(), _staleTimeoutId = new WeakMap(), _refetchIntervalId = new WeakMap(), _currentRefetchInterval = new WeakMap(), _trackedProps = new WeakMap(), _QueryObserver_instances = new WeakSet(), executeFetch_fn = function(fetchOptions) {
  __privateMethod(this, _QueryObserver_instances, updateQuery_fn).call(this);
  let promise = __privateGet(this, _currentQuery).fetch(
    this.options,
    fetchOptions
  );
  if (!(fetchOptions == null ? void 0 : fetchOptions.throwOnError)) {
    promise = promise.catch(noop);
  }
  return promise;
}, updateStaleTimeout_fn = function() {
  __privateMethod(this, _QueryObserver_instances, clearStaleTimeout_fn).call(this);
  const staleTime = resolveStaleTime(
    this.options.staleTime,
    __privateGet(this, _currentQuery)
  );
  if (environmentManager.isServer() || __privateGet(this, _currentResult).isStale || !isValidTimeout(staleTime)) {
    return;
  }
  const time = timeUntilStale(__privateGet(this, _currentResult).dataUpdatedAt, staleTime);
  const timeout = time + 1;
  __privateSet(this, _staleTimeoutId, timeoutManager.setTimeout(() => {
    if (!__privateGet(this, _currentResult).isStale) {
      this.updateResult();
    }
  }, timeout));
}, computeRefetchInterval_fn = function() {
  return (typeof this.options.refetchInterval === "function" ? this.options.refetchInterval(__privateGet(this, _currentQuery)) : this.options.refetchInterval) ?? false;
}, updateRefetchInterval_fn = function(nextInterval) {
  __privateMethod(this, _QueryObserver_instances, clearRefetchInterval_fn).call(this);
  __privateSet(this, _currentRefetchInterval, nextInterval);
  if (environmentManager.isServer() || resolveEnabled(this.options.enabled, __privateGet(this, _currentQuery)) === false || !isValidTimeout(__privateGet(this, _currentRefetchInterval)) || __privateGet(this, _currentRefetchInterval) === 0) {
    return;
  }
  __privateSet(this, _refetchIntervalId, timeoutManager.setInterval(() => {
    if (this.options.refetchIntervalInBackground || focusManager.isFocused()) {
      __privateMethod(this, _QueryObserver_instances, executeFetch_fn).call(this);
    }
  }, __privateGet(this, _currentRefetchInterval)));
}, updateTimers_fn = function() {
  __privateMethod(this, _QueryObserver_instances, updateStaleTimeout_fn).call(this);
  __privateMethod(this, _QueryObserver_instances, updateRefetchInterval_fn).call(this, __privateMethod(this, _QueryObserver_instances, computeRefetchInterval_fn).call(this));
}, clearStaleTimeout_fn = function() {
  if (__privateGet(this, _staleTimeoutId)) {
    timeoutManager.clearTimeout(__privateGet(this, _staleTimeoutId));
    __privateSet(this, _staleTimeoutId, void 0);
  }
}, clearRefetchInterval_fn = function() {
  if (__privateGet(this, _refetchIntervalId)) {
    timeoutManager.clearInterval(__privateGet(this, _refetchIntervalId));
    __privateSet(this, _refetchIntervalId, void 0);
  }
}, updateQuery_fn = function() {
  const query = __privateGet(this, _client).getQueryCache().build(__privateGet(this, _client), this.options);
  if (query === __privateGet(this, _currentQuery)) {
    return;
  }
  const prevQuery = __privateGet(this, _currentQuery);
  __privateSet(this, _currentQuery, query);
  __privateSet(this, _currentQueryInitialState, query.state);
  if (this.hasListeners()) {
    prevQuery == null ? void 0 : prevQuery.removeObserver(this);
    query.addObserver(this);
  }
}, notify_fn = function(notifyOptions) {
  notifyManager.batch(() => {
    if (notifyOptions.listeners) {
      this.listeners.forEach((listener) => {
        listener(__privateGet(this, _currentResult));
      });
    }
    __privateGet(this, _client).getQueryCache().notify({
      query: __privateGet(this, _currentQuery),
      type: "observerResultsUpdated"
    });
  });
}, _a2);
function shouldLoadOnMount(query, options) {
  return resolveEnabled(options.enabled, query) !== false && query.state.data === void 0 && !(query.state.status === "error" && options.retryOnMount === false);
}
function shouldFetchOnMount(query, options) {
  return shouldLoadOnMount(query, options) || query.state.data !== void 0 && shouldFetchOn(query, options, options.refetchOnMount);
}
function shouldFetchOn(query, options, field) {
  if (resolveEnabled(options.enabled, query) !== false && resolveStaleTime(options.staleTime, query) !== "static") {
    const value = typeof field === "function" ? field(query) : field;
    return value === "always" || value !== false && isStale(query, options);
  }
  return false;
}
function shouldFetchOptionally(query, prevQuery, options, prevOptions) {
  return (query !== prevQuery || resolveEnabled(prevOptions.enabled, query) === false) && (!options.suspense || query.state.status !== "error") && isStale(query, options);
}
function isStale(query, options) {
  return resolveEnabled(options.enabled, query) !== false && query.isStaleByTime(resolveStaleTime(options.staleTime, query));
}
function shouldAssignObserverCurrentProperties(observer, optimisticResult) {
  if (!shallowEqualObjects(observer.getCurrentResult(), optimisticResult)) {
    return true;
  }
  return false;
}
var MutationObserver = (_b = class extends Subscribable {
  constructor(client2, options) {
    super();
    __privateAdd(this, _MutationObserver_instances);
    __privateAdd(this, _client2);
    __privateAdd(this, _currentResult2);
    __privateAdd(this, _currentMutation);
    __privateAdd(this, _mutateOptions);
    __privateSet(this, _client2, client2);
    this.setOptions(options);
    this.bindMethods();
    __privateMethod(this, _MutationObserver_instances, updateResult_fn).call(this);
  }
  bindMethods() {
    this.mutate = this.mutate.bind(this);
    this.reset = this.reset.bind(this);
  }
  setOptions(options) {
    var _a3;
    const prevOptions = this.options;
    this.options = __privateGet(this, _client2).defaultMutationOptions(options);
    if (!shallowEqualObjects(this.options, prevOptions)) {
      __privateGet(this, _client2).getMutationCache().notify({
        type: "observerOptionsUpdated",
        mutation: __privateGet(this, _currentMutation),
        observer: this
      });
    }
    if ((prevOptions == null ? void 0 : prevOptions.mutationKey) && this.options.mutationKey && hashKey(prevOptions.mutationKey) !== hashKey(this.options.mutationKey)) {
      this.reset();
    } else if (((_a3 = __privateGet(this, _currentMutation)) == null ? void 0 : _a3.state.status) === "pending") {
      __privateGet(this, _currentMutation).setOptions(this.options);
    }
  }
  onUnsubscribe() {
    var _a3;
    if (!this.hasListeners()) {
      (_a3 = __privateGet(this, _currentMutation)) == null ? void 0 : _a3.removeObserver(this);
    }
  }
  onMutationUpdate(action) {
    __privateMethod(this, _MutationObserver_instances, updateResult_fn).call(this);
    __privateMethod(this, _MutationObserver_instances, notify_fn2).call(this, action);
  }
  getCurrentResult() {
    return __privateGet(this, _currentResult2);
  }
  reset() {
    var _a3;
    (_a3 = __privateGet(this, _currentMutation)) == null ? void 0 : _a3.removeObserver(this);
    __privateSet(this, _currentMutation, void 0);
    __privateMethod(this, _MutationObserver_instances, updateResult_fn).call(this);
    __privateMethod(this, _MutationObserver_instances, notify_fn2).call(this);
  }
  mutate(variables, options) {
    var _a3;
    __privateSet(this, _mutateOptions, options);
    (_a3 = __privateGet(this, _currentMutation)) == null ? void 0 : _a3.removeObserver(this);
    __privateSet(this, _currentMutation, __privateGet(this, _client2).getMutationCache().build(__privateGet(this, _client2), this.options));
    __privateGet(this, _currentMutation).addObserver(this);
    return __privateGet(this, _currentMutation).execute(variables);
  }
}, _client2 = new WeakMap(), _currentResult2 = new WeakMap(), _currentMutation = new WeakMap(), _mutateOptions = new WeakMap(), _MutationObserver_instances = new WeakSet(), updateResult_fn = function() {
  var _a3;
  const state = ((_a3 = __privateGet(this, _currentMutation)) == null ? void 0 : _a3.state) ?? getDefaultState();
  __privateSet(this, _currentResult2, {
    ...state,
    isPending: state.status === "pending",
    isSuccess: state.status === "success",
    isError: state.status === "error",
    isIdle: state.status === "idle",
    mutate: this.mutate,
    reset: this.reset
  });
}, notify_fn2 = function(action) {
  notifyManager.batch(() => {
    var _a3, _b2, _c, _d, _e, _f, _g, _h;
    if (__privateGet(this, _mutateOptions) && this.hasListeners()) {
      const variables = __privateGet(this, _currentResult2).variables;
      const onMutateResult = __privateGet(this, _currentResult2).context;
      const context = {
        client: __privateGet(this, _client2),
        meta: this.options.meta,
        mutationKey: this.options.mutationKey
      };
      if ((action == null ? void 0 : action.type) === "success") {
        try {
          (_b2 = (_a3 = __privateGet(this, _mutateOptions)).onSuccess) == null ? void 0 : _b2.call(
            _a3,
            action.data,
            variables,
            onMutateResult,
            context
          );
        } catch (e) {
          void Promise.reject(e);
        }
        try {
          (_d = (_c = __privateGet(this, _mutateOptions)).onSettled) == null ? void 0 : _d.call(
            _c,
            action.data,
            null,
            variables,
            onMutateResult,
            context
          );
        } catch (e) {
          void Promise.reject(e);
        }
      } else if ((action == null ? void 0 : action.type) === "error") {
        try {
          (_f = (_e = __privateGet(this, _mutateOptions)).onError) == null ? void 0 : _f.call(
            _e,
            action.error,
            variables,
            onMutateResult,
            context
          );
        } catch (e) {
          void Promise.reject(e);
        }
        try {
          (_h = (_g = __privateGet(this, _mutateOptions)).onSettled) == null ? void 0 : _h.call(
            _g,
            void 0,
            action.error,
            variables,
            onMutateResult,
            context
          );
        } catch (e) {
          void Promise.reject(e);
        }
      }
    }
    this.listeners.forEach((listener) => {
      listener(__privateGet(this, _currentResult2));
    });
  });
}, _b);
var IsRestoringContext = reactExports.createContext(false);
var useIsRestoring = () => reactExports.useContext(IsRestoringContext);
IsRestoringContext.Provider;
function createValue() {
  let isReset = false;
  return {
    clearReset: () => {
      isReset = false;
    },
    reset: () => {
      isReset = true;
    },
    isReset: () => {
      return isReset;
    }
  };
}
var QueryErrorResetBoundaryContext = reactExports.createContext(createValue());
var useQueryErrorResetBoundary = () => reactExports.useContext(QueryErrorResetBoundaryContext);
var ensurePreventErrorBoundaryRetry = (options, errorResetBoundary, query) => {
  const throwOnError = (query == null ? void 0 : query.state.error) && typeof options.throwOnError === "function" ? shouldThrowError(options.throwOnError, [query.state.error, query]) : options.throwOnError;
  if (options.suspense || options.experimental_prefetchInRender || throwOnError) {
    if (!errorResetBoundary.isReset()) {
      options.retryOnMount = false;
    }
  }
};
var useClearResetErrorBoundary = (errorResetBoundary) => {
  reactExports.useEffect(() => {
    errorResetBoundary.clearReset();
  }, [errorResetBoundary]);
};
var getHasError = ({
  result,
  errorResetBoundary,
  throwOnError,
  query,
  suspense
}) => {
  return result.isError && !errorResetBoundary.isReset() && !result.isFetching && query && (suspense && result.data === void 0 || shouldThrowError(throwOnError, [result.error, query]));
};
var ensureSuspenseTimers = (defaultedOptions) => {
  if (defaultedOptions.suspense) {
    const MIN_SUSPENSE_TIME_MS = 1e3;
    const clamp = (value) => value === "static" ? value : Math.max(value ?? MIN_SUSPENSE_TIME_MS, MIN_SUSPENSE_TIME_MS);
    const originalStaleTime = defaultedOptions.staleTime;
    defaultedOptions.staleTime = typeof originalStaleTime === "function" ? (...args) => clamp(originalStaleTime(...args)) : clamp(originalStaleTime);
    if (typeof defaultedOptions.gcTime === "number") {
      defaultedOptions.gcTime = Math.max(
        defaultedOptions.gcTime,
        MIN_SUSPENSE_TIME_MS
      );
    }
  }
};
var willFetch = (result, isRestoring) => result.isLoading && result.isFetching && !isRestoring;
var shouldSuspend = (defaultedOptions, result) => (defaultedOptions == null ? void 0 : defaultedOptions.suspense) && result.isPending;
var fetchOptimistic = (defaultedOptions, observer, errorResetBoundary) => observer.fetchOptimistic(defaultedOptions).catch(() => {
  errorResetBoundary.clearReset();
});
function useBaseQuery(options, Observer, queryClient) {
  var _a3, _b2, _c, _d;
  const isRestoring = useIsRestoring();
  const errorResetBoundary = useQueryErrorResetBoundary();
  const client2 = useQueryClient();
  const defaultedOptions = client2.defaultQueryOptions(options);
  (_b2 = (_a3 = client2.getDefaultOptions().queries) == null ? void 0 : _a3._experimental_beforeQuery) == null ? void 0 : _b2.call(
    _a3,
    defaultedOptions
  );
  const query = client2.getQueryCache().get(defaultedOptions.queryHash);
  defaultedOptions._optimisticResults = isRestoring ? "isRestoring" : "optimistic";
  ensureSuspenseTimers(defaultedOptions);
  ensurePreventErrorBoundaryRetry(defaultedOptions, errorResetBoundary, query);
  useClearResetErrorBoundary(errorResetBoundary);
  const isNewCacheEntry = !client2.getQueryCache().get(defaultedOptions.queryHash);
  const [observer] = reactExports.useState(
    () => new Observer(
      client2,
      defaultedOptions
    )
  );
  const result = observer.getOptimisticResult(defaultedOptions);
  const shouldSubscribe = !isRestoring && options.subscribed !== false;
  reactExports.useSyncExternalStore(
    reactExports.useCallback(
      (onStoreChange) => {
        const unsubscribe = shouldSubscribe ? observer.subscribe(notifyManager.batchCalls(onStoreChange)) : noop;
        observer.updateResult();
        return unsubscribe;
      },
      [observer, shouldSubscribe]
    ),
    () => observer.getCurrentResult(),
    () => observer.getCurrentResult()
  );
  reactExports.useEffect(() => {
    observer.setOptions(defaultedOptions);
  }, [defaultedOptions, observer]);
  if (shouldSuspend(defaultedOptions, result)) {
    throw fetchOptimistic(defaultedOptions, observer, errorResetBoundary);
  }
  if (getHasError({
    result,
    errorResetBoundary,
    throwOnError: defaultedOptions.throwOnError,
    query,
    suspense: defaultedOptions.suspense
  })) {
    throw result.error;
  }
  (_d = (_c = client2.getDefaultOptions().queries) == null ? void 0 : _c._experimental_afterQuery) == null ? void 0 : _d.call(
    _c,
    defaultedOptions,
    result
  );
  if (defaultedOptions.experimental_prefetchInRender && !environmentManager.isServer() && willFetch(result, isRestoring)) {
    const promise = isNewCacheEntry ? (
      // Fetch immediately on render in order to ensure `.promise` is resolved even if the component is unmounted
      fetchOptimistic(defaultedOptions, observer, errorResetBoundary)
    ) : (
      // subscribe to the "cache promise" so that we can finalize the currentThenable once data comes in
      query == null ? void 0 : query.promise
    );
    promise == null ? void 0 : promise.catch(noop).finally(() => {
      observer.updateResult();
    });
  }
  return !defaultedOptions.notifyOnChangeProps ? observer.trackResult(result) : result;
}
function useQuery(options, queryClient) {
  return useBaseQuery(options, QueryObserver);
}
function useMutation(options, queryClient) {
  const client2 = useQueryClient();
  const [observer] = reactExports.useState(
    () => new MutationObserver(
      client2,
      options
    )
  );
  reactExports.useEffect(() => {
    observer.setOptions(options);
  }, [observer, options]);
  const result = reactExports.useSyncExternalStore(
    reactExports.useCallback(
      (onStoreChange) => observer.subscribe(notifyManager.batchCalls(onStoreChange)),
      [observer]
    ),
    () => observer.getCurrentResult(),
    () => observer.getCurrentResult()
  );
  const mutate = reactExports.useCallback(
    (variables, mutateOptions) => {
      observer.mutate(variables, mutateOptions).catch(noop);
    },
    [observer]
  );
  if (result.error && shouldThrowError(observer.options.throwOnError, [result.error])) {
    throw result.error;
  }
  return { ...result, mutate, mutateAsync: result.mutate };
}
function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, [])).next());
  });
}
function __classPrivateFieldGet(receiver, state, kind, f) {
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}
class Query {
  /**
   * Constructor for Query class.
   *
   * @param {string} method
   * @param {AttributesTypes} attribute
   * @param {QueryTypes} values
   */
  constructor(method, attribute, values) {
    this.method = method;
    this.attribute = attribute;
    if (values !== void 0) {
      if (Array.isArray(values)) {
        this.values = values;
      } else {
        this.values = [values];
      }
    }
  }
  /**
   * Convert the query object to a JSON string.
   *
   * @returns {string}
   */
  toString() {
    return JSON.stringify({
      method: this.method,
      attribute: this.attribute,
      values: this.values
    });
  }
}
Query.equal = (attribute, value) => new Query("equal", attribute, value).toString();
Query.notEqual = (attribute, value) => new Query("notEqual", attribute, value).toString();
Query.lessThan = (attribute, value) => new Query("lessThan", attribute, value).toString();
Query.lessThanEqual = (attribute, value) => new Query("lessThanEqual", attribute, value).toString();
Query.greaterThan = (attribute, value) => new Query("greaterThan", attribute, value).toString();
Query.greaterThanEqual = (attribute, value) => new Query("greaterThanEqual", attribute, value).toString();
Query.isNull = (attribute) => new Query("isNull", attribute).toString();
Query.isNotNull = (attribute) => new Query("isNotNull", attribute).toString();
Query.between = (attribute, start, end) => new Query("between", attribute, [start, end]).toString();
Query.startsWith = (attribute, value) => new Query("startsWith", attribute, value).toString();
Query.endsWith = (attribute, value) => new Query("endsWith", attribute, value).toString();
Query.select = (attributes) => new Query("select", void 0, attributes).toString();
Query.search = (attribute, value) => new Query("search", attribute, value).toString();
Query.orderDesc = (attribute) => new Query("orderDesc", attribute).toString();
Query.orderAsc = (attribute) => new Query("orderAsc", attribute).toString();
Query.cursorAfter = (documentId) => new Query("cursorAfter", void 0, documentId).toString();
Query.cursorBefore = (documentId) => new Query("cursorBefore", void 0, documentId).toString();
Query.limit = (limit) => new Query("limit", void 0, limit).toString();
Query.offset = (offset) => new Query("offset", void 0, offset).toString();
Query.contains = (attribute, value) => new Query("contains", attribute, value).toString();
Query.or = (queries) => new Query("or", void 0, queries.map((query) => JSON.parse(query))).toString();
Query.and = (queries) => new Query("and", void 0, queries.map((query) => JSON.parse(query))).toString();
class AppwriteException extends Error {
  /**
   * Initializes a Appwrite Exception.
   *
   * @param {string} message - The error message.
   * @param {number} code - The error code. Default is 0.
   * @param {string} type - The error type. Default is an empty string.
   * @param {string} response - The response string. Default is an empty string.
   */
  constructor(message, code = 0, type = "", response = "") {
    super(message);
    this.name = "AppwriteException";
    this.message = message;
    this.code = code;
    this.type = type;
    this.response = response;
  }
}
class Client {
  constructor() {
    this.config = {
      endpoint: "https://cloud.appwrite.io/v1",
      endpointRealtime: "",
      project: "",
      jwt: "",
      locale: "",
      session: "",
      devkey: ""
    };
    this.headers = {
      "x-sdk-name": "Web",
      "x-sdk-platform": "client",
      "x-sdk-language": "web",
      "x-sdk-version": "18.2.0",
      "X-Appwrite-Response-Format": "1.7.0"
    };
    this.realtime = {
      socket: void 0,
      timeout: void 0,
      heartbeat: void 0,
      url: "",
      channels: /* @__PURE__ */ new Set(),
      subscriptions: /* @__PURE__ */ new Map(),
      subscriptionsCounter: 0,
      reconnect: true,
      reconnectAttempts: 0,
      lastMessage: void 0,
      connect: () => {
        clearTimeout(this.realtime.timeout);
        this.realtime.timeout = window === null || window === void 0 ? void 0 : window.setTimeout(() => {
          this.realtime.createSocket();
        }, 50);
      },
      getTimeout: () => {
        switch (true) {
          case this.realtime.reconnectAttempts < 5:
            return 1e3;
          case this.realtime.reconnectAttempts < 15:
            return 5e3;
          case this.realtime.reconnectAttempts < 100:
            return 1e4;
          default:
            return 6e4;
        }
      },
      createHeartbeat: () => {
        if (this.realtime.heartbeat) {
          clearTimeout(this.realtime.heartbeat);
        }
        this.realtime.heartbeat = window === null || window === void 0 ? void 0 : window.setInterval(() => {
          var _a3;
          (_a3 = this.realtime.socket) === null || _a3 === void 0 ? void 0 : _a3.send(JSON.stringify({
            type: "ping"
          }));
        }, 2e4);
      },
      createSocket: () => {
        var _a3, _b2, _c;
        if (this.realtime.channels.size < 1) {
          this.realtime.reconnect = false;
          (_a3 = this.realtime.socket) === null || _a3 === void 0 ? void 0 : _a3.close();
          return;
        }
        const channels = new URLSearchParams();
        channels.set("project", this.config.project);
        this.realtime.channels.forEach((channel) => {
          channels.append("channels[]", channel);
        });
        const url = this.config.endpointRealtime + "/realtime?" + channels.toString();
        if (url !== this.realtime.url || // Check if URL is present
        !this.realtime.socket || // Check if WebSocket has not been created
        ((_b2 = this.realtime.socket) === null || _b2 === void 0 ? void 0 : _b2.readyState) > WebSocket.OPEN) {
          if (this.realtime.socket && ((_c = this.realtime.socket) === null || _c === void 0 ? void 0 : _c.readyState) < WebSocket.CLOSING) {
            this.realtime.reconnect = false;
            this.realtime.socket.close();
          }
          this.realtime.url = url;
          this.realtime.socket = new WebSocket(url);
          this.realtime.socket.addEventListener("message", this.realtime.onMessage);
          this.realtime.socket.addEventListener("open", (_event) => {
            this.realtime.reconnectAttempts = 0;
            this.realtime.createHeartbeat();
          });
          this.realtime.socket.addEventListener("close", (event) => {
            var _a4, _b3, _c2;
            if (!this.realtime.reconnect || ((_b3 = (_a4 = this.realtime) === null || _a4 === void 0 ? void 0 : _a4.lastMessage) === null || _b3 === void 0 ? void 0 : _b3.type) === "error" && // Check if last message was of type error
            ((_c2 = this.realtime) === null || _c2 === void 0 ? void 0 : _c2.lastMessage.data).code === 1008) {
              this.realtime.reconnect = true;
              return;
            }
            const timeout = this.realtime.getTimeout();
            console.error(`Realtime got disconnected. Reconnect will be attempted in ${timeout / 1e3} seconds.`, event.reason);
            setTimeout(() => {
              this.realtime.reconnectAttempts++;
              this.realtime.createSocket();
            }, timeout);
          });
        }
      },
      onMessage: (event) => {
        var _a3, _b2;
        try {
          const message = JSON.parse(event.data);
          this.realtime.lastMessage = message;
          switch (message.type) {
            case "connected":
              const cookie = JSON.parse((_a3 = window.localStorage.getItem("cookieFallback")) !== null && _a3 !== void 0 ? _a3 : "{}");
              const session = cookie === null || cookie === void 0 ? void 0 : cookie[`a_session_${this.config.project}`];
              const messageData = message.data;
              if (session && !messageData.user) {
                (_b2 = this.realtime.socket) === null || _b2 === void 0 ? void 0 : _b2.send(JSON.stringify({
                  type: "authentication",
                  data: {
                    session
                  }
                }));
              }
              break;
            case "event":
              let data = message.data;
              if (data === null || data === void 0 ? void 0 : data.channels) {
                const isSubscribed = data.channels.some((channel) => this.realtime.channels.has(channel));
                if (!isSubscribed)
                  return;
                this.realtime.subscriptions.forEach((subscription) => {
                  if (data.channels.some((channel) => subscription.channels.includes(channel))) {
                    setTimeout(() => subscription.callback(data));
                  }
                });
              }
              break;
            case "pong":
              break;
            case "error":
              throw message.data;
            default:
              break;
          }
        } catch (e) {
          console.error(e);
        }
      },
      cleanUp: (channels) => {
        this.realtime.channels.forEach((channel) => {
          if (channels.includes(channel)) {
            let found = Array.from(this.realtime.subscriptions).some(([_key, subscription]) => {
              return subscription.channels.includes(channel);
            });
            if (!found) {
              this.realtime.channels.delete(channel);
            }
          }
        });
      }
    };
  }
  /**
   * Set Endpoint
   *
   * Your project endpoint
   *
   * @param {string} endpoint
   *
   * @returns {this}
   */
  setEndpoint(endpoint) {
    if (!endpoint.startsWith("http://") && !endpoint.startsWith("https://")) {
      throw new AppwriteException("Invalid endpoint URL: " + endpoint);
    }
    this.config.endpoint = endpoint;
    this.config.endpointRealtime = endpoint.replace("https://", "wss://").replace("http://", "ws://");
    return this;
  }
  /**
   * Set Realtime Endpoint
   *
   * @param {string} endpointRealtime
   *
   * @returns {this}
   */
  setEndpointRealtime(endpointRealtime) {
    if (!endpointRealtime.startsWith("ws://") && !endpointRealtime.startsWith("wss://")) {
      throw new AppwriteException("Invalid realtime endpoint URL: " + endpointRealtime);
    }
    this.config.endpointRealtime = endpointRealtime;
    return this;
  }
  /**
   * Set Project
   *
   * Your project ID
   *
   * @param value string
   *
   * @return {this}
   */
  setProject(value) {
    this.headers["X-Appwrite-Project"] = value;
    this.config.project = value;
    return this;
  }
  /**
   * Set JWT
   *
   * Your secret JSON Web Token
   *
   * @param value string
   *
   * @return {this}
   */
  setJWT(value) {
    this.headers["X-Appwrite-JWT"] = value;
    this.config.jwt = value;
    return this;
  }
  /**
   * Set Locale
   *
   * @param value string
   *
   * @return {this}
   */
  setLocale(value) {
    this.headers["X-Appwrite-Locale"] = value;
    this.config.locale = value;
    return this;
  }
  /**
   * Set Session
   *
   * The user session to authenticate with
   *
   * @param value string
   *
   * @return {this}
   */
  setSession(value) {
    this.headers["X-Appwrite-Session"] = value;
    this.config.session = value;
    return this;
  }
  /**
   * Set DevKey
   *
   * Your secret dev API key
   *
   * @param value string
   *
   * @return {this}
   */
  setDevKey(value) {
    this.headers["X-Appwrite-Dev-Key"] = value;
    this.config.devkey = value;
    return this;
  }
  /**
   * Subscribes to Appwrite events and passes you the payload in realtime.
   *
   * @param {string|string[]} channels
   * Channel to subscribe - pass a single channel as a string or multiple with an array of strings.
   *
   * Possible channels are:
   * - account
   * - collections
   * - collections.[ID]
   * - collections.[ID].documents
   * - documents
   * - documents.[ID]
   * - files
   * - files.[ID]
   * - executions
   * - executions.[ID]
   * - functions.[ID]
   * - teams
   * - teams.[ID]
   * - memberships
   * - memberships.[ID]
   * @param {(payload: RealtimeMessage) => void} callback Is called on every realtime update.
   * @returns {() => void} Unsubscribes from events.
   */
  subscribe(channels, callback) {
    let channelArray = typeof channels === "string" ? [channels] : channels;
    channelArray.forEach((channel) => this.realtime.channels.add(channel));
    const counter = this.realtime.subscriptionsCounter++;
    this.realtime.subscriptions.set(counter, {
      channels: channelArray,
      callback
    });
    this.realtime.connect();
    return () => {
      this.realtime.subscriptions.delete(counter);
      this.realtime.cleanUp(channelArray);
      this.realtime.connect();
    };
  }
  prepareRequest(method, url, headers = {}, params = {}) {
    method = method.toUpperCase();
    headers = Object.assign({}, this.headers, headers);
    if (typeof window !== "undefined" && window.localStorage) {
      const cookieFallback = window.localStorage.getItem("cookieFallback");
      if (cookieFallback) {
        headers["X-Fallback-Cookies"] = cookieFallback;
      }
    }
    let options = {
      method,
      headers
    };
    if (headers["X-Appwrite-Dev-Key"] === void 0) {
      options.credentials = "include";
    }
    if (method === "GET") {
      for (const [key, value] of Object.entries(Client.flatten(params))) {
        url.searchParams.append(key, value);
      }
    } else {
      switch (headers["content-type"]) {
        case "application/json":
          options.body = JSON.stringify(params);
          break;
        case "multipart/form-data":
          const formData = new FormData();
          for (const [key, value] of Object.entries(params)) {
            if (value instanceof File) {
              formData.append(key, value, value.name);
            } else if (Array.isArray(value)) {
              for (const nestedValue of value) {
                formData.append(`${key}[]`, nestedValue);
              }
            } else {
              formData.append(key, value);
            }
          }
          options.body = formData;
          delete headers["content-type"];
          break;
      }
    }
    return { uri: url.toString(), options };
  }
  chunkedUpload(method, url, headers = {}, originalPayload = {}, onProgress) {
    var _a3;
    return __awaiter(this, void 0, void 0, function* () {
      const [fileParam, file] = (_a3 = Object.entries(originalPayload).find(([_, value]) => value instanceof File)) !== null && _a3 !== void 0 ? _a3 : [];
      if (!file || !fileParam) {
        throw new Error("File not found in payload");
      }
      if (file.size <= Client.CHUNK_SIZE) {
        return yield this.call(method, url, headers, originalPayload);
      }
      let start = 0;
      let response = null;
      while (start < file.size) {
        let end = start + Client.CHUNK_SIZE;
        if (end >= file.size) {
          end = file.size;
        }
        headers["content-range"] = `bytes ${start}-${end - 1}/${file.size}`;
        const chunk = file.slice(start, end);
        let payload = Object.assign({}, originalPayload);
        payload[fileParam] = new File([chunk], file.name);
        response = yield this.call(method, url, headers, payload);
        if (onProgress && typeof onProgress === "function") {
          onProgress({
            $id: response.$id,
            progress: Math.round(end / file.size * 100),
            sizeUploaded: end,
            chunksTotal: Math.ceil(file.size / Client.CHUNK_SIZE),
            chunksUploaded: Math.ceil(end / Client.CHUNK_SIZE)
          });
        }
        if (response && response.$id) {
          headers["x-appwrite-id"] = response.$id;
        }
        start = end;
      }
      return response;
    });
  }
  ping() {
    return __awaiter(this, void 0, void 0, function* () {
      return this.call("GET", new URL(this.config.endpoint + "/ping"));
    });
  }
  call(method, url, headers = {}, params = {}, responseType = "json") {
    var _a3, _b2;
    return __awaiter(this, void 0, void 0, function* () {
      const { uri, options } = this.prepareRequest(method, url, headers, params);
      let data = null;
      const response = yield fetch(uri, options);
      if (response.type === "opaque") {
        throw new AppwriteException(`Invalid Origin. Register your new client (${window.location.host}) as a new Web platform on your project console dashboard`, 403, "forbidden", "");
      }
      const warnings = response.headers.get("x-appwrite-warning");
      if (warnings) {
        warnings.split(";").forEach((warning) => console.warn("Warning: " + warning));
      }
      if ((_a3 = response.headers.get("content-type")) === null || _a3 === void 0 ? void 0 : _a3.includes("application/json")) {
        data = yield response.json();
      } else if (responseType === "arrayBuffer") {
        data = yield response.arrayBuffer();
      } else {
        data = {
          message: yield response.text()
        };
      }
      if (400 <= response.status) {
        let responseText = "";
        if (((_b2 = response.headers.get("content-type")) === null || _b2 === void 0 ? void 0 : _b2.includes("application/json")) || responseType === "arrayBuffer") {
          responseText = JSON.stringify(data);
        } else {
          responseText = data === null || data === void 0 ? void 0 : data.message;
        }
        throw new AppwriteException(data === null || data === void 0 ? void 0 : data.message, response.status, data === null || data === void 0 ? void 0 : data.type, responseText);
      }
      const cookieFallback = response.headers.get("X-Fallback-Cookies");
      if (typeof window !== "undefined" && window.localStorage && cookieFallback) {
        window.console.warn("Appwrite is using localStorage for session management. Increase your security by adding a custom domain as your API endpoint.");
        window.localStorage.setItem("cookieFallback", cookieFallback);
      }
      return data;
    });
  }
  static flatten(data, prefix = "") {
    let output = {};
    for (const [key, value] of Object.entries(data)) {
      let finalKey = prefix ? prefix + "[" + key + "]" : key;
      if (Array.isArray(value)) {
        output = Object.assign(Object.assign({}, output), Client.flatten(value, finalKey));
      } else {
        output[finalKey] = value;
      }
    }
    return output;
  }
}
Client.CHUNK_SIZE = 1024 * 1024 * 5;
class Databases {
  constructor(client2) {
    this.client = client2;
  }
  /**
   * Get a list of all the user&#039;s documents in a given collection. You can use the query params to filter your results.
   *
   * @param {string} databaseId
   * @param {string} collectionId
   * @param {string[]} queries
   * @throws {AppwriteException}
   * @returns {Promise<Models.DocumentList<Document>>}
   */
  listDocuments(databaseId, collectionId, queries) {
    if (typeof databaseId === "undefined") {
      throw new AppwriteException('Missing required parameter: "databaseId"');
    }
    if (typeof collectionId === "undefined") {
      throw new AppwriteException('Missing required parameter: "collectionId"');
    }
    const apiPath = "/databases/{databaseId}/collections/{collectionId}/documents".replace("{databaseId}", databaseId).replace("{collectionId}", collectionId);
    const payload = {};
    if (typeof queries !== "undefined") {
      payload["queries"] = queries;
    }
    const uri = new URL(this.client.config.endpoint + apiPath);
    const apiHeaders = {};
    return this.client.call("get", uri, apiHeaders, payload);
  }
  /**
   * Create a new Document. Before using this route, you should create a new collection resource using either a [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection) API or directly from your database console.
   *
   * @param {string} databaseId
   * @param {string} collectionId
   * @param {string} documentId
   * @param {Document extends Models.DefaultDocument ? Models.DataWithoutDocumentKeys : Omit<Document, keyof Models.Document>} data
   * @param {string[]} permissions
   * @throws {AppwriteException}
   * @returns {Promise<Document>}
   */
  createDocument(databaseId, collectionId, documentId, data, permissions) {
    if (typeof databaseId === "undefined") {
      throw new AppwriteException('Missing required parameter: "databaseId"');
    }
    if (typeof collectionId === "undefined") {
      throw new AppwriteException('Missing required parameter: "collectionId"');
    }
    if (typeof documentId === "undefined") {
      throw new AppwriteException('Missing required parameter: "documentId"');
    }
    if (typeof data === "undefined") {
      throw new AppwriteException('Missing required parameter: "data"');
    }
    const apiPath = "/databases/{databaseId}/collections/{collectionId}/documents".replace("{databaseId}", databaseId).replace("{collectionId}", collectionId);
    const payload = {};
    if (typeof documentId !== "undefined") {
      payload["documentId"] = documentId;
    }
    if (typeof data !== "undefined") {
      payload["data"] = data;
    }
    if (typeof permissions !== "undefined") {
      payload["permissions"] = permissions;
    }
    const uri = new URL(this.client.config.endpoint + apiPath);
    const apiHeaders = {
      "content-type": "application/json"
    };
    return this.client.call("post", uri, apiHeaders, payload);
  }
  /**
   * Get a document by its unique ID. This endpoint response returns a JSON object with the document data.
   *
   * @param {string} databaseId
   * @param {string} collectionId
   * @param {string} documentId
   * @param {string[]} queries
   * @throws {AppwriteException}
   * @returns {Promise<Document>}
   */
  getDocument(databaseId, collectionId, documentId, queries) {
    if (typeof databaseId === "undefined") {
      throw new AppwriteException('Missing required parameter: "databaseId"');
    }
    if (typeof collectionId === "undefined") {
      throw new AppwriteException('Missing required parameter: "collectionId"');
    }
    if (typeof documentId === "undefined") {
      throw new AppwriteException('Missing required parameter: "documentId"');
    }
    const apiPath = "/databases/{databaseId}/collections/{collectionId}/documents/{documentId}".replace("{databaseId}", databaseId).replace("{collectionId}", collectionId).replace("{documentId}", documentId);
    const payload = {};
    if (typeof queries !== "undefined") {
      payload["queries"] = queries;
    }
    const uri = new URL(this.client.config.endpoint + apiPath);
    const apiHeaders = {};
    return this.client.call("get", uri, apiHeaders, payload);
  }
  /**
   * **WARNING: Experimental Feature** - This endpoint is experimental and not yet officially supported. It may be subject to breaking changes or removal in future versions.
   *
   * Create or update a Document. Before using this route, you should create a new collection resource using either a [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection) API or directly from your database console.
   *
   * @param {string} databaseId
   * @param {string} collectionId
   * @param {string} documentId
   * @param {object} data
   * @param {string[]} permissions
   * @throws {AppwriteException}
   * @returns {Promise<Document>}
   */
  upsertDocument(databaseId, collectionId, documentId, data, permissions) {
    if (typeof databaseId === "undefined") {
      throw new AppwriteException('Missing required parameter: "databaseId"');
    }
    if (typeof collectionId === "undefined") {
      throw new AppwriteException('Missing required parameter: "collectionId"');
    }
    if (typeof documentId === "undefined") {
      throw new AppwriteException('Missing required parameter: "documentId"');
    }
    if (typeof data === "undefined") {
      throw new AppwriteException('Missing required parameter: "data"');
    }
    const apiPath = "/databases/{databaseId}/collections/{collectionId}/documents/{documentId}".replace("{databaseId}", databaseId).replace("{collectionId}", collectionId).replace("{documentId}", documentId);
    const payload = {};
    if (typeof data !== "undefined") {
      payload["data"] = data;
    }
    if (typeof permissions !== "undefined") {
      payload["permissions"] = permissions;
    }
    const uri = new URL(this.client.config.endpoint + apiPath);
    const apiHeaders = {
      "content-type": "application/json"
    };
    return this.client.call("put", uri, apiHeaders, payload);
  }
  /**
   * Update a document by its unique ID. Using the patch method you can pass only specific fields that will get updated.
   *
   * @param {string} databaseId
   * @param {string} collectionId
   * @param {string} documentId
   * @param {Partial<Document extends Models.DefaultDocument ? Models.DataWithoutDocumentKeys : Omit<Document, keyof Models.Document>>} data
   * @param {string[]} permissions
   * @throws {AppwriteException}
   * @returns {Promise<Document>}
   */
  updateDocument(databaseId, collectionId, documentId, data, permissions) {
    if (typeof databaseId === "undefined") {
      throw new AppwriteException('Missing required parameter: "databaseId"');
    }
    if (typeof collectionId === "undefined") {
      throw new AppwriteException('Missing required parameter: "collectionId"');
    }
    if (typeof documentId === "undefined") {
      throw new AppwriteException('Missing required parameter: "documentId"');
    }
    const apiPath = "/databases/{databaseId}/collections/{collectionId}/documents/{documentId}".replace("{databaseId}", databaseId).replace("{collectionId}", collectionId).replace("{documentId}", documentId);
    const payload = {};
    if (typeof data !== "undefined") {
      payload["data"] = data;
    }
    if (typeof permissions !== "undefined") {
      payload["permissions"] = permissions;
    }
    const uri = new URL(this.client.config.endpoint + apiPath);
    const apiHeaders = {
      "content-type": "application/json"
    };
    return this.client.call("patch", uri, apiHeaders, payload);
  }
  /**
   * Delete a document by its unique ID.
   *
   * @param {string} databaseId
   * @param {string} collectionId
   * @param {string} documentId
   * @throws {AppwriteException}
   * @returns {Promise<{}>}
   */
  deleteDocument(databaseId, collectionId, documentId) {
    if (typeof databaseId === "undefined") {
      throw new AppwriteException('Missing required parameter: "databaseId"');
    }
    if (typeof collectionId === "undefined") {
      throw new AppwriteException('Missing required parameter: "collectionId"');
    }
    if (typeof documentId === "undefined") {
      throw new AppwriteException('Missing required parameter: "documentId"');
    }
    const apiPath = "/databases/{databaseId}/collections/{collectionId}/documents/{documentId}".replace("{databaseId}", databaseId).replace("{collectionId}", collectionId).replace("{documentId}", documentId);
    const payload = {};
    const uri = new URL(this.client.config.endpoint + apiPath);
    const apiHeaders = {
      "content-type": "application/json"
    };
    return this.client.call("delete", uri, apiHeaders, payload);
  }
  /**
   * Decrement a specific attribute of a document by a given value.
   *
   * @param {string} databaseId
   * @param {string} collectionId
   * @param {string} documentId
   * @param {string} attribute
   * @param {number} value
   * @param {number} min
   * @throws {AppwriteException}
   * @returns {Promise<Document>}
   */
  decrementDocumentAttribute(databaseId, collectionId, documentId, attribute, value, min) {
    if (typeof databaseId === "undefined") {
      throw new AppwriteException('Missing required parameter: "databaseId"');
    }
    if (typeof collectionId === "undefined") {
      throw new AppwriteException('Missing required parameter: "collectionId"');
    }
    if (typeof documentId === "undefined") {
      throw new AppwriteException('Missing required parameter: "documentId"');
    }
    if (typeof attribute === "undefined") {
      throw new AppwriteException('Missing required parameter: "attribute"');
    }
    const apiPath = "/databases/{databaseId}/collections/{collectionId}/documents/{documentId}/{attribute}/decrement".replace("{databaseId}", databaseId).replace("{collectionId}", collectionId).replace("{documentId}", documentId).replace("{attribute}", attribute);
    const payload = {};
    if (typeof value !== "undefined") {
      payload["value"] = value;
    }
    if (typeof min !== "undefined") {
      payload["min"] = min;
    }
    const uri = new URL(this.client.config.endpoint + apiPath);
    const apiHeaders = {
      "content-type": "application/json"
    };
    return this.client.call("patch", uri, apiHeaders, payload);
  }
  /**
   * Increment a specific attribute of a document by a given value.
   *
   * @param {string} databaseId
   * @param {string} collectionId
   * @param {string} documentId
   * @param {string} attribute
   * @param {number} value
   * @param {number} max
   * @throws {AppwriteException}
   * @returns {Promise<Document>}
   */
  incrementDocumentAttribute(databaseId, collectionId, documentId, attribute, value, max) {
    if (typeof databaseId === "undefined") {
      throw new AppwriteException('Missing required parameter: "databaseId"');
    }
    if (typeof collectionId === "undefined") {
      throw new AppwriteException('Missing required parameter: "collectionId"');
    }
    if (typeof documentId === "undefined") {
      throw new AppwriteException('Missing required parameter: "documentId"');
    }
    if (typeof attribute === "undefined") {
      throw new AppwriteException('Missing required parameter: "attribute"');
    }
    const apiPath = "/databases/{databaseId}/collections/{collectionId}/documents/{documentId}/{attribute}/increment".replace("{databaseId}", databaseId).replace("{collectionId}", collectionId).replace("{documentId}", documentId).replace("{attribute}", attribute);
    const payload = {};
    if (typeof value !== "undefined") {
      payload["value"] = value;
    }
    if (typeof max !== "undefined") {
      payload["max"] = max;
    }
    const uri = new URL(this.client.config.endpoint + apiPath);
    const apiHeaders = {
      "content-type": "application/json"
    };
    return this.client.call("patch", uri, apiHeaders, payload);
  }
}
var _a, _ID_hexTimestamp;
class ID {
  /**
   * Uses the provided ID as the ID for the resource.
   *
   * @param {string} id
   * @returns {string}
   */
  static custom(id) {
    return id;
  }
  /**
   * Have Appwrite generate a unique ID for you.
   *
   * @param {number} padding. Default is 7.
   * @returns {string}
   */
  static unique(padding = 7) {
    const baseId = __classPrivateFieldGet(ID, _a, "m", _ID_hexTimestamp).call(ID);
    let randomPadding = "";
    for (let i = 0; i < padding; i++) {
      const randomHexDigit = Math.floor(Math.random() * 16).toString(16);
      randomPadding += randomHexDigit;
    }
    return baseId + randomPadding;
  }
}
_a = ID, _ID_hexTimestamp = function _ID_hexTimestamp2() {
  const now = /* @__PURE__ */ new Date();
  const sec = Math.floor(now.getTime() / 1e3);
  const msec = now.getMilliseconds();
  const hexTimestamp = sec.toString(16) + msec.toString(16).padStart(5, "0");
  return hexTimestamp;
};
var AuthenticatorType;
(function(AuthenticatorType2) {
  AuthenticatorType2["Totp"] = "totp";
})(AuthenticatorType || (AuthenticatorType = {}));
var AuthenticationFactor;
(function(AuthenticationFactor2) {
  AuthenticationFactor2["Email"] = "email";
  AuthenticationFactor2["Phone"] = "phone";
  AuthenticationFactor2["Totp"] = "totp";
  AuthenticationFactor2["Recoverycode"] = "recoverycode";
})(AuthenticationFactor || (AuthenticationFactor = {}));
var OAuthProvider;
(function(OAuthProvider2) {
  OAuthProvider2["Amazon"] = "amazon";
  OAuthProvider2["Apple"] = "apple";
  OAuthProvider2["Auth0"] = "auth0";
  OAuthProvider2["Authentik"] = "authentik";
  OAuthProvider2["Autodesk"] = "autodesk";
  OAuthProvider2["Bitbucket"] = "bitbucket";
  OAuthProvider2["Bitly"] = "bitly";
  OAuthProvider2["Box"] = "box";
  OAuthProvider2["Dailymotion"] = "dailymotion";
  OAuthProvider2["Discord"] = "discord";
  OAuthProvider2["Disqus"] = "disqus";
  OAuthProvider2["Dropbox"] = "dropbox";
  OAuthProvider2["Etsy"] = "etsy";
  OAuthProvider2["Facebook"] = "facebook";
  OAuthProvider2["Figma"] = "figma";
  OAuthProvider2["Github"] = "github";
  OAuthProvider2["Gitlab"] = "gitlab";
  OAuthProvider2["Google"] = "google";
  OAuthProvider2["Linkedin"] = "linkedin";
  OAuthProvider2["Microsoft"] = "microsoft";
  OAuthProvider2["Notion"] = "notion";
  OAuthProvider2["Oidc"] = "oidc";
  OAuthProvider2["Okta"] = "okta";
  OAuthProvider2["Paypal"] = "paypal";
  OAuthProvider2["PaypalSandbox"] = "paypalSandbox";
  OAuthProvider2["Podio"] = "podio";
  OAuthProvider2["Salesforce"] = "salesforce";
  OAuthProvider2["Slack"] = "slack";
  OAuthProvider2["Spotify"] = "spotify";
  OAuthProvider2["Stripe"] = "stripe";
  OAuthProvider2["Tradeshift"] = "tradeshift";
  OAuthProvider2["TradeshiftBox"] = "tradeshiftBox";
  OAuthProvider2["Twitch"] = "twitch";
  OAuthProvider2["Wordpress"] = "wordpress";
  OAuthProvider2["Yahoo"] = "yahoo";
  OAuthProvider2["Yammer"] = "yammer";
  OAuthProvider2["Yandex"] = "yandex";
  OAuthProvider2["Zoho"] = "zoho";
  OAuthProvider2["Zoom"] = "zoom";
  OAuthProvider2["Mock"] = "mock";
})(OAuthProvider || (OAuthProvider = {}));
var Browser;
(function(Browser2) {
  Browser2["AvantBrowser"] = "aa";
  Browser2["AndroidWebViewBeta"] = "an";
  Browser2["GoogleChrome"] = "ch";
  Browser2["GoogleChromeIOS"] = "ci";
  Browser2["GoogleChromeMobile"] = "cm";
  Browser2["Chromium"] = "cr";
  Browser2["MozillaFirefox"] = "ff";
  Browser2["Safari"] = "sf";
  Browser2["MobileSafari"] = "mf";
  Browser2["MicrosoftEdge"] = "ps";
  Browser2["MicrosoftEdgeIOS"] = "oi";
  Browser2["OperaMini"] = "om";
  Browser2["Opera"] = "op";
  Browser2["OperaNext"] = "on";
})(Browser || (Browser = {}));
var CreditCard;
(function(CreditCard2) {
  CreditCard2["AmericanExpress"] = "amex";
  CreditCard2["Argencard"] = "argencard";
  CreditCard2["Cabal"] = "cabal";
  CreditCard2["Cencosud"] = "cencosud";
  CreditCard2["DinersClub"] = "diners";
  CreditCard2["Discover"] = "discover";
  CreditCard2["Elo"] = "elo";
  CreditCard2["Hipercard"] = "hipercard";
  CreditCard2["JCB"] = "jcb";
  CreditCard2["Mastercard"] = "mastercard";
  CreditCard2["Naranja"] = "naranja";
  CreditCard2["TarjetaShopping"] = "targeta-shopping";
  CreditCard2["UnionChinaPay"] = "union-china-pay";
  CreditCard2["Visa"] = "visa";
  CreditCard2["MIR"] = "mir";
  CreditCard2["Maestro"] = "maestro";
  CreditCard2["Rupay"] = "rupay";
})(CreditCard || (CreditCard = {}));
var Flag;
(function(Flag2) {
  Flag2["Afghanistan"] = "af";
  Flag2["Angola"] = "ao";
  Flag2["Albania"] = "al";
  Flag2["Andorra"] = "ad";
  Flag2["UnitedArabEmirates"] = "ae";
  Flag2["Argentina"] = "ar";
  Flag2["Armenia"] = "am";
  Flag2["AntiguaAndBarbuda"] = "ag";
  Flag2["Australia"] = "au";
  Flag2["Austria"] = "at";
  Flag2["Azerbaijan"] = "az";
  Flag2["Burundi"] = "bi";
  Flag2["Belgium"] = "be";
  Flag2["Benin"] = "bj";
  Flag2["BurkinaFaso"] = "bf";
  Flag2["Bangladesh"] = "bd";
  Flag2["Bulgaria"] = "bg";
  Flag2["Bahrain"] = "bh";
  Flag2["Bahamas"] = "bs";
  Flag2["BosniaAndHerzegovina"] = "ba";
  Flag2["Belarus"] = "by";
  Flag2["Belize"] = "bz";
  Flag2["Bolivia"] = "bo";
  Flag2["Brazil"] = "br";
  Flag2["Barbados"] = "bb";
  Flag2["BruneiDarussalam"] = "bn";
  Flag2["Bhutan"] = "bt";
  Flag2["Botswana"] = "bw";
  Flag2["CentralAfricanRepublic"] = "cf";
  Flag2["Canada"] = "ca";
  Flag2["Switzerland"] = "ch";
  Flag2["Chile"] = "cl";
  Flag2["China"] = "cn";
  Flag2["CoteDIvoire"] = "ci";
  Flag2["Cameroon"] = "cm";
  Flag2["DemocraticRepublicOfTheCongo"] = "cd";
  Flag2["RepublicOfTheCongo"] = "cg";
  Flag2["Colombia"] = "co";
  Flag2["Comoros"] = "km";
  Flag2["CapeVerde"] = "cv";
  Flag2["CostaRica"] = "cr";
  Flag2["Cuba"] = "cu";
  Flag2["Cyprus"] = "cy";
  Flag2["CzechRepublic"] = "cz";
  Flag2["Germany"] = "de";
  Flag2["Djibouti"] = "dj";
  Flag2["Dominica"] = "dm";
  Flag2["Denmark"] = "dk";
  Flag2["DominicanRepublic"] = "do";
  Flag2["Algeria"] = "dz";
  Flag2["Ecuador"] = "ec";
  Flag2["Egypt"] = "eg";
  Flag2["Eritrea"] = "er";
  Flag2["Spain"] = "es";
  Flag2["Estonia"] = "ee";
  Flag2["Ethiopia"] = "et";
  Flag2["Finland"] = "fi";
  Flag2["Fiji"] = "fj";
  Flag2["France"] = "fr";
  Flag2["MicronesiaFederatedStatesOf"] = "fm";
  Flag2["Gabon"] = "ga";
  Flag2["UnitedKingdom"] = "gb";
  Flag2["Georgia"] = "ge";
  Flag2["Ghana"] = "gh";
  Flag2["Guinea"] = "gn";
  Flag2["Gambia"] = "gm";
  Flag2["GuineaBissau"] = "gw";
  Flag2["EquatorialGuinea"] = "gq";
  Flag2["Greece"] = "gr";
  Flag2["Grenada"] = "gd";
  Flag2["Guatemala"] = "gt";
  Flag2["Guyana"] = "gy";
  Flag2["Honduras"] = "hn";
  Flag2["Croatia"] = "hr";
  Flag2["Haiti"] = "ht";
  Flag2["Hungary"] = "hu";
  Flag2["Indonesia"] = "id";
  Flag2["India"] = "in";
  Flag2["Ireland"] = "ie";
  Flag2["IranIslamicRepublicOf"] = "ir";
  Flag2["Iraq"] = "iq";
  Flag2["Iceland"] = "is";
  Flag2["Israel"] = "il";
  Flag2["Italy"] = "it";
  Flag2["Jamaica"] = "jm";
  Flag2["Jordan"] = "jo";
  Flag2["Japan"] = "jp";
  Flag2["Kazakhstan"] = "kz";
  Flag2["Kenya"] = "ke";
  Flag2["Kyrgyzstan"] = "kg";
  Flag2["Cambodia"] = "kh";
  Flag2["Kiribati"] = "ki";
  Flag2["SaintKittsAndNevis"] = "kn";
  Flag2["SouthKorea"] = "kr";
  Flag2["Kuwait"] = "kw";
  Flag2["LaoPeopleSDemocraticRepublic"] = "la";
  Flag2["Lebanon"] = "lb";
  Flag2["Liberia"] = "lr";
  Flag2["Libya"] = "ly";
  Flag2["SaintLucia"] = "lc";
  Flag2["Liechtenstein"] = "li";
  Flag2["SriLanka"] = "lk";
  Flag2["Lesotho"] = "ls";
  Flag2["Lithuania"] = "lt";
  Flag2["Luxembourg"] = "lu";
  Flag2["Latvia"] = "lv";
  Flag2["Morocco"] = "ma";
  Flag2["Monaco"] = "mc";
  Flag2["Moldova"] = "md";
  Flag2["Madagascar"] = "mg";
  Flag2["Maldives"] = "mv";
  Flag2["Mexico"] = "mx";
  Flag2["MarshallIslands"] = "mh";
  Flag2["NorthMacedonia"] = "mk";
  Flag2["Mali"] = "ml";
  Flag2["Malta"] = "mt";
  Flag2["Myanmar"] = "mm";
  Flag2["Montenegro"] = "me";
  Flag2["Mongolia"] = "mn";
  Flag2["Mozambique"] = "mz";
  Flag2["Mauritania"] = "mr";
  Flag2["Mauritius"] = "mu";
  Flag2["Malawi"] = "mw";
  Flag2["Malaysia"] = "my";
  Flag2["Namibia"] = "na";
  Flag2["Niger"] = "ne";
  Flag2["Nigeria"] = "ng";
  Flag2["Nicaragua"] = "ni";
  Flag2["Netherlands"] = "nl";
  Flag2["Norway"] = "no";
  Flag2["Nepal"] = "np";
  Flag2["Nauru"] = "nr";
  Flag2["NewZealand"] = "nz";
  Flag2["Oman"] = "om";
  Flag2["Pakistan"] = "pk";
  Flag2["Panama"] = "pa";
  Flag2["Peru"] = "pe";
  Flag2["Philippines"] = "ph";
  Flag2["Palau"] = "pw";
  Flag2["PapuaNewGuinea"] = "pg";
  Flag2["Poland"] = "pl";
  Flag2["FrenchPolynesia"] = "pf";
  Flag2["NorthKorea"] = "kp";
  Flag2["Portugal"] = "pt";
  Flag2["Paraguay"] = "py";
  Flag2["Qatar"] = "qa";
  Flag2["Romania"] = "ro";
  Flag2["Russia"] = "ru";
  Flag2["Rwanda"] = "rw";
  Flag2["SaudiArabia"] = "sa";
  Flag2["Sudan"] = "sd";
  Flag2["Senegal"] = "sn";
  Flag2["Singapore"] = "sg";
  Flag2["SolomonIslands"] = "sb";
  Flag2["SierraLeone"] = "sl";
  Flag2["ElSalvador"] = "sv";
  Flag2["SanMarino"] = "sm";
  Flag2["Somalia"] = "so";
  Flag2["Serbia"] = "rs";
  Flag2["SouthSudan"] = "ss";
  Flag2["SaoTomeAndPrincipe"] = "st";
  Flag2["Suriname"] = "sr";
  Flag2["Slovakia"] = "sk";
  Flag2["Slovenia"] = "si";
  Flag2["Sweden"] = "se";
  Flag2["Eswatini"] = "sz";
  Flag2["Seychelles"] = "sc";
  Flag2["Syria"] = "sy";
  Flag2["Chad"] = "td";
  Flag2["Togo"] = "tg";
  Flag2["Thailand"] = "th";
  Flag2["Tajikistan"] = "tj";
  Flag2["Turkmenistan"] = "tm";
  Flag2["TimorLeste"] = "tl";
  Flag2["Tonga"] = "to";
  Flag2["TrinidadAndTobago"] = "tt";
  Flag2["Tunisia"] = "tn";
  Flag2["Turkey"] = "tr";
  Flag2["Tuvalu"] = "tv";
  Flag2["Tanzania"] = "tz";
  Flag2["Uganda"] = "ug";
  Flag2["Ukraine"] = "ua";
  Flag2["Uruguay"] = "uy";
  Flag2["UnitedStates"] = "us";
  Flag2["Uzbekistan"] = "uz";
  Flag2["VaticanCity"] = "va";
  Flag2["SaintVincentAndTheGrenadines"] = "vc";
  Flag2["Venezuela"] = "ve";
  Flag2["Vietnam"] = "vn";
  Flag2["Vanuatu"] = "vu";
  Flag2["Samoa"] = "ws";
  Flag2["Yemen"] = "ye";
  Flag2["SouthAfrica"] = "za";
  Flag2["Zambia"] = "zm";
  Flag2["Zimbabwe"] = "zw";
})(Flag || (Flag = {}));
var ExecutionMethod;
(function(ExecutionMethod2) {
  ExecutionMethod2["GET"] = "GET";
  ExecutionMethod2["POST"] = "POST";
  ExecutionMethod2["PUT"] = "PUT";
  ExecutionMethod2["PATCH"] = "PATCH";
  ExecutionMethod2["DELETE"] = "DELETE";
  ExecutionMethod2["OPTIONS"] = "OPTIONS";
})(ExecutionMethod || (ExecutionMethod = {}));
var ImageGravity;
(function(ImageGravity2) {
  ImageGravity2["Center"] = "center";
  ImageGravity2["Topleft"] = "top-left";
  ImageGravity2["Top"] = "top";
  ImageGravity2["Topright"] = "top-right";
  ImageGravity2["Left"] = "left";
  ImageGravity2["Right"] = "right";
  ImageGravity2["Bottomleft"] = "bottom-left";
  ImageGravity2["Bottom"] = "bottom";
  ImageGravity2["Bottomright"] = "bottom-right";
})(ImageGravity || (ImageGravity = {}));
var ImageFormat;
(function(ImageFormat2) {
  ImageFormat2["Jpg"] = "jpg";
  ImageFormat2["Jpeg"] = "jpeg";
  ImageFormat2["Png"] = "png";
  ImageFormat2["Webp"] = "webp";
  ImageFormat2["Heic"] = "heic";
  ImageFormat2["Avif"] = "avif";
  ImageFormat2["Gif"] = "gif";
})(ImageFormat || (ImageFormat = {}));
const client = new Client();
client.setEndpoint("https://cloud.appwrite.io/v1").setProject("69fbe0750018f849704f");
const databases = new Databases(client);
const APPWRITE_DATABASE_ID = "assirik-tours-db";
const APPWRITE_COLLECTIONS = {
  demandesVoyages: "demandesVoyages_mourxnpt_0uwusj",
  demandesImmobilier: "demandesImmobilier_mourxpcy_f7olc7",
  demandesNettoiement: "demandesNettoiement_mourxrmc_0uvem0",
  contacts: "contacts_mourxtzp_nttan5"
};
function mapDocumentToDemande(doc, departement) {
  return {
    $id: doc.$id,
    nom: doc.nom ?? "",
    email: doc.email ?? "",
    telephone: doc.telephone ?? "",
    message: doc.message ?? "",
    departement,
    statut: doc.statut ?? "nouveau",
    $createdAt: doc.$createdAt ?? (/* @__PURE__ */ new Date()).toISOString()
  };
}
function useSubmitVoyage() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (input) => {
      const doc = await databases.createDocument(
        APPWRITE_DATABASE_ID,
        APPWRITE_COLLECTIONS.demandesVoyages,
        ID.unique(),
        {
          nom: input.nom,
          email: input.email,
          telephone: input.telephone,
          message: input.message,
          statut: "nouveau",
          departement: "Voyages"
        }
      );
      return doc;
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["voyages"] })
  });
}
function useDemandesVoyages() {
  return useQuery({
    queryKey: ["voyages"],
    queryFn: async () => {
      const response = await databases.listDocuments(
        APPWRITE_DATABASE_ID,
        APPWRITE_COLLECTIONS.demandesVoyages,
        [Query.orderDesc("$createdAt")]
      );
      return response.documents.map(
        (doc) => mapDocumentToDemande(doc, "Voyages")
      );
    }
  });
}
function useSubmitImmobilier() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (input) => {
      const doc = await databases.createDocument(
        APPWRITE_DATABASE_ID,
        APPWRITE_COLLECTIONS.demandesImmobilier,
        ID.unique(),
        {
          nom: input.nom,
          email: input.email,
          telephone: input.telephone,
          message: input.message,
          statut: "nouveau",
          departement: "Immobilier"
        }
      );
      return doc;
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["immobilier"] })
  });
}
function useDemandesImmobilier() {
  return useQuery({
    queryKey: ["immobilier"],
    queryFn: async () => {
      const response = await databases.listDocuments(
        APPWRITE_DATABASE_ID,
        APPWRITE_COLLECTIONS.demandesImmobilier,
        [Query.orderDesc("$createdAt")]
      );
      return response.documents.map(
        (doc) => mapDocumentToDemande(doc, "Immobilier")
      );
    }
  });
}
function useSubmitNettoiement() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (input) => {
      const doc = await databases.createDocument(
        APPWRITE_DATABASE_ID,
        APPWRITE_COLLECTIONS.demandesNettoiement,
        ID.unique(),
        {
          nom: input.nom,
          email: input.email,
          telephone: input.telephone,
          message: input.message,
          statut: "nouveau",
          departement: "Nettoiement"
        }
      );
      return doc;
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["nettoiement"] })
  });
}
function useDemandesNettoiement() {
  return useQuery({
    queryKey: ["nettoiement"],
    queryFn: async () => {
      const response = await databases.listDocuments(
        APPWRITE_DATABASE_ID,
        APPWRITE_COLLECTIONS.demandesNettoiement,
        [Query.orderDesc("$createdAt")]
      );
      return response.documents.map(
        (doc) => mapDocumentToDemande(doc, "Nettoiement")
      );
    }
  });
}
function useSubmitContact() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (input) => {
      const doc = await databases.createDocument(
        APPWRITE_DATABASE_ID,
        APPWRITE_COLLECTIONS.contacts,
        ID.unique(),
        {
          nom: input.nom,
          email: input.email,
          telephone: input.telephone,
          message: input.message,
          statut: "nouveau",
          departement: "Contact"
        }
      );
      return doc;
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["contacts"] })
  });
}
function useContacts() {
  return useQuery({
    queryKey: ["contacts"],
    queryFn: async () => {
      const response = await databases.listDocuments(
        APPWRITE_DATABASE_ID,
        APPWRITE_COLLECTIONS.contacts,
        [Query.orderDesc("$createdAt")]
      );
      return response.documents.map(
        (doc) => mapDocumentToDemande(doc, "Contact")
      );
    }
  });
}
function useUpdateStatut() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async ({
      collection,
      id,
      statut
    }) => {
      const collectionId = APPWRITE_COLLECTIONS[collection];
      if (!collectionId) throw new Error(`Unknown collection: ${collection}`);
      await databases.updateDocument(
        APPWRITE_DATABASE_ID,
        collectionId,
        id,
        { statut }
      );
      return true;
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["voyages"] });
      qc.invalidateQueries({ queryKey: ["immobilier"] });
      qc.invalidateQueries({ queryKey: ["nettoiement"] });
      qc.invalidateQueries({ queryKey: ["contacts"] });
    }
  });
}
export {
  useSubmitImmobilier as a,
  useSubmitNettoiement as b,
  useSubmitContact as c,
  useDemandesVoyages as d,
  useDemandesImmobilier as e,
  useDemandesNettoiement as f,
  useContacts as g,
  useUpdateStatut as h,
  useSubmitVoyage as u
};
