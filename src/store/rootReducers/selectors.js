const selectIsLoading = state => state.api.isLoading;

const selectError = state => state.api.error;

export { selectIsLoading, selectError };
