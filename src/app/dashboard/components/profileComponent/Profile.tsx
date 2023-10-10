import { useContext } from "react";
import { contextD } from "../../../../context/DashboardContext";
import "../../../components/Loading.css"
import UserSection from './UserSection'

export default function Home() {
  const { userData } = useContext(contextD);

  if (!userData) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p className="text-white">Cargando...</p>
      </div>
    )
  }

  return (
    <div>
      <UserSection user={userData} />
      {/* Otros componentes y contenido */}
    </div>
  );
}
