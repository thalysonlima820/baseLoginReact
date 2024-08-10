import useHttpUsuario from "../../../hooks/useHttpUsuario"
import Data from "./Data"
const Database = () => {

  const {usuarios, handleDelete} = useHttpUsuario()

  return (
    <div>
       <Data usuarios={usuarios} addleDelete={handleDelete}  />
    </div>
  )
}

export default Database