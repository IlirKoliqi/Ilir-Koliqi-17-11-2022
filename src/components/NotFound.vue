<template>
    <div class="row justify-content-center">
        <div class="col-md-12 col-sm-12">
            <div class="card shadow-lg border-0 rounded-lg mt-5 mx-auto" style="width: 40rem; height: 20rem;">
                <h3 class="card-header display-1 text-muted text-center">
                    404
                </h3>
                <the-footer></the-footer>
    
                <span class="card-subtitle mb-2 mt-2 text-muted text-center">
                    Page Could Not Be Found 
                </span>
    
                <div class="card-body mx-auto">
                     <RouterLink to="/Login"
                    class="btn btn-sm  text-white bg-dark mt-5"> Back To Main Page</RouterLink>
                </div>
            </div>
        </div>
    </div>
    </template>