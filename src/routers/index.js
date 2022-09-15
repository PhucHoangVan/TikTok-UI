// import config
import config from '~/components/config';

// import Layout
import { HeaderOnly } from '~/layouts';

// import Component
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';

const publicRouters = [
    { path: config.routes.home, component: Home },
    { path: config.routes.following, component: Following },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.upload, component: Upload, layout: HeaderOnly },
];

const privateRouters = [];

export { publicRouters, privateRouters };
