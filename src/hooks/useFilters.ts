import { useLocalStorage } from 'usehooks-ts';

export const useFilters = () => 
   useLocalStorage('filters', new Set<string>, {
    serializer: filters => JSON.stringify(Array.from(filters)),
    deserializer: filters => new Set(JSON.parse(filters)), 
  })
