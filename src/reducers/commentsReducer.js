const commentsReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_COMMENT':
            return [
                ...state,
                {
                    index: state.length + "",
                    createdBy: action.payload.createdBy,
                    createdAt: action.payload.createdAt,
                    authorPicture: action.payload.authorPicture,
                    comment: action.payload.comment,
                    likesCount: 0,
                    dislikesCount: 0,
                    repliedToComment: action.payload.repliedToComment ?? "",
                    quote: action.payload.quote ?? ""
                }
            ]

        case 'UP_RATE':
            return state.map(e => {
                if (action.payload == e.index) {
                    e.likesCount = e.likesCount + 1;
                }
                return e;
            });

        case 'DOWN_RATE':
            return state.map(e => {
                if (action.payload == e.index) {
                    e.dislikesCount = e.dislikesCount + 1;
                }
                return e;
            });

        default:
            return state;
    }
};

export default commentsReducer;