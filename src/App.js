import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRouters } from '~/routers/index.js';
import { DefaultLayout } from '~/components/Layout';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRouters.map((router, index) => {
                        const Page = router.component;

                        let Layout = DefaultLayout;

                        if (router.layout === null) {
                            Layout = Fragment;
                        } else if (router.layout) {
                            Layout = router.layout;
                        }

                        return (
                            <Route
                                key={index}
                                path={router.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            ></Route>
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
