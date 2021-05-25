import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Página não encontrada" />
    <div className="container">
      <div className="row">
        <div className="col-12 py-4">
          <h1 className="text-luiz text-center mt-5 mb-5">Página não encontrada</h1>
          <Link to="/" >
            <h2 className="text-baggio text-center mb-5"><u>Clique aqui para retornar à página inicial</u></h2>
          </Link>
        </div>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
