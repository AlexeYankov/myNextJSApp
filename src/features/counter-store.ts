import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

export type CounterState = {
  count: number;
};

export type CounterActions = {
  decrementCount: () => void;
  incrementCount: () => void;
};

export type CounterStore = CounterState & CounterActions;

export const initCounterStore = (): CounterState => {
  return { count: new Date().getFullYear() };
};

// export const defaultInitState: CounterState = {
//   count: 0,
// };

export const useCounterStore = create<CounterStore>()(
  persist(
    (set, get) => ({
      count: 0,
      // addABear: () => set({ bears: get().bears + 1 }),
      decrementCount: () => set({ count: get().count - 1 }),
      incrementCount: () => set({ count: get().count + 1 }),
    }),
    {
      name: 'counter-storage', // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    //   skipHydration: true,
    }
  )
);
// export const useCountStore = (
//   initState: CounterState = defaultInitState,
// ) => {
//   return createStore<CounterStore>()((set) => ({
//     ...initState,
//     decrementCount: () => set((state) => ({ count: state.count - 1 })),
//     incrementCount: () => set((state) => ({ count: state.count + 1 })),
//   }))
// }
