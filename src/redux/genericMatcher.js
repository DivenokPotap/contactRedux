const isPending = (action) => action.type.endsWith("/pending");
const isFulfilled = (action) => action.type.endsWith("/fulfilled");
const isRejected = (action) => action.type.endsWith("/rejected");

export const addGenericMatcher = (builder) => {
    builder
    .addMatcher(isPending, (state) => {
            state.isLoading = true
    })
     .addMatcher(isFulfilled, (state) => {
         state.isLoading = false
         state.isError = null
     })
    .addMatcher(isRejected, (state,action) => {
        state.isLoading = false
        state.isError = action.payload
    });
}