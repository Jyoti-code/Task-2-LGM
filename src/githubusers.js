import React from 'react'

const Githubusers=({users})=> {
  return (
    <div>

<h2>List of GitHub Users</h2>
    <div className='container-fluid mt-5'>
        <div className='row text-center'>
            {
                users.map((curElem) =>{
                    const {avatar_url,id,login,type}= curElem;
                    return (
                        <div className='col-10 col-md-4 mt-5' key={id}>
                        <div class="card p-2">
                        <div class="d-flex align-items-center"> 
                        <div class="image"> <img src={avatar_url} class="rounded" width="155"/></div>

                        <div class="ml-3 w-100">

                        <h4 class="mb-0 mt-0 textLeft">{login}</h4> 
                        <span className="textLeft">{type}</span>

                        <div class="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white state">

                        <div class="d-flex flex-column">

                        <span class="articles">Articles</span> <span class="number1"> 38 </span> </div>

                        <div class="d-flex flex-column">

                        <span class="followers">Followers</span> <span class="number2"> 980 </span></div>

                        <div class="d-flex flex-column"> 
                        <span class="rating">Rating</span> <span class="number3">8.9</span></div>

                        </div>

                        </div>
                        </div>
                        </div>
                        </div>
        
                    )
                })
            }
        </div>
    </div>

    </div>
  )
}
export default Githubusers;
