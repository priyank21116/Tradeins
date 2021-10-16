import React from 'react'

const Oitempost = () => {
      return (
            <>
                  <div className="">
                        <form action="http://localhost:9000/item" method="POST">
                              <div className="mb-3">
                                    <label className="form-label">Title</label>
                                    <input type="text" className="form-control" name="title"  id="exampleFormControlInput1" required/>
                               </div>
                                    <div className="mb-3">
                                          <label className="form-label">Price</label>
                                          <input type="text" className="form-control" id="exampleFormControlInput1" name="price" required />
                                    </div>
                                    <div className="mb-3">
                                          <label className="form-label">description</label>
                                          <input type="text" className="form-control" id="exampleFormControlInput1" name="description" required />
                                    </div>
                                          <div className="mb-3">
                                                <label className="form-label">Category</label>
                                                <input type="text" className="form-control" id="exampleFormControlInput1" name="category" required />
                                           </div>
                                           <div className="mb-3">
                                                <label className="form-label">Image</label>
                                                <input type="text" className="form-control" id="exampleFormControlInput1" name="image"  />
                                                {/* <input type="file" class="form-control" name="book cover" accept="image/*" required /> */}
                                           </div>
                                          
                                                <div className="col-12">
                                                      <button className="btn btn-outline-secondary" type="submit">Add Item
                                                      </button>
                                                </div>
                                                </form>

                                    
                              </div>
                              </>
                              )
}

 export default Oitempost
