import { NextPage } from "next";
import FormBuilderContextWrapper from "./context";
import FormContent from "./partials/FormContent";
import PageSidebar from "./partials/sidebars/PageSidebar";

const FormBuilder:React.FC = () => {
  return (
    <FormBuilderContextWrapper>
      <div className="flex item-center justify-center">
        <div className="w-1/5">
          <PageSidebar/>
        </div>
        <div className="w-3/5">
          <FormContent/>
        </div>
        <div className="w-1/5">
          
        </div>
      </div>
    </FormBuilderContextWrapper>
  )
} 

export default FormBuilder