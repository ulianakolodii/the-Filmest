import { Store } from 'vuex'
import { State } from './store'

declare module '@vue/runtime-core' {
  //   interface State {
  //     count: number
  //   }

  interface ComponentCustomProperties {
    $store: Store<State>
  }
}

declare module 'vuex' {
  export function useStore(key?: string): Store<State>
}
