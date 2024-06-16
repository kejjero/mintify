import {FC, PropsWithChildren} from "react";
import { Header, Footer } from '../index'


const MainLayout: FC<PropsWithChildren> = ({children}) => (
  <>
    <Header/>
    {children}
    <Footer/>
  </>
)

export default MainLayout