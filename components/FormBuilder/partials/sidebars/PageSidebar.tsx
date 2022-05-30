import { Menu } from "antd"
import { FormBuilderContext } from "components/FormBuilder/context"
import { useContext } from "react"

const PageSidebar: React.FC = () => {

  const { addNewPage, pages, selectedPage, setSelectedPage } = useContext(FormBuilderContext)

  return (
    <div className="max-h-screen min-h-screen">
      <button onClick={() => addNewPage()}>Add Page</button>
      <Menu activeKey={selectedPage?.id || ''}>
        {
          pages.map((page, index) => (
            <Menu.Item key={page.id} onClick={()=>{
              setSelectedPage(page)
            }}>
                Page {index+1}
            </Menu.Item>
          ))
        }

      </Menu>
    </div>
  )
}

export default PageSidebar