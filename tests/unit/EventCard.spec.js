// @ts-nocheck
import { mount } from '@vue/test-utils'
import EventCard from '@/components/EventCard'

describe('EventCard', () => {
  it(`renders the event's data successfully`, () => {
    const event = {
      id: 1,
      time: '12:00PM',
      date: 'September 29th, 2022',
      title: 'Coaching Little League'
    }

    // Once we add an event, the test passes, but we get a warning.
    // This is because the Root Vue instance created by Vue Test Utils does not have the router setup,
    // therefor router-link does not exist.
    const wrapper = mount(EventCard, {
      props: {
        event
      }
    })

    const wrapperHtml = wrapper.html()
    expect(wrapperHtml).toContain(event.date)
    expect(wrapperHtml).toContain(event.time)
    expect(wrapperHtml).toContain(event.title)
  })
})
