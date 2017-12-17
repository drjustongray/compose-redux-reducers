export interface Reducer<S, A> {
	(state: S, action: A): S;
}

export default function <S, A>(...reducers: Reducer<S, A>[]): Reducer<S, A> {
	return function (state: S, action: A): S {
		for (const reducer of reducers) {
			state = reducer(state, action);
		}
		return state;
	}
}