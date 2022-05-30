import {OrientationInterface} from 'config/page.config'
export interface PageElement {
  id: string
  position: {
    x: number
    y: number
  },
  width: number
  height: number
  field: "input" | "string" | "table" | "select" | "image"
  content: string | {
    columns: Array<{
      title: string
    }>
  } | Array<String> | {
    options: string
  }
}

export interface FormPage {
  id: string,
  elements: Array<PageElement>
}

export interface FromBuilderContextInterface {
  zoom: number,
  pages: Array<FormPage>,
  pageSize:{
    height:number,
    width:number
  }
  setZoom:(zoom:number)=>void
  orientation: OrientationInterface,
  selectedPage:FormPage | null,
  selectedPageElement: PageElement | null,
  setSelectedPage: (page:FormPage) => void,
  setSelectedPageElement: (element:PageElement) => void,
  addNewPage: (index?: number) => void
  removePage: (id: string) => void
  addElementToPage: (PageId: string, element: PageElement) => void
  removeElementFromPage: (pageId: string, elementId: string) => void
  updateElementFromPage: (pageId: string, elementId: string, element: PageElement) => void
}