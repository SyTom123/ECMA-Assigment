import './header.scss'
const Header = {
    render() {
        return `
            <div class ="bg-primary container-fluid text-white">
                <div class= "container" >
                    <div class="row align-items-center">
                        <div class="col-md-6 d-flex align-items-center">
                            <ul class = "list-unstyled d-flex mb-0">
                                <li >CONTACT |</li>
                                <li class = "ms-2">09:00 - 17:00 |</li>
                                <li class = "ms-2"><i class="fa-solid fa-phone"></i> 0347 247 244 |</li>
                            </ul>
                        </div>
                        <div class="col-md-6 ">
                            <ul class = "list-unstyled d-flex  my-1 justify-content-md-end align-items-center">
                                <li > <a href="" class = "header-search" ><i class="fa-solid fa-magnifying-glass"></i></a></li>
                                <li class = "ms-2">09:00 - 17:00 |</li>
                                <li class = "ms-2"><i class="fa-solid fa-phone"></i> 0347 247 244 |</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="row">
                    ul>
                </div>

            </div>


        `
    }
}
export default Header