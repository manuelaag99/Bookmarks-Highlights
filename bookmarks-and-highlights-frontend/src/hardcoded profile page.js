<div className="flex flex-wrap justify-center">
      
      <div className="profile-top pt-14 flex justify-center md:h-52 h-64 md:w-10/12 w-7/12">
        <div className="card bg-var-2 w-full flex md:flex-row flex-col md:h-36 h-52 md:justify-start justify-center md:p-6 md:pl-7">
          <div className="h-24 w-24 rounded-circle bg-var-5 md:m-0 mx-auto">
            <img src="" alt="" />
          </div>
          <div className="block items-center md:ml-7">
            <div className="pt-3">
              <p className="font-bold md:text-dsk-profile-name md:text-left text-center">Display Name</p>
            </div>
            <div className="pt-3">
              <p className="md:text-dsk-profile-bio md:text-left text-center">Profile bio</p>
            </div>
          </div>
        </div>
      </div>

      <div className="profile-breaker h-16 w-10/12 flex items-end opacity-40">
        <div className="w-full h-8 flex justify-between items-center">
          <div className="w-4/12 h-0.5 bg-var-6"></div>
          <div className="w-1/4 text-center text-var-6">
            <p className="md:text-dsk-breaker">MY BOOKMARKS & HIGHLIGHTS</p>
          </div>
          <div className="w-4/12 h-0.5 bg-var-6"></div>
        </div>
      </div>

      <div className="profile-options h-16 w-10/12 flex flex-row justify-between text-var-6 md:text-dsk-options opacity-40">
        <div className="h-16 w-2/5 flex items-center">
          <form action="" method="get">
            <p className="inline-block">search </p>
            <input className="inline-block bg-var-3 outline-none w-1/2 ml-2 pt-1" type="text" placeholder="Title" autoComplete="off"/>
          </form>
        </div>
        <div className="h-16 w-2/5 flex items-center">
          <div className="w-full h-8 text-right">
            <p className="inline-block">group by: </p>
            <input className="inline-block bg-var-3 w-1/2 pl-2 pr-0" list="query" name="" id="" autoComplete="off"/>
          </div>            
        </div>
      </div>

      <div className="profile-cards w-10/12 flex flex-wrap mt-4 mb-20 md:justify-between justify-center">
        
          <div className="card w-88 h-52 bg-var-2 p-4 box-border flex flex-col flex-wrap hover:h-56 duration-500 justify-center mb-14">
            <div className="card-title h-7 m-auto text-left font-bold">
              <p className="md:text-dsk-card-title">Title of the book/article</p>
            </div>
            <div className="card-txt h-7 m-auto text-left">
              <p className="md:text-dsk-card-text">x photos in this collection</p> 
            </div>
            <div className="photos h-16 w-11/12">
            </div>
            <div className="card w-76 h-12 bg-var-4 m-auto cursor-pointer flex justify-center hover:h-14 hover:bg-var-4-hovered duration-300">
              <p className="m-auto text-var-1 font-bold md:text-dsk-card-button">Check my B&Hs</p>
            </div>
          </div>

          <div className="card w-88 h-52 bg-var-2 p-4 box-border flex flex-col flex-wrap hover:h-56 duration-500 justify-center mb-14">
            <div className="card-title h-7 m-auto text-left font-bold">
              <p className="md:text-dsk-card-title">Title of the book/article</p>
            </div>
            <div className="card-txt h-7 m-auto text-left">
              <p className="md:text-dsk-card-text">x photos in this collection</p> 
            </div>
            <div className="photos h-16 w-11/12">
            </div>
            <div className="card w-76 h-12 bg-var-4 m-auto cursor-pointer flex justify-center hover:h-14 hover:bg-var-4-hovered duration-300">
              <p className="m-auto text-var-1 font-bold md:text-dsk-card-button">Check my B&Hs</p>
            </div>
          </div>          

      </div>

    
    </div> 