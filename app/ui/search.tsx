'use client';
import { useDebouncedCallback } from 'use-debounce';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import { fetchInvoicesPages } from '@/app/lib/data';

export default function Search({ placeholder }: { placeholder: string }) {

  const searchParams = useSearchParams(); //the query that will be searched by the input
  const {replace} = useRouter();
  const pathname = usePathname() //current pathname
  const handleSearch = useDebouncedCallback((term: string) => { //capturing the user input by setting handleSearch(e.target.value)
    console.log(`Searching... ${term}`);
    const params = new URLSearchParams(searchParams); //URLSearchParams is a Web API provides methods for manipulating URL query parameters - extracts the query params as normal string, params = original query params present in the URL
    params.set('page', '1');
    //update the query params based on the search params
    if(term) {
      params.set('query', term);
    }else {
      params.delete('query');
    }
    replace(`${pathname}?${params.toString()}`); //params.toSring - translates the user query into URL friendly format and replaces the current pathname with it
  },300)
  return (
    <div className="relative flex flex-1 flex-shrink-0">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
        placeholder={placeholder}
        onChange={(e) => handleSearch(e.target.value)}
        defaultValue={searchParams.get('query')?.toString()}
      />
      <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
    </div>
  );
}


/*const searchParams = useSearchParams();
const pathname = usePathname();
const {replace} = useRouter();
fn handler(term) {
const params = new URLSearchParmas(searchParams)
  if(term) {
  params.set('query',term)
  }else {
  params.delete('query')
  }
  replace(`${pathname}?{params.toStirng()})
}*/