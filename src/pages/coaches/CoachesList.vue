<template>
    <section>
        <base-card>
            <coach-filter @change-filter="setFilters"></coach-filter>
        </base-card>
    </section>
    <section>
        <base-card>
            <div class="controls">
                <base-button mode="outline">Refresh</base-button>
                <base-button v-if="!isCoach" link to="/register">Register as Coach</base-button>
            </div>
            <ul v-if="hasCoaches">
                <coach-item 
                    v-for="coach in filteredCoaches" 
                    :key="coach.id" 
                    :id="coach.id" 
                    :first-name="coach.firstName"
                    :last-name="coach.lastName" 
                    :rate="coach.hourlyRate" 
                    :areas="coach.areas">
                </coach-item>
                <!-- <li v-for="coach in fileredCoaches" :key="coach.id">
                    {{ coach.firstName }}
                </li> -->
            </ul>
            <h3 v-else>No Coaches found.</h3>
        </base-card>
    </section>
</template>

<script>
import CoachItem from '../../components/coaches/CoachItem.vue';
import CoachFilter from '../../components/coaches/CoachFilter.vue';

export default {
    components: {
        CoachItem,
        CoachFilter
    },
    data(){
        return {
            activeFilters: {
                frontend: true,
                backend: true,
                career: true
            }
        }
    },
    computed: {
        isCoach(){
            return this.$store.getters['coaches/isCoach']
        },
        filteredCoaches() {
            const coache = this.$store.getters['coaches/coaches'];
            return coache.filter((coach) => {
                if (this.activeFilters.frontend && coach.areas.includes('frontend')) {
                  return true;  
                }
                if (this.activeFilters.backend && coach.areas.includes('backend')) {
                  return true;  
                }
                if (this.activeFilters.career && coach.areas.includes('career')) {
                  return true;  
                }
                return false;
            });
        },
        hasCoaches() {
            return this.$store.getters['coaches/hasCoaches'];
        }
    },
    methods: {
        setFilters(updatedFilters) {
            this.activeFilters = updatedFilters;
        },
    }
}
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>