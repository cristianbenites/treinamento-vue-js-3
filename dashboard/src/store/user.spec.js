import useStore from '../hooks/useStore'
import {
  resetUserStore,
  setApiKey,
  cleanCurrentUser,
  setCurrentUser
} from './user'
describe('UserStore', () => {
  afterEach(() => {
    resetUserStore()
  })

  it('should set current user', () => {
    const store = useStore()
    setCurrentUser({ name: 'Cris' })
    expect(store.User.currentUser.name).toBe('Cris')
  })

  it('should set an api_key on current user', () => {
    const store = useStore()
    setApiKey('123')
    expect(store.User.currentUser.apiKey).toBe('123')
  })

  it('should clean the current user', () => {
    const store = useStore()
    setCurrentUser({ name: 'Cris' })
    expect(store.User.currentUser.name).toBe('Cris')
    cleanCurrentUser()

    expect(store.User.currentUser.name).toBeFalsy()
  })
})
