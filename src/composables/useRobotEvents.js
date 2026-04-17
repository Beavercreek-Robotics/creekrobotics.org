/**
 * useRobotEvents — Vue 3 composable
 *
 * Provides reactive state for loading upcoming competition events from the
 * Robot Events API v2.  Falls back gracefully to the static COMPETITION_SCHEDULE
 * if the API is unavailable or returns no results.
 *
 * Usage:
 *   const { schedule, loading, error, usingLiveData } = useRobotEvents()
 */
import { ref, readonly } from 'vue'
import { fetchUpcomingEvents, normalizeEvent } from '../services/robotevents.js'
import { TEAM_NUMBERS, COMPETITION_SCHEDULE } from '../config/club.js'

export function useRobotEvents() {
  const loading = ref(true)
  const error = ref(null)
  const schedule = ref([])
  const usingLiveData = ref(false)

  async function load() {
    loading.value = true
    error.value = null

    try {
      const events = await fetchUpcomingEvents(TEAM_NUMBERS)

      if (events.length > 0) {
        schedule.value = events.map(normalizeEvent)
        usingLiveData.value = true
      } else {
        // API succeeded but returned nothing — use static fallback
        schedule.value = COMPETITION_SCHEDULE
        usingLiveData.value = false
      }
    } catch (err) {
      error.value = err.message
      // Gracefully fall back to the static schedule
      schedule.value = COMPETITION_SCHEDULE
      usingLiveData.value = false
    } finally {
      loading.value = false
    }
  }

  // Start loading immediately when the composable is first used
  load()

  return {
    schedule: readonly(schedule),
    loading: readonly(loading),
    error: readonly(error),
    usingLiveData: readonly(usingLiveData),
    reload: load,
  }
}
