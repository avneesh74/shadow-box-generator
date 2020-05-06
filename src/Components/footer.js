import React, { Fragment } from 'react'

const FooterNavigation = () => {


    const date=()=>{
        var d = new Date()
        var n = d.getFullYear()
        return n
    }

    return (
        <Fragment>
        <footer class="page-footer" style={{backgroundColor:'#006699'}}>
            <div class="footer-copyright">
            <div class="container" style={{textAlign:"center"}}>
                © {date()} By Avneesh 
            </div>
    </div>
        </footer>
            
        </Fragment>
    )
}

export default FooterNavigation
