import "./header.scss";
import logo from "../../image/logo.png";
const Header = {
  render() {
    return /*html*/ `
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
            <div class = "container-fluid shadow">
            <div class="container ">
                <nav class="navbar navbar-expand-lg navbar-light bg-white">
                    <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse " id="navbarSupportedContent">
                    <div class = "header-mainNav">
                        <ul class="navbar-nav mb-2 mb-lg-0">
                        
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Trang chủ</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Giới thiệu</a>
                            </li>
                            <li class="dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Sản phẩm
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><hr class="dropdown-divider"></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                        </ul>
                        <div>
                            <img src=${logo} class="w-50 " alt="Logo" />
                        </div>
                        <div>
                        <ul class="header-navbar navbar-nav  ">
                            <li class="nav-item">
                                <a class="nav-link" aria-current="page" href="#">Tin tức</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Liên hệ</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Cửa hàng</a>
                            </li>
                        </ul>
                        </div>
                        </div>
                    </div>
                    </div>
                </nav>
            </div>
            </div>


        `;
  },
};
export default Header;
