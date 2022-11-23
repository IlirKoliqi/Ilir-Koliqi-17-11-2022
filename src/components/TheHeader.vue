<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark p-3 nav-color " >
        
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Student Information System</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
         
          <div class=" collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav ms-auto ">
              <li class="nav-item">
                <a class="nav-link mx-2" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link mx-2 active" href="#">Students</a>
              </li>
              <li class="nav-item">
                <a class="nav-link mx-2" href="logIn.html">Help</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link mx-2 dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Ilir Koliqi
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <RouterLink to="/login" class="text-decoration-none "><li><a class="dropdown-item" href="#">Log Out</a></li></RouterLink>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        </nav>
</template>