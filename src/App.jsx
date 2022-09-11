import { BrowserRouter } from "react-router-dom";
import { AllRoutes } from "./Components/Partials/AllRoutes";
import { AuthWrapper } from "./Components/StateManagement/Authorize";
import { Footer } from "./Components/Partials/Footer";
import { Header } from "./Components/Partials/Header";
import { Main } from "./Components/Partials/Main";
import { ListWrapper } from "./Components/StateManagement/ListData";
import Style from "./Assets/scss/App.module.scss";
import { SearchWrapper } from "./Components/StateManagement/SearchData";
import { ModalWrapper } from "./Components/StateManagement/ModalData";
import { PriceRangeWrapper } from "./Components/StateManagement/PriceRangeData";

function App() {
  return (
    <section className={Style.body}>
      <BrowserRouter>
        <AuthWrapper>
          <SearchWrapper>
            <Header />
            <Main>
              <ModalWrapper>
                <ListWrapper>
                  <PriceRangeWrapper>
                    <AllRoutes />
                  </PriceRangeWrapper>
                </ListWrapper>
              </ModalWrapper>
            </Main>
            <Footer />
          </SearchWrapper>
        </AuthWrapper>
      </BrowserRouter>
    </section>
  );
}

export default App;
