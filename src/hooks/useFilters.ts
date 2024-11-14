import { useLocalStorage } from 'usehooks-ts';

export type FilterTypes = 'quiet'
                        | 'talkative'
                        | 'open_late'
                        | 'coffee_shop'
                        | 'vending machine'
                        | 'big_tables'
                        | 'couches';

export const useFilters = () => 
   useLocalStorage('filters', new Set<FilterTypes>, {
    serializer: filters => JSON.stringify(Array.from(filters)),
    deserializer: filters => new Set(JSON.parse(filters)), 
  })
