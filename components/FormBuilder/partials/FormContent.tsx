import { Form, Input } from "antd"
import useComputed from "hooks/useComputed"
import { useContext } from "react"
import { FormBuilderContext } from "../context"

const FormContent: React.FC = () => {

  /**
   * FORM BUILDER CONTEXT
   */
  const {
    pages,
    selectedPage,
    pageSize,
    zoom,
    setZoom
  } = useContext(FormBuilderContext)


  const scaledDimentions = useComputed(zoom, () => {
    const scaleFactor = zoom / 100
    return {
      width: pageSize.width * scaleFactor,
      height: pageSize.height * scaleFactor
    }
  }, [pageSize])


  return (
    <div className="min-h-screen max-h-screen">
      <div className="w-1/4 pt-4">

        <Input type="number" value={zoom} onChange={(event) => {
          setZoom(Number(event.target.value))
        }} />

      </div>
      <div className="
      form-builder-container my-3 p-3 bg-gray-500 h-screen w-full overflow-auto">
        {
          pages && pages.length ?
            pages.map(page => {
              if (selectedPage && selectedPage.id === page.id) {
                return (
                  <div className="bg-white mb-4" key={page.id} style={{
                    height: `${scaledDimentions.height}px`,
                    width: `${scaledDimentions.width}px`,
                  }}>
                  </div>)
              }
              return ""
            })
        : ""
        }
      </div>
    </div>
  )
}

export default FormContent