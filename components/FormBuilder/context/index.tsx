import { OrientationInterface, orientations, PageSize } from "config/page.config"
import { DEFAULT_ZOOM_SIZE } from "config/zoom.config"
import { createContext, PropsWithChildren, useState } from "react"
import { FormPage, FromBuilderContextInterface, PageElement } from "./types"

/**
 * FORM BUILDER CONTEXT API
 */
export const FormBuilderContext = createContext({} as FromBuilderContextInterface)

/**
 * CONTEXT WRAPPER
 */
const FormBuilderContextWrapper: React.FC<PropsWithChildren<{}>> = ({ children }) => {

  /**
   * COMPONENT STATE
   */
  const [zoom, setZoom] = useState<number>(DEFAULT_ZOOM_SIZE)
  const [pages, setPages] = useState<Array<FormPage>>([])
  const [selectedPage, setSelectedPage] = useState<FormPage|null>(null)
  const [selectedPageElement, setSelectedPageElement] = useState<PageElement|null>(null)
  const [orientation, setOrientation] = useState<OrientationInterface>(orientations.Portrait)

  /**
   * ADD A NEW PAGE TO THE FORM
   */
  const addNewPage = (index: number | undefined = undefined) => {
    if (index) {
      setPages([...pages]?.splice(index, 0, {
        id: `form-builder-page-${Date.now()}`,
        elements: []
      }))
    } else {
      const updatedPage = [...pages]
      updatedPage.push({
        id: `form-builder-page-${Date.now()}`,
        elements: []
      })
      setPages(updatedPage)
    }
  }


  /**
   * DELETE PAGE
   */
  const removePage = (id: string) => {
    const filteredPage = [...pages].filter(page => page.id !== id)
    setPages(filteredPage)
  }

  /**
   * ADD ELEMENT TO PAGE
   */
  const addElementToPage = (pageId:string, element:PageElement) => {
    const currentPage = [...pages].find(page => page.id === pageId)
    if(currentPage){
      currentPage.elements.push({
        ...element,
        id:`form-builder-page-element-${Date.now()}`,
      })
      const indexOfCurrentPage = [...pages].indexOf(currentPage)
      if(indexOfCurrentPage !== -1){
        const updatedPages = [...pages]
        updatedPages[indexOfCurrentPage] = currentPage
        setPages(updatedPages)
      }
    }
  }

  /**
   * ADD ELEMENT TO PAGE
   */
   const removeElementFromPage = (pageId:string, elementId: string) => {
    const currentPage = [...pages].find(page => page.id === pageId)
    if(currentPage){
      currentPage.elements.filter(element=> element.id !== elementId)
      const indexOfCurrentPage = [...pages].indexOf(currentPage)
      if(indexOfCurrentPage !== -1){
        const updatedPages = [...pages]
        updatedPages[indexOfCurrentPage] = currentPage
        setPages(updatedPages)
      }
    }
  }

  /**
   * UPDATE ELEMENT OF A PAGE
   */
  const updateElementFromPage = (pageId:string,elementId:string,element:PageElement) => {
    const currentPage = [...pages].find(page => page.id === pageId)
    if(currentPage){
      let updatingElementIndex = currentPage.elements.findIndex(element=> element.id !== elementId)
      if(updatingElementIndex){
        currentPage.elements[updatingElementIndex] = element
      }
      const indexOfCurrentPage = [...pages].indexOf(currentPage)
      if(indexOfCurrentPage !== -1){
        const updatedPages = [...pages]
        updatedPages[indexOfCurrentPage] = currentPage
        setPages(updatedPages)
      }
    }
  }

  return (
    <FormBuilderContext.Provider
    value={{
      zoom,
      setZoom,
      addElementToPage,
      pageSize:PageSize.A4,
      orientation,
      removePage,
      addNewPage,
      removeElementFromPage,
      updateElementFromPage,
      pages,
      selectedPage, setSelectedPage,
      selectedPageElement, setSelectedPageElement
    }}
    >
      {children}
    </FormBuilderContext.Provider>
  )
}


export default FormBuilderContextWrapper