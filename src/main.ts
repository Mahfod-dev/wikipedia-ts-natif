import './style.css'
import { fetchAPI } from './api/fetchAPI'
import { displayLoading, removeLoading } from './loader'
import { clearResults } from './clearResults'
import { Wikiapi } from './types/api'
import { createResultsElement } from './templateResults'


const results = document.querySelector<HTMLDivElement>('.results')!
const input = document.querySelector<HTMLInputElement>('input')!

const renderResults = (queryData:Wikiapi) => {
    clearResults(results)
    queryData.query.search.forEach((result: any) => {
        createResultsElement(result,results)
    })
}

const search = async (searchTerm: string) => {
    displayLoading()
    try {
    const results = await fetchAPI(searchTerm)
    renderResults(results)
    removeLoading()
    } catch (error) {
      console.log(error)
    }
   
}

const onInputValue = (e:Event)=>{
  const input = e.target as HTMLInputElement;
  search(input.value)
}


input.addEventListener('input',onInputValue)


window.addEventListener('load',()=>{
  removeLoading()
  search('typescript')
}
)

