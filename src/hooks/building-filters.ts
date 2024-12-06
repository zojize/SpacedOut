import { useSessionStorage } from 'usehooks-ts';

export type FilterTypes = 'quiet'
                        | 'talkative'
                        | 'open_late'
                        | 'coffee_shop'
                        | 'vending_machine'
                        | 'big_tables'
                        | 'couches';

export const useFilters = () =>
   useSessionStorage('filters', new Set<FilterTypes>, {
    serializer: filters => JSON.stringify(Array.from(filters)),
    deserializer: filters => new Set(JSON.parse(filters)), 
  })

export const useCrowdLevel = () =>
  useSessionStorage<number>('crowd-level', 3)

export const useSTime = () => 
  useSessionStorage<string | null>('start-time', (new Date()).getHours().toString() + ':00')

export const useETime = () =>
  useSessionStorage<string | null>('end-time', Math.min((new Date()).getHours() + 1, 24).toString() + ':00')

export const useDay = () => 
  useSessionStorage<string>('day', ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][(new Date()).getDay()])