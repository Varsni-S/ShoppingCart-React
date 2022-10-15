// import React, { useState, useEffect } from "react";

// function Filter() {
//   const [checkListData, setCheckListData] = useState([]);
//   const [checked, setChecked] = useState([]);
//   const getProducts = () => {
//     fetch(
//       "https://leaguex.s3.ap-south-1.amazonaws.com/task/shopping/catalogue.json"
//     )
//       .then((res) => res.json())
//       .then((data) => {
//         console.log("value", data);
//         setCheckListData(data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   useEffect(() => {
//     getProducts();
//   }, []);

//   return (
//     <div class="row">
//       <div class="col-sm-5" style={{ marginLeft: "auto", marginRight: "auto" }}>
//         <div class="card">
//           <div class="card-body">
//             <div style={{ display: "flex" }}>
//               <h5 class="cardtitle" style={{ marginRight: "23px" }}>
//                 {" "}
//                 Gender{" "}
//               </h5>
//               <div class="form-check">
//                 <input
//                   class="form-check-input"
//                   type="checkbox"
//                   value=""
//                   id="flexCheckDefault"
//                   onChange={handleChange}
//                 />
//                 <label class="form-check-label" for="flexCheckDefault">
//                   {" "}
//                   Women{" "}
//                 </label>
//                 <button onClick={() => filterResult("Men")}>Men</button>
//               </div>

//               <div class="form-check">
//                 <input
//                   class="form-check-input"
//                   type="checkbox"
//                   value=""
//                   id="flexCheckDefault"
//                   onChange={handleChange}
//                 />
//                 <label class="form-check-label" for="flexCheckDefault">
//                   Men{" "}
//                 </label>
//               </div>
//             </div>

//             {/* <div style={{ display: "flex" }}>
//               <h5 class="cardtitle" style={{ marginRight: "40px" }}>
//                 {" "}
//                 Color{" "}
//               </h5>
//               <div class="form-check">
//                 <input
//                   class="form-check-input"
//                   type="checkbox"
//                   value=""
//                   id="flexCheckDefault"
//                 />
//                 <label class="form-check-label" for="flexCheckDefault">
//                   Red{" "}
//                 </label>
//               </div>

//               <div class="form-check">
//                 <input
//                   class="form-check-input"
//                   type="checkbox"
//                   value=""
//                   id="flexCheckDefault"
//                 />
//                 <label class="form-check-label" for="flexCheckDefault">
//                   Green{" "}
//                 </label>
//               </div>

//               <div class="form-check">
//                 <input
//                   class="form-check-input"
//                   type="checkbox"
//                   value=""
//                   id="flexCheckDefault"
//                 />
//                 <label class="form-check-label" for="flexCheckDefault">
//                   Blue{" "}
//                 </label>
//               </div>
//             </div>

//             <div style={{ display: "flex" }}>
//               <h5 class="cardtitle" style={{ marginRight: "45px" }}>
//                 {" "}
//                 Type{" "}
//               </h5>
//               <div class="form-check">
//                 <input
//                   class="form-check-input"
//                   type="checkbox"
//                   value=""
//                   id="flexCheckDefault"
//                 />
//                 <label class="form-check-label" for="flexCheckDefault">
//                   Basic{" "}
//                 </label>
//               </div>

//               <div class="form-check">
//                 <input
//                   class="form-check-input"
//                   type="checkbox"
//                   value=""
//                   id="flexCheckDefault"
//                 />
//                 <label class="form-check-label" for="flexCheckDefault">
//                   Polo{" "}
//                 </label>
//               </div>

//               <div class="form-check">
//                 <input
//                   class="form-check-input"
//                   type="checkbox"
//                   value=""
//                   id="flexCheckDefault"
//                 />
//                 <label class="form-check-label" for="flexCheckDefault">
//                   Hoodie
//                 </label>
//               </div>
//             </div>

//             <div style={{ display: "flex" }}>
//               <h5 class="cardtitle" style={{ marginRight: "40px" }}>
//                 {" "}
//                 Price{" "}
//               </h5>
//               <div class="form-check">
//                 <input
//                   class="form-check-input"
//                   type="checkbox"
//                   value=""
//                   id="flexCheckDefault"
//                 />
//                 <label class="form-check-label" for="flexCheckDefault">
//                   0-249
//                 </label>
//               </div>

//               <div class="form-check">
//                 <input
//                   class="form-check-input"
//                   type="checkbox"
//                   value=""
//                   id="flexCheckDefault"
//                 />
//                 <label class="form-check-label" for="flexCheckDefault">
//                   250-500
//                 </label>
//               </div>
//             </div> */}
//           </div>
//         </div>
//       </div
//     </div>
//   );
// }

// export default Filter;
