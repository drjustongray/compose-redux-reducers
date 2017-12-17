import composeReducers from "./index";

describe("composeReducers", () => {
	it("returns a function", () => {
		expect(typeof composeReducers()).toBe("function");
	})

	it("returns a function that expects two arguments", () => {
		expect(composeReducers().length).toBe(2);
	})
})

describe("The result of composeReducers", () => {
	it("returns the original state if no reducers were given", () => {
		const state = "happy";
		const reducer = composeReducers();
		expect(reducer(state, "")).toEqual(state);
	})

	it("calls each of the reducer functions with the state returned by the previous reducer and action", () => {
		const action = "action";

		const state0 = "zero";
		const state1 = "one";
		const state2 = "two";
		const state3 = "three";

		const reducer1 = jest.fn(() => state1);
		const reducer2 = jest.fn(() => state2);
		const reducer3 = jest.fn(() => state3);

		const rootReducer = composeReducers(reducer1, reducer2, reducer3);
		rootReducer(state0, action);

		expect(reducer1).toHaveBeenCalledTimes(1);
		expect(reducer2).toHaveBeenCalledTimes(1);
		expect(reducer3).toHaveBeenCalledTimes(1);

		expect(reducer1).toHaveBeenCalledWith(state0, action);
		expect(reducer2).toHaveBeenCalledWith(state1, action);
		expect(reducer3).toHaveBeenCalledWith(state2, action);
	})

	it("returns the state returned by the final reducer", () => {
		const action = "action";

		const state0 = "zero";
		const state1 = "one";
		const state2 = "two";
		const state3 = "three";

		const reducer1 = jest.fn(() => state1);
		const reducer2 = jest.fn(() => state2);
		const reducer3 = jest.fn(() => state3);

		const rootReducer = composeReducers(reducer1, reducer2, reducer3);
		const state = rootReducer(state0, action);

		expect(state).toBe(state3);
	})
})