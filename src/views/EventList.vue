<template>
  <h1>Events for Good</h1>
  <div class="events">
    <!-- <EventCard v-for="event in events" :key="event.id" :event="event" /> -->
    <router-link
      class="event-link"
      :to="{ name: 'EventDetails', params: { id: event.id } }"
      v-for="event in events"
      :key="event.id"
    >
      <EventCard :event="event" />
    </router-link>
  </div>
</template>

<script>
import EventCard from '@/components/EventCard.vue'

export default {
  name: 'EventList',
  components: {
    EventCard
  },
  created() {
    this.$store.dispatch('fetchEvents')
  },
  // we use computed here, because we want these events to be reactive
  computed: {
    events() {
      return this.$store.state.events
    }
  }
}
</script>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
