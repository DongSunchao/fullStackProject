import { Space, Spin } from 'antd';
import {  lazy, Suspense } from 'react'; 

const views = import.meta.glob('../views/**/*.tsx') as Record<
    string,
    () => Promise<{ default: React.ComponentType<Record<string, unknown>> }>
>

export function LazyLoad(path: string) {
    
        const viewPath = '../views/${path}/index.tsx';
        const ErrorPagePath = '../views/ErrorPage.tsx';

        const Module = lazy(() => 
            views[viewPath]
                ? views[viewPath]()
                : views[ErrorPagePath]()
    )
        
        
    return <Suspense
        fallback={<Space size='large' style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                        <Spin size="large" tip="loading" />
                  </Space>}>
                  <Module />
           </Suspense>
};
