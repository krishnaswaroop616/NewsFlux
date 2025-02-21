const Navbar=({setCategory})=>{
    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="#"><span className="badge bg-light text-danger fs-3">NewsFlux</span></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#" onClick={()=>setCategory("general")}>Home Page</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" >
                                Select category
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#" onClick={()=>setCategory("business")}>Business</a></li>
                                <li><a class="dropdown-item" href="#" onClick={()=>setCategory("entertainment")}>Entertainment</a></li>
                                <li><a class="dropdown-item" href="#" onClick={()=>setCategory("health")}>Health</a></li>
                                <li><a class="dropdown-item" href="#" onClick={()=>setCategory("science")}>Science</a></li>
                                <li><a class="dropdown-item" href="#" onClick={()=>setCategory("sports")}>Sports</a></li>
                                <li><a class="dropdown-item" href="#" onClick={()=>setCategory("technology")}>Technology</a></li>
                            </ul>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </nav>
    );
}


export default Navbar;