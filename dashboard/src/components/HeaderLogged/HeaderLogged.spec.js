import { shallowMount } from '@vue/test-utils'
import { createRouter, createWebHistory } from 'vue-router'
import HeaderLogged from '.'
import { routes } from '../../router'

const router = createRouter({
  history: createWebHistory('/'),
  routes
})

const mockStore = { currentUser: {} }
jest.mock('../../hooks/useStore', () => {
  return () => {
    return mockStore
  }
})

describe('<HeaderLogged />', () => {
  it('should render header logged correctly', async () => {
    router.push('/')
    await router.isReady()
    const wrapper = shallowMount(HeaderLogged, {
      global: {
        plugins: [router]
      }
    })

    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should render 3 dots when there\'s no user logged', async () => {
    router.push('/')
    await router.isReady()
    const wrapper = shallowMount(HeaderLogged, {
      global: {
        plugins: [router]
      }
    })

    const buttonLogout = wrapper.find('#logout-button')

    expect(buttonLogout.text()).toBe('...')
  })

  it('should render a name when a user is logged in', async () => {
    router.push('/')
    await router.isReady()
    mockStore.currentUser.name = 'Cris'
    const wrapper = shallowMount(HeaderLogged, {
      global: {
        plugins: [router]
      }
    })

    const buttonLogout = wrapper.find('#logout-button')

    expect(buttonLogout.text()).toBe('Cris (sair)')
  })
})
