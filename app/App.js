'use client';
import Layout from '../components/layout/Layout'
import '../style/Global.css';

function MyApp({Component,pageProps}){
    return(
        <Layout>
            <Component {...pageProps}/>
        </Layout>
    )
}


export default MyApp